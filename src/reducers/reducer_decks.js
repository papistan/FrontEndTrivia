export default function() {
	return [
		{firstCard: true,
    currentDeck: [],
    currentCard: false,
    title: 'Javascript', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', 

			cards: [ 
				{q: 'What is JavaScript?', a: 'lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML'
				},
				{q: 'Name some of the JavaScript features', a: 'a) lightweight, interpreted programming language thing, b)designed for creating network-centric applications, c) open and cross-platform, d) complementary to and integrated with HTML'
				},
				{q: 'How can you create an Object in JavaScript?', a: 'using the object literal as follows − \n var emp = {\nname: "Zara",\nage: 10\n};'
				},
				{q: 'How can you read properties of an Object in JavaScript?', a: 'Using the dot notation as follows − Getting:\nemp.name  // ==> Zara\nSetting:\nemp.name = "Daisy"  // <== Daisy'
				},
				{q: 'How can you create an Array in JavaScript?', a: 'You can define arrays using the array literal as follows −\nvar x = [];\nvar y = [1, 2, 3, 4, 5];'
				},
				{q: 'How to read elements of an array in JavaScript?', a: 'An array has a length property that is useful for iteration. We can read elements of an array as follows −\nvar x = [1, 2, 3, 4, 5];\nfor (var i = 0; i < x.length; i++) {\n// Do something with x[i]\n}'
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
				{q: 'What is closure?', a: 'Closures are created whenever a variable that is defined outside the current scope is accessed from within some inner scope.'
				},
				{q: 'Give an example of closure?', a: 'Following example shows how the variable counter is visible within the create, increment, and print functions, but not outside of them −\nfunction create() {\nvar counter = 0;\nreturn {\nincrement: function() {\ncounter++;\n},\n\nprint: function() {\nconsole.log(counter);\n}\n}\n}\nvar c = create();\nc.increment();\nc.print();     // ==> 1\n'
				},
				{q: 'Which built-in method returns the character at the specified index?', a: 'charAt()'
				},
				{q: 'Which built-in method combines the text of two strings and returns a new string?', a: 'concat()'
				},
				{q: 'Which built-in method calls a function for each element in the array?', a: 'forEach()'
				},
				{q: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?', a: 'indexOf()'
				},
				{q: 'Which built-in method returns the length of the string?', a: 'length()'
				},
				{q: 'Which built-in method removes the last element from an array and returns that element?', a: 'pop()'
				},
				{q: 'Which built-in method adds one or more elements to the end of an array and returns the new length of the array?', a: 'push()'
				},
				{q: 'Which built-in method reverses the order of the elements of an array?', a: 'reverse()'
				},
				{q: 'Which built-in method sorts the elements of an array?', a: 'sort()'
				},
				{q: 'Which built-in method returns the characters in a string beginning at the specified location?', a: 'substr()'
				},
				{q: 'Which built-in method returns the calling string value converted to lower case?', a: 'toLowerCase()'
				},
				{q: 'Which built-in method returns the calling string value converted to upper case?', a: 'toUpperCase()'
				},
				{q: 'Which built-in method returns the string representation of the numbers value?', a: 'toString() '
				},
				{q: 'What are the variable naming conventions in JavaScript?', a: 'No JavaScript reserved keywords \n not start with a numeral (0-9). They must begin with a letter or the underscore character. For example, 123test is an invalid variable name but _123test is a valid one. JavaScript variable names are case sensitive. For example, Name and name are two different variables.'
				}
			]
		},
		
		{title: 'Javascript: Advanced', image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
			cards: [ 
				{q: 'What is Date object in JavaScript?', a: 'The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ).\nOnce a Date object is created, a number of methods allow you to operate on it. Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, using either local time or UTC (universal, or GMT) time.'
				},
				{q: 'More questions on the way or submit on github', a: ''
				}
			]},
		
		{title: 'CSS', image: 'http://www.mixed-up.com/markb/about/visual/CSS3_Logo.svg',
			cards: [ 
				{q: 'What is CSS?', a: 'Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.'
				},
				{q: 'What are the components of a CSS Style?', a: 'A style rule is made of three parts −\nSelector − A selector is an HTML tag at which a style will be applied. This could be any tag like <h1> or <table> etc.\nProperty − A property is a type of attribute of HTML tag. Put simply, all the HTML attributes are converted into CSS properties. They could be color, border etc.\nValue − Values are assigned to properties. For example, color property can have value either red or #F1F1F1 etc.'
				},
				{q: 'What is type selector?', a: 'matches the name of an element type. To give a color to all level 1 headings −\nh1 {\ncolor:\n#36CFFF;\n}'
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
		
		{title: 'HTML', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png',
			cards: [ 
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
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				},
				{q: '', a: ''
				}
			]},

		{title: 'JQuery', image: 'http://precision-software.com/wp-content/uploads/2014/04/jQurery.gif',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
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

		{title: 'React', image: 'https://cdn.worldvectorlogo.com/logos/react.svg',
			cards: [ 
				{q: 'What is closure', a: 'a thing'
				},
				{q: 'What is function', a: 'a thing'
				},
				{q: 'What is variable', a: 'a thing'
				}
			]}
	]
}