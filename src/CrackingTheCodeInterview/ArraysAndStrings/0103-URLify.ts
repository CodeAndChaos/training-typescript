/**
 * Cracking the Coding Interview
 * 
 * Simple Test questions: String operations.
 * Replace all instances of a whitespace with a '%20'
 * 
 */


/**
 * Attempt 1: Using the native JavaScript Functions.
 * 
 * @param text {string} - The original Input String
 * @returns {string} - The output string with the replaced whitespaces
 */
export const urlify = (text: string) => {
    const WHITESPACE_REPLACEMENT = "%20";
    return text.replace(/ /g, WHITESPACE_REPLACEMENT);
}

/**
 * Attempt2: not using replace
 * 
 * 
 * @param text {string} - The original Input String
 * @returns {string} - The output string with the replaced whitespaces
 */
export const urlifyNoReplace = (text: string): string => {
    let returnText = "";
    for (let char of text) {
        if (char === " ") {
            returnText += '%20';
        } else {
            returnText += char;
        }
    }
    return returnText;
}

/** 
 * Attempt 3: Using a char Array
 * 
 * @param text {string} - The original Input String
 * @returns {string} - The output string with the replaced whitespaces
 */

export function urlifyCharArray(text: string): string {
    let charArray = text.split("");
    /**
     * Optimize for Edge Case
     */
    if (charArray.includes(" ")) {
        let returnArray = charArray.map((val) => {
            if (val === " ") {
                return "%20";
            } else {
                return val
            }
        })
        return returnArray.join("");
    } else {
        return text;
    }
}

/**
 * Attempt 4: Solution 3 Refactored
 * 
 * @param text {string} - The original Input String
 * @returns {string} - The output string with the replaced whitespaces
 * 
 */
function convertWhitespaceToURL(char: string) {
    const WHITESPACE_REPLACEMENT = "%20";
    return (char === " ") ? WHITESPACE_REPLACEMENT : char;
}

export function urlifyCharArray2(text: string): string {
    let charArray = text.split("");
    /**
     * Optimize for Edge Case
     */
    if (charArray.includes(" ")) {
        return charArray
            .map(convertWhitespaceToURL)
            .join("");
    } else {
        return text;
    }
}

