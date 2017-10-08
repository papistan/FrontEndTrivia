export default {
    title: 'CSS: Pseudo-classes',
    image: '../style/images/css3.svg',
    cards: [
        {
            q: 'What is a CSS Pseudo-class?',
            a: 'A CSS pseudo-class is a keyword added to a selector that specifies a special state of the selected element(s) such as ":hover".'
        },
        {
            q: 'What is the general CSS Pseudo-class syntax?',
            a: 'For example, one creates rules like this: selector:pseudo-class { property: value; }'
        },
        {
            q: 'How are pseudo-classes used to style elements?',
            a: 'Pseudo-classes style elements in relation to the history of the navigator (like :link for <a>), content status (like :focus on input forms), and mouse position (like :hover).'
        },
        {
            q: 'What are the standard pseudo-classes for styling <a> link states?',
            a: 'a:link - a normal, unvisited link, a:visited, a:hover - when one mouses over the link, and a:active - moment the link is clicked'
        },
        {
            q: 'What are some pseudo-classes for the status of the content such as inputs, checkboxes, etc.?',
            a: 'One can use :checked, :active, :focus, :disabled, :enabled, :hover, :required, etc.'
        },
        {
            q: 'What are some helpful pseudo-classes for selecting specific DOM elements such as the first child, last child, etc.?',
            a: 'One can use :first-child, :last-child, :nth-child(), :nth-last-child(), :not(), :only-child, :nth-of-type, etc.'
        },
        {
            q: 'How do pseudo-elements differ from pseudo-classes?',
            a: 'Pseudo-elements are used to style a specific part of an element.'
        },
        {
            q: 'What is the CSS selector for a div with the ID of #element, only when the mouse is hovering over it?',
            a: '#element:hover'
        },
        {
            q: 'What is the CSS selector for the input field with an ID of #email, only the field has received focus?',
            a: '#email:focus'
        },
        {
            q: 'What is the CSS selector for a h1 within a div with the ID of #element, only when the #element div is being hovered over?',
            a: '#element:hover h1'
        },
        {
            q: 'Is content contained within a CSS :before or :after pseudo-class readable by search engines?',
            a: 'No. \'Google does not reliably index text contained in JavaScript or CSS, even if it is visible to users on the page.\''
        },
        {
            q: 'Is content contained within a CSS :before or :after pseudo-class readable by screen readers?',
            a: 'Not reliably. Remember separation of concerns - any pseudo-class content should be presentational only.'
        },
        {
            q: 'Can you combine psuedo selectors for complex targeting?',
            a: 'Yes. Consider the following: .item:nth-child(3):last-child. This will only target the 3rd child of the .item class when it is also the last instance.'
        },
        {
            q: 'How to select all unvisited links',
            a: 'a:link'
        },
        {
            q: 'How to select all visited links',
            a: 'a:visited'
        },
        {
            q: 'How to select the active link',
            a: 'a:active'
        },
        {
            q: 'How to select links on mouse over',
            a: 'a:hover'
        },
        {
            q: 'How to select the input element which has focus',
            a: 'input:focus'
        },
        {
            q: 'How to select the first letter of every <p> element',
            a: 'p::first-letter'
        },
        {
            q: 'How to select the first line of every <p> element',
            a: 'p::first-line'
        },
        {
            q: 'How to select every <p> elements that is the first child of its parent',
            a: 'p:first-child'
        },
        {
            q: 'How to insert content before every <p> element',
            a: 'p::before'
        },
        {
            q: 'How to insert content after every <p> element',
            a: 'p::after'
        },
        {
            q: 'How to select every <p> element with a lang attribute value starting with "it"',
            a: 'p:lang(it)'
        }
    ]
};
