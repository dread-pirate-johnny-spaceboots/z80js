import Opcodes, { PrefixOpcodes } from './Opcodes/Opcodes'
import Databus from './Databus'

const ProcessorFlags = {
    registers: new Uint8Array(6),
    get c() { return this.registers[0] },
    get n() { return this.registers[1] },
    get pv() { return this.registers[2] },
    get h() { return this.registers[3] },
    get z() { return this.registers[4] },
    get s() { return this.registers[5] },
    set c(value) { this.registers[0] = value },
    set n(value) { this.registers[1] = value },
    set pv(value) { this.registers[2] = value },
    set h(value) { this.registers[3] = value },
    set z(value) { this.registers[4] = value },
    set s(value) { this.registers[5] = value },
} 

const ProcessorState = {
    memory: new Uint8Array(65536),
    registers8bit: new Uint8Array(18),
    registers16bit: new Uint16Array(4),
    di: 0, // made up flag to disable interupts, short name to blend in, not bit constrained because reasons
    halt: 0, // ^

    // special purpose registers
    get sp() { return this.registers16bit[0] },
    get pc() { return this.registers16bit[1] },
    set ix(value) { this.registers16bit[3] = value },
    set iy(value) { this.registers16bit[4] = value },
    get i() { return this.registers8bit[14] },
    get r() { return this.registers8bit[15] },
    
    set sp(value) { this.registers16bit[0] = value },
    set pc(value) { this.registers16bit[1] = value },
    get ix() { return this.registers16bit[3] },
    get iy() { return this.registers16bit[4] },
    set i(value) { this.registers8bit[14] = value },
    set r(value) { this.registers8bit[15] = value },
    

    // general purpose registers
    get a() { return this.registers8bit[0] },
    get b() { return this.registers8bit[1] },
    get c() { return this.registers8bit[2] },
    get d() { return this.registers8bit[3] },
    get e() { return this.registers8bit[4] },
    get h() { return this.registers8bit[5] },
    get l() { return this.registers8bit[6] },
    get f() { return this.registers8bit[16] },
    get a2() { return this.registers8bit[7] },
    get b2() { return this.registers8bit[8] },
    get c2() { return this.registers8bit[9] },
    get d2() { return this.registers8bit[10] },
    get e2() { return this.registers8bit[11] },
    get h2() { return this.registers8bit[12] },
    get l2() { return this.registers8bit[13] },
    get f2() { return this.registers8bit[17] },
    set a(value) { this.registers8bit[0] = value },
    set b(value) { this.registers8bit[1] = value },
    set c(value) { this.registers8bit[2] = value },
    set d(value) { this.registers8bit[3] = value },
    set e(value) { this.registers8bit[4] = value },
    set h(value) { this.registers8bit[5] = value },
    set l(value) { this.registers8bit[6] = value },
    set f(value) { this.registers8bit[16] = value },
    set a2(value) { this.registers8bit[7] = value },
    set b2(value) { this.registers8bit[8] = value },
    set c2(value) { this.registers8bit[9] = value },
    set d2(value) { this.registers8bit[10] = value },
    set e2(value) { this.registers8bit[11] = value },
    set h2(value) { this.registers8bit[12] = value },
    set l2(value) { this.registers8bit[13] = value },    
    set f2(value) { this.registers8bit[17] = value },
}

class CPU {
    constructor() {
        this.databus = new Databus()
        this.reset()
    }

    reset() {
        this.flags1 = Object.assign({}, ProcessorFlags)
        this.flags2 = Object.assign({}, ProcessorFlags)
        this.flags1.registers = new Uint8Array(6);
        this.flags2.registers = new Uint8Array(6);

        this.state = Object.assign({}, ProcessorState)
        this.state.memory = new Uint8Array(65536)
        this.state.registers16bit = new Uint16Array(2)
        this.state.registers8bit = new Uint8Array(18)

        this.flags = this.flags1
        this.di = 0
        this.halt = 0
    }

    load(rombuffer) {

    }

    fetch() {
        return this.state.memory[this.state.pc]
    }

    step() {
        let byte = this.fetch()
        if (PrefixOpcodes.find(prefix => prefix === byte)) {
            const byte2 = this.state.memory[this.state.pc + 1]
            byte = (byte << 8) | byte2
        }
        const opcode = Opcodes[byte]

        if (!opcode) { throw new Error(`Unimplemented opcode ${byte.toString(16)}`) }
        if (!opcode.execute(this)) { this.state.pc += opcode.bytes }
        if (!this.state.di) {
            // process interrupts
        }
    }

    get memory() { return this.state.memory }
    
    addr8bit(address) {
        return this.memory[address]
    }

    addr16bit(address) {
        return this.memory[address + 1] << 8 | this.memory[address]
    }
}

export default CPU