function explode(str, maxLength) {
    var buff = "";
    var numOfLines = Math.floor(str.length / maxLength);
    for (var i = 0; i < numOfLines + 1; i++) {
        buff += str.substr(i * maxLength, maxLength);
        if (i !== numOfLines) { buff += "\n"; }
    }
    return buff;
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

const emojiResults = (carbonFootprintInKg) => {
    const score = (carbonFootprintInKg / 15) * 30;
    let emojiString = "";
    for (let i = 0; i < score; i++) {
        emojiString += "s";
    }
    for (let i = 0; i < 30 - score; i++) {
        emojiString += "f";
    }
    return replaceAll(replaceAll(explode(emojiString, 5), "s", "🌞"), "f", "🏭");
}

console.log(emojiResults(13));