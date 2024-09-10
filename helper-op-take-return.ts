const generator = function* () {
    yield 1;
    return 42;
}();
const withHelpers = Iterator.from(generator);

const transformed = withHelpers.take(2);

console.log(transformed.next()); // { value: 1, done: false }
console.log(transformed.next()); // { value: undefined, done: true }
