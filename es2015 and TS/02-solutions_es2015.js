//Q1 
function sumfn(...allinArray) {
    let summed=0
    for(let i=0;i<allinArray.length;i++) {
        summed +=allinArray[i];
    } return summed;
}

var result = sumfn( 1, 2, 3, 4 );
console.log( result ); // prints 10

var result = sumfn( 1, 2, 3, 4, 5  );
console.log( result ); // prints 15

// Q6 Q7 of Javascript is same as Q9 Q10 of Typescript solved later in this file.

// iphone11 object given below is used for multiple questions...

const iPhone11 = {
    name: 'iPhone 11',
    manufacturer: 'Apple',
    price: 699,
    specs: {
        color: 'White',
        memory: {
            value: 128,
            unit: 'MB'
        },
        cameras: {
            front: '12 MP Wide',
            rear: '12 MP Ultra Wide'
        },
        availableColors: [ 'Black', 'Green', 'Yellow', 'Purple', 'Red', 'White' ]
    },
    calculateDiscoutedPrice: function( percentage ) {
        return this.price * ( 100 - percentage ) / 100;
    }
}


//Q 44
function destructureFN( {
    name,
    manufacturer : brand,  
    specs: {
        memory : {value : ram}, 
        cameras : { rear : rearCamera },
        availableColors : [, secondColor ]
    }   
} ) {   console.log( name, brand, ram, rearCamera, secondColor );   } //this line is fn body. all above is destructuring

destructureFN(iPhone11);
iPhone11.calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 )

//Q 45
function printPhoneDetails ({price, calculateDiscoutedPrice}) {

    let discprice = iPhone11.calculateDiscoutedPrice(10);
    let str = `iPhone 11 sells at ${discprice}`;

    console.log(discprice);
}
printPhoneDetails(iPhone11);

//Q46
function max(...allinArray) {
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0;i<allinArray.length;i++) {
        if(max<allinArray[i]) max = allinArray[i];
    } return max;
}
let res=[] 
res[0]= max( 25, 65, 35, 45 ); // 65
res[1]= max( 25, 65, 35, 75, 45 ); // 75

console.log(res);

//Q 47
function maxval(numbers) {
    console.log ( Math.max(...numbers) )
}

const numbers = [ 25, 65, 35, 75, 45 ];
maxval(numbers);

// in 01-exercises.md refer to line 160 for Questions on Typescript - 1 to 10. Following code must be kept in .ts file and
//tsconfig file should be created in the same directory with package.json. 


