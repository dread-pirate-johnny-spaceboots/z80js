import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

let cpu = new CPU()
let total = 0;

beforeEach(() => {
    cpu.reset()
    total += 1
})

afterAll(() => {
    console.log(`TOTAL OPCODES: ${Object.keys(Opcodes).length}\nCOMPLETION PERCENTAGE: ${((Object.keys(Opcodes).length / 677) * 100).toFixed(2)}% `)
})

test('Initializes correctly', () => {
    const fill = array => {
        for(let x = 0; x < array.length; x++) {
            array[x] = Math.round(Math.random() * 255)
        }    
    }

    const assert = () => {
        expect(cpu.memory.find(byte => byte != 0x00)).toBeFalsy()
        expect(cpu.state.registers8bit.find(byte => byte != 0x00)).toBeFalsy()
        expect(cpu.state.registers16bit.find(byte => byte != 0x00)).toBeFalsy()
        expect(cpu.flags1.registers.find(byte => byte != 0x00)).toBeFalsy()
        expect(cpu.flags2.registers.find(byte => byte != 0x00)).toBeFalsy()
        expect(cpu.state.di).toBe(0)
        expect(cpu.state.halt).toBe(0)
    }
    
    assert()
    fill(cpu.memory)
    fill(cpu.state.registers8bit)
    fill(cpu.state.registers16bit)
    fill(cpu.flags1.registers)
    fill(cpu.flags2.registers)
    cpu.state.di = 1
    cpu.state.halt = 1
    cpu.reset()
    assert()
})

test('Can read/write memory', () => {
    expect(cpu.memory[0x0f]).toBe(0x0)
    cpu.memory[0x0f] = 0xff
    expect(cpu.memory[0x0f]).toBe(0xff)
    cpu.memory[0x0f] += 1
    expect(cpu.memory[0x0f]).toBe(0x00)
})

test('8bit read indirection works', () => {
    cpu.memory[0x0f] = 0xff
    expect(cpu.addr8bit(0x0f)).toBe(0xff)
})

test('16bit read indirection works', () => {
    cpu.memory[0x0e] = 0x34;
    cpu.memory[0x0f] = 0x12;
    expect(cpu.addr16bit(0x0e)).toBe(0x1234)
})