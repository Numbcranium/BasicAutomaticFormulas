



function highestOccur(str) {
    let letterNum = {};
    for (let char of str) {
        if (letterNum[char]) {
            letterNum[char]++;
        } else {
            letterNum[char] = 1;
        }
    }
    let maxNumOccur = 0;
    let maxNum = [];

    for(let char in letterNum) {
        if(letterNum[char] > maxNumOccur) {
            maxNumOccur = letterNum[char];
            maxNum = [char];
        }else if (letterNum[char] === maxNumOccur){
            maxNum.push(char);
        }
    }
    return maxNum;
}
let str1 = 'mississipi';
let highestOccur1 = highestOccur(str1);
console.log(`The highest occuring letter in ${str1} is ${highestOccur1}`);






