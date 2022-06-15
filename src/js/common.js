<<<<<<< HEAD
// eslint-disable-next-line import/prefer-default-export
export function render(element, content) {
    // nếu có giá trị thì hiển thị
    const elementId = document.getElementById(element);
    if (!elementId) return;
    elementId.innerHTML = content;
=======
// eslint-disable-next-line import/prefer-default-export
export function render(element, content) {
    // nếu có giá trị thì hiển thị
    const elementId = document.getElementById(element);
    if (!elementId) return;
    elementId.innerHTML = content;
>>>>>>> 73553ea3814a715d936688fa23a42b586ff23514
}