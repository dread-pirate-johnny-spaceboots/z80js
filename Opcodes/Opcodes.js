import loadOps from './Opcodes.Load'
import stackOps from './Opcodes.Stack'
import exchangeOps from './Opcodes.Exchange'
import controlOps from './Opcodes.Control'
import logicOps from './Opcodes.Logic'
import ioOps from './Opcodes.IO'
import bitmapOpcodes from './Opcodes.BitManip'

const PrefixOpcodes = [0xED, 0xDD, 0xFD, 0xCB]

export default {
    ...loadOps,
    ...stackOps,
    ...exchangeOps,
    ...controlOps,
    ...logicOps,
    ...ioOps,
    ...bitmapOpcodes
}

export {
    PrefixOpcodes
}