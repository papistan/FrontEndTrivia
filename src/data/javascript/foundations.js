export default {
    title: 'Javascript: Foundations',
    image: '../style/images/js.png',
    cards: [
        {
            q: 'What do we call data types copied by VALUE?',
            a: 'Primitives (or primitive types)'
        },
        {
            q: 'What do we call data types copied by REFERENCE?',
            a: 'Objects'
        },
        {
            q: 'What are the six primitives?',
            a: 'Boolean, null, undefined, string, number and symbol'
        },
        {
            q: 'What are the three object data types?',
            a: 'Array, Function, and Object'
        },
        {
            q: 'How can you read properties of an Object in JavaScript?',
            a: 'Using the dot notation or [] − Getting:\nemp.name or emp["name"]  // ==> Zara\nSetting:\nemp.name = "Daisy" or emp["name"] = Daisy  // <== Daisy'
        },
        {
            q: 'How to read elements of an array in JavaScript?',
            a: 'x[i]'
        },
        {
            q: 'Difference between call() and apply()?',
            a: 'CALL() takes a regular listing of parameters and APPLY() requires the parameters to be in an array.'
        },
        {
            q: 'What is a named function in JavaScript? How to define a named function?',
            a: 'A named function has a name when it is defined. A named function can be defined using function keyword as follows −\nfunction named(){\n// do some stuff here\n}'
        },
        {
            q: 'How many types of functions JavaScript supports?',
            a: 'A function in JavaScript can be either named or anonymous.'
        },
        {
            q: 'How to define a anonymous function?',
            a: 'An anonymous function can be defined in similar way as a normal function but it would not have any name.'
        },
        {
            q: 'Can you assign a anonymous function to a variable?',
            a: 'Yes'
        },
        {
            q: 'Can you pass a anonymous function as an argument to another function?',
            a: 'Yes'
        },
        {
            q: 'What is the purpose of -this- operator in JavaScript?',
            a: 'always refers to the current context.'
        },
        {
            q: 'What are the valid scopes of a variable in JavaScript?',
            a: 'The region of your program in which it is defined. There are three: \n -Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.\n-Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.\nBlock Scoped variables- variables defined using const/let keywords are scoped to the block in which they are defined.'
        },
        {
            q: 'Which type of variable among global and local, takes precedence over other if names are same?',
            a: 'A local variable takes precedence over a global variable with the same name.'
        },
        {
            q: 'What is callback?',
            a: 'A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.'
        },
        {
            q: 'Explain Lexical Scoping',
            a: 'Lexical Scoping describes how a parser resolves variable names when functions are nested. \nThe word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. \nE.G. Nested functions have access to variables declared in their outer scope.'
        },
        {
            q: 'What is closure?',
            a: 'Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.'
        },
        {
            q: 'Give an example of closure?',
            a: 'Following example shows how the variable counter is visible within the create, increment, and print functions, but not outside of them −\nfunction create() {\nvar counter = 0;\nreturn {\nincrement: function() {\ncounter++;\n},\n\nprint: function() {\nconsole.log(counter);\n}\n}\n}\nvar c = create();\nc.increment();\nc.print();     // ==> 1\n'
        },
        {
            q: 'Adding a number and a string results in?',
            a: 'Coercion: converting a value from one type to another. This happens because JS is dynamically typed.'
        },
        {
            q: 'What is the difference between "undefined" and "null" in JavascriptFoundations?',
            a: '"undefined" means variable is declared but not yet assigned a value and null is a value that can be assigned of type "object".'
        },
        {
            q: 'What boolean operators does JavaScript support?',
            a: '&&, || and !'
        },
        {
            q: 'What is this keyword?',
            a: 'It refers to the current object.'
        },
        {
            q: 'What does isNaN function do?',
            a: 'Return true if the argument is not a number.'
        },
        {
            q: 'What is the difference between "undefined" and "not defined" in JavascriptFoundations?',
            a: '"Undefined" means a variable is declared but not assingned any values but "Not defined" means the variable is not declared yet.'
        },
        {
            q: 'What is the difference between == and === in JavascriptFoundations?',
            a: 'The == operator checks only equality of the values while === checks equality of values with its datatype i.e. values should be of same type.'
        },
        {
            q: 'What are different programming paradigm important for JavascriptFoundations developers?',
            a: 'Procedural Programming with Object Oriented Programming and Fuctional Programming.'
        },
        {
            q: 'How can you get type of arguments passed to a function?',
            a: 'Using "typeof" operator. Ex- function abc(x){console.log(typeof x, arguments.length);}//Here when function "abc" is called it returns the type and length of passed value.'
        },
        {
            q: 'What is the disadvantage of creating true private methods in JavascriptFoundations?',
            a: 'They are very memory inefficient as new copy of method is created every instance.'
        },
        {
            q: 'What is the output of following code:-" var x = 1;  var y = (function(){delete x; return x;})() console.log(y); "?',
            a: 'Output will be 1. delete operator used to delete an object but here x is not an object.'
        },
        {
            q: 'How to use external JavaScript file?',
            a: '<script type="text/JavascriptFoundations" src="myfile.js"></script>  "Here It is assumed that myfile.js is the external js file". '
        },
        {
            q: 'What is the difference between "undefined" and "null" in JavascriptFoundations?',
            a: '"undefined" means variable is declared but not yet assigned a value and null is a value that can be assigned of type "object".'
        },
        {
            q: 'Explain HOISTING',
            a: 'Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.',
        },
        {
            q: 'What\'s the difference between .call and .apply?',
            a: 'The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly',
        },
        {
            q: 'What\'s the difference between an "attribute" and a "property"?',
            a: 'Attribute is a quality or object that we attribute to someone or something. Attribute is a quality or object that we attribute to someone or something. \n' +
            'Property is a quality that exists without any attribution. For example, clay has adhesive qualities; or, one of the properties of metals is electrical conductivity.',
        },
        {
            q: 'What is function composition?',
            a: 'Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.'
        },
        {
            q: 'What is function composition?',
            a: 'Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through.'
        },
        {
            q: 'What is event bubbling?',
            a: 'An event received by an element doesn\'t stop with that one element. That event moves to other elements like the parent, and other ancestors of the element. This is called "event bubbling".'
        },
        {
            q: 'What is event delegation?',
            a: 'Event delegation allows you to avoid adding event listeners to specific nodes;  instead, the event listener is added to one parent.  That event listener analyzes bubbled events to find a match on child elements.'
        },
        {
            q: 'Why it is a better to use == than === ?',
            a: 'Type coercion. To avoid problems when false == 0  becomes true. Compares not only value but the type too'
        }
    ]
}