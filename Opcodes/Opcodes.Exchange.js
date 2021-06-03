export default {
    0xd9: {
        bytes: 1,
        text: (byteArray, offset) => `EXX`,
        execute: cpu => {
            const b = cpu.state.b
            cpu.state.b = cpu.state.b2
            cpu.state.b2 = b
            const c = cpu.state.c
            cpu.state.c = cpu.state.c2
            cpu.state.c2 = c

            const d = cpu.state.d
            cpu.state.d = cpu.state.d2
            cpu.state.d2 = d
            const e = cpu.state.e
            cpu.state.e = cpu.state.e2
            cpu.state.e2 = e

            const h = cpu.state.h
            cpu.state.h = cpu.state.h2
            cpu.state.h2 = h
            const l = cpu.state.l
            cpu.state.l = cpu.state.l2
            cpu.state.l2 = l
        }
    },
}