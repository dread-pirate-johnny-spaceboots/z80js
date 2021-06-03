import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

const cpu = new CPU()

beforeEach(() => {
    cpu.reset()
})

test('BIT 0,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x47
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x47
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x47

    expect(Opcodes[0xcb47].text(cpu.memory, 0)).toBe(`BIT 0,A`)
})

test('BIT 1,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4f
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x4f
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4f

    expect(Opcodes[0xcb4f].text(cpu.memory, 0)).toBe(`BIT 1,A`)
})

test('BIT 2,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x57
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x57
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x57

    expect(Opcodes[0xcb57].text(cpu.memory, 0)).toBe(`BIT 2,A`)
})

test('BIT 3,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5f
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x5f
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5f

    expect(Opcodes[0xcb5f].text(cpu.memory, 0)).toBe(`BIT 3,A`)
})

test('BIT 4,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x67
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x67
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x67

    expect(Opcodes[0xcb67].text(cpu.memory, 0)).toBe(`BIT 4,A`)
})

test('BIT 5,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6f
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x6f
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6f

    expect(Opcodes[0xcb6f].text(cpu.memory, 0)).toBe(`BIT 5,A`)
})

test('BIT 6,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x77
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x77
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x77

    expect(Opcodes[0xcb77].text(cpu.memory, 0)).toBe(`BIT 6,A`)
})

test('BIT 7,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7f
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x7f
    cpu.state.a = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.a = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7f

    expect(Opcodes[0xcb7f].text(cpu.memory, 0)).toBe(`BIT 7,A`)
})

test('BIT 0,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x40
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x40
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x40

    expect(Opcodes[0xcb40].text(cpu.memory, 0)).toBe(`BIT 0,B`)
})

test('BIT 1,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x48
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x48
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x48

    expect(Opcodes[0xcb48].text(cpu.memory, 0)).toBe(`BIT 1,B`)
})

test('BIT 2,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x50
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x50
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x50

    expect(Opcodes[0xcb50].text(cpu.memory, 0)).toBe(`BIT 2,B`)
})

test('BIT 3,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x58
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x58
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x58

    expect(Opcodes[0xcb58].text(cpu.memory, 0)).toBe(`BIT 3,B`)
})

test('BIT 4,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x60
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x60
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x60

    expect(Opcodes[0xcb60].text(cpu.memory, 0)).toBe(`BIT 4,B`)
})

test('BIT 5,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x68
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x68
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x68

    expect(Opcodes[0xcb68].text(cpu.memory, 0)).toBe(`BIT 5,B`)
})

test('BIT 6,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x70
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x70
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x70

    expect(Opcodes[0xcb70].text(cpu.memory, 0)).toBe(`BIT 6,B`)
})

test('BIT 7,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x78
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x78
    cpu.state.b = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.b = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x78

    expect(Opcodes[0xcb78].text(cpu.memory, 0)).toBe(`BIT 7,B`)
})

test('BIT 0,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x41
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x41
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x41

    expect(Opcodes[0xcb41].text(cpu.memory, 0)).toBe(`BIT 0,C`)
})

test('BIT 1,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x49
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x49
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x49

    expect(Opcodes[0xcb49].text(cpu.memory, 0)).toBe(`BIT 1,C`)
})

test('BIT 2,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x51
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x51
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x51

    expect(Opcodes[0xcb51].text(cpu.memory, 0)).toBe(`BIT 2,C`)
})

test('BIT 3,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x59
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x59
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x59

    expect(Opcodes[0xcb59].text(cpu.memory, 0)).toBe(`BIT 3,C`)
})

test('BIT 4,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x61
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x61
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x61

    expect(Opcodes[0xcb61].text(cpu.memory, 0)).toBe(`BIT 4,C`)
})

test('BIT 5,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x69
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x69
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x69

    expect(Opcodes[0xcb69].text(cpu.memory, 0)).toBe(`BIT 5,C`)
})

test('BIT 6,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x71
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x71
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x71

    expect(Opcodes[0xcb71].text(cpu.memory, 0)).toBe(`BIT 6,C`)
})

test('BIT 7,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x79
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x79
    cpu.state.c = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.c = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x79

    expect(Opcodes[0xcb79].text(cpu.memory, 0)).toBe(`BIT 7,C`)
})

test('BIT 0,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x42
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x42
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x42

    expect(Opcodes[0xcb42].text(cpu.memory, 0)).toBe(`BIT 0,D`)
})

test('BIT 1,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4a
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x4a
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4a

    expect(Opcodes[0xcb4a].text(cpu.memory, 0)).toBe(`BIT 1,D`)
})

test('BIT 2,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x52
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x52
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x52

    expect(Opcodes[0xcb52].text(cpu.memory, 0)).toBe(`BIT 2,D`)
})

test('BIT 3,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5a
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x5a
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5a

    expect(Opcodes[0xcb5a].text(cpu.memory, 0)).toBe(`BIT 3,D`)
})

test('BIT 4,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x62
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x62
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x62

    expect(Opcodes[0xcb62].text(cpu.memory, 0)).toBe(`BIT 4,D`)
})

test('BIT 5,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6a
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x6a
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6a

    expect(Opcodes[0xcb6a].text(cpu.memory, 0)).toBe(`BIT 5,D`)
})

test('BIT 6,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x72
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x72
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x72

    expect(Opcodes[0xcb72].text(cpu.memory, 0)).toBe(`BIT 6,D`)
})

test('BIT 7,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7a
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x7a
    cpu.state.d = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.d = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7a

    expect(Opcodes[0xcb7a].text(cpu.memory, 0)).toBe(`BIT 7,D`)
})

test('BIT 0,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x43
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x43
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x43

    expect(Opcodes[0xcb43].text(cpu.memory, 0)).toBe(`BIT 0,E`)
})

test('BIT 1,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4b
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x4b
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4b

    expect(Opcodes[0xcb4b].text(cpu.memory, 0)).toBe(`BIT 1,E`)
})

test('BIT 2,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x53
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x53
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x53

    expect(Opcodes[0xcb53].text(cpu.memory, 0)).toBe(`BIT 2,E`)
})

test('BIT 3,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5b
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x5b
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5b

    expect(Opcodes[0xcb5b].text(cpu.memory, 0)).toBe(`BIT 3,E`)
})

test('BIT 4,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x63
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x63
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x63

    expect(Opcodes[0xcb63].text(cpu.memory, 0)).toBe(`BIT 4,E`)
})

test('BIT 5,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6b
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x6b
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6b

    expect(Opcodes[0xcb6b].text(cpu.memory, 0)).toBe(`BIT 5,E`)
})

test('BIT 6,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x73
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x73

    expect(Opcodes[0xcb73].text(cpu.memory, 0)).toBe(`BIT 6,E`)
})

test('BIT 7,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7b
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x7b
    cpu.state.e = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.e = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,E', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7b

    expect(Opcodes[0xcb7b].text(cpu.memory, 0)).toBe(`BIT 7,E`)
})

test('BIT 0,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x44
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x44
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x44

    expect(Opcodes[0xcb44].text(cpu.memory, 0)).toBe(`BIT 0,H`)
})

test('BIT 1,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4c
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x4c
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4c

    expect(Opcodes[0xcb4c].text(cpu.memory, 0)).toBe(`BIT 1,H`)
})

test('BIT 2,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x54
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x54
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x54

    expect(Opcodes[0xcb54].text(cpu.memory, 0)).toBe(`BIT 2,H`)
})

test('BIT 3,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5c
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x5c
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5c

    expect(Opcodes[0xcb5c].text(cpu.memory, 0)).toBe(`BIT 3,H`)
})

test('BIT 4,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x64
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x64
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x64

    expect(Opcodes[0xcb64].text(cpu.memory, 0)).toBe(`BIT 4,H`)
})

test('BIT 5,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6c
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x6c
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6c

    expect(Opcodes[0xcb6c].text(cpu.memory, 0)).toBe(`BIT 5,H`)
})

test('BIT 6,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x74
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x74
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x74

    expect(Opcodes[0xcb74].text(cpu.memory, 0)).toBe(`BIT 6,H`)
})

test('BIT 7,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7c
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x7c
    cpu.state.h = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.h = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,H', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7c

    expect(Opcodes[0xcb7c].text(cpu.memory, 0)).toBe(`BIT 7,H`)
})












test('BIT 0,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x45
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x45
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b00000001
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 0,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x45

    expect(Opcodes[0xcb45].text(cpu.memory, 0)).toBe(`BIT 0,L`)
})

test('BIT 1,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4d
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x4d
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b00000010
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 1,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x4d

    expect(Opcodes[0xcb4d].text(cpu.memory, 0)).toBe(`BIT 1,L`)
})

test('BIT 2,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x55
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x55
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b00000100
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 2,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x55

    expect(Opcodes[0xcb55].text(cpu.memory, 0)).toBe(`BIT 2,L`)
})

test('BIT 3,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5d
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x5d
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b00001000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 3,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x5d

    expect(Opcodes[0xcb5d].text(cpu.memory, 0)).toBe(`BIT 3,L`)
})

test('BIT 4,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x65
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x65
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b00010000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 4,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x65

    expect(Opcodes[0xcb65].text(cpu.memory, 0)).toBe(`BIT 4,L`)
})

test('BIT 5,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6d
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x6d
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b00100000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 5,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x6d

    expect(Opcodes[0xcb6d].text(cpu.memory, 0)).toBe(`BIT 5,L`)
})

test('BIT 6,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x75
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x75
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b01000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 6,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x75

    expect(Opcodes[0xcb75].text(cpu.memory, 0)).toBe(`BIT 6,L`)
})

test('BIT 7,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7d
    cpu.memory[0x02] = 0xcb
    cpu.memory[0x03] = 0x7d
    cpu.state.l = 0b00000000
    expect(cpu.flags.z).not.toBe(1)
    cpu.step()
    expect(cpu.flags.z).toBe(1)
    cpu.state.l = 0b10000000
    cpu.step()
    expect(cpu.flags.z).toBe(0)
    expect(cpu.flags.h).toBe(1)
    expect(cpu.flags.n).toBe(0)
})
test('Dissassemble BIT 7,L', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x7d

    expect(Opcodes[0xcb7d].text(cpu.memory, 0)).toBe(`BIT 7,L`)
})








test('RES 0,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x87
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b11111110)
})
test('Dissassemble RES 0,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x87
    
    expect(Opcodes[0xcb87].text(cpu.memory, 0)).toBe(`RES 0,A`)
})

test('RES 1,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x8f
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b11111101)
})
test('Dissassemble RES 1,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x8f
    
    expect(Opcodes[0xcb8f].text(cpu.memory, 0)).toBe(`RES 1,A`)
})

test('RES 2,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x97
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b11111011)
})
test('Dissassemble RES 2,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x97
    
    expect(Opcodes[0xcb97].text(cpu.memory, 0)).toBe(`RES 2,A`)
})

test('RES 3,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x9f
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b11110111)
})
test('Dissassemble RES 3,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x9f
    
    expect(Opcodes[0xcb9f].text(cpu.memory, 0)).toBe(`RES 3,A`)
})

test('RES 4,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa7
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b11101111)
})
test('Dissassemble RES 4,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa7
    
    expect(Opcodes[0xcba7].text(cpu.memory, 0)).toBe(`RES 4,A`)
})

test('RES 5,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xaf
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b11011111)
})
test('Dissassemble RES 5,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xaf
    
    expect(Opcodes[0xcbaf].text(cpu.memory, 0)).toBe(`RES 5,A`)
})

test('RES 6,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb7
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b10111111)
})
test('Dissassemble RES 6,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb7
    
    expect(Opcodes[0xcbb7].text(cpu.memory, 0)).toBe(`RES 6,A`)
})

test('RES 7,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xbf
    cpu.state.a = 0b11111111
    cpu.step()
    expect(cpu.state.a).toBe(0b01111111)
})
test('Dissassemble RES 7,A', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xbf
    
    expect(Opcodes[0xcbbf].text(cpu.memory, 0)).toBe(`RES 7,A`)
})










test('RES 0,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x80
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b11111110)
})
test('Dissassemble RES 0,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x80
    
    expect(Opcodes[0xcb80].text(cpu.memory, 0)).toBe(`RES 0,B`)
})

test('RES 1,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x88
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b11111101)
})
test('Dissassemble RES 1,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x88
    
    expect(Opcodes[0xcb88].text(cpu.memory, 0)).toBe(`RES 1,B`)
})

test('RES 2,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x90
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b11111011)
})
test('Dissassemble RES 2,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x90
    
    expect(Opcodes[0xcb90].text(cpu.memory, 0)).toBe(`RES 2,B`)
})

test('RES 3,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x98
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b11110111)
})
test('Dissassemble RES 3,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x98
    
    expect(Opcodes[0xcb98].text(cpu.memory, 0)).toBe(`RES 3,B`)
})

test('RES 4,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa0
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b11101111)
})
test('Dissassemble RES 4,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa0
    
    expect(Opcodes[0xcba0].text(cpu.memory, 0)).toBe(`RES 4,B`)
})

test('RES 5,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa8
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b11011111)
})
test('Dissassemble RES 5,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa8
    
    expect(Opcodes[0xcba8].text(cpu.memory, 0)).toBe(`RES 5,B`)
})

test('RES 6,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb0
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b10111111)
})
test('Dissassemble RES 6,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb0
    
    expect(Opcodes[0xcbb0].text(cpu.memory, 0)).toBe(`RES 6,B`)
})

test('RES 7,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb8
    cpu.state.b = 0b11111111
    cpu.step()
    expect(cpu.state.b).toBe(0b01111111)
})
test('Dissassemble RES 7,B', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb8
    
    expect(Opcodes[0xcbb8].text(cpu.memory, 0)).toBe(`RES 7,B`)
})





test('RES 0,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x81
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b11111110)
})
test('Dissassemble RES 0,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x81
    
    expect(Opcodes[0xcb81].text(cpu.memory, 0)).toBe(`RES 0,C`)
})

test('RES 1,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x89
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b11111101)
})
test('Dissassemble RES 1,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x89
    
    expect(Opcodes[0xcb89].text(cpu.memory, 0)).toBe(`RES 1,C`)
})

test('RES 2,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x91
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b11111011)
})
test('Dissassemble RES 2,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x91
    
    expect(Opcodes[0xcb91].text(cpu.memory, 0)).toBe(`RES 2,C`)
})

test('RES 3,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x99
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b11110111)
})
test('Dissassemble RES 3,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x99
    
    expect(Opcodes[0xcb99].text(cpu.memory, 0)).toBe(`RES 3,C`)
})

test('RES 4,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa1
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b11101111)
})
test('Dissassemble RES 4,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa1
    
    expect(Opcodes[0xcba1].text(cpu.memory, 0)).toBe(`RES 4,C`)
})

test('RES 5,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa9
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b11011111)
})
test('Dissassemble RES 5,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa9
    
    expect(Opcodes[0xcba9].text(cpu.memory, 0)).toBe(`RES 5,C`)
})

test('RES 6,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb1
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b10111111)
})
test('Dissassemble RES 6,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb1
    
    expect(Opcodes[0xcbb1].text(cpu.memory, 0)).toBe(`RES 6,C`)
})

test('RES 7,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb9
    cpu.state.c = 0b11111111
    cpu.step()
    expect(cpu.state.c).toBe(0b01111111)
})
test('Dissassemble RES 7,C', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb9
    
    expect(Opcodes[0xcbb9].text(cpu.memory, 0)).toBe(`RES 7,C`)
})












test('RES 0,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x82
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b11111110)
})
test('Dissassemble RES 0,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x82
    
    expect(Opcodes[0xcb82].text(cpu.memory, 0)).toBe(`RES 0,D`)
})

test('RES 1,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x8a
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b11111101)
})
test('Dissassemble RES 1,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x8a
    
    expect(Opcodes[0xcb8a].text(cpu.memory, 0)).toBe(`RES 1,D`)
})

test('RES 2,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x92
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b11111011)
})
test('Dissassemble RES 2,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x92
    
    expect(Opcodes[0xcb92].text(cpu.memory, 0)).toBe(`RES 2,D`)
})

test('RES 3,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x9a
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b11110111)
})
test('Dissassemble RES 3,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0x9a
    
    expect(Opcodes[0xcb9a].text(cpu.memory, 0)).toBe(`RES 3,D`)
})

test('RES 4,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa2
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b11101111)
})
test('Dissassemble RES 4,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xa2
    
    expect(Opcodes[0xcba2].text(cpu.memory, 0)).toBe(`RES 4,D`)
})

test('RES 5,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xaa
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b11011111)
})
test('Dissassemble RES 5,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xaa
    
    expect(Opcodes[0xcbaa].text(cpu.memory, 0)).toBe(`RES 5,D`)
})

test('RES 6,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb2
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b10111111)
})
test('Dissassemble RES 6,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xb2
    
    expect(Opcodes[0xcbb2].text(cpu.memory, 0)).toBe(`RES 6,D`)
})

test('RES 7,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xba
    cpu.state.d = 0b11111111
    cpu.step()
    expect(cpu.state.d).toBe(0b01111111)
})
test('Dissassemble RES 7,D', () => {
    cpu.memory[0x00] = 0xcb
    cpu.memory[0x01] = 0xba
    
    expect(Opcodes[0xcbba].text(cpu.memory, 0)).toBe(`RES 7,D`)
})


















