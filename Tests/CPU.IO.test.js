import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'
import TestDevice from '../../TestDevice'

let cpu = new CPU()

beforeEach(() => {
    cpu.reset()
    cpu.databus.register(new TestDevice(), 1)
    cpu.databus.register(new TestDevice(0xcc), 2)
})

test('IN A,(n)', () => {
    cpu.memory[0x00] = 0xdb
    cpu.memory[0x01] = 0x01
    cpu.memory[0x02] = 0xdb
    cpu.memory[0x03] = 0x02
    

    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xcc)
})
test('Dissassemble IN A,(n)', () => {
    cpu.memory[0x00] = 0xdb
    cpu.memory[0x01] = 0x01
    
    expect(Opcodes[0xdb].text(cpu.memory, 0)).toBe(`IN A,(#$${cpu.memory[cpu.state.pc + 1].toString(16)})`)
})