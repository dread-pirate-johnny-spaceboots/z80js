import { twosComplement } from '../../Utils'

export default {
    0x02: {
        bytes: 1,
        text: (byteArray, offset) => `LD (BC),A`,
        execute: cpu => {
            cpu.memory[(cpu.state.b << 8) | cpu.state.c] = cpu.state.a
        }
    },
    0x12: {
        bytes: 1,
        text: (byteArray, offset) => `LD (DE),A`,
        execute: cpu => {
            cpu.memory[(cpu.state.d << 8) | cpu.state.e] = cpu.state.a
        }
    },
    0x06: {
        bytes: 2,
        text: (byteArray, offset) => `LD B,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.b = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x16: {
        bytes: 2,
        text: (byteArray, offset) => `LD D,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.d = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x0a: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,(BC)`,
        execute: cpu => {
            cpu.state.a = cpu.memory[(cpu.state.b << 8) | cpu.state.c]
        }
    },
    0x0e: {
        bytes: 2,
        text: (byteArray, offset) => `LD C,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.c = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x1a: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,(DE)`,
        execute: cpu => {
            cpu.state.a = cpu.memory[(cpu.state.d << 8) | cpu.state.e]
        }
    },
    0x1e: {
        bytes: 2,
        text: (byteArray, offset) => `LD E,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.e = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x26: {
        bytes: 2,
        text: (byteArray, offset) => `LD H,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.h = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x2e: {
        bytes: 2,
        text: (byteArray, offset) => `LD L,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.l = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x32: {
        bytes: 3,
        text: (byteArray, offset) => `LD #$${(byteArray[offset + 1] | (byteArray[offset + 2] << 8)).toString(16)},A`,
        execute: cpu => {
            cpu.memory[cpu.memory[cpu.state.pc + 1] | (cpu.memory[cpu.state.pc + 2] << 8)] = cpu.state.a
        }
    },
    0x3a: {
        bytes: 3,
        text: (byteArray, offset) => `LD A,#$${(byteArray[offset + 1] | (byteArray[offset + 2] << 8)).toString(16)}`,
        execute: cpu => {
            cpu.state.a = cpu.memory[cpu.memory[cpu.state.pc + 1] | (cpu.memory[cpu.state.pc + 2] << 8)]
        }
    },
    0x3e: {
        bytes: 2,
        text: (byteArray, offset) => `LD A,#$${byteArray[offset + 1].toString(16)}`,
        execute: cpu => {
            cpu.state.a = cpu.memory[cpu.state.pc + 1]
        }
    },
    0x40: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,B`,
        execute: cpu => {
            cpu.state.b = cpu.state.b
        }
    },
    0x41: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,C`,
        execute: cpu => {
            cpu.state.b = cpu.state.c
        }
    },
    0x42: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,D`,
        execute: cpu => {
            cpu.state.b = cpu.state.d
        }
    },
    0x43: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,E`,
        execute: cpu => {
            cpu.state.b = cpu.state.e
        }
    },
    0x44: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,H`,
        execute: cpu => {
            cpu.state.b = cpu.state.h
        }
    },
    0x45: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,L`,
        execute: cpu => {
            cpu.state.b = cpu.state.l
        }
    },
    0x46: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,(HL)`,
        execute: cpu => {
            cpu.state.b = cpu.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x47: {
        bytes: 1,
        text: (byteArray, offset) => `LD B,A`,
        execute: cpu => {
            cpu.state.b = cpu.state.a
        }
    },
    0x48: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,B`,
        execute: cpu => {
            cpu.state.c = cpu.state.b
        }
    },
    0x49: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,C`,
        execute: cpu => {
            cpu.state.c = cpu.state.c
        }
    },
    0x4a: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,D`,
        execute: cpu => {
            cpu.state.c = cpu.state.d
        }
    },
    0x4b: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,E`,
        execute: cpu => {
            cpu.state.c = cpu.state.e
        }
    },
    0x4c: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,H`,
        execute: cpu => {
            cpu.state.c = cpu.state.h
        }
    },
    0x4d: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,L`,
        execute: cpu => {
            cpu.state.c = cpu.state.l
        }
    },
    0x4e: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,(HL)`,
        execute: cpu => {
            cpu.state.c = cpu.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x4f: {
        bytes: 1,
        text: (byteArray, offset) => `LD C,A`,
        execute: cpu => {
            cpu.state.c = cpu.state.a
        }
    },
    0x50: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,B`,
        execute: cpu => {
            cpu.state.d = cpu.state.b
        }
    },
    0x51: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,C`,
        execute: cpu => {
            cpu.state.d = cpu.state.c
        }
    },
    0x52: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,D`,
        execute: cpu => {
            cpu.state.d = cpu.state.d
        }
    },
    0x53: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,E`,
        execute: cpu => {
            cpu.state.d = cpu.state.e
        }
    },
    0x54: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,H`,
        execute: cpu => {
            cpu.state.d = cpu.state.h
        }
    },
    0x55: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,L`,
        execute: cpu => {
            cpu.state.d = cpu.state.l
        }
    },
    0x56: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,(HL)`,
        execute: cpu => {
            cpu.state.d = cpu.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x57: {
        bytes: 1,
        text: (byteArray, offset) => `LD D,A`,
        execute: cpu => {
            cpu.state.d = cpu.state.a
        }
    },
    0x58: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,B`,
        execute: cpu => {
            cpu.state.e = cpu.state.b
        }
    },
    0x59: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,C`,
        execute: cpu => {
            cpu.state.e = cpu.state.c
        }
    },
    0x5a: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,D`,
        execute: cpu => {
            cpu.state.e = cpu.state.d
        }
    },
    0x5b: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,E`,
        execute: cpu => {
            cpu.state.e = cpu.state.e
        }
    },
    0x5c: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,H`,
        execute: cpu => {
            cpu.state.e = cpu.state.h
        }
    },
    0x5d: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,L`,
        execute: cpu => {
            cpu.state.e = cpu.state.l
        }
    },
    0x5e: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,(HL)`,
        execute: cpu => {
            cpu.state.e = cpu.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x5f: {
        bytes: 1,
        text: (byteArray, offset) => `LD E,A`,
        execute: cpu => {
            cpu.state.e = cpu.state.a
        }
    },
    0x67: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,A`,
        execute: cpu => {
            cpu.state.h = cpu.state.a
        }
    },
    0x60: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,B`,
        execute: cpu => {
            cpu.state.h = cpu.state.b
        }
    },
    0x61: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,C`,
        execute: cpu => {
            cpu.state.h = cpu.state.c
        }
    },
    0x62: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,D`,
        execute: cpu => {
            cpu.state.h = cpu.state.d
        }
    },
    0x63: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,E`,
        execute: cpu => {
            cpu.state.h = cpu.state.e
        }
    },
    0x64: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,H`,
        execute: cpu => {
            cpu.state.h = cpu.state.h
        }
    },
    0x65: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,L`,
        execute: cpu => {
            cpu.state.h = cpu.state.l
        }
    },
    0x66: {
        bytes: 1,
        text: (byteArray, offset) => `LD H,(HL)`,
        execute: cpu => {
            cpu.state.h = cpu.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x68: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,B`,
        execute: cpu => {
            cpu.state.l = cpu.state.b
        }
    },
    0x69: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,C`,
        execute: cpu => {
                cpu.state.l = cpu.state.c
        }
    },
    0x6a: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,D`,
        execute: cpu => {
            cpu.state.l = cpu.state.d
        }
    },
    0x6b: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,E`,
        execute: cpu => {
            cpu.state.l = cpu.state.e
        }
    },
    0x6c: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,H`,
        execute: cpu => {
            cpu.state.l = cpu.state.h
        }
    },
    0x6d: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,L`,
        execute: cpu => {
            cpu.state.l = cpu.state.l
        }
    },
    0x6e: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,(HL)`,
        execute: cpu => {
            cpu.state.l = cpu.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x6f: {
        bytes: 1,
        text: (byteArray, offset) => `LD L,A`,
        execute: cpu => {
            cpu.state.l = cpu.state.a
        }
    },
    0x70: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),B`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.b
        }
    },
    0x71: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),C`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.c
        }
    },
    0x72: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),D`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.d
        }
    },
    0x73: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),E`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.e
        }
    },
    0x74: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),H`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.h
        }
    },
    0x75: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),L`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.l
        }
    },
    0x77: {
        bytes: 1,
        text: (byteArray, offset) => `LD (HL),A`,
        execute: cpu => {
            cpu.memory[(cpu.state.h << 8) | cpu.state.l] = cpu.state.a
        }
    },
    0x78: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,B`,
        execute: cpu => {
            cpu.state.a = cpu.state.b
        }
    },
    0x79: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,C`,
        execute: cpu => {
            cpu.state.a = cpu.state.c
        }
    },
    0x7a: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,D`,
        execute: cpu => {
            cpu.state.a = cpu.state.d
        }
    },
    0x7B: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,E`,
        execute: cpu => {
            cpu.state.a = cpu.state.e
        }
    },
    0x7C: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,H`,
        execute: cpu => {
            cpu.state.a = cpu.state.h
        }
    },
    0x7d: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,L`,
        execute: cpu => {
            cpu.state.a = cpu.state.l
        }
    },
    0x7e: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,(HL)`,
        execute: cpu => {
            cpu.state.a = cpu.state.memory[(cpu.state.h << 8) | cpu.state.l]
        }
    },
    0x7f: {
        bytes: 1,
        text: (byteArray, offset) => `LD A,A`,
        execute: cpu => {
            cpu.state.a = cpu.state.a
        }
    },
    0xED57: {
        bytes: 2,
        text: () => `LD A,I`,
        execute: cpu => {
            cpu.state.a = cpu.state.i
        }
    },
    0xED5F: {
        bytes: 2,
        text: () => `LD A,R`,
        execute: cpu => {
            cpu.state.a = cpu.state.r
        }
    },
    0xED4F: {
        bytes: 2,
        text: (byteArray, offset) => `LD R,A`,
        execute: cpu => {
            cpu.state.r = cpu.state.a
        }
    },
    0xED47: {
        bytes: 2,
        text: (byteArray, offset) => `LD I,A`,
        execute: cpu => {
            cpu.state.i = cpu.state.a
        }
    },
    0xdd7e: {
        bytes: 3,
        text: (byteArray, offset) => `LD A,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.a = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd7e: {
        bytes: 3,
        text: (byteArray, offset) => `LD A,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.a = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xdd46: {
        bytes: 3,
        text: (byteArray, offset) => `LD B,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.b = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd46: {
        bytes: 3,
        text: (byteArray, offset) => `LD B,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.b = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xdd4e: {
        bytes: 3,
        text: (byteArray, offset) => `LD C,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.c = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd4e: {
        bytes: 3,
        text: (byteArray, offset) => `LD C,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.c = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },

    0xdd56: {
        bytes: 3,
        text: (byteArray, offset) => `LD D,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.d = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd56: {
        bytes: 3,
        text: (byteArray, offset) => `LD D,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.d = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },

    0xdd5e: {
        bytes: 3,
        text: (byteArray, offset) => `LD E,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.e = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd5e: {
        bytes: 3,
        text: (byteArray, offset) => `LD E,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.e = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },

    0xdd66: {
        bytes: 3,
        text: (byteArray, offset) => `LD H,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.h = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd66: {
        bytes: 3,
        text: (byteArray, offset) => `LD H,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.h = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },

    0xdd6e: {
        bytes: 3,
        text: (byteArray, offset) => `LD L,(IX+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.l = cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xfd6e: {
        bytes: 3,
        text: (byteArray, offset) => `LD L,(IY+#$${byteArray[offset + 2].toString(16)})`,
        execute: cpu => {
            cpu.state.l = cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])]
        }
    },
    0xdd77: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),A`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.a
        }
    },
    0xfd77: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),A`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.a
        }
    },
    0xdd70: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),B`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.b
        }
    },
    0xfd70: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),B`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.b
        }
    },
    0xdd71: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),C`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.c
        }
    },
    0xfd71: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),C`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.c
        }
    },
    0xdd72: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),D`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.d
        }
    },
    0xfd72: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),D`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.d
        }
    },
    0xdd73: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),E`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.e
        }
    },
    0xfd73: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),E`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.e
        }
    },
    0xdd74: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),H`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.h
        }
    },
    0xfd74: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),H`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.h
        }
    },
    0xdd75: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+#$${byteArray[offset + 2].toString(16)}),L`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.l
        }
    },
    0xfd75: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+#$${byteArray[offset + 2].toString(16)}),L`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.state.l
        }
    },
    0xdd36: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IX+$${byteArray[offset + 2].toString(16)}),#$${byteArray[offset + 3].toString(16)}`,
        execute: cpu => {
            cpu.memory[cpu.state.ix + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.memory[cpu.state.pc + 3]
        }
    },
    0xfd36: {
        bytes: 3,
        text: (byteArray, offset) => `LD (IY+$${byteArray[offset + 2].toString(16)}),#$${byteArray[offset + 3].toString(16)}`,
        execute: cpu => {
            cpu.memory[cpu.state.iy + twosComplement(cpu.memory[cpu.state.pc + 2])] = cpu.memory[cpu.state.pc + 3]
        }
    }
}