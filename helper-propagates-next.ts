const customIterator = {
    next(value: number) {
        return { value: ["next argument is ", value] };
    }
}

const withHelpers = Iterator.from(customIterator as Iterator<[string, number]>);

const result = withHelpers.next(42);

console.log(result); // { value: [ 'next argument is ', undefined ] }
