declare const title: HTMLHeadElement;  // from HTML DOM object
declare const canvas_field: HTMLDivElement;

title.textContent = document.title;
canvas_field;

const paragraph = document.createElement("p")
paragraph.textContent = "Hello World!"
canvas_field.appendChild(paragraph);
