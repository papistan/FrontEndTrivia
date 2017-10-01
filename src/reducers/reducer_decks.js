export default function() {
	return [
		{firstCard: true,
    currentDeck: [],
    currentCard: false,
    
// Javascript: Foundations 

    title: 'Javascript: Foundations', image: '../style/images/js.png', 

			cards: [ 
				{q: 'What do we call data types copied by VALUE?', a: 'Primitives (or primitive types)'
				},
				{q: 'What do we call data types copied by REFERENCE?', a: 'Objects'
				},
				{q: 'What are the five primitives?', a: 'Boolean, null, undefined, string, and number'
				},
				{q: 'What are the three object data types?', a: 'Array, Function, and Object'
				},
				{q: 'How can you read properties of an Object in JavaScript?', a: 'Using the dot notation − Getting:\nemp.name  // ==> Zara\nSetting:\nemp.name = "Daisy"  // <== Daisy'
				},
				{q: 'How to read elements of an array in JavaScript?', a: 'x[i]'
				},
				{q: 'Difference between call() and apply()?', a: 'CALL() takes a regular listing of parameters and APPLY() requires the parameters to be in an array.'
				},
				{q: 'What is a named function in JavaScript? How to define a named function?', a: 'A named function has a name when it is defined. A named function can be defined using function keyword as follows −\nfunction named(){\n// do some stuff here\n}'
				},
				{q: 'How many types of functions JavaScript supports?', a: 'A function in JavaScript can be either named or anonymous.'
				},
				{q: 'How to define a anonymous function?', a: 'An anonymous function can be defined in similar way as a normal function but it would not have any name.'
				},
				{q: 'Can you assign a anonymous function to a variable?', a: 'Yes'
				},
				{q: 'Can you pass a anonymous function as an argument to another function?', a: 'Yes'
				},
				{q: 'What is arguments object in JavaScript?', a: 'Yes'
				},
				{q: 'What is the purpose of -this- operator in JavaScript?', a: 'always refers to the current context.'
				},
				{q: 'What is the purpose of -this- operator in JavaScript?', a: 'always refers to the current context.'
				},
				{q: 'What are the valid scopes of a variable in JavaScript?', a: 'The scope of a variable is the region of your program in which it is defined. JavaScript variable will have only two scopes.\n -Global Variables − A global variable has global scope which means it is visible everywhere in your JavaScript code.\n-Local Variables − A local variable will be visible only within a function where it is defined. Function parameters are always local to that function'
				},
				{q: 'Which type of variable among global and local, takes precedence over other if names are same?', a: 'A local variable takes precedence over a global variable with the same name.'
				},
				{q: 'What is callback?', a: 'A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.'
				},
        {q: 'Explain Lexical Scoping', a: 'Lexical Scoping describes how a parser resolves variable names when functions are nested. \nThe word "lexical" refers to the fact that lexical scoping uses the location where a variable is declared within the source code to determine where that variable is available. \nE.G. Nested functions have access to variables declared in their outer scope.'
        },
				{q: 'What is closure?', a: 'Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.'
				},
				{q: 'Give an example of closure?', a: 'Following example shows how the variable counter is visible within the create, increment, and print functions, but not outside of them −\nfunction create() {\nvar counter = 0;\nreturn {\nincrement: function() {\ncounter++;\n},\n\nprint: function() {\nconsole.log(counter);\n}\n}\n}\nvar c = create();\nc.increment();\nc.print();     // ==> 1\n'
				},
				{q: 'Adding a number and a string, result is...?', a: 'Coercion: converting a value from one type to another. This happens because JS is dynamically typed.'
				}
			]
		},


// Javascript: Common built-in methods

		{title: 'Javascript: Common built-in methods', image: '../style/images/js.png',
			cards: [ 
				{q: 'Returns the character at the specified index?', a: 'charAt()'
				},
				{q: 'Combines the text of two strings and returns a new string?', a: 'concat()'
				},
				{q: 'Calls a function for each element in the array?', a: 'forEach()'
				},
				{q: 'Returns the index within the calling String object of the first occurrence of the specified value?', a: 'indexOf()'
				},
				{q: 'Returns the length of the string?', a: 'length()'
				},
				{q: 'Removes the last element from an array and returns that element?', a: 'pop()'
				},
				{q: 'Adds one or more elements to the end of an array and returns the new length of the array?', a: 'push()'
				},
				{q: 'Reverses the order of the elements of an array?', a: 'reverse()'
				},
				{q: 'Sorts the elements of an array?', a: 'sort()'
				},
				{q: 'Returns the characters in a string beginning at the specified location?', a: 'substr()'
				},
				{q: 'Returns the calling string value converted to lower case?', a: 'toLowerCase()'
				},
				{q: 'Returns the calling string value converted to upper case?', a: 'toUpperCase()'
				},
				{q: 'Returns the string representation of the numbers value?', a: 'toString() '
				}
			]},


// CSS
		{title: 'CSS', image: '../style/images/css3.svg',
			cards: [ 
				{q: 'What is CSS?', a: 'Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.'
				},
				{q: 'What are the components of a CSS Style?', a: 'Selector − an HTML tag like <h1> or <table> \nProperty − attribute of HTML tag, ex. color, border \nValue − assigned to properties, ex. color property can have red or #F1F1F1'
				},
				{q: 'What is type selector?', a: 'matches the name of an element type. To give a color to all level 1 headings −\nh1 {\ncolor:\n#36CFFF;\n}'
				},
				{q: 'What is universal selector?', a: 'matches the name of any element type −\n* { \ncolor: #000000; \n}'
				},
				{q: 'What is Descendant Selector?', a: 'apply a style rule to a particular element only when it lies inside a particular element. As given in the following example, style rule will apply to <em> element only when it lies inside <ul> tag. \nul em {\ncolor: #000000; \n}'
				},
				{q: 'What is "Z-index"', a: 'The Z-index is a CSS property that sets the stacking order of elements. Elements with a greater z-index are stacked over elements with a lower z-index.'
				},
				{q: 'What is the purpose of a pseudo-class', a: 'Pseudo-clases specify a special state for selected elements\nExample -\n div:hover { \n/** set styles for when mouse is over div */ \n}'
				},
				{q: 'What is the difference between a class and an ID selector?', a: 'An id selector is used to style one specific element, but a class selector can be used to style multiple elements.'
				},
				{q: 'What are pseudo elements?', a: 'Pseudo-elements are a keyword added to selectors to style specific parts of the selected elements\nExample -\n p::first-line { \n /** Style the first line of the element red */ color: #F00; \n}'
				},
				{q: 'How can elements be fixed on the screen?', a: 'Using the property position: fixed;'
				},
				{q: 'What is the difference between an element whose position is fixed vs absolute?', a: 'A fixed position element has the position relative to the viewport. A absolutely positioned element has the position set relative to it\'s nearest positioned ancestor.'
				},
				{q: 'How are text or inline elements centered inside their parent element?', a: 'Using the property text-align: center'
				},
				{q: 'What is the difference between margin and padding?', a: 'Padding is the space between border and element contents, margin is the space between border and neighboring elements.'
				},
				{q: 'How can CSS styles be applied inline in HTML?', a: 'Using the style attribute on element tags.'
				},
				{q: 'How are background images set for an element?', a: 'Using background-image: url(\'path/to/image.png\')'
				},
				{q: 'How are CSS selectors grouped together', a: 'Using the comma (,) separator.'
				},
				{q: 'How can a font family be set throughout the page?', a: 'By applying the font-family property on the body tag -\nbody { \nfont-family: \'Comic Sans\'; \n}'
				},
				{q: 'How can the style of a list be changed?', a: 'Using the property list-style-type.'
				},
				{q: 'How are CSS stylesheets added to HTML pages?', a: 'Using the <link rel="stylesheet" href="path/to/style.css" type="text/css" />'
				},
				{q: 'What tag is used to internally add CSS styles to a HTML page?', a: 'The <style> tag'
				},
				{q: 'Which property used to change the color of text?', a: 'Using the property color'
				},
				{q: 'How is a background image set to be fixed?', a: 'Using the property background-attachment: fixed'
				},
				{q: 'What is the difference between width: 100% and width: 100vw?', a: 'The former sets the element width as that of the parent content area, whereas the latter sets the elements width to the width of the entire viewport'
				},
				{q: 'When setting a z-index to an element what other css atribute must also be set?', a: 'An element must have a display setting to utilize z-indexing'
				},
				{q: 'When using flex-box to create a responsive layout what atribute will allow a containers elemets to not break outside a set media query', a: 'Using flew-wrap will allow a given set of elements to break and re order when there parent container becomes too small'
				},
				{q: 'When laying out a number of variable sized containers, each with text inside, how can flex-box be used to align this text', a: 'Using align-items with the baseline attribute will position the elemnts inside there parent containers.'
				},
				{q: 'Can flex-box commands be chained or combined', a: 'Yes flex-grow | flex-shrink | flex-basis can be written as flex: 5 5 10%;'
				}
			]},

// HTML

		{title: 'HTML', image: '../style/images/html5.png',
			cards: [ 
				{q: 'What is "placeholder" attribute?', a: '<input> placeholder Attribute'
				},
				{q: 'Choose the correct HTML element for the largest heading:', a: '<h1>'
				},
				{q: 'What is the correct HTML element for inserting a line break?', a: '<br>'
				},
				{q: 'What is the correct HTML for adding a background color?', a: '<body style="background-color:yellow;">'
				},
				{q: 'Choose the correct HTML element to define important text', a: '<strong>'
				},
				{q: 'Choose the correct HTML element to define emphasized text', a: '<i>'
				},
				{q: 'What is the correct HTML for creating a hyperlink?', a: '<a href="http://example.com">W3Schools</a>'
				},
				{q: 'Which character is used to indicate an end tag?', a: '/'
				},
				{q: 'How can you open a link in a new tab/browser window?', a: '<a href="url" target="_blank">'
				},
				{q: 'How can you make a numbered list?', a: '<ol>'
				},
				{q: 'How can you make a bulleted list?', a: '<ul>'
				},
				{q: 'What is the correct HTML for making a drop-down list?', a: '<select>'
				},
				{q: 'How to do HTML comments?', a: '<!-- and end with -->'
				},
				{q: 'Which HTML element defines the title of a document?', a: '<title>'
				},
				{q: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?', a: ' alt'
				},
				{q: 'Which doctype is correct for HTML5?', a: '<!DOCTYPE html>'
				},
				{q: 'What is the correct HTML element for playing video files?.', a: '<video>'
				},
				{q: 'What is the correct HTML element for playing audio files?', a: 'use the <audio> element'
				},
				{q: 'In HTML, onblur and onfocus are ?', a: 'Style attributes'
         },
				{q: 'What is "placeholder" attribute?', a: 'HTML5 introduced a new attribute called placeholder. This attribute on <input> and <textarea> elements provides a hint to the user of what can be entered in the field. The placeholder text must not contain carriage returns or line-feeds.'
				},
				{q: 'What is the purpose of autofocus attribute in HTML5?', a: 'This is a simple one-step pattern, easily programmed in JavaScript at the time of document load, automatically focus one particular form field.'
				},
				{q: 'What are Web Workers?', a: 'Web Workers do all the computationally expensive tasks without interrupting the user interface and typically run on separate threads. Web Workers allow for long-running scripts that are not interrupted by scripts that respond to clicks or other user interactions, and allows long tasks to be executed without yielding to keep the page responsive.'
				},
				{q: 'What do you mean by local storage in HTML5?', a: 'HTML5 introduces the localStorage attribute which would be used to access a pages local storage area without no time limit and this local storage will be available whenever you would use that page.'
				},
				{q: 'What is the purpose of output tag in HTML5?', a: 'HTML5 introduced a new element <output> which is used to represent the result of different types of output, such as output written by a script.'
				},
				{q: 'What is the purpose of canvas tag in HTML5?', a: 'HTML5 element <canvas> gives you an easy and powerful way to draw graphics using JavaScript. It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.'
				},
				{q: 'What do you mean by session storage in HTML5?', a: 'HTML5 introduces the sessionStorage attribute which would be used by the sites to add data to the session storage, and it will be accessible to any page from the same site opened in that window i.e. session and as soon as you close the window, session would be lost.'
				},
				{q: 'What is HTML5?', a: 'HTML5 is the latest version of HTML and XHTML with new features like Drawing, Animation, Video and Audio etc. It is used to solve some common structural problems encountered with HTML 4.1. It gives more flexibility to both the web developers, the web designers and enables more exciting and interactive websites in addition to more powerful and efficient applications. The HTML 5 <! doctype html> is recognized by all modern browsers.'
				},
				{q: 'How you can Use Modernizr in HTML 5?', a: 'Modernizr is an open source JavaScript library that helps to detect features of HTML5 and CSS3. The good thing about the Modernizr JS is that we can download this depending on the requirements. In other words, if an application needs to check for only few features of HTML5 and CSS3 then select those features and download the file. That JavaScript file will contain only the source code for the selected features.'
				},
				{q: 'What are HTML5 Semantic Elements?', a: 'HTML5 introduced elements with a meaning. A Semantic Element helps the developer and the browser to understand its meaning. There are two types of Semantic Elements: 1.Semantic: These elements clearly define their content like <form>, <img>, <table> and so on. 2. Non-semantic: These elements have no definition, they dont define anything about their content like <span> and <div>.'
				},
				{q: 'What is the advantage of collapsing white space?', a: 'White spaces are blank sequence of space characters, which is actually treated as a single space character in html. Because the browser collapses multiple space into a single space, you can indent lines of text without worrying about multiple spaces. This enables you to organize the html code into a much more readable format.'
				},
				{q: 'Can attribute values be set to anything or are there specific values that they accept?', a: 'Some attribute values can be set to only predefined values. Other attributes can accept any numerical value that represents the number of pixels for a size.'
				},
				{q: 'How do you insert a copyright symbol on a browser page?', a: 'To insert the copyright symbol, you need to type &copy; or & #169; in an HTML file.'
				},
				{q: 'How are active links different from normal links?', a: 'The default color for normal and active links is blue. Some browsers recognize an active link when the mouse cursor is placed over that link; others recognize active links when the link has the focus. Those that don’t have a mouse cursor over that link is considered a normal link.'
				},
				{q: 'Can I specify fractional weight values such as 670 or 973 for font weight?', a: 'Implementation largely depends on the browser, but the standard does not support fractional weight values. Acceptable values must end with two zeroes.'
				},
				{q: 'What is the hierarchy that is being followed when it comes to style sheets?', a: 'If a single selector includes three different style definitions, the definition that is closest to the actual tag takes precedence. Inline style takes priority over embedded style sheets, which takes priority over external style sheets.'
				},
				{q: 'Can several selectors with class names be grouped together?', a: 'You can define several selectors with the same style definition by separating them with commas. This same technique also works for selectors with class names.'
				},
				{q: 'What happens if you open the external CSS file in a browser?', a: 'If you try to open the external CSS file in a browser, the browser cannot open the file, because the file has a different extension. The only way to use an external CSS file is to reference it using <link/> tag within another html document.'
				},
				{q: 'What happens if the number of values in the rows or cols attribute doesn’t add up to 100 percent?', a: 'The browser sizes the frames relative to the total sum of the values. If the cols attribute is set to 100%, 200%, the browser displays two vertical frames with the second being twice as big as the first.'

				}
			]},

// ReactJS

		{title: 'React', image: '../style/images/react.svg',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},


// Angular

		{title: 'Angular', image: '../style/images/ang.png',
			cards: [ 

				{
					q: 'How are AngularJS Expressions generally written?',
					a: 'AngularJS expressions can be written inside double braces: {{ expression }}. Eg: <p>{{ 2 + 2 }}' +
						'</p> will display <p>4</p>'
				},
				{
					q: 'How can you transform all string in expression to uppercase?',
					a: 'Use Expression with Pipe, Eg: <p>{{ "this is frontendtrivia" | uppercase }}</p> will display ' +
					   '<p>THIS IS FRONTENDTRIVIA</p>'
				},
				{
					q: 'How to loop in html with AngularJS?',
					a: 'use ng-repeat directive. Eg <span ng-repeat="bar in [0,2,3,4]">{{ bar * 2 }}</span>'
				},
				{
					q: 'What is two-way data binding?',
					a: 'Any changes to Model will reflect to view(DOM) and vice versa'
				},
				{
					q: 'How to do a two-way data binding?',
					a: '{{ variableName }}'
				},
				{
					q: 'What is one-way data binding?',
					a: 'After the model have been merge with template, any changes to model will NOT reflect to view'
				},
				{	q: 'When to use one-way data binding and two-way data binding?',
					a: 'One way data binding is usefull when you done want the display to be change from model/view and ' +
						'it also improve performance. While 2-way data binding is great if you want to keep track of ' +
					    'data changes (input form)'
				},
				{
					q: 'How to format a date "MM/dd/yyyy" ?',
					a: '{{ dateVariable | date:"MM/dd/yyyy }}'
				},
				{
					q: 'How to grab an element in AngularJS?',
					a: 'use "angular.element("selector")", it is the same like jquery $("selector")'
				},
				{
					q: 'There is Best Style Guide that you can follow them',
					a: 'John Papa and Todd Motto style guide, check them out later'
				},
				{
					q: 'How to reuse the same html to all over your app?',
					a: 'By using "directive" or "ng-include"'
				},
				{
					q: 'What is the different between ng-if and ng-show',
					a: 'ng-if will remove/inserted element into the dom, while ng-show utilise css class with ng-show'
				},
				{
					q: 'How to you mange different routes in your app',
					a: 'Use library call UI-Router'
        },
				{
          q: 'What does the OLOO pattern stands for and where is it used in AngularJS', 
          a: 'OLOO (Objects Linked to Other Objects) a.k.a. Prototype Inheritance is used with controllers scope hierarchy tree (the root of a tree is $rootScope)'
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},


// Javascript: 3

		{title: 'Javascript: 3', image: '../style/images/js.png',
			cards: [ 
				{q: 'What is Date object in JavaScript?', a: 'The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ).\nOnce a Date object is created, a number of methods allow you to operate on it. Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, using either local time or UTC (universal, or GMT) time.'
				},
				{q: 'How do cookies translate/move to the browser?', a: ''
				}
		]},

// Vue

		{title: 'Vue', image: '../style/images/vue.png',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				}
			]},

// DOM

		{title: 'DOM Fundamentals', image: '../style/images/dom.png',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				}
			]},

	// ES6

	{title: 'ES6', image: '../style/images/js.png',
	cards: [ 
		{q: 'In what two circumstances does comparing two variables with Object.is differ from the results of strict equality (the so-called triple equals or ===)?', a: 'NaN compared to itself\nNaN === Nan // false\nObject.is(NaN, NaN) // true\n\n-0 compared to 0\n-0 === 0 // true\nObect.is(-0, 0) // false'
		},
		{q: 'What is the output of the following code using a new block-scoped \'let\' statement? Does it differ from using \'var\'?\nfor (let i = 0; i < 3; i++) {\nsetTimeout(function() {\nconsole.log(i)\n}, 0)\n}', a: 'Using \'let\' will log the following to the console:\n0\n1\n2\nUsing \'var\' will instead log\n3\n3\n3'
		},
		{q: 'Do the following arrow functions both return the same value?\n(x, y) => x + y\n(x, y) => { x + y; }', a: 'No, an arrow function without curly braces may only contain one expression and will return the result of evaluating that expression (i.e. x + y). The body of an arrow function with curly braces (like a normal function) requires an explicit \'return\' statement or will return undefined'
		},
		{q: 'How would you return an object literal from an arrow function with no curly braces?', a: 'By wrapping it in parentheses, e.g.:\n(x, y) => ({ sum: x + y })\nThis prevents ambiguity over the meaning of the curly braces.'
		},
		{q: 'What is the difference between the spread and the rest operator?', a: 'The spread operator expands  an array to replace zero or more arguments (in function calls) or elements (in array literals)\ne.g. myFunc(...[0, 1, 2]) is equivalent to myFunc(0, 1, 2).\nThe rest operator does the opposite, collecting multiple values into a single array.'
		},
		{q: 'As the syntax for rest/spread looks identical, how does a JavaScript engine know which you\'re using?', a: 'Spread is used on the left-hand side of assignment (\'receiving\' a value) and rest, on the right-hand side (\'passing\' a value). For instance:\n[a, ...b]=[0,1,2]; //rest: b=[1, 2]\na=[0, ...b];  //spread: a=[0,1,2]\nThe same is true of function definition (rest) and function invocation (spread).'
		}
	]}
	
	]
}
