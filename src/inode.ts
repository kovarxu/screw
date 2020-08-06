
/**
 * @description: INode is a union of operations on DOM
 *               I do not want to always include jquery to do a bunch of simple dom operations
 *               so I make this class myself
 *               only for example usages, not for production
 * @example: 
 * @param {type} 
 * @return: instanceof INode
 */

export class INode {
    private element: Node | null;

    constructor(selector: string | Node) {
        this.element = null;
        if (typeof selector === 'string') {
            if (selector.startsWith('<')) {
                // create document element
                const div = document.createElement('div');
                div.innerHTML = selector;
                this.element = div.children[0].cloneNode();
            } else {
                // as selector
                this.element = document.querySelector(selector);
            }
        }
        else if (selector instanceof Node) {
            this.element = selector;
        }
    }

    append(node: INode) {
        this.element.appendChild(node.element);
    }

    addClass(className: string) {
        if (!this.element) {
            return false;
        }
        (this.element as HTMLElement).classList.add(className);
    }

    removeClass(className: string) {
        if (!this.element) {
            return false;
        }
        (this.element as HTMLElement).classList.remove(className);
    }
}

