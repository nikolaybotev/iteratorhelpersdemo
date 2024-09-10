const customIterator = {
    next() {
        return { value: 42, done: true };
    }
}

const withHelpers = Iterator.from(customIterator);

console.log(typeof withHelpers.return);

const result = withHelpers.return!(); // TypeError: withHelpers.throw is not a function

console.log(result);
