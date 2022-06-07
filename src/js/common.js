export default function render(element, content) {
    if (element) {
        document.getElementById(element).innerHTML = content;
    }
}