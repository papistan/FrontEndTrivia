export default {
    title: 'Javascript: Common built-in methods',
    image: '../style/images/js.png',
    cards: [
        {
            q: 'Returns code of character?',
            a: 'charCodeAt()'
        },
        {
            q: 'Returns the index within the calling String object of the last occurrence of the specified value starting?',
            a: 'lastIndexOf()'
        },
        {
            q: 'Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?',
            a: 'localeCompare()'
        },
        {
            q: 'Returns a new string with some or all matches of a pattern replaced by a replacement?',
            a: 'replace()'
        },
        {
            q: 'Executes a search for a match between a regular expression and this String object?',
            a: 'search()'
        },
        {
            q: 'Extracts a section of a string and returns it as a new string?',
            a: 'slice()'
        },
        {
            q: 'Splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split?',
            a: 'split()'
        },
        {
            q: 'Returns a subset of a string between one index and another, or through the end of the string?',
            a: 'substring()'
        },
        {
            q: 'Returns the calling string value converted to lower case, according to any locale-specific case mappings?',
            a: 'toLocaleLowerCase()'
        },
        {
            q:
                'Returns the calling string value converted to upper case, according to any locale-specific case mappings?',
            a: 'toLocaleUpperCase()'
        },
        {
            q: 'Returns the character at the specified index?',
            a: 'charAt()'
        },
        {
            q: 'Returns the unicode integer of a character/index',
            a: 'charCodeAt(index)'
        },
        {
            q: 'Combines the text of two strings and returns a new string?',
            a: 'concat()'
        },
        {
            q: 'Calls a function for each element in the array?',
            a: 'forEach()'
        },
        {
            q: 'Returns the index within the calling String object of the first occurrence of the specified value?',
            a: 'indexOf()'
        },
        {
            q: 'Concatenate elements of an array into a string?',
            a: 'join()'
        },
        {
            q: 'Returns the length of the string?',
            a: 'length()'
        },
        {
            q: 'Removes the last element from an array and returns that element?',
            a: 'pop()'
        },
        {
            q: 'Adds one or more elements to the end of an array and returns the new length of the array?',
            a: 'push()'
        },
        {
            q: 'Reverses the order of the elements of an array?',
            a: 'reverse()'
        },
        {
            q: 'Returns a copy of a selection of an array?',
            a: 'slice()'
        },
        {
            q: 'Sorts the elements of an array?',
            a: 'sort()'
        },
        {
            q: 'Changes the contents of an array by removing existingelements or adding elements?',
            a: 'splice()'
        },
        {
            q: 'Returns the characters in a string beginning at the specified location?',
            a: 'substr()'
        },
        {
            q: 'Returns the calling string value converted to lower case?',
            a: 'toLowerCase()'
        },
        {
            q: 'Returns the calling string value converted to upper case?',
            a: 'toUpperCase()'
        },
        {
            q: 'Returns the string representation of the numbers value?',
            a: 'toString()'
        },
        {
            q: 'Writing/Displaying data into an alert box?',
            a: 'window.alert()'
        },
        {
            q: 'Writing/Displaying data into the browser console?',
            a: 'console.log()'

        },
        {
            q: 'Display an alert message along with asking the user to enter a value?',
            a: 'window.prompt()'
        },
        {
            q: 'Show a confirmation message and ask the user to confirm or cancel?',
            a: 'window.confirm()'
        },
        {
            q: 'Get an integer number from a string?',
            a: 'parseInt()'
        },
        {
            q: 'Get a float number from a string',
            a: 'parseFloat()'
        },
        {
            q: 'Convert a string to base 64?',
            a: 'window.btoa()'
        },
        {
            q: 'Convert a base 64 to string?',
            a: 'window.atob()'
        },
        {
            q: 'Returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?',
            a: 'localeCompare()'
        },
        {
            q: 'Used to match a regular expression against a string?',
            a: 'match()'
        },
        {
            q: 'Used to find a match between a regular expression and a string, and to replace the matched substring with a new substring?',
            a: 'replace()'
        },
        {
            q: 'Returns true if every element in this array satisfies the provided testing function?',
            a: 'every()'
        },
        {
            q: 'Returns true if at least one element in this array satisfies the provided testing function?',
            a: 'some()'
        },
        {
            q: 'Creates a new array with all of the elements of this array for which the provided function returns true?',
            a: 'filter()'
        },
        {
            q: 'Removes the first element from an array and returns that element?',
            a: 'shift()'
        },
        {
            q: 'Adds one or more elements to the front of an array and returns the new length of the array?',
            a: 'unshift()'
        },
        {
            q: 'Returns current date and time?',
            a: 'Date()'
        },
        {
            q: 'Returns the day of the month for the specified date according to local time?',
            a: 'getDate()'
        },
        {
            q: 'Returns the day of the week for the specified date according to local time?',
            a: 'getDay()'
        },
        {
            q: 'Returns the month in the specified date according to local time?',
            a: 'getMonth()'
        },
        {
            q: 'Returns the year of the specified date according to local time?',
            a: 'getFullYear()'
        },
        {
            q: 'Returns a pseudo-random number between 0 and 1?',
            a: 'random()'
        },
        {
            q: 'Returns the largest of zero or more numbers?',
            a: 'max()'
        },
        {
            q: 'Returns the smallest of zero or more numbers?',
            a: 'min()'
        },
        {
            q: 'Defines how many total digits (including digits to the left and right of the decimal) to display of a number?',
            a: 'toPrecision()'
        },
        {
            q: 'Evaluates an expression?',
            a: 'eval()'
        },
        {
            q: 'Checks if the content of a variable is valid?',
            a: 'isNaN()'
        },
        {
            q: 'Which string method removed whitespace from either end of a string?',
            a: 'The trim() method returns the string stripped of whitespace from both ends. trim() does not affect the value of the string itself.'
        }
    ]
};