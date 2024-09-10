const g1: Generator<string, number, boolean> = function* g1gen() {
    yield "hello";
    return 42;
}();
const iter1 = Iterator.from(g1); // this should work

console.log(iter1.next()); // { value: 'hello', done: false }
console.log(iter1.next()); // { value: 42, done: true }
