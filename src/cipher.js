function cipher(msg, offset) {

    const msgLength = msg.length;
    let msgLetters = msg.split('');
    
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    const alphaLength = alpha.length;
    const alphaLetters = alpha.split('');

    const alphaUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphaUpLetters = alphaUp.split('');

    for (var seat = 0; seat <= msgLength; seat++) {
        let alphaSeat = alphaLetters.indexOf(msgLetters[seat]);
        let alphaUpSeat = alphaUpLetters.indexOf(msgLetters[seat]);

        if (alphaSeat !== -1 && (alphaSeat + offset) < alphaLength) {
            msgLetters[seat] = alphaLetters[(alphaSeat) + offset];

        } else if (alphaSeat !== -1 && (alphaSeat + offset) >= alphaLength) {
            msgLetters[seat] = alphaLetters[(alphaSeat) + (offset - alphaLength)];

        } else if (alphaUpSeat !== -1 && (alphaUpSeat + offset) < alphaLength) {
            msgLetters[seat] = alphaUpLetters[(alphaUpSeat) + offset];

        } else if (alphaUpSeat !== -1 && (alphaUpSeat + offset) >= alphaLength) {
            msgLetters[seat] = alphaUpLetters[(alphaUpSeat) + (offset - alphaLength)];
        }
    }
    return msgLetters.join('');
}

export default cipher;