/*
A Class Decorator is declared just before a class declaration. The class decorator is applied to the
 constructor of the class and can be used to observe, modify, or replace a class definition.
 A class decorator cannot be used in a declaration file, or in any other ambient context (such as on a declare class).

The expression for the class decorator will be called as a function at runtime, with the constructor of
the decorated class as its only argument.

If the class decorator returns a value, it will replace the class declaration with the provided constructor function.

NOTE  Should you choose to return a new constructor function, you must take care to maintain the original prototype.
The logic that applies decorators at runtime will not do this for you
*/

function sealed<T>(target: T | any) {
    Object.seal(target);
    Object.seal(target.prototype);
}
@sealed
export class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
