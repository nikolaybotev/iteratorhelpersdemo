const customIterator = {
    next(value: any) {
        return { value: ["next argument is ", value] };
    }
}

const withHelpers = Iterator.from(customIterator);

const result = withHelpers.next(42);

console.log(result); // { value: [ 'next argument is ', undefined ] }
