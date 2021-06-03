import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

const cpu = new CPU()

beforeEach(() => {
    cpu.reset()
})

test('NOP', () => {
    cpu.memory[0x00] = 0x00
    cpu.step()
    //expect(cpu.state).toBe(0xff)
})
test('Dissassemble NOP', () => {
    cpu.memory[0x00] = 0x00
    
    expect(Opcodes[0x00].text(cpu.memory, 0)).toBe(`NOP`)
})