/*write a conditional statement to check if a letter is even or odd*/ 
// let num = 7;
// if(num % 2 === 0){
//     console.log("Its an even number");
// }else{
//     console.log("Its an odd number");
    
// }

/*write a conditional statement to check if a letter is a vowel or  not*/

// let alph = "k" 
// if (alph==="a" || alph==="e" || alph==="i"|| alph==="o" || alph==="u") {
//     console.log("Its a vowel"); 
// }else{
//     console.log("Its a consonant");  
// }

/*write a conditional statement to if a number is positive,negative or zero*/

// let num = 0
// if (num>0){
//     console.log("Its positive");
    
// }else if(num<0){
//     console.log("Its negative");
    
// }else{
//     console.log(0);
// }

/*write a conditional statement to check if a number is divisible by 3 and 5*/

// let num = 20
// if (num % 3===0 && num % 5===0) {
//     console.log("It can be divided");
     
// }else{
//     console.log("Its cannot be divided");
// }





// let num = 15;
// if(num%3===0 && num%5===0) {
//     console.log("It can be divided")
// }else{
//     console.log("It cannot be divided")
// } 


// let num = 123;
// let newNum = num.toString();
// console.log(newNum);
// console.log(typeof(newNum));

// let bool = true;
// let newValue = String(bool);
// console.log(newValue);
// console.log(typeof(newValue));

// let gender = "Male"
// let name = "Goodluck"
// let message = `Goode morning ${name}`
// console.log(message);

// let num = 35
// let newNum = num++
// console.log(num);

// for(i=0;i<101;i++){
//     console.log(i);
    
// }


// for(i=0;i<=20;i++){
    
//     if(i%2===0){
//         console.log(i);   
//     }
// }


// let str = "Biology"
// let newStr = str.length
// console.log(newStr);

// let str = "tommyson"
// for(i=0;i<str.length;i++){

//     if(str[i]==="a" || str[i]==="e" || str[i]==="i" || str[i]==="o" || str[i]==="u"){
//         console.log(str[i]);
        
//     }
    
// }


// let sub = "biology";
// for (i=0;i<sub.length;i++){
    
//    if(i%2===0){
//     console.log(sub.charAt(i).toUpperCase(i))
    
//    }else if(i%2!==0){
//     console.log(sub.charAt(i));
    
//    }
   
    
// };

// let str = "apple does not fall far from the tree";
// let firstChar = str[0].toUpperCase();
// console.log(firstChar);
// for( let i=0;i<str.length;i++){
//     if(str[i-1] === " "){
//         console.log(str[i].toUpperCase());
//     }
// }




// let str = 'Community';
// let vowelCount = 0;
// let consonants = 0;
// let vowels='aeiou';
// for(i=0;i<str.length;i++){
//     if(vowels.includes(str[i])){
//         vowelCount++
//     }else{
//         consonants++;
//     }

// }
//     console.log(vowelCount);
//     console.log(consonants);
  


// let word = [1,2,3,4,5]
// for(i=0;i<word.length;i++){
//     console.log(i);
    
// }
    
// let arr = [1,2,3,4,5,6,7,8,9,10]
// for(i=0;i<arr.length;i++){
//     if(arr[i]%2===0){
//         console.log(arr[i]);
//     }
// }
// for(i=0;i<arr.length;i++){
//     console.log(arr[i]*arr[i]);
// }



// let arr = [1,9,12,-0,2];
// let arr2 = arr.sort((a,b)=>a-b);
// console.log(arr2[arr2.length-1]);

// let num = [3,15,30,10,75];
// for(i=0;i<num.length;i++){
//     if(num[i]%3===0){
//         console.log('Fizz');
//     }else if(num[i]%5===0){
//         console.log('Buzz');
//     }

// }




// function sumNumsArr(numsArr){
//     let sumOfNumsArr = 0;
//     for(i=0;i < numsArr.length;i++){
//         sumOfNumsArr += numsArr[i]
//     }
//     return sumOfNumsArr;
// }
// console.log(sumNumsArr([1,2,3]));


// function allVowels(str){
//     let vowelCount = 0;
//     let vowels='aeiou';
//     for(i=0;i<str.length;i++){
//      if(vowels.includes(str[i])){
//         vowelCount++
//      }
//     }
//     return vowelCount;
// }
// console.log(allVowels('confussion'));

/*number3*/
//  function sumNum(numbers){
//     let sumOfNums = 0;
//     for(i=0;i<numbers.length;i++){
//         if(i%2 !==0){
//             sumOfNums += numbers[i]
//         }
//     }
//     return sumOfNums
//  } 
//  console.log(sumNum([1,2,3,4,5,6,7,8,9,10]));

//  /*number4*/
//  function mul(arr){
//     let sumNum = 0;
//     for(i=0;i<arr.length;i++){
//         if(arr[i]%3===0 && arr[i]%5===0){
//             sumNum += arr[i]
//         }
//     }
//     return sumNum
//  }
//  console.log(mul([3,15,45,75]));
 
 

//  /*number5*/
//  function great(str){
//     let vowelCount = 0;
//     let consonants = 0;
//     let ans1 = "consonant wins"
//     let ans2 = "vowel wins"
//     let ans3 = "draw"
//     for(i=0;i<str.length;i++){
//         if(str[i] == "a"|| str[i] == "e"|| str[i] == "i"||str[i] == "o"|| str[i] == "u"){
//         vowelCount++
//         }else if(str[i] !="a"|| str[i] !="e"|| str[i] !="i"|| str[i] !="o"|| str[i] !="u" ){
//         consonants++
//     }
// }
//         if(consonants > vowelCount){
//         return ans1
//         }else if(consonants < vowelCount){
//         return ans2
//         }else{
//         return ans3
//         }
// }
//  console.log(great("dear"));
 
   


// for(i=0;i<word.length;i++){
//     console.log(word[i]);
//     if( )
// };

// let arr = word.split("");
// console.log(arr);
// for(i=0;i<arr.length;i++){
//     total++
// };
// console.log(total);
// let word = "Biology";
// let total = 0;
// let consonants = 0;
// let vowels = 0;
// let ans1 = 'consonant wins';
// let ans2 = 'vowel wins';
// let ans3 = 'draw';

// for(i=0;i<word.length;i++){
//     if(word[i] == "a"|| word[i] == "e"|| word[i] == "i"|| word[i] == "o"|| word[i] == "u"){
//             vowelCount++
//     }else if(word[i] !="a"|| word[i] !="e"|| word[i] !="i"|| word[i] !="o"|| word[i] !="u" ){
//             consonants++
// }
// };

// if(consonants > vowelCount){
//         console.log(ans1);
//     }else if(consonants < vowelCount){
//         console.log(ans2);
//     }else{
//         console.log(ans3);
        
//     }



 









 
