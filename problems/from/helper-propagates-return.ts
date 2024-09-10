const generator = function* () {
    return 42;
}();

const withHelpers = Iterator.from(generator);

const result = withHelpers.next();

const resultValue: number = result.value; // this should work

console.log(resultValue);  // 42
console.log(result);  // { value: 42, done: true }
