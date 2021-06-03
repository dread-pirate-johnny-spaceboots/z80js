import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

let cpu = new CPU()

beforeEach(() => {
    cpu.reset()
})

test('LD A,n', () => {
    cpu.memory[0x00] = 0x3e
    cpu.memory[0x01] = 0xff
    expect(cpu.state.a).not.toBe(0xFF)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test("Disassemble LD A,n", () => {
    cpu.memory[0x00] = 0x3e
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x3e].text(cpu.memory, 0)).toBe("LD A,#$ff")
})

test('LD B,n', () => {
    cpu.memory[0x00] = 0x06
    cpu.memory[0x01] = 0xff
    expect(cpu.state.b).not.toBe(0xFF)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test("Disassemble LD B,n", () => {
    cpu.memory[0x00] = 0x06
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x06].text(cpu.memory, 0)).toBe("LD B,#$ff")
})

test("LD C,n", () => {
    cpu.memory[0x00] = 0x0e
    cpu.memory[0x01] = 0xff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test("Disassemble LD C,n", () => {
    cpu.memory[0x00] = 0x0e
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x0e].text(cpu.memory, 0)).toBe("LD C,#$ff")
})

test("LD D,n", () => {
    cpu.memory[0x00] = 0x16
    cpu.memory[0x01] = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test("Disassemble LD D,n", () => {
    cpu.memory[0x00] = 0x16
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x16].text(cpu.memory, 0)).toBe("LD D,#$ff")
})

test('LD E,n', () => {
    cpu.memory[0x00] = 0x1e
    cpu.memory[0x01] = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,n', () => {
    cpu.memory[0x00] = 0x1e
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x1e].text(cpu.memory, 0)).toBe(`LD E,#$ff`)
})

test('LD H,n', () => {
    cpu.memory[0x00] = 0x26
    cpu.memory[0x01] = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,n', () => {
    cpu.memory[0x00] = 0x26
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x26].text(cpu.memory, 0)).toBe(`LD H,#$ff`)
})

test('LD L,n', () => {
    cpu.memory[0x00] = 0x2e
    cpu.memory[0x01] = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,n', () => {
    cpu.memory[0x00] = 0x2e
    cpu.memory[0x01] = 0xff
    expect(Opcodes[0x2e].text(cpu.memory, 0)).toBe(`LD L,#$ff`)
})

test('LD A,A', () => {
    cpu.memory[0x00] = 0x7f
    cpu.state.a = 0xff
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,A', () => {
    cpu.memory[0x00] = 0x7f
    expect(Opcodes[0x7f].text(cpu.memory, 0)).toBe(`LD A,A`)
})

test('LD A,B', () => {
    cpu.memory[0x00] = 0x78
    cpu.state.b = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,B', () => {
    cpu.memory[0x00] = 0x78
    
    expect(Opcodes[0x78].text(cpu.memory, 0)).toBe(`LD A,B`)
})

test('LD A,C', () => {
    cpu.memory[0x00] = 0x79
    cpu.state.c = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,C', () => {
    cpu.memory[0x00] = 0x79
    
    expect(Opcodes[0x79].text(cpu.memory, 0)).toBe(`LD A,C`)
})

test('LD A,D', () => {
    cpu.memory[0x00] = 0x7a
    cpu.state.d = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,D', () => {
    cpu.memory[0x00] = 0x7a
    
    expect(Opcodes[0x7a].text(cpu.memory, 0)).toBe(`LD A,D`)
})

test('LD A,E', () => {
    cpu.memory[0x00] = 0x7b
    cpu.state.e = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,E', () => {
    cpu.memory[0x00] = 0x7b
    
    expect(Opcodes[0x7b].text(cpu.memory, 0)).toBe(`LD A,E`)
})

test('LD A,H', () => {
    cpu.memory[0x00] = 0x7C
    cpu.state.h = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,H', () => {
    cpu.memory[0x00] = 0x7C
    
    expect(Opcodes[0x7C].text(cpu.memory, 0)).toBe(`LD A,H`)
})

test('LD A,L', () => {
    cpu.memory[0x00] = 0x7d
    cpu.state.l = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,L', () => {
    cpu.memory[0x00] = 0x7d
    
    expect(Opcodes[0x7d].text(cpu.memory, 0)).toBe(`LD A,L`)
})

test('LD A,(HL)', () => {
    cpu.memory[0x00] = 0x7e
    cpu.memory[0x1234] = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,(HL)', () => {
    cpu.memory[0x00] = 0x7e
    
    expect(Opcodes[0x7e].text(cpu.memory, 0)).toBe(`LD A,(HL)`)
})

test('LD A,(BC)', () => {
    cpu.memory[0x00] = 0x0a
    cpu.memory[0x1234] = 0xff
    cpu.state.b = 0x12
    cpu.state.c = 0x34

    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,(BC)', () => {
    cpu.memory[0x00] = 0x0a
    
    expect(Opcodes[0x0a].text(cpu.memory, 0)).toBe(`LD A,(BC)`)
})

test('LD A,(DE)', () => {
    cpu.memory[0x00] = 0x1a
    cpu.state.d = 0x12
    cpu.state.e = 0x34
    cpu.memory[0x1234] = 0xff

    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,(DE)', () => {
    cpu.memory[0x00] = 0x1a
    
    expect(Opcodes[0x1a].text(cpu.memory, 0)).toBe(`LD A,(DE)`)
})

test('LD B,A', () => {
    cpu.memory[0x00] = 0x47
    cpu.state.a = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect()
})
test('Dissassemble LD B,A', () => {
    cpu.memory[0x00] = 0x47
    
    expect(Opcodes[0x47].text(cpu.memory, 0)).toBe(`LD B,A`)
})

test('LD B,B', () => {
    cpu.memory[0x00] = 0x40
    cpu.state.b = 0xff
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,B', () => {
    cpu.memory[0x00] = 0x40
    
    expect(Opcodes[0x40].text(cpu.memory, 0)).toBe(`LD B,B`)
})

test('LD B,C', () => {
    cpu.memory[0x00] = 0x41
    cpu.state.c = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,C', () => {
    cpu.memory[0x00] = 0x41
    
    expect(Opcodes[0x41].text(cpu.memory, 0)).toBe(`LD B,C`)
})

test('LD B,D', () => {
    cpu.memory[0x00] = 0x42
    cpu.state.d = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,D', () => {
    cpu.memory[0x00] = 0x42
    
    expect(Opcodes[0x42].text(cpu.memory, 0)).toBe(`LD B,D`)
})

test('LD B,E', () => {
    cpu.memory[0x00] = 0x43
    cpu.state.e = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,E', () => {
    cpu.memory[0x00] = 0x43
    
    expect(Opcodes[0x43].text(cpu.memory, 0)).toBe(`LD B,E`)
})

test('LD B,H', () => {
    cpu.memory[0x00] = 0x44
    cpu.state.h = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,F', () => {
    cpu.memory[0x00] = 0x44
    
    expect(Opcodes[0x44].text(cpu.memory, 0)).toBe(`LD B,H`)
})

test('LD B,L', () => {
    cpu.memory[0x00] = 0x45
    cpu.state.l = 0xff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,L', () => {
    cpu.memory[0x00] = 0x45
    
    expect(Opcodes[0x45].text(cpu.memory, 0)).toBe(`LD B,L`)
})

test('LD B,(HL)', () => {
    cpu.memory[0x00] = 0x46
    cpu.memory[0x1234] = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34

    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,(HL)', () => {
    cpu.memory[0x00] = 0x46
    
    expect(Opcodes[0x46].text(cpu.memory, 0)).toBe(`LD B,(HL)`)
})

test('LD C,A', () => {
    cpu.memory[0x00] = 0x4f
    cpu.state.a = 0xff

    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,A', () => {
    cpu.memory[0x00] = 0x4f
    
    expect(Opcodes[0x4f].text(cpu.memory, 0)).toBe(`LD C,A`)
})

test('LD C,B', () => {
    cpu.memory[0x00] = 0x48
    cpu.state.b = 0xff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,B', () => {
    cpu.memory[0x00] = 0x48
    
    expect(Opcodes[0x48].text(cpu.memory, 0)).toBe(`LD C,B`)
})

test('LD C,C', () => {
    cpu.memory[0x00] = 0x49
    cpu.state.c = 0xff
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,C', () => {
    cpu.memory[0x00] = 0x49
    
    expect(Opcodes[0x49].text(cpu.memory, 0)).toBe(`LD C,C`)
})

test('LD C,D', () => {
    cpu.memory[0x00] = 0x4a
    cpu.state.d  = 0xff
    expect(cpu.state.c).not.toBe(null)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,D', () => {
    cpu.memory[0x00] = 0x4a
    
    expect(Opcodes[0x4a].text(cpu.memory, 0)).toBe(`LD C,D`)
})

test('LD C,E', () => {
    cpu.memory[0x00] = 0x4b
    cpu.state.e = 0xff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,E', () => {
    cpu.memory[0x00] = 0x4b
    
    expect(Opcodes[0x4b].text(cpu.memory, 0)).toBe(`LD C,E`)
})

test('LD C,H', () => {
    cpu.memory[0x00] = 0x4c
    cpu.state.h = 0xff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,H', () => {
    cpu.memory[0x00] = 0x4c
    
    expect(Opcodes[0x4c].text(cpu.memory, 0)).toBe(`LD C,H`)
})

test('LD C,L', () => {
    cpu.memory[0x00] = 0x4d
    cpu.state.l = 0xff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,L', () => {
    cpu.memory[0x00] = 0x4d
    
    expect(Opcodes[0x4d].text(cpu.memory, 0)).toBe(`LD C,L`)
})

test('LD C,(HL)', () => {
    cpu.memory[0x00] = 0x4e
    cpu.memory[0x1234] = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34

    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,(HL)', () => {
    cpu.memory[0x00] = 0x4e
    
    expect(Opcodes[0x4e].text(cpu.memory, 0)).toBe(`LD C,(HL)`)
})
test('LD D,A', () => {
    cpu.memory[0x00] = 0x57
    cpu.state.a = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,A', () => {
    cpu.memory[0x00] = 0x57
    
    expect(Opcodes[0x57].text(cpu.memory, 0)).toBe(`LD D,A`)
})

test('LD D,B', () => {
    cpu.memory[0x00] = 0x50
    cpu.state.b = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,B', () => {
    cpu.memory[0x00] = 0x50
    
    expect(Opcodes[0x50].text(cpu.memory, 0)).toBe(`LD D,B`)
})

test('LD D,C', () => {
    cpu.memory[0x00] = 0x51
    cpu.state.c = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,C', () => {
    cpu.memory[0x00] = 0x51
    
    expect(Opcodes[0x51].text(cpu.memory, 0)).toBe(`LD D,C`)
})

test('LD D,D', () => {
    cpu.memory[0x00] = 0x52
    cpu.state.d = 0xff
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,D', () => {
    cpu.memory[0x00] = 0x52
    
    expect(Opcodes[0x52].text(cpu.memory, 0)).toBe(`LD D,D`)
})

test('LD D,E', () => {
    cpu.memory[0x00] = 0x53
    cpu.state.e = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,E', () => {
    cpu.memory[0x00] = 0x53
    
    expect(Opcodes[0x53].text(cpu.memory, 0)).toBe(`LD D,E`)
})

test('LD D,H', () => {
    cpu.memory[0x00] = 0x54
    cpu.state.h = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,H', () => {
    cpu.memory[0x00] = 0x54
    
    expect(Opcodes[0x54].text(cpu.memory, 0)).toBe(`LD D,H`)
})

test('LD D,L', () => {
    cpu.memory[0x00] = 0x55
    cpu.state.l = 0xff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,L', () => {
    cpu.memory[0x00] = 0x55
    
    expect(Opcodes[0x55].text(cpu.memory, 0)).toBe(`LD D,L`)
})

test('LD D,(HL)', () => {
    cpu.memory[0x00] = 0x56
    cpu.memory[0x1234] = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,(HL)', () => {
    cpu.memory[0x00] = 0x56
    
    expect(Opcodes[0x56].text(cpu.memory, 0)).toBe(`LD D,(HL)`)
})

test('LD E,A', () => {
    cpu.memory[0x00] = 0x5f
    cpu.state.a = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,A', () => {
    cpu.memory[0x00] = 0x5f
    
    expect(Opcodes[0x5f].text(cpu.memory, 0)).toBe(`LD E,A`)
})

test('LD E,B', () => {
    cpu.memory[0x00] = 0x58
    cpu.state.b = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,B', () => {
    cpu.memory[0x00] = 0x58
    
    expect(Opcodes[0x58].text(cpu.memory, 0)).toBe(`LD E,B`)
})

test('LD E,C', () => {
    cpu.memory[0x00] = 0x59
    cpu.state.c = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,C', () => {
    cpu.memory[0x00] = 0x59
    
    expect(Opcodes[0x59].text(cpu.memory, 0)).toBe(`LD E,C`)
})

test('LD E,D', () => {
    cpu.memory[0x00] = 0x5a
    cpu.state.d = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,D', () => {
    cpu.memory[0x00] = 0x5a
    
    expect(Opcodes[0x5a].text(cpu.memory, 0)).toBe(`LD E,D`)
})

test('LD E,E', () => {
    cpu.memory[0x00] = 0x5b
    cpu.state.e = 0xff
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,E', () => {
    cpu.memory[0x00] = 0x5b
    
    expect(Opcodes[0x5b].text(cpu.memory, 0)).toBe(`LD E,E`)
})

test('LD E,H', () => {
    cpu.memory[0x00] = 0x5c
    cpu.state.h = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,H', () => {
    cpu.memory[0x00] = 0x5c
    
    expect(Opcodes[0x5c].text(cpu.memory, 0)).toBe(`LD E,H`)
})

test('LD E,L', () => {
    cpu.memory[0x00] = 0x5d
    cpu.state.l = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,L', () => {
    cpu.memory[0x00] = 0x5d
    
    expect(Opcodes[0x5d].text(cpu.memory, 0)).toBe(`LD E,L`)
})

test('LD E,(HL)', () => {
    cpu.memory[0x00] = 0x5e
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    cpu.memory[0x1234] = 0xff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,(HL)', () => {
    cpu.memory[0x00] = 0x5e
    
    expect(Opcodes[0x5e].text(cpu.memory, 0)).toBe(`LD E,(HL)`)
})

test('LD H,A', () => {
    cpu.memory[0x00] = 0x67
    cpu.state.a = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,A', () => {
    cpu.memory[0x00] = 0x67
    
    expect(Opcodes[0x67].text(cpu.memory, 0)).toBe(`LD H,A`)
})

test('LD H,B', () => {
    cpu.memory[0x00] = 0x60
    cpu.state.b = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,B', () => {
    cpu.memory[0x00] = 0x60
    
    expect(Opcodes[0x60].text(cpu.memory, 0)).toBe(`LD H,B`)
})

test('LD H,C', () => {
    cpu.memory[0x00] = 0x61
    cpu.state.c = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,C', () => {
    cpu.memory[0x00] = 0x61
    
    expect(Opcodes[0x61].text(cpu.memory, 0)).toBe(`LD H,C`)
})

test('LD H,D', () => {
    cpu.memory[0x00] = 0x62
    cpu.state.d = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,D', () => {
    cpu.memory[0x00] = 0x62
    
    expect(Opcodes[0x62].text(cpu.memory, 0)).toBe(`LD H,D`)
})

test('LD H,E', () => {
    cpu.memory[0x00] = 0x63
    cpu.state.e = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,E', () => {
    cpu.memory[0x00] = 0x63
    
    expect(Opcodes[0x63].text(cpu.memory, 0)).toBe(`LD H,E`)
})

test('LD H,H', () => {
    cpu.memory[0x00] = 0x64
    cpu.state.h = 0xff
    
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,H', () => {
    cpu.memory[0x00] = 0x64
    
    expect(Opcodes[0x64].text(cpu.memory, 0)).toBe(`LD H,H`)
})

test('LD H,L', () => {
    cpu.memory[0x00] = 0x65
    cpu.state.l = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,L', () => {
    cpu.memory[0x00] = 0x65
    
    expect(Opcodes[0x65].text(cpu.memory, 0)).toBe(`LD H,L`)
})

test('LD H,(HL)', () => {
    cpu.memory[0x00] = 0x66
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    cpu.memory[0x1234] = 0xff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,(HL)', () => {
    cpu.memory[0x00] = 0x66
    
    expect(Opcodes[0x66].text(cpu.memory, 0)).toBe(`LD H,(HL)`)
})

test('LD L,A', () => {
    cpu.memory[0x00] = 0x6f
    cpu.state.a = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,A', () => {
    cpu.memory[0x00] = 0x6f
    
    expect(Opcodes[0x6f].text(cpu.memory, 0)).toBe(`LD L,A`)
})

test('LD L,B', () => {
    cpu.memory[0x00] = 0x68
    cpu.state.b = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,B', () => {
    cpu.memory[0x00] = 0x68
    
    expect(Opcodes[0x68].text(cpu.memory, 0)).toBe(`LD L,B`)
})

test('LD L,C', () => {
    cpu.memory[0x00] = 0x69
    cpu.state.c = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,C', () => {
    cpu.memory[0x00] = 0x69
    
    expect(Opcodes[0x69].text(cpu.memory, 0)).toBe(`LD L,C`)
})

test('LD L,D', () => {
    cpu.memory[0x00] = 0x6a
    cpu.state.d = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,D', () => {
    cpu.memory[0x00] = 0x6a
    
    expect(Opcodes[0x6a].text(cpu.memory, 0)).toBe(`LD L,D`)
})

test('LD L,E', () => {
    cpu.memory[0x00] = 0x6b
    cpu.state.e = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,E', () => {
    cpu.memory[0x00] = 0x6b
    
    expect(Opcodes[0x6b].text(cpu.memory, 0)).toBe(`LD L,E`)
})

test('LD L,H', () => {
    cpu.memory[0x00] = 0x6C
    cpu.state.h = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,H', () => {
    cpu.memory[0x00] = 0X6C
    
    expect(Opcodes[0X6C].text(cpu.memory, 0)).toBe(`LD L,H`)
})

test('LD L,L', () => {
    cpu.memory[0x00] = 0x6d
    cpu.state.l = 0xff
    
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,L', () => {
    cpu.memory[0x00] = 0x6d
    
    expect(Opcodes[0x6d].text(cpu.memory, 0)).toBe(`LD L,L`)
})

test('LD L,(HL)', () => {
    cpu.memory[0x00] = 0x6e
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    cpu.memory[0x1234] = 0xff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,(HL)', () => {
    cpu.memory[0x00] = 0x6e
    
    expect(Opcodes[0x6e].text(cpu.memory, 0)).toBe(`LD L,(HL)`)
})

test('LD (HL),A', () => {
    cpu.memory[0x00] = 0x77
    cpu.state.a = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (HL),A', () => {
    cpu.memory[0x00] = 0x77
    
    expect(Opcodes[0x77].text(cpu.memory, 0)).toBe(`LD (HL),A`)
})

test('LD (HL),B', () => {
    cpu.memory[0x00] = 0x70
    cpu.state.b = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (HL),B', () => {
    cpu.memory[0x00] = 0x70
    
    expect(Opcodes[0x70].text(cpu.memory, 0)).toBe(`LD (HL),B`)
})

test('LD (HL),C', () => {
    cpu.memory[0x00] = 0x71
    cpu.state.c = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (HL),C', () => {
    cpu.memory[0x00] = 0x71
    
    expect(Opcodes[0x71].text(cpu.memory, 0)).toBe(`LD (HL),C`)
})

test('LD (HL),D', () => {
    cpu.memory[0x00] = 0x72
    cpu.state.d = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (HL),D', () => {
    cpu.memory[0x00] = 0x72
    
    expect(Opcodes[0x72].text(cpu.memory, 0)).toBe(`LD (HL),D`)
})

test('LD (HL),E', () => {
    cpu.memory[0x00] = 0x73
    cpu.state.e = 0xff
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (HL),E', () => {
    cpu.memory[0x00] = 0x73
    
    expect(Opcodes[0x73].text(cpu.memory, 0)).toBe(`LD (HL),E`)
})

test('LD (HL),H', () => {
    cpu.memory[0x00] = 0x74
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0x12)
})
test('Dissassemble LD (HL),H', () => {
    cpu.memory[0x00] = 0x74
    
    expect(Opcodes[0x74].text(cpu.memory, 0)).toBe(`LD (HL),H`)
})

test('LD (HL),L', () => {
    cpu.memory[0x00] = 0x75
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0x34)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0x34)
})
test('Dissassemble LD (HL),L', () => {
    cpu.memory[0x00] = 0x75
    
    expect(Opcodes[0x75].text(cpu.memory, 0)).toBe(`LD (HL),L`)
})

test('LD (BC),A', () => {
    cpu.memory[0x00] = 0x02
    cpu.state.a = 0xff
    cpu.state.b = 0x12
    cpu.state.c = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (BC),A', () => {
    cpu.memory[0x00] = 0x02
    
    expect(Opcodes[0x02].text(cpu.memory, 0)).toBe(`LD (BC),A`)
})

test('LD (DE),A', () => {
    cpu.memory[0x00] = 0x12
    cpu.state.a = 0xff
    cpu.state.d = 0x12
    cpu.state.e = 0x34
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (DE),A', () => {
    cpu.memory[0x00] = 0x12
    
    expect(Opcodes[0x12].text(cpu.memory, 0)).toBe(`LD (DE),A`)
})

test('LD (nn),A', () => {
    cpu.memory[0x00] = 0x32
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    cpu.state.a = 0xff
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (nn),A', () => {
    cpu.memory[0x00] = 0x32
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(Opcodes[0x32].text(cpu.memory, 0)).toBe(`LD #$1234,A`)
})

test('LD A,(nn)', () => {
    cpu.memory[0x00] = 0x3a
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    cpu.memory[0x1234] = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,(nn)', () => {
    cpu.memory[0x00] = 0x3a
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12  
    expect(Opcodes[0x3a].text(cpu.memory, 0)).toBe(`LD A,#$1234`)
})

test('LD A,I', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x57
    cpu.state.i = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,I', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x57
    
    expect(Opcodes[0xED57].text(cpu.memory, 0)).toBe(`LD A,I`)
})

test('LD A,R', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x5f
    cpu.state.r = 0xff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,R', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x5f
    
    expect(Opcodes[0xED5F].text(cpu.memory, 0)).toBe(`LD A,R`)
})

test('LD R,A', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x4F
    cpu.state.a = 0xff
    expect(cpu.state.r).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.r).toBe(0xff)
})
test('Dissassemble LD R,A', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x4F

    expect(Opcodes[0xED4F].text(cpu.memory, 0)).toBe(`LD R,A`)
})

test('LD I,A', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x47
    cpu.state.a = 0xff
    expect(cpu.state.i).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.i).toBe(0xff)
})
test('Dissassemble LD I,A', () => {
    cpu.memory[0x00] = 0xED
    cpu.memory[0x01] = 0x47

    expect(Opcodes[0xED47].text(cpu.memory, 0)).toBe(`LD I,A`)
})

test('LD A,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x7e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('LD A,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x7e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x7e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD7e].text(cpu.memory, 0)).toBe(`LD A,(IX+#$f)`)
})

test('LD A,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x7e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('LD A,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x7e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.a).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.a).toBe(0xff)
})
test('Dissassemble LD A,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x7e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD7e].text(cpu.memory, 0)).toBe(`LD A,(IY+#$f)`)
})

test('LD B,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x46
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('LD B,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x46
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x46
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD46].text(cpu.memory, 0)).toBe(`LD B,(IX+#$f)`)
})

test('LD B,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x46
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('LD B,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x46
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.b).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.b).toBe(0xff)
})
test('Dissassemble LD B,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x46
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD46].text(cpu.memory, 0)).toBe(`LD B,(IY+#$f)`)
})

test('LD C,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x4e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('LD C,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x4e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x4e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD4e].text(cpu.memory, 0)).toBe(`LD C,(IX+#$f)`)
})

test('LD C,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x4e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('LD C,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x4e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.c).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.c).toBe(0xff)
})
test('Dissassemble LD C,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x4e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD4e].text(cpu.memory, 0)).toBe(`LD C,(IY+#$f)`)
})
test('LD D,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x56
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('LD D,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x56
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x56
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD56].text(cpu.memory, 0)).toBe(`LD D,(IX+#$f)`)
})

test('LD D,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x56
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('LD D,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x56
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.d).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.d).toBe(0xff)
})
test('Dissassemble LD D,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x56
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD56].text(cpu.memory, 0)).toBe(`LD D,(IY+#$f)`)
})

test('LD E,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x5e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('LD E,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x5e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD D,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x5e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD5e].text(cpu.memory, 0)).toBe(`LD E,(IX+#$f)`)
})

test('LD E,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x5e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('LD E,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x5e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.e).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.e).toBe(0xff)
})
test('Dissassemble LD E,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x5e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD5e].text(cpu.memory, 0)).toBe(`LD E,(IY+#$f)`)
})

test('LD H,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x66
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('LD H,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x66
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x66
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD66].text(cpu.memory, 0)).toBe(`LD H,(IX+#$f)`)
})

test('LD H,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x66
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('LD H,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x66
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.h).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.h).toBe(0xff)
})
test('Dissassemble LD H,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x66
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD66].text(cpu.memory, 0)).toBe(`LD H,(IY+#$f)`)
})

test('LD L,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x6e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.ix = 0xfff0
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('LD L,(IX+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x6e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.ix = 0xffff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,(IX+d)', () => {
    cpu.memory[0x00] = 0xDD
    cpu.memory[0x01] = 0x6e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xDD6e].text(cpu.memory, 0)).toBe(`LD L,(IX+#$f)`)
})

test('LD L,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x6e
    cpu.memory[0x02] = 0x0f
    cpu.memory[0xffff] = 0xff
    cpu.state.iy = 0xfff0
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('LD L,(IY+d) Goes Backwards', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x6e
    cpu.memory[0x02] = 0b10000001
    cpu.memory[0xfffe] = 0xff
    cpu.state.iy = 0xffff
    expect(cpu.state.l).not.toBe(0xff)
    cpu.step()
    expect(cpu.state.l).toBe(0xff)
})
test('Dissassemble LD L,(IY+d)', () => {
    cpu.memory[0x00] = 0xFD
    cpu.memory[0x01] = 0x6e
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xFD6e].text(cpu.memory, 0)).toBe(`LD L,(IY+#$f)`)
})

test('LD (IX+d),A', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.a = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),A Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.a = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),A', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd77].text(cpu.memory, 0)).toBe(`LD (IX+#$f),A`)
})

test('LD (IY+d),A', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.a = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),A Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.a = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),A', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd77].text(cpu.memory, 0)).toBe(`LD (IY+#$f),A`)
})

test('LD (IX+d),B', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.b = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),B Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.b = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),B', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd70].text(cpu.memory, 0)).toBe(`LD (IX+#$f),B`)
})

test('LD (IY+d),B', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.b = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),B Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.b = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),B', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd70].text(cpu.memory, 0)).toBe(`LD (IY+#$f),B`)
})

test('LD (IX+d),C', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.c = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),C Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.c = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),C', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd71].text(cpu.memory, 0)).toBe(`LD (IX+#$f),C`)
})

test('LD (IY+d),C', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.c = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),C Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.c = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),C', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd71].text(cpu.memory, 0)).toBe(`LD (IY+#$f),C`)
})

test('LD (IX+d),D', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.d = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),D Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.d = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),D', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd72].text(cpu.memory, 0)).toBe(`LD (IX+#$f),D`)
})

test('LD (IY+d),D', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.d = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),D Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.d = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),D', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd72].text(cpu.memory, 0)).toBe(`LD (IY+#$f),D`)
})

test('LD (IX+d),E', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.e = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),E Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.e = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),E', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd73].text(cpu.memory, 0)).toBe(`LD (IX+#$f),E`)
})

test('LD (IY+d),E', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.e = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),E Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.e = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),E', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd73].text(cpu.memory, 0)).toBe(`LD (IY+#$f),E`)
})

test('LD (IX+d),H', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.h = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),H Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.h = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),H', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd74].text(cpu.memory, 0)).toBe(`LD (IX+#$f),H`)
})

test('LD (IY+d),H', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.h = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),H Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.h = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),H', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd74].text(cpu.memory, 0)).toBe(`LD (IY+#$f),H`)
})

test('LD (IX+d),L', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0x04
    cpu.state.ix = 0x1230
    cpu.state.l = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IX+d),L Goes Backwards', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0b10000100
    cpu.state.ix = 0x1234
    cpu.state.l = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IX+d),L', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xdd75].text(cpu.memory, 0)).toBe(`LD (IX+#$f),L`)
})

test('LD (IY+d),L', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0x04
    cpu.state.iy = 0x1230
    cpu.state.l = 0xff
    
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('LD (IY+d),L Goes Backwards', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0b10000100
    cpu.state.iy = 0x1234
    cpu.state.l = 0xff
    
    expect(cpu.memory[0x1230]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1230]).toBe(0xff)
})
test('Dissassemble LD (IY+d),L', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0x0f
    
    expect(Opcodes[0xfd75].text(cpu.memory, 0)).toBe(`LD (IY+#$f),L`)
})

test('LD (IX+d),n', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x36
    cpu.memory[0x02] = 0x04
    cpu.memory[0x03] = 0xff
    cpu.state.ix = 0x1230
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (IX+d),n', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x36
    cpu.memory[0x02] = 0x08
    cpu.memory[0x03] = 0xff

    expect(Opcodes[0xdd36].text(cpu.memory, 0)).toBe(`LD (IX+$8),#$ff`)
})

test('LD (IY+d),n', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x36
    cpu.memory[0x02] = 0x04
    cpu.memory[0x03] = 0xff
    cpu.state.iy = 0x1230
    expect(cpu.memory[0x1234]).not.toBe(0xff)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xff)
})
test('Dissassemble LD (IY+d),n', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x36
    cpu.memory[0x02] = 0x08
    cpu.memory[0x03] = 0xff

    expect(Opcodes[0xfd36].text(cpu.memory, 0)).toBe(`LD (IY+$8),#$ff`)
})