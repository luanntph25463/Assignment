/* eslint-disable import/prefer-default-export */
export function render(element, content) {
    const elementId = document.getElementById(element);
    if (!elementId) return;
    elementId.innerHTML = content;
}