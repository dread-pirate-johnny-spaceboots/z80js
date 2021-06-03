class Databus {
    constructor() {
        this.devices = {}
    }

    register(device, index) {
        this.devices[index] = device 
    }

    getByte(deviceIndex) {
        return this.devices[deviceIndex].getByte()
    }
}

export default Databus