import { invert, bitTest, pairity } from '../Utils'

export default {
    0x2f: {
        bytes: 1,
        text: (byteArray, offset) => `CPL`,
        execute: cpu => {
            cpu.state.a = invert(cpu.state.a)
            cpu.flags.h = 0b1
            cpu.flags.n = 0b1
        }
    },

    0x87: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,A`,
        execute: cpu => {
            cpu.state.a += cpu.state.a
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },

    0x80: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,B`,
        execute: cpu => {
            cpu.state.a += cpu.state.b
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },

    0x81: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,C`,
        execute: cpu => {
            cpu.state.a += cpu.state.c
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },

    0x82: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,D`,
        execute: cpu => {
            cpu.state.a += cpu.state.d
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },

    0x83: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,E`,
        execute: cpu => {
            cpu.state.a += cpu.state.e
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },

    0x84: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,H`,
        execute: cpu => {
            cpu.state.a += cpu.state.h
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },

    0x85: {
        bytes: 1,
        text: (byteArray, offset) => `ADD A,L`,
        execute: cpu => {
            cpu.state.a += cpu.state.l
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            // TODO: implement h flag for decimal mode
        }
    },
    
    0x97: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,A`,
        execute: cpu => {
            cpu.state.a -= cpu.state.a
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },

    0x90: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,B`,
        execute: cpu => {
            cpu.state.a -= cpu.state.b
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },
    0x91: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,C`,
        execute: cpu => {
            cpu.state.a -= cpu.state.c
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },
    0x92: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,D`,
        execute: cpu => {
            cpu.state.a -= cpu.state.d
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },
    0x93: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,E`,
        execute: cpu => {
            cpu.state.a -= cpu.state.e
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },
    0x94: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,H`,
        execute: cpu => {
            cpu.state.a -= cpu.state.h
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },
    0x95: {
        bytes: 1,
        text: (byteArray, offset) => `SUB A,L`,
        execute: cpu => {
            cpu.state.a -= cpu.state.l
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
        }
    },
    0xa7: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,A`,
        execute: cpu => {
            cpu.state.a &= cpu.state.a
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa0: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,B`,
        execute: cpu => {
            cpu.state.a &= cpu.state.b
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa1: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,C`,
        execute: cpu => {
            cpu.state.a &= cpu.state.c
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa2: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,D`,
        execute: cpu => {
            cpu.state.a &= cpu.state.d
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa3: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,E`,
        execute: cpu => {
            cpu.state.a &= cpu.state.e
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa4: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,H`,
        execute: cpu => {
            cpu.state.a &= cpu.state.h
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa5: {
        bytes: 1,
        text: (byteArray, offset) => `AND A,L`,
        execute: cpu => {
            cpu.state.a &= cpu.state.l
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xaf: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,A`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.a
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa8: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,B`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.b
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xa9: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,C`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.c
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xaa: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,D`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.d
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xab: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,E`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.e
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xac: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,H`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.h
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xad: {
        bytes: 1,
        text: (byteArray, offset) => `XOR A,L`,
        execute: cpu => {
            cpu.state.a ^= cpu.state.l
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb7: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,A`,
        execute: cpu => {
            cpu.state.a |= cpu.state.a
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb0: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,B`,
        execute: cpu => {
            cpu.state.a |= cpu.state.b
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb1: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,C`,
        execute: cpu => {
            cpu.state.a |= cpu.state.c
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb2: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,D`,
        execute: cpu => {
            cpu.state.a |= cpu.state.d
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb3: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,E`,
        execute: cpu => {
            cpu.state.a |= cpu.state.e
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb4: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,H`,
        execute: cpu => {
            cpu.state.a |= cpu.state.h
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0xb5: {
        bytes: 1,
        text: (byteArray, offset) => `OR A,L`,
        execute: cpu => {
            cpu.state.a |= cpu.state.l
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.h = 0
            cpu.flags.n = 0
            cpu.flags.c = 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
        }
    },
    0x3c: {
        bytes: 1,
        text: (byteArray, offset) => `INC A`,
        execute: cpu => {
            cpu.state.a += 1
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x04: {
        bytes: 1,
        text: (byteArray, offset) => `INC B`,
        execute: cpu => {
            cpu.state.b += 1
            cpu.flags.s = bitTest(cpu.state.b, 7) ? 1 : 0
            cpu.flags.z = cpu.state.b === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.b) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x0c: {
        bytes: 1,
        text: (byteArray, offset) => `INC C`,
        execute: cpu => {
            cpu.state.c += 1
            cpu.flags.s = bitTest(cpu.state.c, 7) ? 1 : 0
            cpu.flags.z = cpu.state.c === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.c) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x14: {
        bytes: 1,
        text: (byteArray, offset) => `INC D`,
        execute: cpu => {
            cpu.state.d += 1
            cpu.flags.s = bitTest(cpu.state.d, 7) ? 1 : 0
            cpu.flags.z = cpu.state.d === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.d) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x1c: {
        bytes: 1,
        text: (byteArray, offset) => `INC E`,
        execute: cpu => {
            cpu.state.e += 1
            cpu.flags.s = bitTest(cpu.state.e, 7) ? 1 : 0
            cpu.flags.z = cpu.state.e === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.e) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x24: {
        bytes: 1,
        text: (byteArray, offset) => `INC H`,
        execute: cpu => {
            cpu.state.h += 1
            cpu.flags.s = bitTest(cpu.state.h, 7) ? 1 : 0
            cpu.flags.z = cpu.state.h === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.h) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x2c: {
        bytes: 1,
        text: (byteArray, offset) => `INC L`,
        execute: cpu => {
            cpu.state.l += 1
            cpu.flags.s = bitTest(cpu.state.l, 7) ? 1 : 0
            cpu.flags.z = cpu.state.l === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.l) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x3d: {
        bytes: 1,
        text: (byteArray, offset) => `DEC A`,
        execute: cpu => {
            cpu.state.a -= cpu.state.a
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x05: {
        bytes: 1,
        text: (byteArray, offset) => `DEC B`,
        execute: cpu => {
            cpu.state.a -= cpu.state.b
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x0d: {
        bytes: 1,
        text: (byteArray, offset) => `DEC C`,
        execute: cpu => {
            cpu.state.a -= cpu.state.c
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x15: {
        bytes: 1,
        text: (byteArray, offset) => `DEC D`,
        execute: cpu => {
            cpu.state.a -= cpu.state.d
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x1d: {
        bytes: 1,
        text: (byteArray, offset) => `DEC E`,
        execute: cpu => {
            cpu.state.a -= cpu.state.e
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x25: {
        bytes: 1,
        text: (byteArray, offset) => `DEC H`,
        execute: cpu => {
            cpu.state.a -= cpu.state.h
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x2d: {
        bytes: 1,
        text: (byteArray, offset) => `DEC L`,
        execute: cpu => {
            cpu.state.a -= cpu.state.l
            cpu.flags.s = bitTest(cpu.state.a, 7) ? 1 : 0
            cpu.flags.z = cpu.state.a === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.a) ? 1 : 0
            cpu.flags.n = 0
        }
    },
    0x0b: {
        bytes: 1,
        text: (byteArray, offset) => `DEC BC`,
        execute: cpu => {
            const value = ((cpu.state.c << 8) | cpu.state.b) - 1
            cpu.state.c = (value >> 8) & 0xff
            cpu.state.b = value & 0xff
            cpu.flags.s = bitTest(value, 7) ? 1 : 0
            cpu.flags.z = value === 0 ? 1 : 0
            cpu.flags.pv = pairity(value) ? 1 : 0
        }
    },
    0x1b: {
        bytes: 1,
        text: (byteArray, offset) => `DEC DE`,
        execute: cpu => {
            const value = ((cpu.state.e << 8) | cpu.state.d) - 1
            cpu.state.e = (value >> 8) & 0xff
            cpu.state.d = value & 0xff
            cpu.flags.s = bitTest(value, 7) ? 1 : 0
            cpu.flags.z = value === 0 ? 1 : 0
            cpu.flags.pv = pairity(value) ? 1 : 0
        }
    },
    0x2b: {
        bytes: 1,
        text: (byteArray, offset) => `DEC HL`,
        execute: cpu => {
            const value = ((cpu.state.l << 8) | cpu.state.h) - 1
            cpu.state.l = (value >> 8) & 0xff
            cpu.state.h = value & 0xff
            cpu.flags.s = bitTest(value, 7) ? 1 : 0
            cpu.flags.z = value === 0 ? 1 : 0
            cpu.flags.pv = pairity(value) ? 1 : 0
        }
    },
    0x3b: {
        bytes: 1,
        text: (byteArray, offset) => `DEC SP`,
        execute: cpu => {
            cpu.state.sp -= 1
            cpu.flags.s = bitTest(cpu.state.sp, 7) ? 1 : 0
            cpu.flags.z = cpu.state.sp === 0 ? 1 : 0
            cpu.flags.pv = pairity(cpu.state.sp) ? 1 : 0
        }
    },
}