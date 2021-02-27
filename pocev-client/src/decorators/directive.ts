import Vue, { DirectiveOptions } from 'vue';

export const DIRECTIVE_TAB_KEY = 'directives:types';

type DirectiveConstructor = Type<DirectiveOptions>;

type DirectiveDecoratorReturnType = (target: DirectiveConstructor) => void;

/**
 * Directive decorator
 *
 * Mark a type as a directive to be register in Vue.
 * You need to import the directive in directives.ts in order to use it
 *
 * @param name directive name in Vue
 */
export function Directive(name: string): DirectiveDecoratorReturnType {
    return (target: DirectiveConstructor) => {
        const directiveThis = new target();
        Vue.directive(name, {
            bind: directiveThis.bind ? directiveThis.bind.bind(directiveThis) : undefined,
            componentUpdated: directiveThis.componentUpdated
                ? directiveThis.componentUpdated.bind(directiveThis)
                : undefined,
            inserted: directiveThis.inserted ? directiveThis.inserted.bind(directiveThis) : undefined,
            unbind: directiveThis.unbind ? directiveThis.unbind.bind(directiveThis) : undefined,
            update: directiveThis.update ? directiveThis.update.bind(directiveThis) : undefined
        });
    };
}
