const pairity = byte => (byte.toString(2).match(/1/g) || []).length % 2 == 0 ? 1 : 0
const bitTest = (byte, bit) => ((byte>>bit) % 2 != 0)
const setBit = (byte, bit) => byte |= (1 << bit)
const resetBit = (byte, bit) => byte &= ~(1 << bit)
const invert = (v, d = 8) => {
    return ~v & (Math.pow(2, d) - 1);
}
const twosComplement = byte => {
    if (byte >= 128) { // TODO: lrn2js2scomplement scrub
        byte -= 128
        byte *= -1
    }

    return byte
}

export {
    pairity,
    bitTest,
    setBit,
    resetBit,
    twosComplement,
    invert
}