
let it: object;

it = (() => ({}))();

if (it instanceof Iterator) {
  it.toArray(); // this works, but is not accepted by TypeScript!
}
