function* generator() {
    yield "hello";
    return "42";
}

const it = generator();

it.next();

const r = it.return(undefined as unknown as string); // return called with undefined
console.log(r); // { value: undefined, done: true }
console.log(r.value.toUpperCase()); // TypeError: Cannot read properties of undefined (reading 'toUpperCase')
