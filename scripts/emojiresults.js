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

function copyToClipboard(value) {
    navigator.clipboard.writeText(value)
}

const emojiResults = (carbonFootprintInKg) => {
    let emojiString = "";
    for (let i = 0; i < getScore(carbonFootprintInKg); i++) {
        emojiString += "f";
    }
    for (let i = 0; i < 30 - getScore(carbonFootprintInKg); i++) {
        emojiString += "s";
    }
    return replaceAll(replaceAll(explode(emojiString, 5), "s", "🌞"), "f", "🏭");
}

const shareEmojiResults = () => {
    // copy emojiResults to clipboard
    const emojiString = `CarboTrack ${getScore(totalcf)}/30\n${emojiResults(totalcf)}`;
    copyToClipboard(emojiString);

    // share emojiResults
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(emojiString)}`;
    window.open(shareUrl, '_blank');
}

// const setSpanEmojiResults = () => {
//     document.getElementById("em-res").innerHTML = `CarboTrack ${getScore(totalcf)}/30\n${emojiResults(totalcf)}`;
// }