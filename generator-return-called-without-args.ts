const nestedIterableIterator: IterableIterator<string, string, unknown> = {
    [Symbol.iterator]() { return this; },

    next() {
        return { value: "42", done: false }
    },

    return(value: string) {
        console.log("return called with", value);
        return { value, done: true }
    }
}

function* generator() {
    yield* nestedIterableIterator;
    return "never";
}

const it = generator();

it.next();
it.return("passthrough"); // return called with passthrough

for (const x of generator()) {
    break; // return called with undefined
}
