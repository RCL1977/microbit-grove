namespace MyGrove {
    function lcdWriteRegister(reg: number, val: number) {
        let lcdAddr = 0x3e
        let cmd = (reg << 8) | val
        pins.i2cWriteNumber(lcdAddr, cmd, NumberFormat.UInt16BE)
    }

    //% block="initialize"
    export function lcdInit() {
        basic.pause(30)
        lcdWriteRegister(0x80, 0x20)
        basic.pause(1);
        lcdWriteRegister(0x80, 0x0c)
        basic.pause(1)
        lcdClearScreen()
    }

    //% block="clear screen"
    export function lcdClearScreen() {
        lcdWriteRegister(0x80, 0x01)
        basic.pause(2)
    }

    //% block="Show string |%text|"
    export function lcdWriteText(text: string) {
        for (let index = 0; index <= text.length; index++) {
            lcdWriteRegister(0x40, text.charCodeAt(index))
        }
    }
}
basic.forever(function () {
	
})
