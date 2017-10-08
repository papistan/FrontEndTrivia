// CSS: Animations
// Source: https://css-tricks.com/almanac/properties/a/animation/
export default {
    title: 'CSS: Animations',
    image: '../style/images/css3.svg',
    cards: [
        {
            q: 'How is a general CSS animation defined?',
            a: 'Each animation needs an "@keyframes" at-rule that is called with an "animation" property. For example, .class-name { animation: <keyframes_name> <other-shorthand-values> } and @keyframes <name> { 0% { ... } 100% { ... }'
        },
        {
            q: 'What do "@keyframes" at-rules define?',
            a: 'They define what should happen at specific moments during the animation like going from 0% to 100%. One can use the shorthand "animation" property or use its 8 sub-properties to manipulate it.'
        },
        {
            q: 'What are the 8 sub-properties of "animation"?',
            a: '1. "animation-name" 2. "animation-duration" 3. "animation-timing-function" 4. "animation-delay" 5. "animation-direction" 6. "animation-iteration-count" 7. "animation-fill-mode" 8. "animation-play-state"'
        },
        {
            q: 'What is "animation-name"?',
            a: 'This defines the name of the "@keyframes" at-rule to use.'
        },
        {
            q: 'What is "animation-duration"?',
            a: 'This defines the length of time for the animation to complete one cycle.'
        },
        {
            q: 'What is "animation-timing-function"?',
            a: 'This sets the preset acceleration curves such as "ease" or "linear".'
        },
        {
            q: 'What is "animation-delay"?',
            a: 'This corresponds to the time between the element being loaded and the start of the animation sequence.'
        },
        {
            q: 'What is "animation-direction"?',
            a: 'This sets the direction of the animation after the cycle. Its default resets on each cycle.'
        },
        {
            q: 'What is "animation-iteration-count"?',
            a: 'This is the number of times the animation will run.'
        },
        {
            q: 'What is "animation-play-state"?',
            a: 'This is used to pause or play the animation.'
        },
        {
            q: 'How do we handle multiple animations or animations with multiple steps?',
            a: 'Comma-separate the values like the following: "animation: someanimation 3s ease ..., anotheranimation 2s linear ..."'
        },
        {
            q: 'Generally, which CSS properties can be animated?',
            a: 'For the most part, colors and numbers but things like "background-image" cannot be animated. Check MDN for an exact list."'
        },
        {
            q: 'Though performance may be an issue, which combos can be animated safely?',
            a: 'Transforms like translate, scale, and rotate, changing opacity, etc.'
        },
        {
            q: 'How do we support older browsers for animations?',
            a: 'Use vendor prefixes like -webkit-animation/-moz-animation/-o-animation/animation: <keyframe-name> 5s infinite; and @-webkit-keyframes <keyframe-name> { ... }.'
        },
    ]
}