var str = "Naim Sorker";
var reverseString = function (str) {
    var reversedString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    console.log(reversedString);
};
reverseString(str);
