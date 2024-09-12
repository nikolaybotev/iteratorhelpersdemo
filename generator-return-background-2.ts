function* gen(): Generator<number, string> {
    yield 42;
    yield 43;
    return "done";
}

const a = gen();

console.log(a.next()); // { value: 42, done: false }
console.log(a.return(undefined as unknown as string)); // { value: undefined, done: true }
console.log(a.next()); // { value: undefined, done: true }
