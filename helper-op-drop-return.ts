const generator = function* () {
    yield 1;
    yield 2;
    return 42;
}();
const withHelpers = Iterator.from(generator);

const transformed = withHelpers.drop(1);

console.log(transformed.next()); // { value: 2, done: false }
console.log(transformed.next()); // { value: undefined, done: true }
