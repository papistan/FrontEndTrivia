export default {
    title: 'CSS3 - Flexbox',
    image: '../style/images/css3.svg',
    cards: [{
        q: 'What does the "flex-direction" property do?',
        a: 'The "flex-direction" property controls the directional flow of flex content.  The values "row" and "row-reverse" orient content from left to right, and right to left, repsectively.  The values "column" and "column-reverse" orient content from top to bottom, and bottom to top, respectively.'
    },
        {
            q: 'What is the "main-axis"?',
            a: 'The "main-axis" is a positional reference that corresponds to the "flex-direction" property.  For "flex-direction: row;" the main-axis runs left-to-right.  For "flex-direction: column;" the main-axis runs from top to bottom.'
        },
        {
            q: 'What is the "cross-axis"?',
            a: 'The "cross-axis" is a positional reference that runs in the converse direction as the "main-axis."  For "flex-direction: row;" the cross-axis runs from top to bottom.  For "flex-direction: column;" the cross-axis runs from left to right.'
        },
        {
            q: 'What does the "justify-content" property do?',
            a: '"Justify-content" orients flex items along the main-axis.  For "flex-direction: row;" it positions elements horizontally.  For "flex-direction: column;" it positions elements vertically.'
        },
        {
            q: 'What does the "align-items" property do?',
            a: '"Align-items" orients flex items along the cross-axis.  For "flex-direction: row;" it positions elements vertically.  For "flex-direction: column;" it positions elements horizontally.'
        },
        {
            q: 'What does the "align-content" property do?',
            a: '"Align-content" determines the layout of all items, and distribution of space, within a flex container relative to the cross-axis.  For "flex-direction: row;" it orients items and space vertically.  For "flex-direction: column;" it orients items and space horizontally.'
        },
        {
            q: 'What does the "align-self" property do?',
            a: '"Align-self" orients an individual flex item along the cross-axis, overriding the value of the "align-items" property.  For "flex-direction: row;" it positions the element vertically.  For "flex-direction: column;" it positions the element horizontally.'
        },
        {
            q: 'What does the "flex-wrap" property do?',
            a: '"Flex-wrap" determines whether or not flex items are able to wrap onto multiple lines.  For "flex-wrap: nowrap;" items will be forced to occupy a single line (and therefore may overflow the container element).  For "flex-wrap: wrap;" and "flex-wrap: wrap-reverse;" items will automatically flow onto the next line when necessary.'
        },
        {
            q: 'What does the "order" property do?',
            a: '"Order" determines the position of a flex item along the main axis relative to the other existent flex items.  The "order" property takes a numerical value, and positions items in ascending order.'
        },
        {
            q: 'What does the "flex-grow" property do?',
            a: '"Flex-grow" takes a numerical value, and determines the proportion of available free space along the main-axis a flex item should take up relative to other existent flex items.  For example, "flex-grow: 2;" indicates that an item should occupy twice the available free space as an item with "flex-grow: 1;".'
        },
        {
            q: 'What does the "flex-shrink" property do?',
            a: '"Flex-shrink" takes a numerical value, and determines the proportional amount a flex item will shrink along the main-axis relative to other existent flex items.  An element with "flex-shrink: 2;" will shrink twice as much relative to an element with "flex-shrink: 1;".  Items with "flex-shrink: 0;" will not shrink.'
        },
        {
            q: 'What does the "flex-basis" property do?',
            a: '"Flex-basis" controls the ideal size of a flex item along the main-axis prior to being rendered in a flex container.  When rendered in a container, the actual size of a flex item is determined by its containers size, and the values assigned to each flex items "flex-grow" and "flex-shrink" properties.'
        }
    ]
}