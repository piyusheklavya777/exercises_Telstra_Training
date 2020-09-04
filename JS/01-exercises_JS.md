# Exercises

## JavaScript (Pre-requisites)

1. Use a while loop to print the first 10 numbers in the following sequence
1, 2, 4, 8, 16, 32, 64, ..., 2^(n - 1), ...

2. Use a for loop to print the first 10 numbers in the following sequence
1, 2, 4, 8, 16, 32, 64, ..., 2^(n - 1), ...

3. Use for loops to print the following  
1  
1 2  
1 2 3  
1 2 3 4  
1 2 3 4 5 
_Hint_: Since console.log() prints a newline character at the end you will need to concatenate values before printing a line  

4. Use for loops to print the following  
1  
2 3  
4 5 6  
7 8 9 10  
11 12 13 14 15  

5. Create an array with a few numbers (at least 4). Now,
* Print the length of the array (number of items in the array).
* Increment the value of the first item
* Re-assign the value of the last item to the sum of the last 2 items. 
* Add another number after the end of the array
_Example_: If the array is [ 1, 3, 5, 7 ] and you need to add 9, it is added to the end of the array, and the array becomes [ 1, 3, 5, 7, 9 ]
* Declare a new array that is empty (has no items). Use a for loop to copy the array items into the new array.

6. Write a for loop that calculates sum of items in an array of numbers.
_Example_: For array [ 1, 2, 3, 4 ] it calculates the sum as 10

7. Write a for loop that calculates sum of squares of items in an array of numbers.
_Example_: For array [ 1, 2, 3, 4 ] it calculates the sum of squares as 30 (i.e. 1 + 4 + 9 + 16)

8. Write a for loop that creates a new array with squares of numbers in a supplied array.
_Example_: Supplied array is [ 1, 2, 3, 4 ]. You should generate a new array [ 1, 4, 9, 16 ] from it.

9. Write a function square() that returns the square of a number passed to it. Use function declaration syntax to declare the function.  
_Example_: 
```
console.log( square( 3 ) ); // prints 9
```

10. Write a function that logs "Good morning", "Good afternoon", "Good evening", or "Good night" based on the hour of the day, and call it.
* 5 <= hour < 12: "Good morning"
* 12 <= hour < 16: "Good afternoon"
* 16 <= hour < 20: "Good evening"
* Otherwise, "Good night"  
__Note__: The hour can be obtained by using this statement
```
var hour = (new Date()).getHours()
```

11. Write a function _sumArray_ that calculates and returns the sum of items in an array of numbers that is passed to it, and call it like so.
```
var result = sumArray( [ 1, 2, 3, 4 ] );
console.log( result ); // prints 10
```

12. Write a function _sumSquares_ that creates a new array with squares of numbers in the array passed to it, and call it like so.
```
var result = sumSquares( [ 1, 2, 3, 4 ] );
console.log( result ); // prints 30
```

13. Write a function _contains_ that accepts an array, and a number and returns true if the number appears in the array, and false otherwise. Use function expression syntax to delcare the function.
```
console.log( contains( [ 1, 2, 3, 4 ], 3 ) ); // prints true
console.log( contains( [ 1, 2, 3, 4 ], 5 ) ); // prints false
```

14. Write a function that accepts another function and calls the accepted function.

15. Write a function _sum_ that accepts 2 numbers (say _x_ and _y_) and another function (say, _transform_) as arguments. The transform function should be a function that accepts a number and returns another number - for example, a function _square_ that accepts a number and returns the square of a number. The sum() function applies the transform function on each of each and y and returns the sum of the results of calling transform - for example, sum() would return x^2 + y^2 if called as sum( x, y, square );  
_Example_:
```
function square( x ) { return x * x };

function cube( x ) { return x * x * x };

console.log( sum( 2, 3, square ) ); // prints 13
console.log( sum( 2, 3, cube ) ); // prints 35
```

16. Write a function _sumArray_ that works like so.
```
console.log( sumArray( [ 1, 2, 3 ], square ) ); // prints 14
console.log( sumArray( [ 1, 2, 3 ], cube ) ); // prints 36
```

17. Write a function _exponentFactory_ that accepts a number, say x. Define 2 functions _square_ and _cube_ within it (which accept a number each, and return the square and cube respectively). If x is 2, exponentFactory returns the square function, if 3 it returns the cube function. For any other input it returns a function that returns the number it accepts as such. Call the exponentFactory() function and then the returned function, and log the result.  
_Example_:
```
var fn;

fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;

fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;

fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;
```

18. Write a function _addTo_ that accepts a number x. addTo() returns a function that accepts a number y and returns the sum of x and y. Call the addTo() function few times, and then the returned function, and log the result.  
_Example_:
```
var addTo10 = addTo( 10 );
console.log( addTo10( 5 ) ); // prints 15
console.log( addTo10( 7 ) ); // prints 17

var addTo20 = addTo( 20 );
console.log( addTo20( 5 ) ); // prints 25
console.log( addTo20( 7 ) ); // prints 27
```

19. Create 2 objects (that represents 2 persons, say John and Jane), each with 2 properties - name (a string), and age (a number).
* Print John's age.
* Increase Jane's age and print the Jane object.
* Add an address property to John and set it to an object with "first line" and "city" as properties (the values for these properties also need to be set).
* Print John's city name
* Add a new property spouseName to each object. Set John's spouseName property to Jane object, and Jane's spouseName property to John object
* Add an emailids property to Jane. Set it to an array with 2 strings representing Jane's email ids.
* Print the second email id of Jane.
* Change the second email id of Jane and print it.
* Add a third email id for Jane and print the Jane object.
* Add a method celebrateBirthday() on John that adds 1 to the John's age. Call it on John to increase John's age.
* Add a method celebrateBirthday() on Jane that adds 1 to the Jane's age. Call it on Jane to increase Jane's age.
* Wouldn't it be nice to have a single celebrateBirthday() method shared by both John and Jane objects? Declare celebrateBirthday() as a global function and set it up as a method on both John and Jane objects. Call it to check it increases the age.

20. Create a movie object that represents details of your favorite movie. Suggested information to have in the object - name, cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast member's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to the current boxOfficeCollection.

21. Declare a function _foo_ and log its context.
* Use bind() to create a new function where the context is the object { x: 1 } instead
* Call the bound function

22. Declare a function _sum_ that accepts 2 numbers _x_ and _y_, and returns their sum.
* Use bind() to create a new function where x is bound to 10, and the context is unchanged. Call the bound function with a value for y, and log the result.
* Use bind() to create a new function where x is bound to 10, and y to 20 (context is unchanged). Call the bound function, and log the result.

23. Given the following snippet of code, solve the questions that follow.
```
var numbers = [ 5, 11, 13, 7, 2, 31, 3, 19, 23, 17, 29 ];
```
* Sort the numbers in the array in increasing order and print the array
* Sort the array in decreasing order and print the array
* Add the number 37 to the end of the array using push()
* Remove the last 2 numbers in the array
* Remove the numbers at indices 3, 4 (i.e. the 4th and 5th numbers) and insert the strings 'Seven' and 'Eleven' in their place.
* Use indexOf() to check if 23 belongs to the array or not. Also, check if 41 belongs to the array or not.

24. Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map)
```
var days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ];
```
* Print the name of each item in the array
* Create a new array with the number of letters in each day (example, Sunday has 6 letters). Thus the new array that should be generated would be [ 6, 6, 7, 9, 8, 6, 8 ]
* Create a new array with the days that begin with letters S - Z. Thus the new array that should be generated would be [ 'Sunday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday' ]
* Create a new array with days that have exactly 6 letters. Thus the new array that should be generated would be [ 'Sunday', 'Monday', 'Friday' ]


25. Given the following array, solve the questions that follow using appropriate array iterator methods (forEach, find, filter, map)
```
var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung' },
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];
```
* Create a new array with the name of each phone. Thus the new array that should be generated would be [ 'Samsung Galaxy S10+ Plus', 'Apple iPhone 7 Plus', ... ]
* Create a new array with objects representing new phones
* Find all the phones whose price is less than $440 and print them.

26. Given the following string, solve the questions that follow.
```
var quote = 'With great power comes great responsibility';
```
* Create a string from the given string (quote) by replacing 'responsibility' with 'electricity bill'
* Print the index of the first occurence of the word 'great'
* Print the first 10 letters of the string

27. Create an HTML page with 3 paragraphs (give each a unique id). Now do the following by manipulating the DOM via JavaScript.
* Create a new paragraph with some text within, and add it before the first paragraph.
* Create a new paragraph with some text within, and add it to the end of the document body
* Print the HTML within the second paragraph to the console
* Replace the contents of the second paragraph with 2 spans, each with some text
* Print the id of the second paragraph
* Change the id of the second paragraph
* Set the name attribute for the second paragraph to some value. Use setAttribute() to do so.
* Set styles for the third paragraph and turn it to crimson color background with white colored text
* Define a class in CSS that sets a black border, small padding and olive colored text. Add the class to the last paragraph.

28. Create an HTML page with a paragraph, a form with text input (with minlength set to 8) and a submit button. Now do the following.
* Set up an event handler that shows an alert dialog with text of the paragraph when it is clicked
* Set up an event handler that turns the background color of the input to lightgreen when the number of characters within the input is 8 or more (this happens as the user types)
* Set up an event handler that prevents form submission when the submit button is clicked. It then checks to see if number of characters within the input is at least 8. If so, it submits the forms. Else, an appropriate error message is displayed below the input.

29. Create a Bootstrap-like panel component with a header and body. Give it appropriate styles using CSS.
* Set up an event handler so that the panel body toggles (opens/closes) when the header is clicked
* Add more such panels to your page and make sure clicking a panel's header toggles only that panel's body
* Create a function that accepts a panel DOM node and turns it into a toggleable panel
_Reference_: https://getbootstrap.com/docs/3.4/javascript/#collapse-example-accordion  

30. Create a page with 2 inputs (both accepting number), button, and a span (initially empty).
* When the button is clicked, the two numbers within the input are added and displayed inside the span
* Now add a dropdown (select input) with options +, -, *, / (default selection is +). When user select an option, the contents of the span change to reflect the result of the new operation.

31. Within an HTML page, write a script to fetch data about things to do from https://jsonplaceholder.typicode.com/todos. Display the results in a list in the page. Make sure to display an error message in the same page in case of any errors.

32. Within an HTML page, write a script to fetch data about products from https://awesome-store-server.herokuapp.com/products. Display the results in a card layout (gallery). The image of the product should be placed on top every card. Make sure to display an error message in the same page in case of any errors.

33. Create an object vehicle with name (string), averageSpeed (number) and type (string with value "air" | "water" | "land"). Create 2 other objects - car, aeroplane, with vehicle as their prototype. Add engineCapacity, typeOfFuel to each and set them. To the car object, add numAirbags. To the aeroplane add thrust.

## ES2015

34. When will you use an arrow function?

35. When will you NOT use an arrow function?

36. Write a function _sum_ that calculates and returns the sum of arguments (assume all arguments are numbers) passed to it, and call it like so. Use a rest parameter to implement this. 
```
var result = sum( 1, 2, 3, 4 );
console.log( result ); // prints 10

var result = sum( 1, 2, 3, 4, 5  );
console.log( result ); // prints 15
```

37. The following snippet tries to set new salaries for employees. However it does not work as intended. Why? Debug the code by setting breakpoints and stepping through function calls. Correct it using an appropriate arrow function definition.
```
const payroll = {
    employees: [
        { name: 'John', dept: 'IT', salary: 1000 },
        { name: 'Maria', dept: 'Finance', salary: 2000 },
        { name: 'David', dept: 'Finance', salary: 3000 }
    ],
    hikePercentage: {
        IT : 10,
        Finance: 20
    },
    raise: function() {
        this.employees.forEach(function ( employee ) {
            const dept = employee.dept;

            const salary = employee.salary;
            const hikePercentage = this.hikePercentage[dept];
            
            employee.salary = ( ( 100 + hikePercentage ) / 100 ) * salary;
        });
    }
}

payroll.raise();
console.log( payroll.employees );
```

38. Create a Movie class that represents details of a movie. Suggested information to have in an object of the class - name, cast (an array of strings with cast member's names), yearOfRelease, boxOfficeCollection, addToCast( newMember ) that accepts a new cast member's name and adds to the cast array, addToCollection( amount ) that accepts box office collections for a week and adds it to the current boxOfficeCollection. Create 2 objects of this class that represent any 2 movies. Call the methods addToCast() and addToCollection() and verify they work according to expectations.

38b. Create a SequelMovie class that inherits from Movie class. SequelMovie has an additional property called earlierMovies - an array of Movie objects. It has an additional method called getLifetimeEarnings() that returns the sum of boxOfficeCollection of all earlier movies along with the SequelMovie object's boxOfficeCollection.

39. Define a Project class with id (number), name (string), client (string). Define some Project objects (suggest using sample data below).  
```
const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
```  

40. Define an Employee class with id (number), name (string), role (string), department (string), projects (array of Projects). Define some Employee objects (suggest using sample data below).  
```
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ] );
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [ intranetDeployment ] );
```  

41. Define Project and Employee classes in separate modules (as default exports in those modules). Create another module that creates an array of projects, and an array of employee objects, and exports these (as named exports). Create an HTML page that imports projects and employees and shows the list of projects and employees in 2 separate tables.

42. Given the following APIs
* Retrieve users with a particular username (in the example below, username is Bret)
```
https://jsonplaceholder.typicode.com/users?username=Bret
```
* Retrieve posts by a user with given id (in the example below, user id is 1)
```
https://jsonplaceholder.typicode.com/users/1/posts'
```
* Retrieve comments for post with given id (in the example below, post id is 1)
```
https://jsonplaceholder.typicode.com/comments?postId=1
```
Write a function that accepts the username and returns a promise that resolves with the email ids of people who have commented on the first post of the first user matching the given username.
```
function getCommentersEmailIds( username ) {
}
```
For example, if username = Bret, then first user matching username Bret has id = 1 (user whose name is "Leanne Graham" and username is "Bret"). The first post by this user has id = 1. The list of people who commented on this post are [ "Eliseo@gardner.biz", "Jayne_Kuhic@sydney.com", "Nikita@garfield.biz", "Lew@alysha.tv", "Hayden@althea.biz" ]  

Test your function out, for example by passing username as 'Bret'

43. Rewrite the exercise in the previous function using async-await.

44. Use array and object destructuring feature to create variable that hold values as shown below.
```
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

// create the variables using destructuring - the variables should have values as shown below.
// destructure here...

// below line logs - iPhone 11   Apple   128   12 MP Ultra Wide   Green
console.log( name, brand, ram, rearCamera, secondColor );
```

45. Write a standalone function ```printPhoneDetails``` that prints a description of the phone with discounted price as in an earlier exercise. The function is passed the iPhone11 object but it destructures to create only the required variables when accepting the object as argument.
```
<!-- iPhone11.calculateDiscoutedPrice = iPhone11.calculateDiscoutedPrice.bind( iPhone11 ) -->
printPhoneDetails.call( iPhone11 ); // Logs "Apple iPhone11 is available at a 10% discounted rate of $629.1"
```
__NOTE__: You must use destructuring when accepting the argument.

46. Write  function ```max``` that can accept any number of arguments (assume all numbers) and returns the maximum of the numbers. Make use of the rest operator to group the arguments into an array before finding and returning the maximum.
```
max( 25, 65, 35, 45 ); // 65
max( 25, 65, 35, 75, 45 ); // 75
```

47. Use the spread operator, along with the max function, to find the maximum of values in this array.
```
const numbers = [ 25, 65, 35, 75, 45 ];
```

48. Use object spread to make a shallow copy of the following object.
* Again, use array and object spread (as required) to create a deep copy of the object.  
* Test out if making a change to name and front camera deftails on the iPhone11 object affects the shallow copy.   
* What about the deep copy? Is it affected?
```
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
    }
}
```