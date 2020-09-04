//Q 25 refer to exercisesQ25.html
//Q 27 refer to exercisesQ27.html
//Q 28 refer to exercisesQ28.html output in Q 28.PNG
//Q 29 refer to exercisesQ29.html
//Q30 refer to Q30_code.PNG


 //Q5
 let numarr = [10,20,30,40]
        
 console.log(`Q5 : length is ${numarr.length}`);
 numarr[0]++;
 console.log(`incremented first value`)
 console.log(numarr);
 numarr[numarr.length-1]+=numarr[numarr.length-2]
 console.log(`changed value`)
 console.log(numarr);
 numarr[numarr.length]=80
 console.log(`added value in end`)
 console.log(numarr);

 let numarr2 = [];
 for(let i=0;i<numarr.length;i++)
 { numarr2[i] = numarr[i]; }

 console.log(`copied array by loop`)
 console.log(numarr2);

 //Q6 Q8 Q10
 let sum = 0, sumsq=0;
 for(let i=0;i<numarr.length;i++)
 {
     sum+=numarr[i]
     numarr2[i] = numarr[i]*numarr[i];   

 }
 console.log(`Q6 summed array by loop`)
 console.log(sum);
 console.log(`Q8 Squared array by loop`)
 console.log(numarr2);

 let hr = 13;
 if(hr>=5 && hr<12) console.log('Good Morning');
 else if(hr>=12 && hr<16) console.log('Good afternoon');
 else if(hr>=16 && hr<20) console.log('Good evening');
 else console.log('Good Night');


 //Q12
 function sumsquare(numarr) {
         let sumsq=0;
     for(let i=0;i<numarr.length;i++)
     {
         sumsq+= numarr[i]*numarr[i];

     } return sumsq;
 }

 let ques12 = sumsquare(numarr);
 console.log(`Q12 : summed square of arr ${ques12}`)


 //Q13
 function chk(arr, n) {
     let res = false;
     for(let i=0;i<arr.length;i++)
     {
         if(arr[i]===n) res=true;
     }
     return res;
 }

//Q 25 refer to exercisesQ25.html
//Q 27 refer to exercisesQ27.html
//Q 28 refer to exercisesQ28.html output in Q 28.PNG
//Q 29 refer to exercisesQ29.html

//Q30 refer to Q30_code.PNG