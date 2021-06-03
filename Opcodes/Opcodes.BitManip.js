import CPU from "../CPU"
import { 
    pairity,
    bitTest,
    setBit,
    resetBit
 } from '../Utils'

export default {
    0xcb47: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb4f: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb57: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb5f: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb67: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb6f: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb77: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb7f: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,A`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.a, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb40: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb48: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb50: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb58: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb60: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb68: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb70: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb78: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,B`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.b, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb41: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb49: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb51: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb59: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb61: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb69: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb71: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb79: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,C`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.c, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb42: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb4a: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb52: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb5a: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb62: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb6a: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb72: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb7a: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,D`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.d, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb43: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb4b: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb53: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb5b: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb63: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb6b: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb73: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb7b: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,E`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.e, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb44: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb4c: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb54: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb5c: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb64: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb6c: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb74: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb7c: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,H`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.h, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb45: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 0,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 0) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb4d: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 1,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 1) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb55: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 2,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 2) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb5d: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 3,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 3) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb65: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 4,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 4) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb6d: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 5,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 5) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb75: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 6,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 6) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },
    0xcb7d: {
        bytes: 2,
        text: (byteArray, offset) => `BIT 7,L`,
        execute: cpu => {
            cpu.flags.z = bitTest(cpu.state.l, 7) == false ? 1 : 0
            cpu.flags.h = 1
            cpu.flags.n = 0
        }
    },

    0xcb87: {
        bytes: 2,
        text: (byteArray, offset) => `RES 0,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 0)
        }
    },
    0xcb8f: {
        bytes: 2,
        text: (byteArray, offset) => `RES 1,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 1)
        }
    },
    0xcb97: {
        bytes: 2,
        text: (byteArray, offset) => `RES 2,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 2)
        }
    },
    0xcb9f: {
        bytes: 2,
        text: (byteArray, offset) => `RES 3,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 3)
        }
    },
    0xcba7: {
        bytes: 2,
        text: (byteArray, offset) => `RES 4,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 4)
        }
    },
    0xcbaf: {
        bytes: 2,
        text: (byteArray, offset) => `RES 5,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 5)
        }
    },
    0xcbb7: {
        bytes: 2,
        text: (byteArray, offset) => `RES 6,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 6)
        }
    },
    0xcbbf: {
        bytes: 2,
        text: (byteArray, offset) => `RES 7,A`,
        execute: cpu => {
            cpu.state.a = resetBit(cpu.state.a, 7)
        }
    },
    0xcb80: {
        bytes: 2,
        text: (byteArray, offset) => `RES 0,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 0)
        }
    },
    0xcb88: {
        bytes: 2,
        text: (byteArray, offset) => `RES 1,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 1)
        }
    },
    0xcb90: {
        bytes: 2,
        text: (byteArray, offset) => `RES 2,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 2)
        }
    },
    0xcb98: {
        bytes: 2,
        text: (byteArray, offset) => `RES 3,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 3)
        }
    },
    0xcba0: {
        bytes: 2,
        text: (byteArray, offset) => `RES 4,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 4)
        }
    },
    0xcba8: {
        bytes: 2,
        text: (byteArray, offset) => `RES 5,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 5)
        }
    },
    0xcbb0: {
        bytes: 2,
        text: (byteArray, offset) => `RES 6,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 6)
        }
    },
    0xcbb8: {
        bytes: 2,
        text: (byteArray, offset) => `RES 7,B`,
        execute: cpu => {
            cpu.state.b = resetBit(cpu.state.b, 7)
        }
    },
    0xcb81: {
        bytes: 2,
        text: (byteArray, offset) => `RES 0,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 0)
        }
    },
    0xcb89: {
        bytes: 2,
        text: (byteArray, offset) => `RES 1,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 1)
        }
    },
    0xcb91: {
        bytes: 2,
        text: (byteArray, offset) => `RES 2,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 2)
        }
    },
    0xcb99: {
        bytes: 2,
        text: (byteArray, offset) => `RES 3,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 3)
        }
    },
    0xcba1: {
        bytes: 2,
        text: (byteArray, offset) => `RES 4,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 4)
        }
    },
    0xcba9: {
        bytes: 2,
        text: (byteArray, offset) => `RES 5,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 5)
        }
    },
    0xcbb1: {
        bytes: 2,
        text: (byteArray, offset) => `RES 6,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 6)
        }
    },
    0xcbb9: {
        bytes: 2,
        text: (byteArray, offset) => `RES 7,C`,
        execute: cpu => {
            cpu.state.c = resetBit(cpu.state.c, 7)
        }
    },
    0xcb82: {
        bytes: 2,
        text: (byteArray, offset) => `RES 0,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 0)
        }
    },
    0xcb8a: {
        bytes: 2,
        text: (byteArray, offset) => `RES 1,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 1)
        }
    },
    0xcb92: {
        bytes: 2,
        text: (byteArray, offset) => `RES 2,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 2)
        }
    },
    0xcb9a: {
        bytes: 2,
        text: (byteArray, offset) => `RES 3,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 3)
        }
    },
    0xcba2: {
        bytes: 2,
        text: (byteArray, offset) => `RES 4,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 4)
        }
    },
    0xcbaa: {
        bytes: 2,
        text: (byteArray, offset) => `RES 5,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 5)
        }
    },
    0xcbb2: {
        bytes: 2,
        text: (byteArray, offset) => `RES 6,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 6)
        }
    },
    0xcbba: {
        bytes: 2,
        text: (byteArray, offset) => `RES 7,D`,
        execute: cpu => {
            cpu.state.d = resetBit(cpu.state.d, 7)
        }
    },
}