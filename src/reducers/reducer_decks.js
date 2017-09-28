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
				{q: 'What is "Z-index"', a: 'The z-index property in CSS controls the vertical stacking order of elements that overlap. As in, which one appears as if it is physically closer to you. z-index only effects elements that have a position value other than static (the default).'
				},
				{q: 'Differentiate Class selector from ID selector?', a: 'While an overall block is given to class selector, ID selector prefers only a single element differing from other elements. In other words, ID are uniques while classes are not. Its possible that an element has both class and ID.'
				},
				{q: 'What is Pseudo-elements ?', a: 'Pseudo-elements are used to add special effects to some selectors.  CSS in used to apply styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the document, then there is a feature available in CSS known as pseudo-elements. It will allow extra mark-up to the document without disturbing the actual document.'
				},
				{q: 'What happens if 100% width is used along with floats all across the page?', a: 'While making the float declaration, 1 pixel is added every time it is used in the form of the border, and   even more float is allowed thereafter.'
				},
				{q: 'Can default property value be restored through CSS? If yes, how?', a: 'n CSS, you cannot revert back to old values due to lack of default values. The property can be re- declared to get the default property.'
				},
				{q: 'What is contextual selector?', a: 'Selector used to select special occurrences of an element is called contextual selector. A space separates the individual selectors. Only the last element of the pattern is addressed in this kind of selector. For e.g.: TD P TEXT {color: blue}'
				},
				{q: 'Define Image sprites with context to CSS ?', a: 'When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the loading every image on a webpage consumes time, using image sprites lessens the time taken and gives information quickly.'
				},
				{q: 'How does Z index function?', a: 'Overlapping may occur while using CSS for positioning HTML elements. Z index helps in specifying the overlapping element. It is a number which can be positive or negative, the default value being zero.'
				},
				{q: 'Define float property of CSS?', a: 'By float property, the image can be moved to the right or the left along with the text to be wrapped around it. Elements before this property is applied do not change their properties.'
				},
				{q: 'What is graceful degradation?', a: 'In case the component fails, it will continue to work properly in the presence of a graceful degradation. The latest browser application is used when a webpage is designed. As it is not available to everyone, there is a basic functionality, which enables its use to a wider audience. In case the image is unavailable for viewing, text is shown with the alt tag.'
				},
				{q: 'What is progressive enhancement?', a: 'It’s an alternative to graceful degradation, which concentrates on the matter of the web. The functionality is same, but it provides an extra edge to users having the latest bandwidth. It has been into prominent use recently with mobile internet connections expanding their base.'
				},
				{q: 'What is Alternate Style Sheet?', a: 'Alternate Style Sheets allows the user to select the style in which the page is displayed using the view>page style menu. Through Alternate Style Sheet, user can see a multiple version of the page on their needs and preferences.'
				},
				{q: 'Differentiate Style Sheet concept from HTML?', a: 'While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover, style sheets have better browser capabilities and formatting options.'
				},
				{q: 'Comment on the Case-sensitivity of CSS ?', a: 'Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc is. Only when XML declarations along with XHTML DOCTYPE are being used on the page, CSS is case -sensitive.'
				},
				{q: 'Define Declaration block?', a: 'A catalog of directions within braces consisting of property, colon and value is called declaration block. e.g.: [property 1: value 3]'
				},
				{q: 'Why is it easy to insert a file by importing it?', a: 'mporting enables combining external sheets to be inserted in many sheets. Different files and sheets can be used to have different functions. Syntax: @import notation, used with <Style> tag.'
				},
				{q: 'Differentiate logical tags from physical tags?', a: 'While physical tags are also referred to as presentational mark-up, logical tags are useless for appearances, also Physical tags are newer versions while logical tags are old and concentrate on content.'
				},
				{q: 'Enlist the media types CSS allows? ', a: 'The design and customization of documents are rendered by media. By applying media control over the external style sheets, they can be retrieved and used by loading it from the network.'
				}
			]},

// HTML

		{title: 'HTML', image: '../style/images/html5.png',
			cards: [ 
				{q: 'What is "placeholder" attribute?', a: 'HTML5 introduced a new attribute called placeholder. This attribute on <input> and <textarea> elements provides a hint to the user of what can be entered in the field. The placeholder text must not contain carriage returns or line-feeds.'
				},
				{q: 'What is the purpose of 'autofocus' attribute in HTML5?', a: 'This is a simple one-step pattern, easily programmed in JavaScript at the time of document load, automatically focus one particular form field.'
				},
				{q: 'What are Web Workers?', a: 'Web Workers do all the computationally expensive tasks without interrupting the user interface and typically run on separate threads. Web Workers allow for long-running scripts that are not interrupted by scripts that respond to clicks or other user interactions, and allows long tasks to be executed without yielding to keep the page responsive.'
				},
				{q: 'What do you mean by local storage in HTML5?', a: 'HTML5 introduces the localStorage attribute which would be used to access a page's local storage area without no time limit and this local storage will be available whenever you would use that page.'
				},
				{q: 'What is the purpose of 'output' tag in HTML5?', a: 'HTML5 introduced a new element <output> which is used to represent the result of different types of output, such as output written by a script.'
				},
				{q: 'What is the purpose of 'canvas' tag in HTML5?', a: 'HTML5 element <canvas> gives you an easy and powerful way to draw graphics using JavaScript. It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.'
				},
				{q: 'What do you mean by session storage in HTML5?', a: 'HTML5 introduces the sessionStorage attribute which would be used by the sites to add data to the session storage, and it will be accessible to any page from the same site opened in that window i.e. session and as soon as you close the window, session would be lost.'
				},
				{q: 'What is HTML5?', a: 'HTML5 is the latest version of HTML and XHTML with new features like Drawing, Animation, Video and Audio etc. It is used to solve some common structural problems encountered with HTML 4.1. It gives more flexibility to both the web developers, the web designers and enables more exciting and interactive websites in addition to more powerful and efficient applications. The HTML 5 <! doctype html> is recognized by all modern browsers.'
				},
				{q: 'How you can Use Modernizr in HTML 5?', a: 'Modernizr is an open source JavaScript library that helps to detect features of HTML5 and CSS3. The good thing about the Modernizr JS is that we can download this depending on the requirements. In other words, if an application needs to check for only few features of HTML5 and CSS3 then select those features and download the file. That JavaScript file will contain only the source code for the selected features.'
				},
				{q: 'What are HTML5 Semantic Elements?', a: 'HTML5 introduced a new set of Semantic Elements. It help developers to define the structure of a page in an easy way. Semantic means 'meaning' and Semantic Element means elements with a meaning. A Semantic Element helps the developer and the browser to understand its meaning. There are two types of Semantic Elements: 1.Semantic: These elements clearly define their content like <form>, <img>, <table> and so on. 2. Non-semantic: These elements have no definition, they don't define anything about their content like <span> and <div>.'
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
			]}
	]
}
