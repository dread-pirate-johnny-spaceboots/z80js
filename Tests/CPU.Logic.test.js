import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

const cpu = new CPU()

beforeEach(() => {
    cpu.reset()
})

test('CPL', () => {
    cpu.memory[0x00] = 0x2f
    cpu.memory[0x01] = 0x2f
    cpu.memory[0x02] = 0x2f
    cpu.state.a = 0b10101010
    cpu.step()
    expect(cpu.state.a).toBe(0b01010101)

    cpu.state.a = 0b11110000
    cpu.step()
    expect(cpu.state.a).toBe(0b00001111)
    cpu.step()
    expect(cpu.state.a).toBe(0b11110000)

})
test('Dissassemble CPL', () => {
    cpu.memory[0x00] = 0x2f
    
    expect(Opcodes[0x2f].text(cpu.memory, 0)).toBe(`CPL`)
})


test('ADD A,A', () => {
    cpu.memory[0x00] = 0x87
    cpu.state.a = 0x04
    expect(cpu.state.a).not.toBe(0x08)
    cpu.step()
    expect(cpu.state.a).toBe(0x08)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,A', () => {
    cpu.memory[0x00] = 0x87
    
    expect(Opcodes[0x87].text(cpu.memory, 0)).toBe(`ADD A,A`)
})
test('ADD A,A Zero flag', () => {
    cpu.memory[0x00] = 0x87
    cpu.state.a = 0x00
    cpu.step()
    expect(cpu.state.a).toBe(0x00)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x1)
})
test('ADD A,A Sign flag', () => {
    cpu.memory[0x00] = 0x87
    cpu.state.a = 0x40
    cpu.step()
    expect(cpu.state.a).toBe(0x80)
    expect(cpu.flags.s).toBe(0x1)
    expect(cpu.flags.z).toBe(0x0)
})

test('ADD A,B', () => {
    cpu.memory[0x00] = 0x80
    cpu.state.a = 0x04
    cpu.state.b = 0x02
    expect(cpu.state.a).not.toBe(0x06)
    cpu.step()
    expect(cpu.state.a).toBe(0x06)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,B', () => {
    cpu.memory[0x00] = 0x80
    
    expect(Opcodes[0x80].text(cpu.memory, 0)).toBe(`ADD A,B`)
})

test('ADD A,C', () => {
    cpu.memory[0x00] = 0x81
    cpu.state.a = 0x04
    cpu.state.c = 0x02
    expect(cpu.state.a).not.toBe(0x06)
    cpu.step()
    expect(cpu.state.a).toBe(0x06)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,C', () => {
    cpu.memory[0x00] = 0x81
    
    expect(Opcodes[0x81].text(cpu.memory, 0)).toBe(`ADD A,C`)
})

test('ADD A,D', () => {
    cpu.memory[0x00] = 0x82
    cpu.state.a = 0x04
    cpu.state.d = 0x02
    expect(cpu.state.a).not.toBe(0x06)
    cpu.step()
    expect(cpu.state.a).toBe(0x06)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,D', () => {
    cpu.memory[0x00] = 0x82
    
    expect(Opcodes[0x82].text(cpu.memory, 0)).toBe(`ADD A,D`)
})

test('ADD A,E', () => {
    cpu.memory[0x00] = 0x83
    cpu.state.a = 0x04
    cpu.state.e = 0x02
    expect(cpu.state.a).not.toBe(0x06)
    cpu.step()
    expect(cpu.state.a).toBe(0x06)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,E', () => {
    cpu.memory[0x00] = 0x83
    
    expect(Opcodes[0x83].text(cpu.memory, 0)).toBe(`ADD A,E`)
})

test('ADD A,H', () => {
    cpu.memory[0x00] = 0x84
    cpu.state.a = 0x04
    cpu.state.h = 0x02
    expect(cpu.state.a).not.toBe(0x06)
    cpu.step()
    expect(cpu.state.a).toBe(0x06)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,H', () => {
    cpu.memory[0x00] = 0x84
    
    expect(Opcodes[0x84].text(cpu.memory, 0)).toBe(`ADD A,H`)
})

test('ADD A,L', () => {
    cpu.memory[0x00] = 0x85
    cpu.state.a = 0x04
    cpu.state.l = 0x02
    expect(cpu.state.a).not.toBe(0x06)
    cpu.step()
    expect(cpu.state.a).toBe(0x06)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble ADD A,L', () => {
    cpu.memory[0x00] = 0x85
    
    expect(Opcodes[0x85].text(cpu.memory, 0)).toBe(`ADD A,L`)
})

test('SUB A,A', () => {
    cpu.memory[0x00] = 0x97
    cpu.state.a = 0x04

    cpu.step()
    expect(cpu.state.a).toBe(0x00)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x1)
})
test('Dissassemble SUB A,A', () => {
    cpu.memory[0x00] = 0x97
    
    expect(Opcodes[0x97].text(cpu.memory, 0)).toBe(`SUB A,A`)
})

test('SUB A,B', () => {
    cpu.memory[0x00] = 0x90
    cpu.state.a = 0x04
    cpu.state.b = 0x02

    cpu.step()
    expect(cpu.state.a).toBe(0x02)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble SUB A,B', () => {
    cpu.memory[0x00] = 0x90
    
    expect(Opcodes[0x90].text(cpu.memory, 0)).toBe(`SUB A,B`)
})

test('SUB A,C', () => {
    cpu.memory[0x00] = 0x91
    cpu.state.a = 0x04
    cpu.state.c = 0x02

    cpu.step()
    expect(cpu.state.a).toBe(0x02)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble SUB A,C', () => {
    cpu.memory[0x00] = 0x91
    
    expect(Opcodes[0x91].text(cpu.memory, 0)).toBe(`SUB A,C`)
})

test('SUB A,D', () => {
    cpu.memory[0x00] = 0x92
    cpu.state.a = 0x04
    cpu.state.d = 0x02

    cpu.step()
    expect(cpu.state.a).toBe(0x02)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble SUB A,D', () => {
    cpu.memory[0x00] = 0x92
    
    expect(Opcodes[0x92].text(cpu.memory, 0)).toBe(`SUB A,D`)
})


test('SUB A,E', () => {
    cpu.memory[0x00] = 0x93
    cpu.state.a = 0x04
    cpu.state.e = 0x02

    cpu.step()
    expect(cpu.state.a).toBe(0x02)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble SUB A,E', () => {
    cpu.memory[0x00] = 0x93
    
    expect(Opcodes[0x93].text(cpu.memory, 0)).toBe(`SUB A,E`)
})

test('SUB A,H', () => {
    cpu.memory[0x00] = 0x94
    cpu.state.a = 0x04
    cpu.state.h = 0x02

    cpu.step()
    expect(cpu.state.a).toBe(0x02)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble SUB A,H', () => {
    cpu.memory[0x00] = 0x94
    
    expect(Opcodes[0x94].text(cpu.memory, 0)).toBe(`SUB A,H`)
})

test('SUB A,L', () => {
    cpu.memory[0x00] = 0x95
    cpu.state.a = 0x04
    cpu.state.l = 0x02

    cpu.step()
    expect(cpu.state.a).toBe(0x02)
    expect(cpu.flags.s).toBe(0x0)
    expect(cpu.flags.z).toBe(0x0)
})
test('Dissassemble SUB A,L', () => {
    cpu.memory[0x00] = 0x95
    
    expect(Opcodes[0x95].text(cpu.memory, 0)).toBe(`SUB A,L`)
})


test('AND A,A', () => {
    cpu.memory[0x00] = 0xa7
    cpu.state.a = 0b10101010
    
    cpu.step()
    expect(cpu.state.a).toBe(0b10101010)
    expect(cpu.flags.s).toBe(1)
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(1)
})
test('AND A,A odd pairty', () => {
    cpu.memory[0x00] = 0xa7
    cpu.state.a = 0b10101000
    
    cpu.step()
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble AND A,A', () => {
    cpu.memory[0x00] = 0xa7
    
    expect(Opcodes[0xa7].text(cpu.memory, 0)).toBe(`AND A,A`)
})

test('AND A,B', () => {
    cpu.memory[0x00] = 0xa0
    cpu.state.a = 0b00001111
    cpu.state.b = 0b00000101
    cpu.step()
    expect(cpu.state.a).toBe(0b00000101)
})
test('Dissassemble AND A,B', () => {
    cpu.memory[0x00] = 0xa0
    
    expect(Opcodes[0xa0].text(cpu.memory, 0)).toBe(`AND A,B`)
})

test('AND A,C', () => {
    cpu.memory[0x00] = 0xa1
    cpu.state.a = 0b00001111
    cpu.state.c = 0b00000101
    cpu.step()
    expect(cpu.state.a).toBe(0b00000101)
})
test('Dissassemble AND A,C', () => {
    cpu.memory[0x00] = 0xa1
    
    expect(Opcodes[0xa1].text(cpu.memory, 0)).toBe(`AND A,C`)
})

test('AND A,D', () => {
    cpu.memory[0x00] = 0xa2
    cpu.state.a = 0b00001111
    cpu.state.d = 0b00000101
    cpu.step()
    expect(cpu.state.d).toBe(0b00000101)
})
test('Dissassemble AND A,D', () => {
    cpu.memory[0x00] = 0xa2
    
    expect(Opcodes[0xa2].text(cpu.memory, 0)).toBe(`AND A,D`)
})

test('AND A,E', () => {
    cpu.memory[0x00] = 0xa3
    cpu.state.a = 0b00001111
    cpu.state.e = 0b00000101
    cpu.step()
    expect(cpu.state.e).toBe(0b00000101)
})
test('Dissassemble AND A,E', () => {
    cpu.memory[0x00] = 0xa3
    
    expect(Opcodes[0xa3].text(cpu.memory, 0)).toBe(`AND A,E`)
})

test('AND A,H', () => {
    cpu.memory[0x00] = 0xa4
    cpu.state.a = 0b00001111
    cpu.state.h = 0b00000101
    cpu.step()
    expect(cpu.state.h).toBe(0b00000101)
})
test('Dissassemble AND A,H', () => {
    cpu.memory[0x00] = 0xa4
    
    expect(Opcodes[0xa4].text(cpu.memory, 0)).toBe(`AND A,H`)
})

test('AND A,L', () => {
    cpu.memory[0x00] = 0xa5
    cpu.state.a = 0b00001111
    cpu.state.l = 0b00000101
    cpu.step()
    expect(cpu.state.l).toBe(0b00000101)
})
test('Dissassemble AND A,L', () => {
    cpu.memory[0x00] = 0xa5
    
    expect(Opcodes[0xa5].text(cpu.memory, 0)).toBe(`AND A,L`)
})


test('XOR A,A', () => {
    cpu.memory[0x00] = 0xaf
    cpu.state.a = 0b00001111
    cpu.step()
    expect(cpu.state.a).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(1)
})
test('Dissassemble XOR A,A', () => {
    cpu.memory[0x00] = 0xaf
    
    expect(Opcodes[0xaf].text(cpu.memory, 0)).toBe(`XOR A,A`)
})

test('XOR A,B', () => {
    cpu.memory[0x00] = 0xa8
    cpu.state.a = 0b11001100
    cpu.state.b = 0b01111000
    cpu.step()
    expect(cpu.state.a).toBe(0b10110100)
})
test('Dissassemble XOR A,B', () => {
    cpu.memory[0x00] = 0xa8
    
    expect(Opcodes[0xa8].text(cpu.memory, 0)).toBe(`XOR A,B`)
})

test('XOR A,C', () => {
    cpu.memory[0x00] = 0xa9
    cpu.state.a = 0b11001100
    cpu.state.c = 0b01111000
    cpu.step()
    expect(cpu.state.a).toBe(0b10110100)
})
test('Dissassemble XOR A,C', () => {
    cpu.memory[0x00] = 0xa9
    
    expect(Opcodes[0xa9].text(cpu.memory, 0)).toBe(`XOR A,C`)
})

test('XOR A,D', () => {
    cpu.memory[0x00] = 0xaa
    cpu.state.a = 0b11001100
    cpu.state.d = 0b01111000
    cpu.step()
    expect(cpu.state.a).toBe(0b10110100)
})
test('Dissassemble XOR A,D', () => {
    cpu.memory[0x00] = 0xaa
    
    expect(Opcodes[0xaa].text(cpu.memory, 0)).toBe(`XOR A,D`)
})

test('XOR A,E', () => {
    cpu.memory[0x00] = 0xab
    cpu.state.a = 0b11001100
    cpu.state.e = 0b01111000
    cpu.step()
    expect(cpu.state.a).toBe(0b10110100)
})
test('Dissassemble XOR A,E', () => {
    cpu.memory[0x00] = 0xab
    
    expect(Opcodes[0xab].text(cpu.memory, 0)).toBe(`XOR A,E`)
})

test('XOR A,H', () => {
    cpu.memory[0x00] = 0xac
    cpu.state.a = 0b11001100
    cpu.state.h = 0b01111000
    cpu.step()
    expect(cpu.state.a).toBe(0b10110100)
})
test('Dissassemble XOR A,H', () => {
    cpu.memory[0x00] = 0xac
    
    expect(Opcodes[0xac].text(cpu.memory, 0)).toBe(`XOR A,H`)
})

test('XOR A,L', () => {
    cpu.memory[0x00] = 0xad
    cpu.state.a = 0b11001100
    cpu.state.l = 0b01111000
    cpu.step()
    expect(cpu.state.a).toBe(0b10110100)
})
test('Dissassemble XOR A,L', () => {
    cpu.memory[0x00] = 0xad
    
    expect(Opcodes[0xad].text(cpu.memory, 0)).toBe(`XOR A,L`)
})

test('OR A,A', () => {
    cpu.memory[0x00] = 0xb7
    cpu.state.a = 0b00000001
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0x1)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,A', () => {
    cpu.memory[0x00] = 0xb7
    
    expect(Opcodes[0xb7].text(cpu.memory, 0)).toBe(`OR A,A`)
})

test('OR A,B', () => {
    cpu.memory[0x00] = 0xb0
    cpu.state.a = 0b00000101
    cpu.state.b = 0b00000111
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0b00000111)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,B', () => {
    cpu.memory[0x00] = 0xb0
    
    expect(Opcodes[0xb0].text(cpu.memory, 0)).toBe(`OR A,B`)
})

test('OR A,C', () => {
    cpu.memory[0x00] = 0xb1
    cpu.state.a = 0b00000101
    cpu.state.c = 0b00000111
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0b00000111)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,C', () => {
    cpu.memory[0x00] = 0xb1
    
    expect(Opcodes[0xb1].text(cpu.memory, 0)).toBe(`OR A,C`)
})

test('OR A,D', () => {
    cpu.memory[0x00] = 0xb2
    cpu.state.a = 0b00000101
    cpu.state.d = 0b00000111
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0b00000111)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,D', () => {
    cpu.memory[0x00] = 0xb2
    
    expect(Opcodes[0xb2].text(cpu.memory, 0)).toBe(`OR A,D`)
})

test('OR A,E', () => {
    cpu.memory[0x00] = 0xb3
    cpu.state.a = 0b00000101
    cpu.state.e = 0b00000111
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0b00000111)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,E', () => {
    cpu.memory[0x00] = 0xb3
    
    expect(Opcodes[0xb3].text(cpu.memory, 0)).toBe(`OR A,E`)
})

test('OR A,H', () => {
    cpu.memory[0x00] = 0xb4
    cpu.state.a = 0b00000101
    cpu.state.h = 0b00000111
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0b00000111)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,H', () => {
    cpu.memory[0x00] = 0xb4
    
    expect(Opcodes[0xb4].text(cpu.memory, 0)).toBe(`OR A,H`)
})

test('OR A,L', () => {
    cpu.memory[0x00] = 0xb5
    cpu.state.a = 0b00000101
    cpu.state.l = 0b00000111
    cpu.flags.h = 1 
    cpu.step()
    expect(cpu.state.a).toBe(0b00000111)
    expect(cpu.flags.h).toBe(0)
    expect(cpu.flags.n).toBe(0)
    expect(cpu.flags.c).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('Dissassemble OR A,L', () => {
    cpu.memory[0x00] = 0xb5
    
    expect(Opcodes[0xb5].text(cpu.memory, 0)).toBe(`OR A,L`)
})

test('INC A', () => {
    cpu.memory[0x00] = 0x3c
    cpu.state.a = 1
    expect(cpu.state.a).not.toBe(2)
    cpu.step()
    expect(cpu.state.a).toBe(2)
    expect(cpu.flags.s).toBe(0)
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.pv).toBe(0)
})
test('INC A sign flag', () => {
    cpu.memory[0x00] = 0x3c
    cpu.state.a = 127
    cpu.step()
    expect(cpu.state.a).toBe(128)
    expect(cpu.flags.s).toBe(1)
})
test('Dissassemble INC A', () => {
    cpu.memory[0x00] = 0x3c
    
    expect(Opcodes[0x3c].text(cpu.memory, 0)).toBe(`INC A`)
})

test('INC B', () => {
    cpu.memory[0x00] = 0x04
    cpu.state.b = 1
    expect(cpu.state.b).not.toBe(2)
    cpu.step()
    expect(cpu.state.b).toBe(2)
})
test('Dissassemble INC B', () => {
    cpu.memory[0x00] = 0x04
    
    expect(Opcodes[0x04].text(cpu.memory, 0)).toBe(`INC B`)
})

test('INC C', () => {
    cpu.memory[0x00] = 0x0c
    cpu.state.c = 1
    expect(cpu.state.c).not.toBe(2)
    cpu.step()
    expect(cpu.state.c).toBe(2)
})
test('Dissassemble INC C', () => {
    cpu.memory[0x00] = 0x0c
    
    expect(Opcodes[0x0c].text(cpu.memory, 0)).toBe(`INC C`)
})

test('INC D', () => {
    cpu.memory[0x00] = 0x14
    cpu.state.d = 1
    expect(cpu.state.d).not.toBe(2)
    cpu.step()
    expect(cpu.state.d).toBe(2)
})
test('Dissassemble INC D', () => {
    cpu.memory[0x00] = 0x14
    
    expect(Opcodes[0x14].text(cpu.memory, 0)).toBe(`INC D`)
})

test('INC E', () => {
    cpu.memory[0x00] = 0x1C
    cpu.state.e = 1
    expect(cpu.state.e).not.toBe(2)
    cpu.step()
    expect(cpu.state.e).toBe(2)
})
test('Dissassemble INC E', () => {
    cpu.memory[0x00] = 0x1c
    
    expect(Opcodes[0x1c].text(cpu.memory, 0)).toBe(`INC E`)
})

test('INC H', () => {
    cpu.memory[0x00] = 0x24
    cpu.state.h = 1
    expect(cpu.state.h).not.toBe(2)
    cpu.step()
    expect(cpu.state.h).toBe(2)
})
test('Dissassemble INC H', () => {
    cpu.memory[0x00] = 0x24
    
    expect(Opcodes[0x24].text(cpu.memory, 0)).toBe(`INC H`)
})

test('INC L', () => {
    cpu.memory[0x00] = 0x2c
    cpu.state.l = 1
    expect(cpu.state.l).not.toBe(2)
    cpu.step()
    expect(cpu.state.l).toBe(2)
})
test('Dissassemble INC L', () => {
    cpu.memory[0x00] = 0x2c
    
    expect(Opcodes[0x2c].text(cpu.memory, 0)).toBe(`INC L`)
})

test('DEC A', () => {
    cpu.memory[0x00] = 0x3d
    cpu.state.a = 5
    
    cpu.step()
    expect(cpu.state.a).toBe(0)
    expect(cpu.flags.z).toBe(1)
})
test('Dissassemble DEC A', () => {
    cpu.memory[0x00] = 0x3d
    
    expect(Opcodes[0x3d].text(cpu.memory, 0)).toBe(`DEC A`)
})

test('DEC B', () => {
    cpu.memory[0x00] = 0x05
    cpu.state.a = 128
    cpu.flags.s = 1
    cpu.state.b = 8
    
    cpu.step()
    expect(cpu.state.a).toBe(120)
    expect(cpu.flags.s).toBe(0)
})
test('Dissassemble DEC B', () => {
    cpu.memory[0x00] = 0x05
    
    expect(Opcodes[0x05].text(cpu.memory, 0)).toBe(`DEC B`)
})

test('DEC C', () => {
    cpu.memory[0x00] = 0x0D
    cpu.state.a = 128
    cpu.flags.s = 1
    cpu.state.c = 8
    
    cpu.step()
    expect(cpu.state.a).toBe(120)
    expect(cpu.flags.s).toBe(0)
})
test('Dissassemble DEC C', () => {
    cpu.memory[0x00] = 0x0D
    
    expect(Opcodes[0x0D].text(cpu.memory, 0)).toBe(`DEC C`)
})


test('DEC D', () => {
    cpu.memory[0x00] = 0x15
    cpu.state.a = 128
    cpu.flags.s = 1
    cpu.state.d = 8
    
    cpu.step()
    expect(cpu.state.a).toBe(120)
    expect(cpu.flags.s).toBe(0)
})
test('Dissassemble DEC D', () => {
    cpu.memory[0x00] = 0x15
    
    expect(Opcodes[0x15].text(cpu.memory, 0)).toBe(`DEC D`)
})

test('DEC E', () => {
    cpu.memory[0x00] = 0x1d
    cpu.state.a = 128
    cpu.flags.s = 1
    cpu.state.e = 8
    
    cpu.step()
    expect(cpu.state.a).toBe(120)
    expect(cpu.flags.s).toBe(0)
})
test('Dissassemble DEC E', () => {
    cpu.memory[0x00] = 0x1d
    
    expect(Opcodes[0x1d].text(cpu.memory, 0)).toBe(`DEC E`)
})

test('DEC H', () => {
    cpu.memory[0x00] = 0x25
    cpu.state.a = 128
    cpu.flags.s = 1
    cpu.state.h = 8
    
    cpu.step()
    expect(cpu.state.a).toBe(120)
    expect(cpu.flags.s).toBe(0)
})
test('Dissassemble DEC H', () => {
    cpu.memory[0x00] = 0x25
    
    expect(Opcodes[0x25].text(cpu.memory, 0)).toBe(`DEC H`)
})

test('DEC L', () => {
    cpu.memory[0x00] = 0x2d
    cpu.state.a = 128
    cpu.flags.s = 1
    cpu.state.l = 8
    
    cpu.step()
    expect(cpu.state.a).toBe(120)
    expect(cpu.flags.s).toBe(0)
})
test('Dissassemble DEC L', () => {
    cpu.memory[0x00] = 0x2d
    
    expect(Opcodes[0x2d].text(cpu.memory, 0)).toBe(`DEC L`)
})

test('DEC BC', () => {
    cpu.memory[0x00] = 0x0b
    cpu.state.b = 0x00
    cpu.state.c = 0xff
    
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
    expect(cpu.state.c).toBe(0xfe)
})
test('Dissassemble DEC BC', () => {
    cpu.memory[0x00] = 0x0b
    
    expect(Opcodes[0x0b].text(cpu.memory, 0)).toBe(`DEC BC`)
})

test('DEC DE', () => {
    cpu.memory[0x00] = 0x1b
    cpu.state.d = 0x00
    cpu.state.e = 0xff
    
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
    expect(cpu.state.e).toBe(0xfe)
})
test('Dissassemble DEC DE', () => {
    cpu.memory[0x00] = 0x1b
    
    expect(Opcodes[0x1b].text(cpu.memory, 0)).toBe(`DEC DE`)
})

test('DEC HL', () => {
    cpu.memory[0x00] = 0x2b
    cpu.state.h = 0x00
    cpu.state.l = 0xff
    
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
    expect(cpu.state.l).toBe(0xfe)
})
test('Dissassemble DEC HL', () => {
    cpu.memory[0x00] = 0x2b
    
    expect(Opcodes[0x2b].text(cpu.memory, 0)).toBe(`DEC HL`)
})

test('DEC SP', () => {
    cpu.memory[0x00] = 0x3b
    cpu.state.sp = 0xff00
    
    cpu.step()
    expect(cpu.state.sp).toBe(0xfeff)
})
test('Dissassemble DEC SP', () => {
    cpu.memory[0x00] = 0x3b
    
    expect(Opcodes[0x3b].text(cpu.memory, 0)).toBe(`DEC SP`)
})