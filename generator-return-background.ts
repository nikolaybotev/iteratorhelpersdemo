function* gen(): Generator<number, string> {
    yield 42;
    return "done";
}

const a = gen();

console.log(a.next()); // { value: 42, done: false }
console.log(a.next()); // { value: 'done', done: true }
console.log(a.next()); // { value: undefined, done: true }
