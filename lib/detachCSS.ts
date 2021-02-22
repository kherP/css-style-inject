
/**
 * detach css to head
 * @param css 
 */
export function detachCSS(uniqueId: string) {
    const element: Element = document.querySelector(`style[id="${uniqueId}"]`);
    if (!!element) {
        document.head.removeChild(element);
    }
}