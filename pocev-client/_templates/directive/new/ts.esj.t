---
to: src/directives/<%= directory %>/<%= name %>.directive.ts
---
import { DirectiveOptions, VNode } from 'vue';
import { Directive } from '@/decorators/directive';
import { DirectiveBinding } from 'vue/types/options';

/**
 *
 *
 * @example
 * <input v-<%= name %> />
 */
@Directive('<%= name %>')
class <%= h.inflection.camelize(name.replace(/-/g, '_')) %>Directive implements DirectiveOptions {
    /**
     * Called only once, when the directive is first bound to the element.
     * This is where you can do one-time setup work.
     */
    bind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {

    }

    /**
     * Called when the bound element has been inserted into its parent node
     * (this only guarantees parent node presence, not necessarily in-document).
     */
    inserted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {

    }

    /**
     * Called after the containing component’s VNode has updated, but possibly
     * before its children have updated.
     * The directive’s value may or may not have changed, but you can skip
     * unnecessary updates by comparing the binding’s current and old values.
     */
    update(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {

    }

    /**
     * Called after the containing component’s VNode and the VNodes of its children have updated.
     */
    componentUpdated(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {

    }

    /**
     * Called only once, when the directive is unbound from the element.
     */
    unbind(el: HTMLElement, binding: DirectiveBinding, vnode: VNode, oldVnode: VNode): void {

    }
}
