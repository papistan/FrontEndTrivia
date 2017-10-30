//
// Titles in the Decks
//
// Javascript: Core Concepts
// Javascript: Functions
// Javascript: Common built-in methods
// Javascript: Common event handlers
// Javascript: Design patterns
// CSS
// CSS: Pseudo-classes
// CSS: Animations
// CSS3 - Flexbox
// HTML
// React
// Angular
// Javascript: 3
// Vue
// DOM Fundamentals
// ES6
// JavaScript: Intermediate
// SASS: Basics
// Webpack Basic Concepts
// jQuery: Basics
// General Front End Questions
// Git
//

export function deckData() {
  return [
    {
      title: "Javascript: Core Concepts",
      image: "../style/images/js.png",

      cards: [
        {
          q: "What is event bubbling?",
          a:
          'An event received by an element doesn\'t stop with that one element. That event moves to other elements like the parent, and other ancestors of the element. This is called "event bubbling".'
        },
        {
          q: "What is event delegation?",
          a:
          "Event delegation allows you to avoid adding event listeners to specific nodes;  instead, the event listener is added to one parent.  That event listener analyzes bubbled events to find a match on child elements."
        },
        {
          q: "What is the difference between using == and === ?",
          a:
          "Triple equals uses type coercion and compares both value and type.  It prevents unintentional truthy cases like false == 0."
        },
        {
          q: "What do we call data types copied by VALUE?",
          a: "Primitives"
        },
        {
          q: "What do we call data types copied by REFERENCE?",
          a: "Objects"
        },
        {
          q: "What are the six primitives?",
          a: "Boolean, null, undefined, string, number and symbol"
        },
        {
          q: "What are the three object data types?",
          a: "Array, Function, and Object"
        },
        {
          q: "How can you access properties of an Object in JavaScript?",
          a: 'x.name or x["name"]'
        },
        {
          q: "Difference between call() and apply()?",
          a:
          "CALL() takes a regular listing of parameters and APPLY() requires the parameters to be in an array."
        },
        {
          q: "What is the purpose of -this- operator in JavaScript?",
          a:
          "This, always refers to properties or methods accessible to a developer on an object."
        },
        {
          q: "What are the valid scopes of a variable in JavaScript?",
          a:
          "The region of your program in which it is defined. There are three: \n -Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.\n-Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function.\nBlock Scoped variables- variables defined using const/let keywords are scoped to the block in which they are defined."
        },
        {
          q:
          "Which type of variable among global and local, takes precedence over other if names are same?",
          a:
          "A local variable takes precedence over a global variable with the same name."
        },
        {
          q: "What is callback?",
          a:
          "A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered."
        },
        {
          q: "Explain Lexical Scoping",
          a:
          'Lexical Scoping describes how a parser resolves variable names when functions are nested. \nThe word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. \nE.G. Nested functions have access to variables declared in their outer scope.'
        },
        {
          q: "What is closure?",
          a:
          "Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope."
        },
        {
          q: "Give an example of closure?",
          a:
          "Following example shows how the variable counter is visible within the create, increment, and print functions, but not outside of them −\nfunction create() {\nvar counter = 0;\nreturn {\nincrement: function() {\ncounter++;\n},\n\nprint: function() {\nconsole.log(counter);\n}\n}\n}\nvar c = create();\nc.increment();\nc.print();     // ==> 1\n"
        },
        {
          q: "Adding a number and a string results in?",
          a:
          "Coercion: converting a value from one type to another. This happens because JS is dynamically typed."
        },
        {
          q:
          'What is the difference between "undefined" and "null" in JavaScript?',
          a:
          '"undefined" means variable is declared but not yet assigned a value and null is a value that can be assigned of type "object".'
        },
        {
          q: "What boolean operators does JavaScript support?",
          a: "&&, || and !"
        },
        {
          q: "What does isNaN function do?",
          a: "Return true if the argument is not a number."
        },
        {
          q:
          'What is the difference between "undefined" and "not defined" in a JavaScript error?',
          a:
          '"Undefined" means a variable is declared but not assingned any values but "Not defined" means the variable is not declared yet.'
        },
        {
          q: "What is the difference between == and === in JavaScript?",
          a:
          "The == operator checks only equality of the values while === checks equality of values with its datatype i.e. values should be of same type."
        },
        {
          q:
          "What are different programming paradigm important for JavaScript developers?",
          a:
          "Procedural Programming with Object Oriented Programming and Fuctional Programming."
        },
        {
          q: "How can you get type of arguments passed to a function?",
          a:
          'Using "typeof" operator. Ex- function abc(x){console.log(typeof x, arguments.length);}//Here when function "abc" is called it returns the type and length of passed value.'
        },
        {
          q:
          "What is the disadvantage of creating true private methods in JavaScript?",
          a:
          "They are very memory inefficient as a new copy of method is created every instance."
        },

        {
          q: "How to use external JavaScript file?",
          a:
          '<script type="text/javascript" src="myfile.js"></script>  "Here It is assumed that myfile.js is the external js file". '
        },
        {
          q:
          'What is the difference between "undefined" and "null" in JavaScript?',
          a:
          '"undefined" means variable is declared but not yet assigned a value and null is a value that can be assigned of type "object".'
        },
        {
          q: "Explain HOISTING",
          a:
          "Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution."
        },
        {
          q: "What's the difference between .call and .apply?",
          a:
          "The difference is that apply lets you invoke the function with arguments as an array; call requires the parameters be listed explicitly"
        },
        {
          q: "What is function composition?",
          a:
          "Function composition is the process of combining two or more functions to produce a new function. Composing functions together is like snapping together a series of pipes for our data to flow through."
        },
        {
          q: "What is DOM in javascript?",
          a:
          "A hierarchial structure to access or modify a web page is called Document Object Model or DOM."
        },
        {
          q: "How do you reference a form field in javascript?",
          a:
          'To refer a form field from javascript, you can use : document.getElementById("myform").txtName or document.getElementById("myform") methods'
        }
      ]
    },

    // JavaScript: Functions

    {
      title: "JavaScript: Functions",
      image: "../style/images/js.png",
      cards: [
        {
          q:
          "Major difference between function expression vs function declaration?",
          a:
          "Function expression:\n- named or unnamed ex. var myFunc = function( ) { }\n Function declaration: \n- named ex. function myFunc( ) { } "
        },
        {
          q: "Functions are treated as what type in JavaScript?",
          a: "Object"
        },
        {
          q:
          "What do we call a function that gets executed at the end of an operation, once all of the other operations have been completed",
          a: "Callback function"
        },
        {
          q:
          "When passing named functions as callback, why might you not normally include parentheses - ex. .addEventListener('click', myFunction)",
          a: "myFunction() would return result of myFunction"
        },
        {
          q:
          "What is the major difference between functions vs variables in regards to hoisting?",
          a: "Some functions are usable before they are declared"
        },
        {
          q:
          "What is a function defined inside an expression, ex. var x = function(){ }?",
          a: "Function expression"
        },
        {
          q: "Are function expressions hoisted?",
          a: "Nope"
        },
        {
          q: "What do you call a function created between {  }?",
          a: "Block-level function - (pro tip: don't use unless in strict mode)"
        },
        {
          q:
          "1) Identifying what functions caused errors, 2) more understandable and accessible, 3) easier to reuse, all are major advantages of what type of functions?",
          a: "Named functions"
        },
        {
          q: "___ functions are only created at runtime",
          a: "Anonymous"
        },
        {
          q: "What does 'IIFE' stand for",
          a: "Immediately Invokable Function Expression"
        },
        {
          q:
          "Functions that take one or more functions as an input, or functions that output another function, are called?",
          a: "Higher order functions "
        },
        {
          q: "What type of function is: (parameters) => { statements } ",
          a: "Arrow function"
        },
        {
          q: "Are parentheses option in arrow functions?",
          a: "Yes - if you have only one variable"
        },
        {
          q: "Are brackets option in arrow functions?",
          a: "Yes - if you want to return the expression"
        },
        {
          q: "Can arrow functions be used as constructors?",
          a: "Nope"
        },
        {
          q: "Do arrow functions bind .this?",
          a: "Nope - they have lexical binding (this stays in previous scope)"
        },
        {
          q:
          "What type of function would this be? \n(function() {\nconsole.log('lumos');\n})();",
          a: "IIFE (Immediately Invokable Function Expression)"
        },
        {
          q: "Why would you use an IIFE?",
          a: "It enables you to attach private data to a function, creates fresh environments and avoids polluting the global namespace."
        },
        {
          q:
          "A _____ function is a one that happens to be called with the 'new' operator.",
          a: "Constructor - ex. var g = new Graph()"
        }
      ]
    },

    // JavaScript: Common built-in methods

    {
      title: "JavaScript: Common built-in methods",
      image: "../style/images/js.png",

      cards: [
        {
          q: "Returns code of character?",
          a: "charCodeAt()"
        },
        {
          q:
          "Returns the index within the calling String object of the last occurrence of the specified value starting?",
          a: "lastIndexOf()"
        },
        {
          q:
          "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
          a: "localeCompare()"
        },
        {
          q:
          "Returns a new string with some or all matches of a pattern replaced by a replacement?",
          a: "replace()"
        },
        {
          q:
          "Executes a search for a match between a regular expression and this String object?",
          a: "search()"
        },
        {
          q: "Extracts a section of a string and returns it as a new string?",
          a: "slice()"
        },
        {
          q:
          "Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split?",
          a: "split()"
        },
        {
          q:
          "Returns a subset of a string between one index and another, or through the end of the string?",
          a: "substring()"
        },
        {
          q:
          "Returns the calling string value converted to lower case, according to any locale-specific case mappings?",
          a: "toLocaleLowerCase()"
        },
        {
          q:
          "Returns the calling string value converted to upper case, according to any locale-specific case mappings?",
          a: "toLocaleUpperCase()"
        },
        {
          q: "Returns the character at the specified index?",
          a: "charAt()"
        },
        {
          q: "Returns the unicode integer of a character/index",
          a: "charCodeAt(index)"
        },
        {
          q: "Combines the text of two strings and returns a new string?",
          a: "concat()"
        },
        {
          q: "Calls a function for each element in the array?",
          a: "forEach()"
        },
        {
          q:
          "Returns the index within the calling String object of the first occurrence of the specified value?",
          a: "indexOf()"
        },
        {
          q: "Concatenate elements of an array into a string?",
          a: "join()"
        },
        {
          q: "Returns the length of the string?",
          a: "length()"
        },
        {
          q: "Removes the last element from an array and returns that element?",
          a: "pop()"
        },
        {
          q:
          "Adds one or more elements to the end of an array and returns the new length of the array?",
          a: "push()"
        },
        {
          q: "Reverses the order of the elements of an array?",
          a: "reverse()"
        },
        {
          q: "Returns a copy of a selection of an array?",
          a: "slice()"
        },
        {
          q: "Sorts the elements of an array?",
          a: "sort()"
        },
        {
          q:
          "Changes the contents of an array by removing existingelements or adding elements?",
          a: "splice()"
        },
        {
          q:
          "Returns the characters in a string beginning at the specified location?",
          a: "substr()"
        },
        {
          q: "Returns the calling string value converted to lower case?",
          a: "toLowerCase()"
        },
        {
          q: "Returns the calling string value converted to upper case?",
          a: "toUpperCase()"
        },
        {
          q: "Returns the string representation of the numbers value?",
          a: "toString()"
        },
        {
          q: "Writing/Displaying data into an alert box?",
          a: "window.alert()"
        },
        {
          q: "Writing/Displaying data into the browser console?",
          a: "console.log()"
        },
        {
          q:
          "Display an alert message along with asking the user to enter a value?",
          a: "window.prompt()"
        },
        {
          q:
          "Show a confirmation message and ask the user to confirm or cancel?",
          a: "window.confirm()"
        },
        {
          q: "Get an integer number from a string?",
          a: "parseInt()"
        },
        {
          q: "Get a float number from a string",
          a: "parseFloat()"
        },
        {
          q: "Convert a string to base 64?",
          a: "window.btoa()"
        },
        {
          q: "Convert a base 64 to string?",
          a: "window.atob()"
        },
        {
          q:
          "Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
          a: "localeCompare()"
        },
        {
          q: "Used to match a regular expression against a string?",
          a: "match()"
        },
        {
          q:
          "Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?",
          a: "replace()"
        },
        {
          q:
          "Returns true if every element in this array satisfies the provided testing function?",
          a: "every()"
        },
        {
          q:
          "Returns true if at least one element in this array satisfies the provided testing function?",
          a: "some()"
        },
        {
          q:
          "Creates a new array with all of the elements of this array for which the provided function returns true?",
          a: "filter()"
        },
        {
          q:
          "Removes the first element from an array and returns that element?",
          a: "shift()"
        },
        {
          q:
          "Adds one or more elements to the front of an array and returns the new length of the array?",
          a: "unshift()"
        },
        {
          q: "Returns current date and time?",
          a: "Date()"
        },
        {
          q:
          "Returns the day of the month for the specified date according to local time?",
          a: "getDate()"
        },
        {
          q:
          "Returns the day of the week for the specified date according to local time?",
          a: "getDay()"
        },
        {
          q: "Returns the month in the specified date according to local time?",
          a: "getMonth()"
        },
        {
          q: "Returns the year of the specified date according to local time?",
          a: "getFullYear()"
        },
        {
          q: "Returns a pseudo-random number between 0 and 1?",
          a: "random()"
        },
        {
          q: "Returns the largest of zero or more numbers?",
          a: "max()"
        },
        {
          q: "Returns the smallest of zero or more numbers?",
          a: "min()"
        },
        {
          q:
          "Defines how many total digits (including digits to the left and right of the decimal) to display of a number?",
          a: "toPrecision()"
        },
        {
          q: "Evaluates an expression?",
          a: "eval()"
        },
        {
          q: "Checks if the content of a variable is valid?",
          a: "isNaN()"
        },
        {
          q:
          "Which string method removed whitespace from either end of a string?",
          a:
          "The trim() method returns the string stripped of whitespace from both ends. trim() does not affect the value of the string itself."
        }
      ]
    },

    //JavaScript: Common event handlers

    {
      title: "JavaScript: Common event handlers",
      image: "../style/images/js.png",

      cards: [
        {
          q: "What handler fires when loading stopped?",
          a: "onAbort"
        },
        {
          q: "Handles losing focus?",
          a: "onBlur"
        },
        {
          q: "What handler fires when content is modified?",
          a: "onChange"
        },
        {
          q: "Handles click?",
          a: "onClick"
        },
        {
          q: "What handler detects if clicked twice?",
          a: "onDblClick"
        },
        {
          q: "What handler fires when element is moved?",
          a: "onDragDrop"
        },
        {
          q: "What handler fires when document is not loaded?",
          a: "onError"
        },
        {
          q: "What handler fires on focus enter?",
          a: "onFocus"
        },
        {
          q: "What handler fires on key depress?",
          a: "onKeyDown"
        },
        {
          q: "What handler fires on key press?",
          a: "onKeyPress"
        },
        {
          q: "What handler fires on key release?",
          a: "onKeyUp"
        },
        {
          q: "What handler fires just after document loading?",
          a: "onLoad"
        },
        {
          q: "What handler fires on mouse button depress?",
          a: "onMouseDown"
        },
        {
          q: "What handler fires on mouse move?",
          a: "onMouseMove"
        },
        {
          q: "What handler fires on mouse exit?",
          a: "onMouseOut"
        },
        {
          q: "What handler fires when mouse is on the element?",
          a: "onMouseOver"
        },
        {
          q: "What handler fires on mouse button release?",
          a: "onMouseUp"
        },
        {
          q: "What handler fires when reset form button is clicked?",
          a: "onReset"
        },
        {
          q: "What handler fires when page size changes?",
          a: "onResize"
        },
        {
          q: "What handler fires when element is selected?",
          a: "onSelect"
        },
        {
          q: "What handler fires when form is submitted?",
          a: "onSubmit"
        },
        {
          q: "What handler fires when page is exited?",
          a: "onUnload"
        }
      ]
    },

    // JavaScript: Design patterns

    {
      title: "JavaScript: Design patterns",
      image: "../style/images/js.png",

      cards: [
        {
          q: "Name a few design patterns for JS",
          a:
          "Module, Singleton, \nPrototype, Observer, \nConstructor, Revealing Module, \nMediator, Command, \nDecorator, Flyweight, \nFacade, Factory, Mixin"
        },
        {
          q: "What is a Design Pattern?",
          a:
          "A design pattern is a reusable software solution to a specific type of problem that occurs frequently when developing software"
        },
        {
          q: "Describe The Decorator Pattern",
          a:
          "The decorator is defined as a design pattern that allows behaviour to be added to an existing object dynamically"
        },
        {
          q: "What does MVC stands for?",
          a: "Model View Controller"
        },
        {
          q:
          "Which pattern is it? Define a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.",
          a: "Observer pattern"
        },
        {
          q:
          "What does “favor object composition over class inheritance” mean?",
          a:
          "That objects should only include the required functionality from different classes instead of inheriting the whole base class, which will have many unused methods"
        },
        {
          q: "Define Composite pattern",
          a:
          "The composite pattern says that a group of objects can be treated in the same manner as an individual object of the group"
        },
        {
          q:
          "Which design pattern restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system",
          a: "Sigleton"
        }
      ]
    },
    // CSS
    {
      title: "CSS",
      image: "../style/images/css3.svg",

      cards: [
        {
          q: "What is CSS?",
          a:
          "Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable."
        },
        {
          q: "What are the components of a CSS Style?",
          a:
          "Selector − an HTML tag like <h1> or <table> \nProperty − attribute of HTML tag, ex. color, border \nValue − assigned to properties, ex. color property can have red or #F1F1F1"
        },
        {
          q: "What is type selector?",
          a:
          "matches the name of an element type. To give a color to all level 1 headings −\nh1 {\ncolor:\n#36CFFF;\n}"
        },
        {
          q: "What is universal selector?",
          a: "matches the name of any element type −\n* { \ncolor: #000000; \n}"
        },
        {
          q: "What is Descendant Selector?",
          a:
          "apply a style rule to a particular element only when it lies inside a particular element. As given in the following example, style rule will apply to <em> element only when it lies inside <ul> tag. \nul em {\ncolor: #000000; \n}"
        },
        {
          q: 'What is "Z-index"',
          a:
          "Z-index specifies the z-order of a positioned element and its descendants. If one element had a z-index of 0 and another had a z-index of 1, the element with a z-index of 1 would be above/overlapping the other element."
        },
        {
          q: "What is the Box Model",
          a:
          "The Box Model is the term used for the CSS standard model used by a browser's rendering engine when laying out a document: each element is represented as a rectangular box."
        },
        {
          q: "What are preprocessor and postprocessors?",
          a:
          "Preprocessors and postprocessors both modify and extend the behavior of CSS. Preprocessors are written in a different language (SASS, SCSS, LESS) that is then compiled to CSS. Post Processors (PostCSS) compile CSS and add additional properties to it - such as vendor prefixes."
        },
        {
          q: "What are vendor (or browser) prefixes?",
          a:
          "These are a way for browsers to add support for new features before they are supported. They are particularly important when considering cross browser compatability. Some more common examples are: -webkit, -moz, and -ms"
        },
        {
          q: "What is the purpose of a pseudo-class",
          a:
          "Pseudo-classes specify a special state for selected elements\nExample -\n div:hover { \n/** set styles for when mouse is over div */ \n}"
        },
        {
          q: "What is the difference between a class and an ID selector?",
          a:
          "An id selector is used to style one specific element, but a class selector can be used to style multiple elements."
        },
        {
          q: "What are pseudo elements?",
          a:
          "Pseudo-elements are a keyword added to selectors to style specific parts of the selected elements\nExample -\n p::first-line { \n /** Style the first line of the element red */ color: #F00; \n}"
        },
        {
          q: "How can elements be fixed  on the screen?",
          a: "Using the property position: fixed;"
        },
        {
          q:
          "What is the difference between an element whose position is fixed vs absolute?",
          a:
          "A fixed position element has the position relative to the viewport. A absolutely positioned element has the position set relative to it's nearest positioned ancestor."
        },
        {
          q:
          "How are text or inline elements centered inside their parent element?",
          a: "Using the property text-align: center"
        },
        {
          q: "What is the difference between margin and padding?",
          a:
          "Padding is the space between border and element contents, margin is the space between border and neighboring elements."
        },
        {
          q: "How can CSS styles be applied inline in HTML?",
          a: "Using the style attribute on element tags."
        },
        {
          q: "How are background images set for an element?",
          a: "Using background-image: url('path/to/image.png')"
        },
        {
          q: "How are CSS selectors grouped together",
          a: "Using the comma (,) separator."
        },
        {
          q: "How can a font family be set throughout the page?",
          a:
          "By applying the font-family property on the body tag -\nbody { \nfont-family: 'Comic Sans'; \n}"
        },
        {
          q: "How can the style of a list be changed?",
          a: "Using the property list-style-type."
        },
        {
          q: "How are CSS stylesheets added to HTML pages?",
          a:
          'Using the <link rel="stylesheet" href="path/to/style.css" type="text/css" />'
        },
        {
          q: "What tag is used to internally add CSS styles to a HTML page?",
          a: "The <style> tag"
        },
        {
          q: "Which property used to change the color of text?",
          a: "Using the property color"
        },
        {
          q: "How is a background image set to be fixed?",
          a: "Using the property background-attachment: fixed"
        },
        {
          q: "What is the difference between width: 100% and width: 100vw?",
          a:
          "The former sets the element width as that of the parent content area, whereas the latter sets the elements width to the width of the entire viewport"
        },
        {
          q:
          "When setting a z-index to an element what other css atribute must also be set?",
          a: "An element must have a display setting to utilize z-indexing"
        },
        {
          q:
          "When using flex-box to create a responsive layout what atribute will allow a containers elemets to not break outside a set media query",
          a:
          "Using flew-wrap will allow a given set of elements to break and re order when there parent container becomes too small"
        },
        {
          q:
          "When laying out a number of variable sized containers, each with text inside, how can flex-box be used to align this text",
          a:
          "Using align-items with the baseline attribute will position the elemnts inside there parent containers."
        },
        {
          q: "Can flex-box commands be chained or combined",
          a:
          "Yes flex-grow | flex-shrink | flex-basis can be written as flex: 5 5 10%;"
        },
        {
          q: "Differentiate Class selector from ID selector?",
          a:
          "While an overall block is given to class selector, ID selector prefers only a single element differing from other elements. In other words, ID are uniques while classes are not. Its possible that an element has both class and ID."
        },
        {
          q: "What is Pseudo-elements?",
          a:
          "Pseudo-elements are used to add special effects to some selectors.  CSS in used to apply styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the document, then there is a feature available in CSS known as pseudo-elements. It will allow extra mark-up to the document without disturbing the actual document."
        },
        {
          q:
          "What happens if 100% width is used along with floats all across the page?",
          a:
          "While making the float declaration, 1 pixel is added every time it is used in the form of the border, and   even more float is allowed thereafter."
        },
        {
          q: "Can default property value be restored through CSS? If yes, how?",
          a:
          "n CSS, you cannot revert back to old values due to lack of default values. The property can be re- declared to get the default property."
        },
        {
          q: "What is contextual selector?",
          a:
          "Selector used to select special occurrences of an element is called contextual selector. A space separates the individual selectors. Only the last element of the pattern is addressed in this kind of selector. For e.g.: TD P TEXT {color: blue}"
        },
        {
          q: "Define Image sprites with context to CSS ?",
          a:
          "When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the loading every image on a webpage consumes time, using image sprites lessens the time taken and gives information quickly."
        },
        {
          q: "How does Z index function?",
          a:
          "Overlapping may occur while using CSS for positioning HTML elements. Z index helps in specifying the overlapping element. It is a number which can be positive or negative, the default value being zero."
        },
        {
          q: "Define float property of CSS?",
          a:
          "By float property, the image can be moved to the right or the left along with the text to be wrapped around it. Elements before this property is applied do not change their properties."
        },
        {
          q: "What is graceful degradation?",
          a:
          "In case the component fails, it will continue to work properly in the presence of a graceful degradation. The latest browser application is used when a webpage is designed. As it is not available to everyone, there is a basic functionality, which enables its use to a wider audience. In case the image is unavailable for viewing, text is shown with the alt tag."
        },
        {
          q: "What is progressive enhancement?",
          a:
          "It’s an alternative to graceful degradation, which concentrates on the matter of the web. The functionality is same, but it provides an extra edge to users having the latest bandwidth. It has been into prominent use recently with mobile internet connections expanding their base."
        },
        {
          q: "What is Alternate Style Sheet?",
          a:
          "Alternate Style Sheets allows the user to select the style in which the page is displayed using the view>page style menu. Through Alternate Style Sheet, user can see a multiple version of the page on their needs and preferences."
        },
        {
          q: "Differentiate Style Sheet concept from HTML?",
          a:
          "While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover, style sheets have better browser capabilities and formatting options."
        },
        {
          q: "Comment on the Case-sensitivity of CSS ?",
          a:
          "Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc is. Only when XML declarations along with XHTML DOCTYPE are being used on the page, CSS is case -sensitive."
        },
        {
          q: "Define Declaration block?",
          a:
          "A catalog of directions within braces consisting of property, colon and value is called declaration block. e.g.: [property 1: value 3]"
        },
        {
          q: "Why is it easy to insert a file by importing it?",
          a:
          "mporting enables combining external sheets to be inserted in many sheets. Different files and sheets can be used to have different functions. Syntax: @import notation, used with <Style> tag."
        },
        {
          q: "Differentiate logical tags from physical tags?",
          a:
          "While physical tags are also referred to as presentational mark-up, logical tags are useless for appearances, also Physical tags are newer versions while logical tags are old and concentrate on content."
        },
        {
          q: "Enlist the media types CSS allows? ",
          a:
          "The design and customization of documents are rendered by media. By applying media control over the external style sheets, they can be retrieved and used by loading it from the network."
        },
        {
          q:
          "Explain the difference between visibility:hidden and display:none",
          a:
          "By visibility:Hidden;the element is not visible but takes up the original space, whereas by display:None element is hidden and takes up no space as if it was never there."
        },
        {
          q:
          "What is the difference between inline, embedded and linked style sheets?",
          a:
          "Inline Style Sheet is used to style only a small piece of code. Embedded style sheets are put between the <head> and </head> tags. Linked style sheet is used to apply the style to all the pages within your website by linking an external style sheet to the html document."
        },
        {
          q: 'What does the CSS property "box-sizing":"border-box" do?',
          a:
          "It alters the default CSS box model used to calculate width and height of the elements to include any border and padding in the value you specify for width and height."
        }
      ]
    },

    // CSS: Pseudo-classes
    // Source: https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes
    {
      title: "CSS: Pseudo-classes",
      image: "../style/images/css3.svg",

      cards: [
        {
          q: "What is a CSS Pseudo-class?",
          a:
          'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s) such as ":hover".'
        },
        {
          q: "What is the general CSS Pseudo-class syntax?",
          a:
          "For example, one creates rules like this: selector:pseudo-class { property: value; }"
        },
        {
          q: "How are pseudo-classes used to style elements?",
          a:
          "Pseudo-classes style elements in relation to the history of the navigator (like :link for <a>), content status (like :focus on input forms), and mouse position (like :hover)."
        },
        {
          q:
          "What are the standard pseudo-classes for styling <a> link states?",
          a:
          "a:link - a normal, unvisited link, a:visited, a:hover - when one mouses over the link, and a:active - moment the link is clicked"
        },
        {
          q:
          "What are some pseudo-classes for the status of the content such as inputs, checkboxes, etc.?",
          a:
          "One can use :checked, :active, :focus, :disabled, :enabled, :hover, :required, etc."
        },
        {
          q:
          "What are some helpful pseudo-classes for selecting specific DOM elements such as the first child, last child, etc.?",
          a:
          "One can use :first-child, :last-child, :nth-child(), :nth-last-child(), :not(), :only-child, :nth-of-type, etc."
        },
        {
          q: "How do pseudo-elements differ from pseudo-classes?",
          a: "Pseudo-elements are used to style a specific part of an element."
        },
        {
          q:
          "What is the CSS selector for a div with the ID of #element, only when the mouse is hovering over it?",
          a: "#element:hover"
        },
        {
          q:
          "What is the CSS selector for the input field with an ID of #email, only the field has received focus?",
          a: "#email:focus"
        },
        {
          q:
          "What is the CSS selector for a h1 within a div with the ID of #element, only when the #element div is being hovered over?",
          a: "#element:hover h1"
        },
        {
          q:
          "Is content contained within a CSS :before or :after pseudo-class readable by search engines?",
          a:
          "No. 'Google does not reliably index text contained in JavaScript or CSS, even if it is visible to users on the page.'"
        },
        {
          q:
          "Is content contained within a CSS :before or :after pseudo-class readable by screen readers?",
          a:
          "Not reliably. Remember separation of concerns - any pseudo-class content should be presentational only."
        },
        {
          q: "Can you combine psuedo selectors for complex targeting?",
          a:
          "Yes. Consider the following: .item:nth-child(3):last-child. This will only target the 3rd child of the .item class when it is also the last instance."
        },
        {
          q: "How to select all unvisited links",
          a: "a:link"
        },
        {
          q: "How to select all visited links",
          a: "a:visited"
        },
        {
          q: "How to select the active link",
          a: "a:active"
        },
        {
          q: "How to select links on mouse over",
          a: "a:hover"
        },
        {
          q: "How to select the input element which has focus",
          a: "input:focus"
        },
        {
          q: "How to select the first letter of every <p> element",
          a: "p::first-letter"
        },
        {
          q: "How to select the first line of every <p> element",
          a: "p::first-line"
        },
        {
          q:
          "How to select every <p> elements that is the first child of its parent",
          a: "p:first-child"
        },
        {
          q: "How to insert content before every <p> element",
          a: "p::before"
        },
        {
          q: "How to insert content after every <p> element",
          a: "p::after"
        },
        {
          q:
          'How to select every <p> element with a lang attribute value starting with "it"',
          a: "p:lang(it)"
        }
      ]
    },

    // CSS: Animations
    // Source: https://css-tricks.com/almanac/properties/a/animation/
    {
      title: "CSS: Animations",
      image: "../style/images/css3.svg",

      cards: [
        {
          q: "How is a general CSS animation defined?",
          a:
          'Each animation needs an "@keyframes" at-rule that is called with an "animation" property. For example, .class-name { animation: <keyframes_name> <other-shorthand-values> } and @keyframes <name> { 0% { ... } 100% { ... }'
        },
        {
          q: 'What do "@keyframes" at-rules define?',
          a:
          'They define what should happen at specific moments during the animation like going from 0% to 100%. One can use the shorthand "animation" property or use its 8 sub-properties to manipulate it.'
        },
        {
          q: 'What are the 8 sub-properties of "animation"?',
          a:
          '1. "animation-name" 2. "animation-duration" 3. "animation-timing-function" 4. "animation-delay" 5. "animation-direction" 6. "animation-iteration-count" 7. "animation-fill-mode" 8. "animation-play-state"'
        },
        {
          q: 'What is "animation-name"?',
          a: 'This defines the name of the "@keyframes" at-rule to use.'
        },
        {
          q: 'What is "animation-duration"?',
          a:
          "This defines the length of time for the animation to complete one cycle."
        },
        {
          q: 'What is "animation-timing-function"?',
          a:
          'This sets the preset acceleration curves such as "ease" or "linear".'
        },
        {
          q: 'What is "animation-delay"?',
          a:
          "This corresponds to the time between the element being loaded and the start of the animation sequence."
        },
        {
          q: 'What is "animation-direction"?',
          a:
          "This sets the direction of the animation after the cycle. Its default resets on each cycle."
        },
        {
          q: 'What is "animation-iteration-count"?',
          a: "This is the number of times the animation will run."
        },
        {
          q: 'What is "animation-play-state"?',
          a: "This is used to pause or play the animation."
        },
        {
          q:
          "How do we handle multiple animations or animations with multiple steps?",
          a:
          'Comma-separate the values like the following: "animation: someanimation 3s ease ..., anotheranimation 2s linear ..."'
        },
        {
          q: "Generally, which CSS properties can be animated?",
          a:
          'For the most part, colors and numbers but things like "background-image" cannot be animated. Check MDN for an exact list."'
        },
        {
          q:
          "Though performance may be an issue, which combos can be animated safely?",
          a:
          "Transforms like translate, scale, and rotate, changing opacity, etc."
        },
        {
          q: "How do we support older browsers for animations?",
          a:
          "Use vendor prefixes like -webkit-animation/-moz-animation/-o-animation/animation: <keyframe-name> 5s infinite; and @-webkit-keyframes <keyframe-name> { ... }."
        }
      ]
    },

    {
      title: "CSS3 - Flexbox",
      image: "../style/images/css3.svg",
      cards: [
        {
          q: 'What does the "flex-direction" property do?',
          a:
          'The "flex-direction" property controls the directional flow of flex content.  The values "row" and "row-reverse" orient content from left to right, and right to left, repsectively.  The values "column" and "column-reverse" orient content from top to bottom, and bottom to top, respectively.'
        },
        {
          q: 'What is the "main-axis"?',
          a:
          'The "main-axis" is a positional reference that corresponds to the "flex-direction" property.  For "flex-direction: row;" the main-axis runs left-to-right.  For "flex-direction: column;" the main-axis runs from top to bottom.'
        },
        {
          q: 'What is the "cross-axis"?',
          a:
          'The "cross-axis" is a positional reference that runs in the converse direction as the "main-axis."  For "flex-direction: row;" the cross-axis runs from top to bottom.  For "flex-direction: column;" the cross-axis runs from left to right.'
        },
        {
          q: 'What does the "justify-content" property do?',
          a:
          '"Justify-content" orients flex items along the main-axis.  For "flex-direction: row;" it positions elements horizontally.  For "flex-direction: column;" it positions elements vertically.'
        },
        {
          q: 'What does the "align-items" property do?',
          a:
          '"Align-items" orients flex items along the cross-axis.  For "flex-direction: row;" it positions elements vertically.  For "flex-direction: column;" it positions elements horizontally.'
        },
        {
          q: 'What does the "align-content" property do?',
          a:
          '"Align-content" determines the layout of all items, and distribution of space, within a flex container relative to the cross-axis.  For "flex-direction: row;" it orients items and space vertically.  For "flex-direction: column;" it orients items and space horizontally.'
        },
        {
          q: 'What does the "align-self" property do?',
          a:
          '"Align-self" orients an individual flex item along the cross-axis, overriding the value of the "align-items" property.  For "flex-direction: row;" it positions the element vertically.  For "flex-direction: column;" it positions the element horizontally.'
        },
        {
          q: 'What does the "flex-wrap" property do?',
          a:
          '"Flex-wrap" determines whether or not flex items are able to wrap onto multiple lines.  For "flex-wrap: nowrap;" items will be forced to occupy a single line (and therefore may overflow the container element).  For "flex-wrap: wrap;" and "flex-wrap: wrap-reverse;" items will automatically flow onto the next line when necessary.'
        },
        {
          q: 'What does the "order" property do?',
          a:
          '"Order" determines the position of a flex item along the main axis relative to the other existent flex items.  The "order" property takes a numerical value, and positions items in ascending order.'
        },
        {
          q: 'What does the "flex-grow" property do?',
          a:
          '"Flex-grow" takes a numerical value, and determines the proportion of available free space along the main-axis a flex item should take up relative to other existent flex items.  For example, "flex-grow: 2;" indicates that an item should occupy twice the available free space as an item with "flex-grow: 1;".'
        },
        {
          q: 'What does the "flex-shrink" property do?',
          a:
          '"Flex-shrink" takes a numerical value, and determines the proportional amount a flex item will shrink along the main-axis relative to other existent flex items.  An element with "flex-shrink: 2;" will shrink twice as much relative to an element with "flex-shrink: 1;".  Items with "flex-shrink: 0;" will not shrink.'
        },
        {
          q: 'What does the "flex-basis" property do?',
          a:
          '"Flex-basis" controls the ideal size of a flex item along the main-axis prior to being rendered in a flex container.  When rendered in a container, the actual size of a flex item is determined by its containers size, and the values assigned to each flex items "flex-grow" and "flex-shrink" properties.'
        },
        {
          q: 'What is the difference between "align-items" and "align-content" properties?',
          a:
          '"align-items" is responsible for aligning the elements inside a "flex line", which is formed every time an element wraps to the next line of a "flex container", while "align-content" is responsible for aligning the "flex lines" itself. Reminder: "align-content" works only when more than one "flex line" exists.'
        }

      ]
    },

    // HTML

    {
      title: "HTML",
      image: "../style/images/html5.png",

      cards: [
        {
          q: 'What is "placeholder" attribute?',
          a: "<input> placeholder Attribute"
        },
        {
          q: "Choose the correct HTML element for the largest heading:",
          a: "<h1>"
        },
        {
          q: "What is the correct HTML element for inserting a line break?",
          a: "<br>"
        },
        {
          q: "What is the correct HTML for adding a background color?",
          a: '<body style="background-color:yellow;">'
        },
        {
          q: "Choose the correct HTML element to define important text",
          a: "<strong>"
        },
        {
          q: "Choose the correct HTML element to define emphasized text",
          a: "<i>"
        },
        {
          q: "What is the correct HTML for creating a hyperlink?",
          a: '<a href="http://example.com">W3Schools</a>'
        },
        {
          q: "How can you open a link in a new tab/browser window?",
          a: '<a href="url" target="_blank">'
        },
        {
          q: "How can you make a numbered list?",
          a: "<ol>"
        },
        {
          q: "How can you make a bulleted list?",
          a: "<ul>"
        },
        {
          q: "What is the correct HTML for making a drop-down list?",
          a: "<select>"
        },
        {
          q: "How to do HTML comments?",
          a: "<!-- and end with -->"
        },
        {
          q: "Which HTML element defines the title of a document?",
          a: "<title>"
        },
        {
          q:
          "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
          a: " alt"
        },
        {
          q: "Which doctype is correct for HTML5?",
          a: "<!DOCTYPE html>"
        },
        {
          q: "What is the correct HTML element for playing video files?.",
          a: "<video>"
        },
        {
          q: "What is the correct HTML element for playing audio files?",
          a: "use the <audio> element"
        },
        {
          q: "In HTML, onblur and onfocus are ?",
          a: "Style attributes"
        },
        {
          q: 'What is "placeholder" attribute?',
          a:
          "HTML5 introduced a new attribute called placeholder. This attribute on <input> and <textarea> elements provides a hint to the user of what can be entered in the field. The placeholder text must not contain carriage returns or line-feeds."
        },
        {
          q: "What is the purpose of autofocus attribute in HTML5?",
          a:
          "This is a simple one-step pattern, easily programmed in JavaScript at the time of document load, automatically focus one particular form field."
        },
        {
          q: "What are Web Workers?",
          a:
          "Web Workers do all the computationally expensive tasks without interrupting the user interface and typically run on separate threads. Web Workers allow for long-running scripts that are not interrupted by scripts that respond to clicks or other user interactions, and allows long tasks to be executed without yielding to keep the page responsive."
        },
        {
          q: "What do you mean by local storage in HTML5?",
          a:
          "HTML5 introduces the localStorage attribute which would be used to access a pages local storage area without no time limit and this local storage will be available whenever you would use that page."
        },
        {
          q: "What is the purpose of output tag in HTML5?",
          a:
          "HTML5 introduced a new element <output> which is used to represent the result of different types of output, such as output written by a script."
        },
        {
          q: "What is the purpose of canvas tag in HTML5?",
          a:
          "HTML5 element <canvas> gives you an easy and powerful way to draw graphics using JavaScript. It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations."
        },
        {
          q: "What do you mean by session storage in HTML5?",
          a:
          "HTML5 introduces the sessionStorage attribute which would be used by the sites to add data to the session storage, and it will be accessible to any page from the same site opened in that window i.e. session and as soon as you close the window, session would be lost."
        },
        {
          q: "What is HTML5?",
          a:
          "HTML5 is the latest version of HTML and XHTML with new features like Drawing, Animation, Video and Audio etc. It is used to solve some common structural problems encountered with HTML 4.1. It gives more flexibility to both the web developers, the web designers and enables more exciting and interactive websites in addition to more powerful and efficient applications. The HTML 5 <! doctype html> is recognized by all modern browsers."
        },
        {
          q: "How you can Use Modernizr in HTML 5?",
          a:
          "Modernizr is an open source JavaScript library that helps to detect features of HTML5 and CSS3. The good thing about the Modernizr JS is that we can download this depending on the requirements. In other words, if an application needs to check for only few features of HTML5 and CSS3 then select those features and download the file. That JavaScript file will contain only the source code for the selected features."
        },
        {
          q: "What are HTML5 Semantic Elements?",
          a:
          "HTML5 introduced elements with a meaning. A Semantic Element helps the developer and the browser to understand its meaning. There are two types of Semantic Elements: 1.Semantic: These elements clearly define their content like <form>, <img>, <table> and so on. 2. Non-semantic: These elements have no definition, they dont define anything about their content like <span> and <div>."
        },
        {
          q: "What is the advantage of collapsing white space?",
          a:
          "White spaces are blank sequence of space characters, which is actually treated as a single space character in html. Because the browser collapses multiple space into a single space, you can indent lines of text without worrying about multiple spaces. This enables you to organize the html code into a much more readable format."
        },
        {
          q:
          "Can attribute values be set to anything or are there specific values that they accept?",
          a:
          "Some attribute values can be set to only predefined values. Other attributes can accept any numerical value that represents the number of pixels for a size."
        },
        {
          q: "How do you insert a copyright symbol on a browser page?",
          a:
          "To insert the copyright symbol, you need to type &copy; or & #169; in an HTML file."
        },
        {
          q: "How are active links different from normal links?",
          a:
          "The default color for normal and active links is blue. Some browsers recognize an active link when the mouse cursor is placed over that link; others recognize active links when the link has the focus. Those that don’t have a mouse cursor over that link is considered a normal link."
        },
        {
          q:
          "Can I specify fractional weight values such as 670 or 973 for font weight?",
          a:
          "Implementation largely depends on the browser, but the standard does not support fractional weight values. Acceptable values must end with two zeroes."
        },
        {
          q:
          "What is the hierarchy that is being followed when it comes to style sheets?",
          a:
          "If a single selector includes three different style definitions, the definition that is closest to the actual tag takes precedence. Inline style takes priority over embedded style sheets, which takes priority over external style sheets."
        },
        {
          q: "Can several selectors with class names be grouped together?",
          a:
          "You can define several selectors with the same style definition by separating them with commas. This same technique also works for selectors with class names."
        },
        {
          q: "What happens if you open the external CSS file in a browser?",
          a:
          "If you try to open the external CSS file in a browser, the browser cannot open the file, because the file has a different extension. The only way to use an external CSS file is to reference it using <link/> tag within another html document."
        },
        {
          q:
          "What happens if the number of values in the rows or cols attribute doesn’t add up to 100 percent?",
          a:
          "The browser sizes the frames relative to the total sum of the values. If the cols attribute is set to 100%, 200%, the browser displays two vertical frames with the second being twice as big as the first."
        },
        {
          q: "What is a marquee?",
          a:
          "A marquee tag (Syntax: <marquee>...</marquee>) allows you to put a scrolling text in a web page."
        },
        {
          q:
          "In addition to <br> tags, what other tags separate sections of text?",
          a: " <p> and <blockquote> "
        },
        {
          q: "What input type is used to upload a file?",
          a: 'type="file" is used to upload a file'
        },
        {
          q: 'What is <input type="hidden">?',
          a:
          '<input> elements of type "hidden" let web developers include data that cannot be seen or modified by users when a form is submitted. Hidden inputs are completely invisible in the rendered page, and there is no way to make it visible in the page\'s content.'
        },
        {
          q: "What's the difference between HTML and XHTML?",
          a:
          "XHTML (Extensible HyperText Markup Language) is a family of XML markup languages that mirror or extend versions of the widely used Hypertext Markup Language (HTML), the language in which web pages are written. Extended version of HTML that is stricter and XML-based."
        },
        {
          q: "What is the use of data- attribute?",
          a:
          "It allows you to store extra information/ data in the DOM. You can write valid html with embedded private data. You can easily access data attribute by using javascript and hence a lot of libraries like knockout uses it."
        },
        {
          q: "How can u highlight text in html?",
          a: "Use <mark> tag"
        }
      ]
    },

    // ReactJS

    {
      title: "React",
      image: "../style/images/react.svg",

      cards: [
        {
          q:
          "What part of your application does react focus on - the model, view or controller?",
          a: "The view."
        },
        {
          q:
          "React uses a HTML-like syntax that lets you create create JavaScript objects. What is it called?",
          a: "JSX"
        },
        {
          q:
          "What tool can you use to transform the HTML-like syntax that react uses to JavaScript?",
          a: "Babel"
        },
        {
          q:
          "React uses a technique to limit direct manipulation of the DOM and improve performance. What is it called?",
          a: "It is called Virtual DOM."
        },
        {
          q:
          "Where can you define a components initial state when you use the ES6 class syntax?",
          a: "The components constructor."
        },
        {
          q:
          "Where can you define a components initial state when you use React.createClass",
          a: "The getInitialState method."
        },
        {
          q:
          "Which package should you require/import in addition to the react package to render a React component in an existing DOM element of your HTML file?",
          a: "react-dom"
        },
        {
          q:
          "Which lifecycle function should you use to set default property values?",
          a: "The getDefaultProps method."
        },
        {
          q:
          "Which lifecycle method is invoked immediately a component is added to the DOM?",
          a: "The componentDidMount method."
        },
        {
          q: "Whats the date of the first React commit on GitHub?",
          a: "May 26th, 2013."
        },
        {
          q:
          "What is the name of the concept that allows to render children into a DOM node that exists outside the DOM hierarchy of the parent component?",
          a:
          "This concept is called Portals and is available starting with React version 16."
        },
        {
          q: "What is the advantage of rendering React on a server?",
          a:
          "A complete HTML representation of the requested site is send from the server to the browser. This enables better SEO (search engine optimization)."
        },
        {
          q: "Which way are unknown DOM attributes handled?",
          a:
          "Starting with React version 16, unknown DOM attributes on the JSX will end up in the DOM. Previous versions of React had a whitelist of allowed attributes and simply ignored these unknown attributes."
        },
        {
          q:
          "There are two types of components in React. Name them and explain the difference!",
          a:
          "Class-based components can manage their own state and implement lifecycle methods, while stateless functional components can not, but offer easier testability and improved performance."
        },
        {
          q: "Which company created and maintains React?",
          a: "Facebook"
        },
        {
          q: "What is redux?",
          a:
          "Redux is a library that allows predictable state management in JavaScript apps. It is often used in large-scale React apps."
        },
        {
          q: "How should a Component state be changed?",
          a:
          "A component state should never be mutated directly as it does not cause a render. The proper way is to use the setState() method provided by React."
        },
        {
          q: "What are some notable companies using React?",
          a:
          "Facebook, Netflix, Discord, eBay, PayPal, Spotify (Web Player) and many more."
        },
        {
          q: "Is flux the same thing as redux?",
          a:
          "No ! Flux is a data-flow design pattern while redux is a javascript library which implements a way of using the flux pattern."
        }
      ]
    },

    // Angular

    {
      title: "AngularJS",
      image: "../style/images/ang.png",

      cards: [
        {
          q: "How are AngularJS Expressions generally written?",
          a:
          "AngularJS expressions can be written inside double braces: {{ expression }}. Eg: <p>{{ 2 + 2 }}" +
          "</p> will display <p>4</p>"
        },
        {
          q: "How can you transform all string in expression to uppercase?",
          a:
          'Use Expression with Pipe, Eg: <p>{{ "this is frontendtrivia" | uppercase }}</p> will display ' +
          "<p>THIS IS FRONTENDTRIVIA</p>"
        },
        {
          q: "How to loop in html with AngularJS?",
          a:
          'use ng-repeat directive. Eg <span ng-repeat="bar in [0,2,3,4]">{{ bar * 2 }}</span>'
        },
        {
          q: "What is two-way data binding?",
          a: "Any changes to Model will reflect to view(DOM) and vice versa"
        },
        {
          q: "How to do a two-way data binding?",
          a: "{{ variableName }}"
        },
        {
          q: "What is one-way data binding?",
          a:
          "After the model have been merge with template, any changes to model will NOT reflect to view"
        },
        {
          q: "When to use one-way data binding and two-way data binding?",
          a:
          "One way data binding is useful when you done want the display to change from model/view and also improve performance. While 2-way data binding is great if you want to keep track of data changes (input form)"
        },
        {
          q: 'How to format a date "MM/dd/yyyy" ?',
          a: '{{ dateVariable | date:"MM/dd/yyyy }}'
        },
        {
          q: "How to grab an element in AngularJS?",
          a:
          'use "angular.element("selector")", it is the same like jquery $("selector")'
        },
        {
          q: "There is Best Style Guide that you can follow them",
          a: "John Papa and Todd Motto style guide, check them out later"
        },
        {
          q: "How to reuse the same html to all over your app?",
          a: 'By using "directive" or "ng-include"'
        },
        {
          q: "What is the different between ng-if and ng-show",
          a:
          "ng-if will remove/inserted element into the dom, while ng-show utilise css class with ng-show"
        },
        {
          q: "How to you mange different routes in your app",
          a: "Use library call UI-Router"
        },
        {
          q:
          "What does the OLOO pattern stands for and where is it used in AngularJS",
          a:
          "OLOO (Objects Linked to Other Objects) a.k.a. Prototype Inheritance is used with controllers scope hierarchy tree (the root of a tree is $rootScope)"
        },
        {
          q: "Does the 'ng-if' directive create new scope?",
          a:
          "Yes, the 'ng-if' directive creates new scope, which is linked to parent scope within 'Prototype Inheritance'"
        },
        {
          q: "How to trigger AngularJS digest loop",
          a: "By calling '$apply' method on scope object reference"
        },
        {
          q:
          "Is it possible to access AngularJS scope object reference via browser console?",
          a: "Yes, it is. Example: angular.element('element selector').scope()"
        },
        {
          q:
          "When and why sometimes we have to trigger change detection manually in AngularJS?",
          a:
          "It's because framework is not aware of changes being made by i.e. third party libraries, which work out of framework environment. Examples: in setTimeout callback or XHR response callback"
        },
        {
          q:
          "Can we access scope object reference via directive's compile function in AngularJS?",
          a:
          "No, it's not possible. We can change the template of directive, but scope is accessible only within pre/post-link functions"
        },
        {
          q:
          "How to compile HTML string to DOM element and link it with given scope using AngularJS",
          a: "We can use $compile service provided by framework"
        },
        {
          q:
          "What's the difference between 'pre-link' and 'post-link' in AngularJS ",
          a:
          "'Post-link' (as an opposite of 'Pre-link') function is called after the child directives and controllers are compiled and initialized by framework"
        },
        {
          q:
          "Is the 'link' function of directive configuration in AngularJS same as 'pre-link' function?",
          a: "Nope, it's equal to 'post-link' function"
        },
        {
          q: "How to use bind once in AngularJS",
          a: "By putting '::' in front of template expression"
        },
        {
          q: "What is the purpose of using bind once in AngularJS?",
          a:
          "In short: performance. After value is resolved, it is no longer watched by framework, which keeps our digest loop more performant"
        },
        {
          q: "How in general does the Dependency Injection work in AngularJS?",
          a:
          "It parses your factory function to string, then using regular expression retrives function arguments, searches for proper providers by name and injects them into your factory function"
        }
      ]
    },

    // Javascript: 3

    {
      title: "Javascript: 3",
      image: "../style/images/js.png",
      cards: [
        {
          q: "What is Date object in JavaScript?",
          a:
          "The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ).\nOnce a Date object is created, a number of methods allow you to operate on it. Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, using either local time or UTC (universal, or GMT) time."
        },
        {
          q: 'How do you explicitly set "this" inside the callback?',
          a:
          "Bind the callback's this to the value of its function. i.e. \n function SampleConstructor(data, transport) { \n this.data = data; \n var boundFunc = (function() {\n alert(this.data);\n}).bind(this);"
        },
        {
          q: "How do cookies translate/move to the browser?",
          a:
          "cookies: information are stored as name-value pairs, it will generate unique id for each visitor of the website and stores them in your machine and later retreive it."
        }
      ]
    },

    // Vue

    {
      title: "Vue",
      image: "../style/images/vue.png",

      cards: [
        {
          q:
          "What part of your application does Vue focus on - the model, view or controller?",
          a: "The view, hence the name"
        },
        {
          q: "How are Vue templates written?",
          a:
          "Vue supports plain HTML templates (as well as templates written in languages such as Pug/Jade), but like React, it also supports JSX."
        },
        {
          q: "What are Single File Components?",
          a:
          "Single File Components are components where the component's template, JavaScript, and styles are contained in a single .vue file."
        },
        {
          q: "How are Single File Components loaded?",
          a: "Using build tools such as Webpack or Browserify."
        },
        {
          q:
          "Vue uses a technique to limit direct manipulation of the DOM and improve performance. What is it called?",
          a: "It is called Virtual DOM."
        },
        {
          q: "Where can you define a component's initial state?",
          a: "The component's data object."
        },
        {
          q: "How is data passed down to child components in Vue?",
          a: "Using props, which are defined using a component's props object."
        },
        {
          q: "What is the advantage of rendering Vue on a server?",
          a:
          "A complete HTML representation of the requested site is send from the server to the browser. This enables better SEO (search engine optimization) and subjective performance."
        },
        {
          q: "Who created and maintains Vue?",
          a:
          "An international team of independent developers, not backed by any single company."
        },
        {
          q: "What is Vuex?",
          a:
          "Vuex is a library that allows predictable state management in JavaScript apps, similar to Redux. It is often used in large-scale Vue apps."
        },
        {
          q: "How can you add the same functionality to multiple components in Vue?",
          a: "Using mixins, which can contain any component options"
        },
        {
          q: "What are the different ways to add properties to a component in Vue?",
          a: "- Passing props from the parent\n- The data object\n- Computed properties"
        }
      ]
    },

    // DOM

    {
      title: "DOM Fundamentals",
      image: "../style/images/dom.png",
      cards: [
        {
          q: "What DOM stands for?",
          a: "Document Object Model"
        },
        {
          q: "What is the DOM?",
          a: "A programming API for documents, it closely resembles the document's structure"
        }
      ]
    },

    // ES6

    {
      title: "ES6",
      image: "../style/images/js.png",

      cards: [
        {
          q:
          "In what two circumstances does comparing two variables with Object.is different from the results of strict equality (the so-called triple equals or ===)?",
          a:
          "NaN compared to itself\nNaN === Nan // false\nObject.is(NaN, NaN) // true\n\n-0 compared to 0\n-0 === 0 // true\nObect.is(-0, 0) // false"
        },
        {
          q:
          "What is the output of the following code using a new block-scoped 'let' statement? Does it differ from using 'var'?\nfor (let i = 0; i < 3; i++) {\nsetTimeout(function() {\nconsole.log(i)\n}, 0)\n}",
          a:
          "Using 'let' will log the following to the console:\n0\n1\n2\nUsing 'var' will instead log\n3\n3\n3"
        },
        {
          q:
          "Do the following arrow functions both return the same value?\n(x, y) => x + y\n(x, y) => { x + y; }",
          a:
          "No, an arrow function without curly braces may only contain one expression and will return the result of evaluating that expression (i.e. x + y). The body of an arrow function with curly braces (like a normal function) requires an explicit 'return' statement or will return undefined"
        },
        {
          q:
          "How would you return an object literal from an arrow function with no curly braces?",
          a:
          "By wrapping it in parentheses, e.g.:\n(x, y) => ({ sum: x + y })\nThis prevents ambiguity over the meaning of the curly braces."
        },
        {
          q: "What is the difference between the spread and the rest operator?",
          a:
          "The spread operator expands an array to replace zero or more arguments (in function calls) or elements (in array literals)\ne.g. myFunc(...[0, 1, 2]) is equivalent to myFunc(0, 1, 2).\nThe rest operator does the opposite, collecting multiple values into a single array."
        },
        {
          q:
          "As the syntax for rest/spread looks identical, how does a JavaScript engine know which you're using?",
          a:
          "Spread is used on the left-hand side of assignment ('receiving' a value) and rest, on the right-hand side ('passing' a value). For instance:\n[a, ...b]=[0,1,2]; //rest: b=[1, 2]\na=[0, ...b];  //spread: a=[0,1,2]\nThe same is true of function definition (rest) and function invocation (spread)."
        },
        {
          q:
          "What is the output of following code? Explain. \n{ \nconsole.log(x);\nlet x = 4;\n}",
          a:
          "Reference error is caused. This is more often termed as TDZ ( Temporal Dead Zone), it occurs in case of let/const variables when they are declared but not yet initialized. Point to be noted, let/const variables are hoisted, but they are not initialized automatically."
        },
        {
          q: "How is this keyword scoped in arrow function?",
          a:
          "this keyword is scoped lexically inside arrow function, this, arguments, super keywords all are lexically scoped in arrow function."
        },
        {
          q: "Give 4 examples of standard built in Javascript iterables.",
          a: "1.Arrays\n2.Strings\n3.Generators\n4.Typed Arrays / Collections"
        }
      ]
    },

    // ES8

    {
      title: "ES8",
      image: "../style/images/js.png",

      cards: [
        {
          q:
          "What is the output of the following code? What happens if we don't pass a second parameter?\n'1234'.padStart(5, '>')",
          a:
          "The output will be '>1234'.\nThe second parameter of the padding function is used as padding, not passing it will default to padding with spaces"
        },
        {
          q:
          "The Object.values function receives an object and returns an array of only the values.\nWhat would be the output of Object.values({8: 'a', 3: 'b', 0: 'c'})?",
          a:
          "The output is: ['c', 'b', 'a']. When we use numeric keys, the values will be returned in numerical ascending order."
        },
        {
          q:
          "What type of error will be raised if we call a function like this: foo(1, 2, 3,)? Note the trailing comma.\nCould we define a function to expect a trailing comma?",
          a:
          "You can have trailing commas both in function calls and function definitions.\n\nfoo(1, 2, 3,) and\nfunction foo(a, b, c,) {}\nwill both work."
        },
        {
          q:
          "The 'await' operator waits until a promise is resolved before returning the resolve value.\nWhat is the only context in which this operator can be used?",
          a:
          "It can only be used inside an asynchronous function.\nDefined as 'async function myAsyncFunction() {}', asynchronous functions return promises and can wait for promises to be fulfilled by using the 'await' operator."
        },
        {
          q: "Bonus: what is the correct name for ES8?",
          a:
          "ECMAScript 2017. ES8 is the popular (albeit incorrect) way of calling it, as this is the 8th edition, released in June 2017."
        }
      ]
    },

    // JavaScript: Intermediate

    {
      title: "JavaScript: Intermediate",
      image: "../style/images/js.png",

      cards: [
        {
          q: "What is the difference between window and document?",
          a:
          "Window is that global object that holds global variables, global functions, location, history everything is under it. Document is a property of the window object, document represents the DOM and DOM is the object oriented representation of the html markup"
        },
        {
          q: "Does document.onload and window.onload fire at the same time?",
          a:
          "window.onload is fired when DOM is ready and all the contents including images, css, scripts, sub-frames, etc. finished loaded. document.onload is fired when DOM (DOM tree built from markup code within the document)is ready which can be prior to images and other external content is loaded."
        },
        {
          q: "Is attribute similar to property?",
          a:
          "attributes are just like attribute in your html tag (XML style attribute) inside the starting tag. html attributes are exposed to the DOM via property. Hence, a property is created when DOM is parsed for each attribute in the html tag. If you change an attribute only the value of the property will change. However, the value of attribute will remain same."
        },
        {
          q:
          "How come, I can't use forEach or similar array methods on a NodeList?",
          a:
          "Array has different prototype object than nodeList. forEach, map, etc are on array.prototype which doesn't exist in the NodeList.prototype object. Hence, you don't have forEach on a nodeList"
        },
        {
          q: "How would you add a class to an element by query selector?",
          a: "Just get the element and add the classname to the classlist."
        },
        {
          q:
          "How could you prevent a click on an anchor from going to the link?",
          a:
          "preventDefault() inside event handler. However, this doesnt stop further propagation."
        },
        {
          q: "How could you stop further propagation of an event?",
          a: "Call event.stopPropagation();"
        },
        {
          q: "Can you remove an event handler from an element?",
          a: "Yes. target.removeEventListener('click', handler)"
        },
        {
          q: "How could I check whether an event is cancelable or not?",
          a:
          " Use event.cancelable to get true or false return. However, you have to preventDefault() to prevent the event."
        },
        {
          q:
          "Is there anything you have to be careful when using node.cloneNode()?",
          a: "While cloning, make sure you didnt duplicate ID."
        },
        {
          q: "What are different nodeTypes?",
          a:
          "ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc"
        },
        {
          q: "How can you get all the texts in a web page?",
          a:
          "The easiest way to get all the text is to get the innerText of body tag. document.body.innerText;"
        },
        {
          q: "What are different nodeTypes?",
          a:
          "ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc"
        },
        {
          q: "What are different nodeTypes?",
          a:
          "ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc"
        },
        {
          q: "what is the use of var and let?",
          a:
          "var:(function scope) gets scoped to the current function, while let:(block scope) gets scoped to the current block"
        }
      ]
    },

    //SASS: Basics

    {
      title: "SASS: Basics",
      image: "../style/images/sass.png",
      cards: [
        {
          q: "What character is used when defining a variable?",
          a: "The dollar sign ($)."
        },
        {
          q: "When would using a variable be useful?",
          a:
          "Using a variable is valuable when you need to use the same value in multiple places, such as with brand colours, or when defining number values for a property."
        },
        {
          q: "What is a partial?",
          a:
          "A partial is a separate file that contains pieces of your CSS. It helps you to modularize your CSS, and greatly improves maintainability."
        },
        {
          q:
          "When defining a partial, you have to use a special character in a filename. What is that character?",
          a: "The underscore (_)."
        },
        {
          q: "What does it mean to import one SCSS file into another?",
          a:
          "Importing means that the CSS from one file will be present and usable in another file. This is particularly helpful when defining a top level SCSS file that contains all of your styles."
        },
        {
          q:
          "In SASS you can import one .scss file in another. Do you need to write the extension of file too?",
          a:
          "No, SASS is smart enough to resolve the file without it's extension."
        },
        {
          q: "What does it mean to extend in SCSS?",
          a:
          "Extending lets you share a set of CSS properties from one selector to another. The advantage of doing this is it allows you to keep your CSS very dry, and reusable."
        },
        {
          q: "What is a mixin?",
          a:
          ' A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. To create a mixin you use the @mixin directive and give it a name, like so "@mixin border-radius($radius)"'
        },
        {
          q: "What general problem are mixins solving?",
          a:
          "Reusability of groups of CSS declarations that you want to reuse throughout your site."
        },
        {
          q: "After you have defined a mixin, how do you use it?",
          a: 'Using the keyword "@include"'
        },
        {
          q:
          "Let's say you have a .message class. You want to create .error and .success classes which inherits from .message. Which keyword and functionality will you use?",
          a: "The @extend keyword and inheritance."
        },
        {
          q: "SASS is able to do basic math operations. Which are these?",
          a:
          "Addition, substraction, multiplication, division by numbers and percents."
        },
        {
          q: "What is the difference between functions and mixins in SASS?",
          a: "Mixins return styles. Functions return values."
        },
        {
          q: "What does nesting mean in SASS?",
          a:
          "Nesting allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice."
        },
        {
          q: "How can you denote a placeholder selector in SASS?",
          a:
          "'SASS supports a special type of selector called a \"placeholder selector\". These look like class and id selectors, except the # or . is replaced by %.'"
        },
        {
          q: "What types of loops does SASS support?",
          a: "SASS supports three types of loops, @for, @each, and @while."
        }
      ]
    },

    // webpack

    {
      title: "Webpack Basic Concepts",
      image: "../style/images/webpack.png",
      cards: [
        {
          q: "Which script is automatically generated by webpack?",
          a: "dist/bundle.js Webpack is going to create this file"
        },
        {
          q: "What are the commands for watch in webpacks?",
          a: "webpack --watch or webpack -w"
        },
        {
          q: "Webpacks primary language?",
          a: "JavaScript"
        },
        {
          q: "which preprocessor loader refer?",
          a: "preprocessor such as Sass, or a transpiler such as Babel"
        }
      ]
    },
    {
      title: "jQuery: Basics",
      image: "../style/images/jquery.svg",
      cards: [
        {
          q: "How do you access jQuery methods?",
          a: "$ or jQuery can be used to access jQuery methods."
        },
        {
          q: "How do you select elements by class?",
          a:
          "Similarly to CSS, jQuery selectors for class elements start with a period [.] followed by its name."
        },
        {
          q: "How do you watch for events on elements?",
          a:
          "jQuery's .on() and individual event methods such as .click(), .change(), .keypress(), etc."
        },
        {
          q: "How do you add elements to the DOM?",
          a:
          "jQuery has many ways to add elements to the DOM. .append(), .prepend(), .after(), and .before() all accept strings of HTML to be added to the DOM."
        },
        {
          q: "How can I change the style of an element with jQuery?",
          a:
          'jQuery has methods such as $(element).attr("style","...") and $(element).css() to make style changes, as well as $(element).addClass() and $(element).removeClass() or $(element).toggleClass()'
        },
        {
          q: "What does the $ sign mean in jQuery?",
          a:
          "The $ is equal to the function named jQuery. It is used typically as shorthand notation (e.g. $('.someClass') is the same as jQuery('.someClass'))."
        },
        {
          q: "What is the difference between jQuery and JavaScript?",
          a:
          "JavaScript is a programming language, jQuery is an optional library written in JavaScript and used in JavaScript projects."
        },
        {
          q:
          "What is the purpose of the following line of code: $(document).ready(function() { /* your code here */ }); ?",
          a:
          "jQuery cannot manipulate/interact with elements if they are not first loaded in the browser. This code will ensure the webpage is fully loaded before any jQuery code will run."
        },
        {
          q: "What does $('p') do?",
          a: "Selects all paragraph elements in the document."
        },
        {
          q: "What does $('#foo') do?",
          a: "Selects all elements with the id 'foo'."
        },
        {
          q: "What does $('.even') do?",
          a: "Selects all elements with the class 'even'."
        },
        {
          q: "What does $('div.bar') do?",
          a: "Selects all div elements that have the class 'bar'."
        },
        {
          q: "What does $('div#target') do?",
          a: "Selects all div elements that have the id 'target'."
        },
        {
          q: "How would you select the first paragraph element in a document?",
          a: "$('p:first')"
        },
        {
          q: "How would you select the last paragraph element in a document?",
          a: "$('p:last')"
        },
        {
          q: "How would you select all even rows in a table?",
          a: "$('tr:even')"
        },
        {
          q:
          "With jQuery, how would you make a copy of an element with id foo?",
          a: "$('#foo').clone()"
        },
        {
          q:
          "How would you change all paragraph elements to use the color red?",
          a: "$('p').css('color', 'red')"
        },
        {
          q: "What is the difference between find and children methods?",
          a:
          "Find method finds an element through all levels of the DOM tree but children method find only for single level."
        }
      ]
    },
    {
      title: "General Front End Questions",
      image: "../style/images/w3c.svg",
      cards: [
        {
          q:
          "What are some of the main concerns that a front end developer must address?",
          a:
          "Markup, style, cross-browser functionality, accessibility and performance."
        },
        {
          q:
          "What happens when you enter a website url into your web browser and press enter?",
          a:
          "The browser gets the IP address of the url you entered (either through DNS cache or DNS lookup).\n" +
          "It then connects to the server and sends an HTTP request. When an HTTP response is returned, the browser renders the HTML content that was returned."
        },
        {
          q: "What is JSON and what does it stand for?",
          a:
          "JSON stands for JavaScript Object Notation.\n" +
          "It is a syntax for storing and exchanging data between a browser and a server."
        },
        {
          q: "What is an API and what are they used for?",
          a:
          "API stands for Application Programming Interface. They are used for two programs or services to exchange information with one another.\n" +
          "In web dev, they are typically used to fetch data from a remote resource using HTTP calls to the API."
        },
        {
          q: "What is responsive design?",
          a:
          "Responsive Web design is the approach that suggests that design and development should respond to the user's behavior and environment based on screen size, platform and orientation."
        },
        {
          q: "What are some ways to speed up a website?",
          a:
          "Minimize HTTP requests, enable browser caching, reduce redirects and optimize/compress images."
        }
      ]
    },

    {
      title: "Git",
      image: "../style/images/git_logo.png",
      cards: [
        {
          q:
          "Displays paths:\n- that have differences between the index file and the current HEAD commit.\n- that have differences between the workspace and index file.\n- in the workspace that aren't tracked by git.",
          a: "git status"
        },
        {
          q:
          "Prints the synopsis and a list of the most commonly used commands.",
          a: "git help"
        },
        {
          q:
          "Creates an empty Git repository - basically a .git directory with subdirectories for objects, refs/heads, refs/tags, and template files. An initial HEAD file that references the HEAD of the master branch is also created.",
          a: "git init"
        },
        {
          q:
          "Clones a repository into a newly created directory, creates remote-tracking branches for each branch in the cloned repository (visible using git branch -r), and creates and checks out an initial branch that is forked from the cloned repository’s currently active branch.",
          a: "git clone "
        },
        {
          q:
          "Updates the index using the current content found in the working tree, to prepare the content staged for the next commit.",
          a: "git add"
        },
        {
          q:
          "Show changes between:\n- the working tree and the index or a tree.\n- the index and a tree.\n- two trees.\n- two blob objects.\n- two files on disk.",
          a: "git diff"
        },
        {
          q:
          "Stores the current contents of the index in a new commit along with a log message from the user describing the changes.",
          a: "git commit"
        },
        {
          q:
          "Remove files from the index, or from the working tree and the index.",
          a: "git rm"
        },
        {
          q: "Move or rename a file, directory or symlink.",
          a: "git mv"
        },
        {
          q:
          "If --list is given, or if there are no non-option arguments, existing branches are listed; the current branch will be highlighted with an asterisk.",
          a: "git branch"
        },
        {
          q:
          "Updates files in the working tree to match the version in the index or the specified tree. If no paths are given, it will also update HEAD to set the specified branch as the current branch.",
          a: "git checkout"
        },
        {
          q:
          "Incorporates changes from the named commits (since the time their histories diverged from the current branch) into the current branch.",
          a: "git merge"
        },
        {
          q:
          "When you want to record the current state of the working directory and the index, but want to go back to a clean working directory. The command saves your local modifications away and reverts the working directory to match the HEAD commit.",
          a: "git stash"
        },
        {
          q:
          "Fetch branches and/or tags (collectively, 'refs') from one or more other repositories, along with the objects necessary to complete their histories.",
          a: "git fetch"
        },
        {
          q:
          "Incorporates changes from a remote repository into the current branch. In its default mode, it's shorthand for git fetch followed by git merge FETCH_HEAD",
          a: "git pull"
        },
        {
          q:
          "Updates remote refs using local refs, while sending objects necessary to complete the given refs.",
          a: "git push"
        },
        {
          q:
          "Manage the set of repositories ('remotes') whose branches you track.",
          a: "git remote"
        },
        {
          q: "Shows the commit logs.",
          a: "git log"
        },
        {
          q: "How do you check for branches with a specific commit?",
          a: "git branch --contains <commit-hash>"
        },
        {
          q:
          "How do you check remote and local branches for a specific commit?",
          a: "git branch -r --contains <commit-hash>"
        },
        {
          q:
          "How do you choose a commit from one branch and apply it to another?",
          a: "git cherry-pick <commit-hash>"
        },
        {
          q: "How do you revert a commit?",
          a: "git revert <commit-hash>"
        },
        {
          q: "How do you add an upstream repository?",
          a: "git remote add upstream <url-to-remote-repository>"
        },
        {
          q:
          "Resets HEAD of current branch to the specified state, when used with --hard <SHA>, deletes all commits up to a specified commit.",
          a: "git reset"
        },
        {
          q:
          "Reapply commits on currently checked out branch on top of base tip from provided branch name",
          a: "git rebase"
        },
        {
          q:
          "Applies a provided patch file to current branch which was created using git diff.",
          a: "git apply"
        },
        {
          q: "What Abstract Data Type from Computer Science is GIT an implementation of?",
          a: "A Directed Acyclic Graph."
        }
      ]
    },
    {
      title: "Angular 2",
      image: "../style/images/ang.png",
      cards: [
        {
          q:
          "What language is Angular 2 based on?",
          a: "TypeScript − The newer version of Angular is based on TypeScript. This is a superset of JavaScript and is maintained by Microsoft."
        },
        {
          q:
          "What are Angular 2 modules?",
          a: "Modules are used in Angular JS to put logical boundaries in your application. Hence, instead of coding everything into one application, you can instead build everything into separate modules to separate the functionality of your application."
        },
        {
          q:
          "What are Angular 2 components?",
          a: "Each application consists of Components. Each component is a logical boundary of functionality for the application. You need to have layered services, which are used to share the functionality across components."
        },
        {
          q:
          "What is Angular CLI?",
          a: "Command Line Interface (CLI) can be used to create our Angular JS application. It also helps in creating a unit and end-to-end tests for the application."
        }
      ]
    }
  ];
}
