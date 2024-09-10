const customIterator = {
    next() {
        return { value: 42, done: true };
    }
}

const withHelpers = Iterator.from(customIterator);

console.log(typeof withHelpers.throw);

const result = withHelpers.throw!("error");

console.log(result); // { value: undefined, done: true }
