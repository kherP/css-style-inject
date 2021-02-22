
/**
 * inject css to head
 * @param css 
 */
export function injectCSS(css: string, uniqueId: string, isPrepend?: boolean) {
    const isExists: boolean = !!document.querySelector(`style[id="${uniqueId}"]`)
    if (!css || !document || isExists) {
        return;
    }
    const cssElement = document.createElement("style");
    cssElement.id = uniqueId;
    cssElement.setAttribute("type", "text/css");

    cssElement.innerHTML = css;
    if (isPrepend && document.head.firstChild) {
        document.head.insertBefore(cssElement, document.head.firstChild);
    } else {
        document.head.appendChild(cssElement);
    }
    return cssElement;
}