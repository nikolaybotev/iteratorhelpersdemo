function* generate() {
  yield* new class { next = (value: string) => ({ value: value.toLowerCase() }); [Symbol.iterator] = () => this };
}
  
console.log(generate().next("42"));

// single-line:
(function* () { yield* new class { next = (value) => ({ value: value.toLowerCase() }); [Symbol.iterator] = () => this } })().next("42")