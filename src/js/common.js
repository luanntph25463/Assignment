// eslint-disable-next-line import/prefer-default-export
export function render(element, content) {
    // nếu có giá trị thì hiển thị
    const elementId = document.getElementById(element);
    if (!elementId) return;
    elementId.innerHTML = content;
}