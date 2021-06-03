import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

let cpu = new CPU()

beforeEach(() => {
    cpu.reset()
})

test('EXX', () => {
    cpu.memory[0x00] = 0xd9
    cpu.state.b = 0x0b
    cpu.state.c = 0x0c
    cpu.state.d = 0x0d
    cpu.state.e = 0x0e
    cpu.state.h = 0x0a
    cpu.state.l = 0x0f
    cpu.state.b2 = 0xff
    cpu.state.c2 = 0xff
    cpu.state.d2 = 0xff
    cpu.state.e2 = 0xff
    cpu.state.h2 = 0xff
    cpu.state.l2 = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    expect(cpu.state.c).not.toBe(0xff)
    expect(cpu.state.d).not.toBe(0xff)
    expect(cpu.state.e).not.toBe(0xff)
    expect(cpu.state.h).not.toBe(0xff)
    expect(cpu.state.l).not.toBe(0xff)
    expect(cpu.state.b2).not.toBe(0x0b)
    expect(cpu.state.c2).not.toBe(0x0c)
    expect(cpu.state.d2).not.toBe(0x0d)
    expect(cpu.state.e2).not.toBe(0x0e)
    expect(cpu.state.h2).not.toBe(0x0a)
    expect(cpu.state.l2).not.toBe(0x0f)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
    expect(cpu.state.c).toBe(0xff)
    expect(cpu.state.d).toBe(0xff)
    expect(cpu.state.e).toBe(0xff)
    expect(cpu.state.h).toBe(0xff)
    expect(cpu.state.l).toBe(0xff)
    expect(cpu.state.b2).toBe(0x0b)
    expect(cpu.state.c2).toBe(0x0c)
    expect(cpu.state.d2).toBe(0x0d)
    expect(cpu.state.e2).toBe(0x0e)
    expect(cpu.state.h2).toBe(0x0a)
    expect(cpu.state.l2).toBe(0x0f)
})
test('Dissassemble EXX', () => {
    cpu.memory[0x00] = 0xd9
    
    expect(Opcodes[0xd9].text(cpu.memory, 0)).toBe(`EXX`)
})