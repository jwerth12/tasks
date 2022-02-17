/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const result: number[] = [];
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        result.push(numbers[0]);
        result.push(numbers[0]);
    } else {
        result.push(numbers[0]);
        result.push(numbers[numbers.length - 1]);
    }
    return result;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const result: number[] = numbers.map((num: number): number => num * 3);
    return result;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    // if the string can be parsed to number (isNaN returns false), then parse to int
    // otherwise put 0 in place
    const result: number[] = numbers.map((num: string): number =>
        isNaN(parseInt(num)) === false ? parseInt(num) : 0
    );
    return result;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    // remove all $ from array
    const result: string[] = amounts.map((amt: string): string =>
        amt.includes("$") ? amt.replace("$", "") : amt
    );
    return stringsToIntegers(result); // use previously made function to parse to int
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    // remove all questions
    const noQuestions = messages.filter(
        (message: string): boolean => !message.includes("?")
    );
    // change all messages that are shouting
    const result: string[] = noQuestions.map((message: string): string =>
        message[message.length - 1] === "!" ? message.toUpperCase() : message
    );
    return result;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    // filter out an array of only short words, less that 4 letters
    const shortWords: string[] = words.filter(
        (word: string): boolean => word.length < 4
    );
    return shortWords.length; // return length of new array
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    // base case: if empty array
    if (colors.length === 0) {
        return true;
    }
    // create an arrray of colors that are NOT RGB
    const nonRGB: string[] = colors.filter(
        (color: string): boolean =>
            color !== "red" && color !== "blue" && color !== "green"
    );
    return nonRGB.length === 0; // check if nonRGB array empty (true) or not (false)
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    // if empty array given, then default string
    if (addends.length === 0) {
        return "0=0";
    }
    // find the sum
    const sum: number = addends.reduce(
        (total: number, num: number) => (total += num),
        0
    );
    return sum + "=" + addends.join("+");
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    // empty array, sum = 0
    if (values.length === 0) {
        return [0];
    }
    // find the index of the first negative number
    const negative: number = values.findIndex(
        (value: number): boolean => value < 0
    );
    // if no negative numbers in the array
    if (negative === -1) {
        const sum = values.reduce(
            (total: number, num: number) => (total += num),
            0
        );
        const result = [...values];
        result.push(sum);
        return result;
    }
    // sum together the result and create new array with sum inserted
    const sum = values.reduce(
        (total: number, num: number) =>
            values.indexOf(num) < negative ? (total += num) : (total += 0),
        0
    );
    const result = [...values];
    result.splice(negative + 1, 0, sum);
    return result;
}
