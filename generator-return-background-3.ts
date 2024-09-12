function* gen(): Generator<number, string> {
    return "done";
}

function* consumer() {
    const a = gen();

    console.log(yield* a); // done
    console.log(yield* a); // undefined
}

consumer().next();