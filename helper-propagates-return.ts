const generator = function* () {
    return 42;
}();

const withHelpers = Iterator.from(generator);

const result = withHelpers.next();

console.log(result);  // { value: 42, done: true }
