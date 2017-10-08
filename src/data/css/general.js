export default {
    title: 'CSS',
    image: '../style/images/css3.svg',
    cards: [
        {
            q: 'What is CSS?',
            a: 'Cascading Style Sheets, fondly referred to as CSS, is a simple design language intended to simplify the process of making web pages presentable.'
        },
        {
            q: 'What are the components of a CSS Style?',
            a: 'Selector − an HTML tag like <h1> or <table> \nProperty − attribute of HTML tag, ex. color, border \nValue − assigned to properties, ex. color property can have red or #F1F1F1'
        },
        {
            q: 'What is type selector?',
            a: 'matches the name of an element type. To give a color to all level 1 headings −\nh1 {\ncolor:\n#36CFFF;\n}'
        },
        {
            q: 'What is universal selector?',
            a: 'matches the name of any element type −\n* { \ncolor: #000000; \n}'
        },
        {
            q: 'What is Descendant Selector?',
            a: 'apply a style rule to a particular element only when it lies inside a particular element. As given in the following example, style rule will apply to <em> element only when it lies inside <ul> tag. \nul em {\ncolor: #000000; \n}'
        },
        {
            q: 'What is "Z-index"',
            a: 'Z-index specifies the z-order of a positioned element and its descendants. If one element had a z-index of 0 and another had a z-index of 1, the element with a z-index of 1 would be above/overlapping the other element.'
        },
        {
            q: 'What is the Box Model',
            a: 'The Box Model is the term used for the CSS standard model used by a browser\'s rendering engine when laying out a document: each element is represented as a rectangular box.'
        },
        {
            q: 'What are preprocessor and postprocessors?',
            a: 'Preprocessors and postprocessors both modify and extend the behavior of CSS. Preprocessors are written in a different language (SASS, SCSS, LESS) that is then compiled to CSS. Post Processors (PostCSS) compile CSS and add additional properties to it - such as vendor prefixes.'
        },
        {
            q: 'What are vendor (or browser) prefixes?',
            a: 'These are a way for browsers to add support for new features before they are supported. They are particularly important when considering cross browser compatability. Some more common examples are: -webkit, -moz, and -ms'
        },
        {
            q: 'What is the purpose of a pseudo-class',
            a: 'Pseudo-classes specify a special state for selected elements\nExample -\n div:hover { \n/** set styles for when mouse is over div */ \n}'
        },
        {
            q: 'What is the difference between a class and an ID selector?',
            a: 'An id selector is used to style one specific element, but a class selector can be used to style multiple elements.'
        },
        {
            q: 'What are pseudo elements?',
            a: 'Pseudo-elements are a keyword added to selectors to style specific parts of the selected elements\nExample -\n p::first-line { \n /** Style the first line of the element red */ color: #F00; \n}'
        },
        {
            q: 'How can elements be fixed  on the screen?',
            a: 'Using the property position: fixed;'
        },
        {
            q: 'What is the difference between an element whose position is fixed vs absolute?',
            a: 'A fixed position element has the position relative to the viewport. A absolutely positioned element has the position set relative to it\'s nearest positioned ancestor.'
        },
        {
            q: 'How are text or inline elements centered inside their parent element?',
            a: 'Using the property text-align: center'
        },
        {
            q: 'What is the difference between margin and padding?',
            a: 'Padding is the space between border and element contents, margin is the space between border and neighboring elements.'
        },
        {
            q: 'How can CSS styles be applied inline in HTML?',
            a: 'Using the style attribute on element tags.'
        },
        {
            q: 'How are background images set for an element?',
            a: 'Using background-image: url(\'path/to/image.png\')'
        },
        {
            q: 'How are CSS selectors grouped together',
            a: 'Using the comma (,) separator.'
        },
        {
            q: 'How can a font family be set throughout the page?',
            a: 'By applying the font-family property on the body tag -\nbody { \nfont-family: \'Comic Sans\'; \n}'
        },
        {
            q: 'How can the style of a list be changed?',
            a: 'Using the property list-style-type.'
        },
        {
            q: 'How are CSS stylesheets added to HTML pages?',
            a: 'Using the <link rel="stylesheet" href="path/to/style.css" type="text/css" />'
        },
        {
            q: 'What tag is used to internally add CSS styles to a HTML page?',
            a: 'The <style> tag'
        },
        {
            q: 'Which property used to change the color of text?',
            a: 'Using the property color'
        },
        {
            q: 'How is a background image set to be fixed?',
            a: 'Using the property background-attachment: fixed'
        },
        {
            q: 'What is the difference between width: 100% and width: 100vw?',
            a: 'The former sets the element width as that of the parent content area, whereas the latter sets the elements width to the width of the entire viewport'
        },
        {
            q: 'When setting a z-index to an element what other css atribute must also be set?',
            a: 'An element must have a display setting to utilize z-indexing'
        },
        {
            q: 'When using flex-box to create a responsive layout what atribute will allow a containers elemets to not break outside a set media query',
            a: 'Using flew-wrap will allow a given set of elements to break and re order when there parent container becomes too small'
        },
        {
            q: 'When laying out a number of variable sized containers, each with text inside, how can flex-box be used to align this text',
            a: 'Using align-items with the baseline attribute will position the elemnts inside there parent containers.'
        },
        {
            q: 'Can flex-box commands be chained or combined',
            a: 'Yes flex-grow | flex-shrink | flex-basis can be written as flex: 5 5 10%;'
        },
        {
            q: 'Differentiate Class selector from ID selector?',
            a: 'While an overall block is given to class selector, ID selector prefers only a single element differing from other elements. In other words, ID are uniques while classes are not. Its possible that an element has both class and ID.'
        },
        {
            q: 'What is Pseudo-elements?',
            a: 'Pseudo-elements are used to add special effects to some selectors.  CSS in used to apply styles in HTML mark-up. In some cases when extra mark-up or styling is not possible for the document, then there is a feature available in CSS known as pseudo-elements. It will allow extra mark-up to the document without disturbing the actual document.'
        },
        {
            q: 'What happens if 100% width is used along with floats all across the page?',
            a: 'While making the float declaration, 1 pixel is added every time it is used in the form of the border, and   even more float is allowed thereafter.'
        },
        {
            q: 'Can default property value be restored through CSS? If yes, how?',
            a: 'n CSS, you cannot revert back to old values due to lack of default values. The property can be re- declared to get the default property.'
        },
        {
            q: 'What is contextual selector?',
            a: 'Selector used to select special occurrences of an element is called contextual selector. A space separates the individual selectors. Only the last element of the pattern is addressed in this kind of selector. For e.g.: TD P TEXT {color: blue}'
        },
        {
            q: 'Define Image sprites with context to CSS ?',
            a: 'When a set of images is collaborated into one image, it is known as ‘Image Sprites’. As the loading every image on a webpage consumes time, using image sprites lessens the time taken and gives information quickly.'
        },
        {
            q: 'How does Z index function?',
            a: 'Overlapping may occur while using CSS for positioning HTML elements. Z index helps in specifying the overlapping element. It is a number which can be positive or negative, the default value being zero.'
        },
        {
            q: 'Define float property of CSS?',
            a: 'By float property, the image can be moved to the right or the left along with the text to be wrapped around it. Elements before this property is applied do not change their properties.'
        },
        {
            q: 'What is graceful degradation?',
            a: 'In case the component fails, it will continue to work properly in the presence of a graceful degradation. The latest browser application is used when a webpage is designed. As it is not available to everyone, there is a basic functionality, which enables its use to a wider audience. In case the image is unavailable for viewing, text is shown with the alt tag.'
        },
        {
            q: 'What is progressive enhancement?',
            a: 'It’s an alternative to graceful degradation, which concentrates on the matter of the web. The functionality is same, but it provides an extra edge to users having the latest bandwidth. It has been into prominent use recently with mobile internet connections expanding their base.'
        },
        {
            q: 'What is Alternate Style Sheet?',
            a: 'Alternate Style Sheets allows the user to select the style in which the page is displayed using the view>page style menu. Through Alternate Style Sheet, user can see a multiple version of the page on their needs and preferences.'
        },
        {
            q: 'Differentiate Style Sheet concept from HTML?',
            a: 'While HTML provides easy structure method, it lacks styling, unlike Style sheets. Moreover, style sheets have better browser capabilities and formatting options.'
        },
        {
            q: 'Comment on the Case-sensitivity of CSS ?',
            a: 'Although, there are no case-sensitivity of CSS, nevertheless font families, URL’s of images, etc is. Only when XML declarations along with XHTML DOCTYPE are being used on the page, CSS is case -sensitive.'
        },
        {
            q: 'Define Declaration block?',
            a: 'A catalog of directions within braces consisting of property, colon and value is called declaration block. e.g.: [property 1: value 3]'
        },
        {
            q: 'Why is it easy to insert a file by importing it?',
            a: 'mporting enables combining external sheets to be inserted in many sheets. Different files and sheets can be used to have different functions. Syntax: @import notation, used with <Style> tag.'
        },
        {
            q: 'Differentiate logical tags from physical tags?',
            a: 'While physical tags are also referred to as presentational mark-up, logical tags are useless for appearances, also Physical tags are newer versions while logical tags are old and concentrate on content.'
        },
        {
            q: 'Enlist the media types CSS allows? ',
            a: 'The design and customization of documents are rendered by media. By applying media control over the external style sheets, they can be retrieved and used by loading it from the network.'
        },
        {
            q: 'Explain the difference between visibility:hidden and display:none',
            a: 'By visibility:Hidden;the element is not visible but takes up the original space, whereas by display:None element is hidden and takes up no space as if it was never there.'
        },
        {
            q: 'What is the difference between inline, embedded and linked style sheets?',
            a: 'Inline Style Sheet is used to style only a small piece of code. Embedded style sheets are put between the <head> and </head> tags. Linked style sheet is used to apply the style to all the pages within your website by linking an external style sheet to the html document.'
        },
        {
            q: 'What does the CSS property "box-sizing":"border-box" do?',
            a: 'It alters the default CSS box model used to calculate width and height of the elements to include any border and padding in the value you specify for width and height.'
        }
    ]
}