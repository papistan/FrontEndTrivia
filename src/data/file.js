import JavascriptFoundations from './javascript/foundations';
import JavascriptCommonMethods from './javascript/commonMethods';
import JavascriptCommonEvents from './javascript/commonEventHandler';
import CSS from './css/general';
import CSSPseudoClass from './css/pseudoClass';
import CSSAnimations from './css/animations';
import CSSFlex from './css/flex';

export function deckData() {

    return [
        JavascriptFoundations,
        JavascriptCommonMethods,
        JavascriptCommonEvents,
        CSS,
        CSSPseudoClass,
        CSSAnimations,
        CSSFlex,
        {
            title: 'HTML',
            image: '../style/images/html5.png',

            cards: [{
                q: 'What is "placeholder" attribute?',
                a: '<input> placeholder Attribute'
            },
                {
                    q: 'Choose the correct HTML element for the largest heading:',
                    a: '<h1>'
                },
                {
                    q: 'What is the correct HTML element for inserting a line break?',
                    a: '<br>'
                },
                {
                    q: 'What is the correct HTML for adding a background color?',
                    a: '<body style="background-color:yellow;">'
                },
                {
                    q: 'Choose the correct HTML element to define important text',
                    a: '<strong>'
                },
                {
                    q: 'Choose the correct HTML element to define emphasized text',
                    a: '<i>'
                },
                {
                    q: 'What is the correct HTML for creating a hyperlink?',
                    a: '<a href="http://example.com">W3Schools</a>'
                },
                {
                    q: 'How can you open a link in a new tab/browser window?',
                    a: '<a href="url" target="_blank">'
                },
                {
                    q: 'How can you make a numbered list?',
                    a: '<ol>'
                },
                {
                    q: 'How can you make a bulleted list?',
                    a: '<ul>'
                },
                {
                    q: 'What is the correct HTML for making a drop-down list?',
                    a: '<select>'
                },
                {
                    q: 'How to do HTML comments?',
                    a: '<!-- and end with -->'
                },
                {
                    q: 'Which HTML element defines the title of a document?',
                    a: '<title>'
                },
                {
                    q: 'Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',
                    a: ' alt'
                },
                {
                    q: 'Which doctype is correct for HTML5?',
                    a: '<!DOCTYPE html>'
                },
                {
                    q: 'What is the correct HTML element for playing video files?.',
                    a: '<video>'
                },
                {
                    q: 'What is the correct HTML element for playing audio files?',
                    a: 'use the <audio> element'
                },
                {
                    q: 'In HTML, onblur and onfocus are ?',
                    a: 'Style attributes'
                },
                {
                    q: 'What is "placeholder" attribute?',
                    a: 'HTML5 introduced a new attribute called placeholder. This attribute on <input> and <textarea> elements provides a hint to the user of what can be entered in the field. The placeholder text must not contain carriage returns or line-feeds.'
                },
                {
                    q: 'What is the purpose of autofocus attribute in HTML5?',
                    a: 'This is a simple one-step pattern, easily programmed in JavaScript at the time of document load, automatically focus one particular form field.'
                },
                {
                    q: 'What are Web Workers?',
                    a: 'Web Workers do all the computationally expensive tasks without interrupting the user interface and typically run on separate threads. Web Workers allow for long-running scripts that are not interrupted by scripts that respond to clicks or other user interactions, and allows long tasks to be executed without yielding to keep the page responsive.'
                },
                {
                    q: 'What do you mean by local storage in HTML5?',
                    a: 'HTML5 introduces the localStorage attribute which would be used to access a pages local storage area without no time limit and this local storage will be available whenever you would use that page.'
                },
                {
                    q: 'What is the purpose of output tag in HTML5?',
                    a: 'HTML5 introduced a new element <output> which is used to represent the result of different types of output, such as output written by a script.'
                },
                {
                    q: 'What is the purpose of canvas tag in HTML5?',
                    a: 'HTML5 element <canvas> gives you an easy and powerful way to draw graphics using JavaScript. It can be used to draw graphs, make photo compositions or do simple (and not so simple) animations.'
                },
                {
                    q: 'What do you mean by session storage in HTML5?',
                    a: 'HTML5 introduces the sessionStorage attribute which would be used by the sites to add data to the session storage, and it will be accessible to any page from the same site opened in that window i.e. session and as soon as you close the window, session would be lost.'
                },
                {
                    q: 'What is HTML5?',
                    a: 'HTML5 is the latest version of HTML and XHTML with new features like Drawing, Animation, Video and Audio etc. It is used to solve some common structural problems encountered with HTML 4.1. It gives more flexibility to both the web developers, the web designers and enables more exciting and interactive websites in addition to more powerful and efficient applications. The HTML 5 <! doctype html> is recognized by all modern browsers.'
                },
                {
                    q: 'How you can Use Modernizr in HTML 5?',
                    a: 'Modernizr is an open source JavaScript library that helps to detect features of HTML5 and CSS3. The good thing about the Modernizr JS is that we can download this depending on the requirements. In other words, if an application needs to check for only few features of HTML5 and CSS3 then select those features and download the file. That JavaScript file will contain only the source code for the selected features.'
                },
                {
                    q: 'What are HTML5 Semantic Elements?',
                    a: 'HTML5 introduced elements with a meaning. A Semantic Element helps the developer and the browser to understand its meaning. There are two types of Semantic Elements: 1.Semantic: These elements clearly define their content like <form>, <img>, <table> and so on. 2. Non-semantic: These elements have no definition, they dont define anything about their content like <span> and <div>.'
                },
                {
                    q: 'What is the advantage of collapsing white space?',
                    a: 'White spaces are blank sequence of space characters, which is actually treated as a single space character in html. Because the browser collapses multiple space into a single space, you can indent lines of text without worrying about multiple spaces. This enables you to organize the html code into a much more readable format.'
                },
                {
                    q: 'Can attribute values be set to anything or are there specific values that they accept?',
                    a: 'Some attribute values can be set to only predefined values. Other attributes can accept any numerical value that represents the number of pixels for a size.'
                },
                {
                    q: 'How do you insert a copyright symbol on a browser page?',
                    a: 'To insert the copyright symbol, you need to type &copy; or & #169; in an HTML file.'
                },
                {
                    q: 'How are active links different from normal links?',
                    a: 'The default color for normal and active links is blue. Some browsers recognize an active link when the mouse cursor is placed over that link; others recognize active links when the link has the focus. Those that don’t have a mouse cursor over that link is considered a normal link.'
                },
                {
                    q: 'Can I specify fractional weight values such as 670 or 973 for font weight?',
                    a: 'Implementation largely depends on the browser, but the standard does not support fractional weight values. Acceptable values must end with two zeroes.'
                },
                {
                    q: 'What is the hierarchy that is being followed when it comes to style sheets?',
                    a: 'If a single selector includes three different style definitions, the definition that is closest to the actual tag takes precedence. Inline style takes priority over embedded style sheets, which takes priority over external style sheets.'
                },
                {
                    q: 'Can several selectors with class names be grouped together?',
                    a: 'You can define several selectors with the same style definition by separating them with commas. This same technique also works for selectors with class names.'
                },
                {
                    q: 'What happens if you open the external CSS file in a browser?',
                    a: 'If you try to open the external CSS file in a browser, the browser cannot open the file, because the file has a different extension. The only way to use an external CSS file is to reference it using <link/> tag within another html document.'
                },
                {
                    q: 'What happens if the number of values in the rows or cols attribute doesn’t add up to 100 percent?',
                    a: 'The browser sizes the frames relative to the total sum of the values. If the cols attribute is set to 100%, 200%, the browser displays two vertical frames with the second being twice as big as the first.'
                },
                {
                    q: 'What is a marquee?',
                    a: 'A marquee tag (Syntax: <marquee>...</marquee>) allows you to put a scrolling text in a web page.'
                },
                {
                    q: 'In addition to <br> tags, what other tags separate sections of text?',
                    a: ' <p> and <blockquote> '
                }
            ]
        },


        // ReactJS

        {

            title: 'React',
            image: '../style/images/react.svg',

            cards: [{
                q: 'What part of your application does react focus on - the model, view or controller?',
                a: 'The view.'
            },
                {
                    q: 'React uses a HTML-like syntax that lets you create create JavaScript objects. What is it called?',
                    a: 'JSX'
                },
                {
                    q: 'What tool can you use to transform the HTML-like syntax that react uses to JavaScript?',
                    a: 'Babel'
                },
                {
                    q: 'React uses a technique to limit direct manipulation of the DOM and improve performance. What is it called?',
                    a: 'It is called Virtual DOM.'
                },
                {
                    q: 'Where can you define a components initial state when you use the ES6 class syntax?',
                    a: 'The components constructor.'
                },
                {
                    q: 'Where can you define a components initial state when you use React.createClass',
                    a: 'The getInitialState method.'
                },
                {
                    q: 'Which package should you require/import in addition to the react package to render a React component in an existing DOM element of your HTML file?',
                    a: 'react-dom'
                },
                {
                    q: 'Which lifecycle function should you use to set default property values?',
                    a: 'The getDefaultProps method.'
                },
                {
                    q: 'Which lifecycle method is invoked immediately a component is added to the DOM?',
                    a: 'The componentDidMount method.'
                },
                {
                    q: 'Whats the date of the first React commit on GitHub?',
                    a: 'May 26th, 2013.'
                },
                {
                    q: 'What is the name of the concept that allows to render children into a DOM node that exists outside the DOM hierarchy of the parent component?',
                    a: 'This concept is called Portals and is available starting with React version 16.'
                },
                {
                    q: 'What is the advantage of rendering React on a server?',
                    a: 'A complete HTML representation of the requested site is send from the server to the browser. This enables better SEO (search engine optimization).'
                },
                {
                    q: 'Which way are unknown DOM attributes handled?',
                    a: 'Starting with React version 16, unknown DOM attributes on the JSX will end up in the DOM. Previous versions of React had a whitelist of allowed attributes and simply ignored these unknown attributes.'
                },
                {
                    q: 'There are two types of components in React. Name them and explain the difference!',
                    a: 'Class-based components can manage their own state and implement lifecycle methods, while stateless functional components can not, but offer easier testability and improved performance.'
                },
                {
                    q: 'Which company created and maintains React?',
                    a: 'Facebook'
                },
                {
                    q: 'What is redux?',
                    a: 'Redux is a library that allows predictable state management in JavaScript apps. It is often used in large-scale React apps.'
                }
            ]

        },


        // Angular

        {
            title: 'Angular',
            image: '../style/images/ang.png',


            cards: [{
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
                {
                    q: 'When to use one-way data binding and two-way data binding?',
                    a: 'One way data binding is useful when you done want the display to change from model/view and also improve performance. While 2-way data binding is great if you want to keep track of data changes (input form)'
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
                {
                    q: 'Does the \'ng-if\' directive create new scope?',
                    a: 'Yes, the \'ng-if\' directive creates new scope, which is linked to parent scope within \'Prototype Inheritance\''
                },
                {
                    q: 'How to trigger AngularJS digest loop',
                    a: 'By calling \'$apply\' method on scope object reference'
                },
                {
                    q: 'Is it possible to access AngularJS scope object reference via browser console?',
                    a: 'Yes, it is. Example: angular.element(\'element selector\').scope()'
                },
                {
                    q: 'When and why sometimes we have to trigger change detection manually in AngularJS?',
                    a: 'It\'s because framework is not aware of changes being made by i.e. third party libraries, which work out of framework environment. Examples: in setTimeout callback or XHR response callback'
                },
                {
                    q: 'Can we access scope object reference via directive\'s compile function in AngularJS?',
                    a: 'No, it\'s not possible. We can change the template of directive, but scope is accessible only within pre/post-link functions'
                },
                {
                    q: 'How to compile HTML string to DOM element and link it with given scope using AngularJS',
                    a: 'We can use $compile service provided by framework'
                },
                {
                    q: 'What\'s the difference between \'pre-link\' and \'post-link\' in AngularJS ',
                    a: '\'Post-link\' (as an opposite of \'Pre-link\') function is called after the child directives and controllers are compiled and initialized by framework'
                },
                {
                    q: 'Is the \'link\' function of directive configuration in AngularJS same as \'pre-link\' function?',
                    a: 'Nope, it\'s equal to \'post-link\' function'
                },
                {
                    q: 'How to use bind once in AngularJS',
                    a: 'By putting \'::\' in front of template expression'
                },
                {
                    q: 'What is the purpose of using bind once in AngularJS?',
                    a: 'In short: performance. After value is resolved, it is no longer watched by framework, which keeps our digest loop more performant'
                },
                {
                    q: 'How in general does the Dependency Injection work in AngularJS?',
                    a: 'It parses your factory function to string, then using regular expression retrives function arguments, searches for proper providers by name and injects them into your factory function'
                }
            ]
        },


        // Javascript: 3

        {
            title: 'Javascript: 3',
            image: '../style/images/js.png',

            cards: [{
                q: 'What is Date object in JavaScript?',
                a: 'The Date object is a datatype built into the JavaScript language. Date objects are created with the new Date( ).\nOnce a Date object is created, a number of methods allow you to operate on it. Most methods simply allow you to get and set the year, month, day, hour, minute, second, and millisecond fields of the object, using either local time or UTC (universal, or GMT) time.'
            },
                {
                    q: 'How do you explicitly set "this" inside the callback?',
                    a: 'Bind the callback\'s this to the value of its function. i.e. \n function SampleConstructor(data, transport) { \n this.data = data; \n var boundFunc = (function() {\n alert(this.data);\n}).bind(this);'
                },
                {
                    q: 'How do cookies translate/move to the browser?',
                    a: 'cookies: information are stored as name-value pairs, it will generate unique id for each visitor of the website and stores them in your machine and later retreive it.'
                },
            ]
        },

        // Vue

        {
            title: 'Vue',
            image: '../style/images/vue.png',

            cards: [{
                q: 'Question',
                a: 'answer'
            },
                {
                    q: 'Question',
                    a: 'answer'
                },
                {
                    q: 'Question',
                    a: 'answer'
                },
            ]
        },

        // DOM


        {
            title: 'DOM Fundamentals',
            image: '../style/images/dom.png',
            cards: [{
                q: 'Question',
                a: 'answer'
            },
                {
                    q: 'Question',
                    a: 'answer'
                },
                {
                    q: 'Question',
                    a: 'answer'
                },
            ]
        },

        // ES6

        {
            title: 'ES6',
            image: '../style/images/js.png',

            cards: [{
                q: 'In what two circumstances does comparing two variables with Object.is differ from the results of strict equality (the so-called triple equals or ===)?',
                a: 'NaN compared to itself\nNaN === Nan // false\nObject.is(NaN, NaN) // true\n\n-0 compared to 0\n-0 === 0 // true\nObect.is(-0, 0) // false'
            },
                {
                    q: 'What is the output of the following code using a new block-scoped \'let\' statement? Does it differ from using \'var\'?\nfor (let i = 0; i < 3; i++) {\nsetTimeout(function() {\nconsole.log(i)\n}, 0)\n}',
                    a: 'Using \'let\' will log the following to the console:\n0\n1\n2\nUsing \'var\' will instead log\n3\n3\n3'
                },
                {
                    q: 'Do the following arrow functions both return the same value?\n(x, y) => x + y\n(x, y) => { x + y; }',
                    a: 'No, an arrow function without curly braces may only contain one expression and will return the result of evaluating that expression (i.e. x + y). The body of an arrow function with curly braces (like a normal function) requires an explicit \'return\' statement or will return undefined'
                },
                {
                    q: 'How would you return an object literal from an arrow function with no curly braces?',
                    a: 'By wrapping it in parentheses, e.g.:\n(x, y) => ({ sum: x + y })\nThis prevents ambiguity over the meaning of the curly braces.'
                },
                {
                    q: 'What is the difference between the spread and the rest operator?',
                    a: 'The spread operator expands  an array to replace zero or more arguments (in function calls) or elements (in array literals)\ne.g. myFunc(...[0, 1, 2]) is equivalent to myFunc(0, 1, 2).\nThe rest operator does the opposite, collecting multiple values into a single array.'
                },
                {
                    q: 'As the syntax for rest/spread looks identical, how does a JavaScript engine know which you\'re using?',
                    a: 'Spread is used on the left-hand side of assignment (\'receiving\' a value) and rest, on the right-hand side (\'passing\' a value). For instance:\n[a, ...b]=[0,1,2]; //rest: b=[1, 2]\na=[0, ...b];  //spread: a=[0,1,2]\nThe same is true of function definition (rest) and function invocation (spread).'
                },
                {
                    q: 'What is the output of following code? Explain. \n{ \nconsole.log(x);\nlet x = 4;\n}',
                    a: 'Reference error is caused. This is more often termed as TDZ ( Temporal Dead Zone), it occurs in case of let/const variables when they are declared but not yet initialized. Point to be noted, let/const variables are hoisted, but they are not initialized automatically.'
                }
            ]
        },

// JavaScript: Intermediate

        {
            title: 'JavaScript: Intermediate',
            image: '../style/images/js.png',

            cards: [{
                q: 'What is the difference between window and document?',
                a: 'Window is that global object that holds global variables, global functions, location, history everything is under it. Document is a property of the window object, document represents the DOM and DOM is the object oriented representation of the html markup'
            },
                {
                    q: 'Does document.onload and window.onload fire at the same time?',
                    a: 'window.onload is fired when DOM is ready and all the contents including images, css, scripts, sub-frames, etc. finished loaded. document.onload is fired when DOM (DOM tree built from markup code within the document)is ready which can be prior to images and other external content is loaded.'
                },
                {
                    q: 'Is attribute similar to property?',
                    a: 'attributes are just like attribute in your html tag (XML style attribute) inside the starting tag. html attributes are exposed to the DOM via property. Hence, a property is created when DOM is parsed for each attribute in the html tag. If you change an attribute only the value of the property will change. However, the value of attribute will remain same.'
                },
                {
                    q: 'How come, I can\'t use forEach or similar array methods on a NodeList?',
                    a: 'Array has different prototype object than nodeList. forEach, map, etc are on array.prototype which doesn\'t exist in the NodeList.prototype object. Hence, you don\'t have forEach on a nodeList'
                },
                {
                    q: 'How would you add a class to an element by query selector?',
                    a: 'Just get the element and add the classname to the classlist.'
                },
                {
                    q: 'How could you prevent a click on an anchor from going to the link?',
                    a: 'preventDefault() inside event handler. However, this doesnt stop further propagation.'
                },
                {
                    q: 'How could you stop further propagation of an event?',
                    a: 'Call event.stopPropagation();'
                },
                {
                    q: 'Can you remove an event handler from an element?',
                    a: 'Yes. target.removeEventListener(\'click\', handler)'
                },
                {
                    q: 'How could I check whether an event is cancelable or not?',
                    a: ' Use event.cancelable to get true or false return. However, you have to preventDefault() to prevent the event.'
                },
                {
                    q: 'Is there anything you have to be careful when using node.cloneNode()?',
                    a: 'While cloning, make sure you didnt duplicate ID.'
                },
                {
                    q: 'What are different nodeTypes?',
                    a: 'ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc'
                },
                {
                    q: 'How can you get all the texts in a web page?',
                    a: 'The easiest way to get all the text is to get the innerText of body tag. document.body.innerText;'
                },
                {
                    q: 'What are different nodeTypes?',
                    a: 'ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc'
                },
                {
                    q: 'What are different nodeTypes?',
                    a: 'ELEMENT_NODE (1), TEXT_NODE (3), COMMENT_NODE(8), DOCUMENT_NODE(9), DOCUMENT_TYPE_NODE(10), DOCUMENT_FRAGMENT_NODE(11), etc'
                },
                {
                    q: 'what is the use of var and let?',
                    a: 'var:(function scope) gets scoped to the current function, while let:(block scope) gets scoped to the current block'
                }

            ]
        },

//SASS: Basics

        {
            title: 'SASS: Basics',
            image: '../style/images/sass.png',
            cards: [
                {
                    q: 'What character is used when defining a variable?',
                    a: 'The dollar sign ($).'
                },
                {
                    q: 'When would using a variable be useful?',
                    a: 'Using a variable is valuable when you need to use the same value in multiple places, such as with brand colours, or when defining number values for a property.'
                },
                {
                    q: 'What is a partial?',
                    a: 'A partial is a separate file that contains pieces of your CSS. It helps you to modularize your CSS, and greatly improves maintainability.'
                },
                {
                    q: 'When defining a partial, you have to use a special character in a filename. What is that character?',
                    a: 'The underscore (_).'
                },
                {
                    q: 'What does it mean to import one SCSS file into another?',
                    a: 'Importing means that the CSS from one file will be present and usable in another file. This is particularly helpful when defining a top level SCSS file that contains all of your styles.'
                },
                {
                    q: 'In SASS you can import one .scss file in another. Do you need to write the extension of file too?',
                    a: 'No, SASS is smart enough to resolve the file without it\'s extension.'
                },
                {
                    q: 'What does it mean to extend in SCSS?',
                    a: 'Extending lets you share a set of CSS properties from one selector to another. The advantage of doing this is it allows you to keep your CSS very dry, and reusable.'
                },
                {
                    q: 'What is a mixin?',
                    a: ' A mixin lets you make groups of CSS declarations that you want to reuse throughout your site. You can even pass in values to make your mixin more flexible. To create a mixin you use the @mixin directive and give it a name, like so "@mixin border-radius($radius)"'
                },
                {
                    q: 'What general problem are mixins solving?',
                    a: 'Reusability of groups of CSS declarations that you want to reuse throughout your site.'
                },
                {
                    q: 'After you have defined a mixin, how do you use it?',
                    a: 'Using the keyword "@include"'
                },
                {
                    q: 'Let\'s say you have a .message class. You want to create .error and .success classes which inherits from .message. Which keyword and functionality will you use?',
                    a: 'The @extend keyword and inheritance.'
                },
                {
                    q: 'SASS is able to do basic math operations. Which are these?',
                    a: 'Addition, substraction, multiplication, division by numbers and percents.'
                },
                {
                    q: 'What is the difference between functions and mixins in SASS?',
                    a: 'Mixins return styles. Functions return values.'
                },
                {
                    q: 'What does nesting mean in SASS?',
                    a: 'Nesting allows you to nest your CSS selectors in a way that follows the same visual hierarchy of your HTML. Be aware that overly nested rules will result in over-qualified CSS that could prove hard to maintain and is generally considered bad practice.'
                },
                {
                    q: 'How can you denote a placeholder selector in SASS?',
                    a: '\'SASS supports a special type of selector called a "placeholder selector". These look like class and id selectors, except the # or . is replaced by %.\''
                },
                {
                    q: 'What types of loops does SASS support?',
                    a: 'SASS supports three types of loops, @for, @each, and @while.'
                }
            ]
        },

// webpack

        {
            title: 'Webpack Basic Concepts',
            image: '../style/images/webpack.png',
            cards: [
                {
                    q: 'Which script is automatically generated by webpack?',
                    a: 'dist/bundle.js Webpack is going to create this file'
                },
                {
                    q: 'What are the commands for watch in webpacks?',
                    a: 'webpack --watch or webpack -w'
                },
                {
                    q: 'Webpacks primary language?',
                    a: 'JavaScript'
                },
                {
                    q: 'which preprocessor loader refer?',
                    a: 'preprocessor such as Sass, or a transpiler such as Babel'
                }
            ]
        }

    ]
}