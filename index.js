const input = document.querySelector("input");
const img = document.querySelector("img");

input.addEventListener("change", () => {
    const file = input.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        img.src = reader.result;
    });
    reader.readAsDataURL(file);
});