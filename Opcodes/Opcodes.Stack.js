export default {
    0x01: {
        bytes: 3,
        text: (byteArray, offset) => `LD BC,#$${((byteArray[offset + 2] << 8) | byteArray[offset + 1]).toString(16)}`,
        execute: cpu => {
            cpu.state.b = cpu.memory[cpu.state.pc + 1]
            cpu.state.c = cpu.memory[cpu.state.pc + 2]
        }
    },
    0x11: {
        bytes: 3,
        text: (byteArray, offset) => `LD DE,#$${((byteArray[offset + 2] << 8) | byteArray[offset + 1]).toString(16)}`,
        execute: cpu => {
            cpu.state.d = cpu.memory[cpu.state.pc + 1]
            cpu.state.e = cpu.memory[cpu.state.pc + 2]
        }
    },
    0x21: {
        bytes: 3,
        text: (byteArray, offset) => `LD HL,#$${((byteArray[offset + 2] << 8) | byteArray[offset + 1]).toString(16)}`,
        execute: cpu => {
            cpu.state.h = cpu.memory[cpu.state.pc + 1]
            cpu.state.l = cpu.memory[cpu.state.pc + 2]
        }
    },
    0xf5: {
        bytes: 1,
        text: (byteArray, offset) => `PUSH AF`,
        execute: cpu => {
            cpu.state.sp -= 2
            cpu.memory[cpu.state.sp + 1] = cpu.state.a
            cpu.memory[cpu.state.sp] = cpu.state.f
        }
    },
    0xe5: {
        bytes: 1,
        text: (byteArray, offset) => `PUSH HL`,
        execute: cpu => {
            cpu.state.sp -= 2
            cpu.memory[cpu.state.sp + 1] = cpu.state.h
            cpu.memory[cpu.state.sp] = cpu.state.l
        }
    },
    0xd5: {
        bytes: 1,
        text: (byteArray, offset) => `PUSH DE`,
        execute: cpu => {
            cpu.state.sp -= 2
            cpu.memory[cpu.state.sp + 1] = cpu.state.d
            cpu.memory[cpu.state.sp] = cpu.state.e
        }
    },
    0xc5: {
        bytes: 1,
        text: (byteArray, offset) => `PUSH BC`,
        execute: cpu => {
            cpu.state.sp -= 2
            cpu.memory[cpu.state.sp + 1] = cpu.state.b
            cpu.memory[cpu.state.sp] = cpu.state.c
        }
    },
    0xf1: {
        bytes: 1,
        text: (byteArray, offset) => `POP AF`,
        execute: cpu => {
            cpu.state.sp += 2
            cpu.state.a = cpu.memory[cpu.state.sp - 2]
            cpu.state.f = cpu.memory[cpu.state.sp - 1]
        }
    },
    0xe1: {
        bytes: 1,
        text: (byteArray, offset) => `POP HL`,
        execute: cpu => {
            cpu.state.sp += 2
            cpu.state.h = cpu.memory[cpu.state.sp - 2]
            cpu.state.l = cpu.memory[cpu.state.sp - 1]
        }
    },
    0xd1: {
        bytes: 1,
        text: (byteArray, offset) => `POP DE`,
        execute: cpu => {
            cpu.state.sp += 2
            cpu.state.d = cpu.memory[cpu.state.sp - 2]
            cpu.state.e = cpu.memory[cpu.state.sp - 1]
        }
    },
    0xc1: {
        bytes: 1,
        text: (byteArray, offset) => `POP BC`,
        execute: cpu => {
            cpu.state.sp += 2
            cpu.state.b = cpu.memory[cpu.state.sp - 2]
            cpu.state.c = cpu.memory[cpu.state.sp - 1]
        }
    },
    0xf9: {
        bytes: 1,
        text: (byteArray, offset) => `LD SP,HL`,
        execute: cpu => {
            cpu.state.sp = (cpu.state.h << 8) | cpu.state.l
        }
    },
    0xdd21: {
        bytes: 4,
        text: (byteArray, offset) => `LD IX,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            cpu.state.ix = ((cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2])
        }
    },
    0xddf9: {
        bytes: 2,
        text: (byteArray, offset) => `LD SP,IX`,
        execute: cpu => {
            cpu.state.sp = cpu.state.ix
        }
    },
    0xfdf9: {
        bytes: 2,
        text: () => `LD SP,IY`,
        execute: cpu => {
            cpu.state.sp = cpu.state.iy
        }
    },
    0xfd21: {
        bytes: 4,
        text: (byteArray, offset) => `LD IY,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            const value = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.state.iy = value
        }
    },
    0xfd22: {
        bytes: 4,
        text: (byteArray, offset) => `LD (#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}),IY`,
        execute: cpu => {
            const addr = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.memory[addr] = cpu.state.iy & 0xff
            cpu.memory[addr + 1] = cpu.state.iy >> 8 & 0xff
        }
    },
    0xdd22: {
        bytes: 4,
        text: (byteArray, offset) => `LD (#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}),IX`,
        execute: cpu => {
            const addr = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.memory[addr] = cpu.state.ix & 0xff
            cpu.memory[addr + 1] = cpu.state.ix >> 8 & 0xff
        }
    },
    0xed43: {
        bytes: 4,
        text: (byteArray, offset) => `LD (#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}),BC`,
        execute: cpu => {
            const addr = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            const r = (cpu.state.b << 8) | cpu.state.c
            cpu.memory[addr] = r & 0xff
            cpu.memory[addr + 1] = (r >> 8) & 0xff
        }
    },
    0xed53: {
        bytes: 4,
        text: (byteArray, offset) => `LD (#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}),DE`,
        execute: cpu => {
            const addr = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            const r = (cpu.state.d << 8) | cpu.state.e
            cpu.memory[addr] = r & 0xff
            cpu.memory[addr + 1] = (r >> 8) & 0xff
        }
    },
    0x22: {
        bytes: 3,
        text: (byteArray, offset) => `LD (#$${((byteArray[offset + 2] << 8) | byteArray[offset + 1]).toString(16)}),HL`,
        execute: cpu => {
            const addr = (cpu.memory[cpu.state.pc + 2] << 8) | cpu.memory[cpu.state.pc + 1]
            const r = (cpu.state.h << 8) | cpu.state.l
            cpu.memory[addr] = r & 0xff
            cpu.memory[addr + 1] = (r >> 8) & 0xff
        }
    },
    0xed48: {
        bytes: 4,
        text: (byteArray, offset) => `LD BC,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            const v = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.state.b = v & 0xff
            cpu.state.c = (v >> 8) & 0xff
        }
    },
    0xed58: {
        bytes: 4,
        text: (byteArray, offset) => `LD DE,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            const v = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.state.d = v & 0xff
            cpu.state.e = (v >> 8) & 0xff
        }
    },
    0x2a: {
        bytes: 3,
        text: (byteArray, offset) => `LD HL,#$${((byteArray[offset + 2] << 8) | byteArray[offset + 1]).toString(16)}`,
        execute: cpu => {
            const v = (cpu.memory[cpu.state.pc + 2] << 8) | cpu.memory[cpu.state.pc + 1]
            cpu.state.h = v & 0xff
            cpu.state.l = (v >> 8) & 0xff
        }
    },
    0xed7b: {
        bytes: 4,
        text: (byteArray, offset) => `LD SP,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            const v = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.state.sp = v
        }
    },
    0xdd2a: {
        bytes: 4,
        text: (byteArray, offset) => `LD IX,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            const v = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.state.ix = v
        }
    },
    0xfd2a: {
        bytes: 4,
        text: (byteArray, offset) => `LD IY,#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}`,
        execute: cpu => {
            const v = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.state.iy = v
        }
    },
    0xed73: {
        bytes: 4,
        text: (byteArray, offset) => `LD (#$${((byteArray[offset + 3] << 8) | byteArray[offset + 2]).toString(16)}),SP`,
        execute: cpu => {
            const addr = (cpu.memory[cpu.state.pc + 3] << 8) | cpu.memory[cpu.state.pc + 2]
            cpu.memory[addr] = cpu.state.sp & 0xff
            cpu.memory[addr + 1] = cpu.state.sp >> 8 & 0xff
        }
    },
}