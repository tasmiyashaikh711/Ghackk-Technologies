export function loadMoreContent() {
    const section = document.querySelector('section');
    const newContent = document.createElement('p');
    newContent.textContent = "Here is some additional content loaded dynamically!";
    section.appendChild(newContent);
}
