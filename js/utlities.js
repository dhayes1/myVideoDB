/** do a querySelector lookup
 * @param {string} selector The selector passed to querySelector
 * @return {element} The matching element or null if not found
 **/
export function qs(selector) { 
    return document.querySelector(selector);
}

/** do a querySelectorAll lookup
 * @param {string} selector The selector passed to querySelector
 * @return {element} The matching element or null if not found
 **/
export function qsa(selector) { 
    return document.querySelectorAll(selector);
}

/** create a HTML element
 * @param {string} element The element passed to createElement
 * @return {element} The HTML element to be created
 **/
export function ce(element) {
    return document.createElement(element);
}

/** add a touchend event listener to an element for mobile with a click event fallback for desktops
 * @param {string} elementSelector The selector for the element to attach the listener to 
 * @param {function} callback The callback function to run
 **/
function onTouch(elementSelector, callback) { 
    elementSelector.addEventListener('touchend', callback);
}

