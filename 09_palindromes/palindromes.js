const palindromes = function (str) {
    const regex = /\w/i;
    const filteredArray = str.toLowerCase().split('').filter((char) => regex.test(char));
    return (filteredArray.join('') === filteredArray.reverse().join(''));

};

// Do not edit below this line
module.exports = palindromes;
