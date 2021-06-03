import CPU from '../CPU'
import Opcodes from '../Opcodes/Opcodes'

let cpu = new CPU()

beforeEach(() => {
    cpu.reset()
})

test('LD BC,(nn)', () => {
    cpu.memory[0x00] = 0x01
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(cpu.state.b).not.toBe(0x34)
    expect(cpu.state.c).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.b).toBe(0x34)
    expect(cpu.state.c).toBe(0x12)
})
test('Dissassemble LD BC,(nn)', () => {
    cpu.memory[0x00] = 0x01
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(Opcodes[0x01].text(cpu.memory, 0)).toBe(`LD BC,#$1234`)
})

test('LD DE,(nn)', () => {
    cpu.memory[0x00] = 0x11
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(cpu.state.d).not.toBe(0x34)
    expect(cpu.state.e).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.d).toBe(0x34)
    expect(cpu.state.e).toBe(0x12)
})
test('Dissassemble LD DE,(nn)', () => {
    cpu.memory[0x00] = 0x11
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(Opcodes[0x11].text(cpu.memory, 0)).toBe(`LD DE,#$1234`)
})

test('LD HL,(nn)', () => {
    cpu.memory[0x00] = 0x21
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(cpu.state.h).not.toBe(0x34)
    expect(cpu.state.l).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.h).toBe(0x34)
    expect(cpu.state.l).toBe(0x12)
})
test('Dissassemble LD HL,(nn)', () => {
    cpu.memory[0x00] = 0x21
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(Opcodes[0x21].text(cpu.memory, 0)).toBe(`LD HL,#$1234`)
})

test('LD IX,nn', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x21
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde

    expect(cpu.state.ix).not.toBe(0xdead)
    cpu.step()
    expect(cpu.state.ix).toBe(0xdead)
})
test('Dissassemble LD IX,nn', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x21
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde
    
    expect(Opcodes[0xdd21].text(cpu.memory, 0)).toBe(`LD IX,#$dead`)
})

test('LD IY,nn', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x21
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde

    expect(cpu.state.iy).not.toBe(0xdead)
    cpu.step()
    expect(cpu.state.iy).toBe(0xdead)
})
test('Dissassemble LD IY,nn', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x21
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde
    
    expect(Opcodes[0xfd21].text(cpu.memory, 0)).toBe(`LD IY,#$dead`)
})

test('LD SP,HL', () => {
    cpu.memory[0x00] = 0xf9
    cpu.state.h = 0x12
    cpu.state.l = 0x34
    expect(cpu.state.sp).not.toBe(0x1234)
    cpu.step()
    expect(cpu.state.sp).toBe(0x1234)
})
test('Dissassemble LD SP,HL', () => {
    cpu.memory[0x00] = 0xf9
    
    expect(Opcodes[0xf9].text(cpu.memory, 0)).toBe(`LD SP,HL`)
})

test('LD BC,nn', () => {
    cpu.memory[0x00] = 0x01
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    expect(cpu.state.b).not.toBe(0x34)
    expect(cpu.state.c).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.b).toBe(0x34)
    expect(cpu.state.c).toBe(0x12)
})
test('Dissassemble BC dd,nn', () => {
    cpu.memory[0x00] = 0x01
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12

    expect(Opcodes[0x01].text(cpu.memory, 0)).toBe(`LD BC,#$1234`)
})

test('LD SP,IX', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0xf9
    cpu.state.ix = 0x1234
    
    expect(cpu.state.sp).not.toBe(0x1234)
    cpu.step()
    expect(cpu.state.sp).toBe(0x1234)
})
test('Dissassemble LD SP,IX', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0xf9
    cpu.state.ix = 0x1234
    
    expect(Opcodes[0xddf9].text(cpu.memory, 0)).toBe(`LD SP,IX`)
})

test('LD SP,IY', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0xf9
    cpu.state.iy = 0x1234
    expect(cpu.state.sp).not.toBe(0x1234)
    cpu.step()
    expect(cpu.state.sp).toBe(0x1234)
})
test('Dissassemble LD SP,IY', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0xf9
    
    expect(Opcodes[0xfdf9].text(cpu.memory, 0)).toBe(`LD SP,IY`)
})

test('LD (nn),IY', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x22
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde
    cpu.state.iy = 0x1234

    expect(cpu.memory[0xdead]).not.toBe(0x34)
    expect(cpu.memory[0xdeae]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0xdead]).toBe(0x34)
    expect(cpu.memory[0xdeae]).toBe(0x12)
})
test('Dissassemble LD (nn),HL', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x22
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde

    expect(Opcodes[0xfd22].text(cpu.memory, 0)).toBe(`LD (#$dead),IY`)
})

test('LD (nn),IX', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x22
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde
    cpu.state.ix = 0x1234

    expect(cpu.memory[0xdead]).not.toBe(0x34)
    expect(cpu.memory[0xdeae]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0xdead]).toBe(0x34)
    expect(cpu.memory[0xdeae]).toBe(0x12)
})
test('Dissassemble LD (nn),IX', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x22
    cpu.memory[0x02] = 0xad
    cpu.memory[0x03] = 0xde

    expect(Opcodes[0xdd22].text(cpu.memory, 0)).toBe(`LD (#$dead),IX`)
})

test('LD (nn),BC', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x43
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    cpu.state.c = 0xad
    cpu.state.b = 0xde

    expect(cpu.memory[0x1234]).not.toBe(0xad)
    expect(cpu.memory[0x1235]).not.toBe(0xde)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xad)
    expect(cpu.memory[0x1235]).toBe(0xde)
})
test('Dissassemble LD (nn),dd', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x43
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    
    expect(Opcodes[0xed43].text(cpu.memory, 0)).toBe(`LD (#$1234),BC`)
})

test('LD (nn),DE', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x53
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    cpu.state.e = 0xad
    cpu.state.d = 0xde

    expect(cpu.memory[0x1234]).not.toBe(0xad)
    expect(cpu.memory[0x1235]).not.toBe(0xde)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xad)
    expect(cpu.memory[0x1235]).toBe(0xde)
})
test('Dissassemble LD (nn),DE', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x53
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xed53].text(cpu.memory, 0)).toBe(`LD (#$1234),DE`)
})

test('LD (nn),HL', () => {
    cpu.memory[0x00] = 0x22
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    cpu.state.l = 0xad
    cpu.state.h = 0xde

    expect(cpu.memory[0x1234]).not.toBe(0xad)
    expect(cpu.memory[0x1235]).not.toBe(0xde)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xad)
    expect(cpu.memory[0x1235]).toBe(0xde)
})
test('Dissassemble LD (nn),HL', () => {
    cpu.memory[0x00] = 0x22
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(Opcodes[0x22].text(cpu.memory, 0)).toBe(`LD (#$1234),HL`)
})

test('LD (nn),SP', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    cpu.state.sp = 0xdead
    expect(cpu.memory[0x1234]).not.toBe(0xad)
    expect(cpu.memory[0x1235]).not.toBe(0xde)
    cpu.step()
    expect(cpu.memory[0x1234]).toBe(0xad)
    expect(cpu.memory[0x1235]).toBe(0xde)
})
test('Dissassemble LD (nn),SP', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x73
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xed73].text(cpu.memory, 0)).toBe(`LD (#$1234),SP`)
})





test('LD BC,nn', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x48
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    
    expect(cpu.state.b).not.toBe(0x34)
    expect(cpu.state.c).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.b).toBe(0x34)
    expect(cpu.state.c).toBe(0x12)
})
test('Dissassemble LD BC,n', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x48
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xed48].text(cpu.memory, 0)).toBe(`LD BC,#$1234`)
})

test('LD DE,nn', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x58
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    
    expect(cpu.state.d).not.toBe(0x34)
    expect(cpu.state.e).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.d).toBe(0x34)
    expect(cpu.state.e).toBe(0x12)
})
test('Dissassemble LD DE,n', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x58
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xed58].text(cpu.memory, 0)).toBe(`LD DE,#$1234`)
})

test('LD HL,nn', () => {
    cpu.memory[0x00] = 0x2a
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12
    
    expect(cpu.state.h).not.toBe(0x34)
    expect(cpu.state.l).not.toBe(0x12)
    cpu.step()
    expect(cpu.state.h).toBe(0x34)
    expect(cpu.state.l).toBe(0x12)
})
test('Dissassemble LD HL,nn', () => {
    cpu.memory[0x00] = 0x2a
    cpu.memory[0x01] = 0x34
    cpu.memory[0x02] = 0x12

    expect(Opcodes[0x2a].text(cpu.memory, 0)).toBe(`LD HL,#$1234`)
})

test('LD SP,nn', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x7b
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    
    expect(cpu.state.sp).not.toBe(0x1234)
    cpu.step()
    expect(cpu.state.sp).toBe(0x1234)
})
test('Dissassemble LD SP,nn', () => {
    cpu.memory[0x00] = 0xed
    cpu.memory[0x01] = 0x7b
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xed7b].text(cpu.memory, 0)).toBe(`LD SP,#$1234`)
})

test('LD IX,nn', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x2a
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    
    expect(cpu.state.ix).not.toBe(0x1234)
    cpu.step()
    expect(cpu.state.ix).toBe(0x1234)
})
test('Dissassemble LD IX,nn', () => {
    cpu.memory[0x00] = 0xdd
    cpu.memory[0x01] = 0x2a
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xdd2a].text(cpu.memory, 0)).toBe(`LD IX,#$1234`)
})

test('LD IY,nn', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x2a
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12
    
    expect(cpu.state.iy).not.toBe(0x1234)
    cpu.step()
    expect(cpu.state.iy).toBe(0x1234)
})
test('Dissassemble LD IX,nn', () => {
    cpu.memory[0x00] = 0xfd
    cpu.memory[0x01] = 0x2a
    cpu.memory[0x02] = 0x34
    cpu.memory[0x03] = 0x12

    expect(Opcodes[0xfd2a].text(cpu.memory, 0)).toBe(`LD IY,#$1234`)
})

test('PUSH AF', () => {
    cpu.memory[0x00] = 0xf5
    cpu.state.sp = 0x100a
    cpu.state.a = 0x34
    cpu.state.f = 0x12
    expect(cpu.memory[0x1009]).not.toBe(0x34)
    expect(cpu.memory[0x1008]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0x1009]).toBe(0x34)
    expect(cpu.memory[0x1008]).toBe(0x12)
})
test('Dissassemble PUSH AF', () => {
    cpu.memory[0x00] = 0xf5
    
    expect(Opcodes[0xf5].text(cpu.memory, 0)).toBe(`PUSH AF`)
})

test('PUSH HL', () => {
    cpu.memory[0x00] = 0xe5
    cpu.state.sp = 0x100a
    cpu.state.h = 0x34
    cpu.state.l = 0x12
    expect(cpu.memory[0x1009]).not.toBe(0x34)
    expect(cpu.memory[0x1008]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0x1009]).toBe(0x34)
    expect(cpu.memory[0x1008]).toBe(0x12)
})
test('Dissassemble PUSH HL', () => {
    cpu.memory[0x00] = 0xe5
    
    expect(Opcodes[0xe5].text(cpu.memory, 0)).toBe(`PUSH HL`)
})

test('PUSH DE', () => {
    cpu.memory[0x00] = 0xd5
    cpu.state.sp = 0x100a
    cpu.state.d = 0x34
    cpu.state.e = 0x12
    expect(cpu.memory[0x1009]).not.toBe(0x34)
    expect(cpu.memory[0x1008]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0x1009]).toBe(0x34)
    expect(cpu.memory[0x1008]).toBe(0x12)
})
test('Dissassemble PUSH DE', () => {
    cpu.memory[0x00] = 0xd5
    
    expect(Opcodes[0xd5].text(cpu.memory, 0)).toBe(`PUSH DE`)
})

test('PUSH BC', () => {
    cpu.memory[0x00] = 0xc5
    cpu.state.sp = 0x100a
    cpu.state.b = 0x34
    cpu.state.c = 0x12
    expect(cpu.memory[0x1009]).not.toBe(0x34)
    expect(cpu.memory[0x1008]).not.toBe(0x12)
    cpu.step()
    expect(cpu.memory[0x1009]).toBe(0x34)
    expect(cpu.memory[0x1008]).toBe(0x12)
})
test('Dissassemble PUSH BC', () => {
    cpu.memory[0x00] = 0xc5
    
    expect(Opcodes[0xc5].text(cpu.memory, 0)).toBe(`PUSH BC`)
})

test('POP AF', () => {
    cpu.memory[0x00] = 0xf1
    cpu.state.sp = 0x1000
    cpu.memory[0x1000] = 0xad
    cpu.memory[0x1001] = 0xde
    expect(cpu.state.a).not.toBe(0xad)
    expect(cpu.state.f).not.toBe(0xde)
    expect(cpu.state.sp).toBe(0x1000)
    cpu.step()
    expect(cpu.state.a).toBe(0xad)
    expect(cpu.state.f).toBe(0xde)
    expect(cpu.state.sp).toBe(0x1002)
})
test('Dissassemble POP AF', () => {
    cpu.memory[0x00] = 0xf1
    
    expect(Opcodes[0xf1].text(cpu.memory, 0)).toBe(`POP AF`)
})

test('POP HL', () => {
    cpu.memory[0x00] = 0xe1
    cpu.state.sp = 0x1000
    cpu.memory[0x1000] = 0xad
    cpu.memory[0x1001] = 0xde
    expect(cpu.state.h).not.toBe(0xad)
    expect(cpu.state.l).not.toBe(0xde)
    expect(cpu.state.sp).toBe(0x1000)
    cpu.step()
    expect(cpu.state.h).toBe(0xad)
    expect(cpu.state.l).toBe(0xde)
    expect(cpu.state.sp).toBe(0x1002)
})
test('Dissassemble POP HL', () => {
    cpu.memory[0x00] = 0xe1
    
    expect(Opcodes[0xe1].text(cpu.memory, 0)).toBe(`POP HL`)
})

test('POP DE', () => {
    cpu.memory[0x00] = 0xd1
    cpu.state.sp = 0x1000
    cpu.memory[0x1000] = 0xad
    cpu.memory[0x1001] = 0xde
    expect(cpu.state.d).not.toBe(0xad)
    expect(cpu.state.e).not.toBe(0xde)
    expect(cpu.state.sp).toBe(0x1000)
    cpu.step()
    expect(cpu.state.d).toBe(0xad)
    expect(cpu.state.e).toBe(0xde)
    expect(cpu.state.sp).toBe(0x1002)
})
test('Dissassemble POP HL', () => {
    cpu.memory[0x00] = 0xd1
    
    expect(Opcodes[0xd1].text(cpu.memory, 0)).toBe(`POP DE`)
})

test('POP BC', () => {
    cpu.memory[0x00] = 0xc1
    cpu.state.sp = 0x1000
    cpu.memory[0x1000] = 0xad
    cpu.memory[0x1001] = 0xde
    expect(cpu.state.b).not.toBe(0xad)
    expect(cpu.state.c).not.toBe(0xde)
    expect(cpu.state.sp).toBe(0x1000)
    cpu.step()
    expect(cpu.state.b).toBe(0xad)
    expect(cpu.state.c).toBe(0xde)
    expect(cpu.state.sp).toBe(0x1002)
})
test('Dissassemble POP BC', () => {
    cpu.memory[0x00] = 0xc1
    
    expect(Opcodes[0xc1].text(cpu.memory, 0)).toBe(`POP BC`)
})