const customIterator = {
    next() {
        return { value: 42, done: true };
    }
}

const withHelpers = Iterator.from(customIterator);

console.log(typeof withHelpers.return); // function

const result = withHelpers.return!();

console.log(result); // { value: undefined, done: true }
