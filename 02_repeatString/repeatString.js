const repeatString = function(word, times) {
    if(times<0) return "Error";
    sentence = "";
    for(count = 0; count < times; count++) {
        sentence += word;
    }
    return sentence;
};

console.log(repeatString("hey", 3));

// Do not edit below this line
module.exports = repeatString;
