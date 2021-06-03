export default {
    0xdb: {
        bytes: 2,
        text: (byteArray, offset) => `IN A,(#$${byteArray[offset + 1].toString(16)})`,
        execute: cpu => {
            cpu.state.a = cpu.databus.getByte(cpu.memory[cpu.state.pc + 1])
        }
    },
}