const customIterator = {
    next(value: number): { value: [string, number], done: false } {
        return { value: ["next argument is ", value], done: false };
    }
}

const withHelpers = Iterator.from(customIterator);

const result = withHelpers.next(42);

console.log(result); // { value: [ 'next argument is ', undefined ] }
