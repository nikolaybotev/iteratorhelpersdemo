const customIterator = {
    next() {
        return { value: 42, done: true };
    }
}

const withHelpers = Iterator.from(customIterator);

console.log(typeof withHelpers.throw); // undefined

const result = withHelpers.throw!("error"); // TypeError: withHelpers.throw is not a function

console.log(result); // never reached!
