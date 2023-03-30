function timeWord(timeStr) { 
    if (timeStr === '00:00') return 'midnight';
    if (timeStr === '12:00') return 'noon';

    const numToStringRef = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
    };

    const minuteStrFunction = (str) => {
        if (str === '00') return "o'clock";
        if (str.charAt(0) === '0') return 'oh ' + numToStringRef[str.charAt(1)];
        if (numToStringRef[str] !== undefined) return numToStringRef[str];
        return (
            numToStringRef[str.charAt(0) + '0'] +
            '-' +
            numToStringRef[str.charAt(1)]
        );
    };

    const [h, m] = timeStr.split(':');
    const period = parseInt(h) > 11 ? 'pm' : 'am';
    const hourString =
        h === '00'
            ? 'twelve'
            : h <= 12
            ? numToStringRef[parseInt(h)]
            : numToStringRef[parseInt(h) - 12];
    const minuteString = minuteStrFunction(m);

    return hourString + ' ' + minuteString + ' ' + period;
}
