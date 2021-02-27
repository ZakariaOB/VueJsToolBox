function logger(constructor: Function) {
    console.log('Logger .....');
    console.log(constructor);
}

function loggerLikeFactory(name: string) {
    return function(constructor: Function) {
        console.log(name);
        console.log('Factory logger');
    };
}

function withTemplate(template: string, hookId: string) {
    return function(co: any) {
        const hook = document.getElementById(hookId);
        console.log(hook);
        const c = new co();
        console.log(c.name);
        if (hook) {
            hook.innerHTML = template;
        }
    };
}

@withTemplate('<h1> Person object </h1>', 'hookId')
export class Person {
    name = 'Oussama';
    constructor() {
        console.log('Creating person object');
    }
}
