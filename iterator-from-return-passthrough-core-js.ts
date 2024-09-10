import "core-js/stage/3";

console.log(Iterator.from(function* () { return 42; }()).next());
