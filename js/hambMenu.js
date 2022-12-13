export const hambMenu = () => {
    const hamb = document.querySelector("#hamb");
    const popup = document.querySelector("#popup");
    const menu = document.querySelector(".menu__list").cloneNode(1);
    console.log("hambMenu");
    const hambHandler = (e) => {
        e.preventDefault();
        popup.classList.toggle("open");
        renderPopup();
    }

    const renderPopup = () => {
        popup.appendChild(menu);
        console.log(popup);

    }
    hamb.addEventListener("click", hambHandler);

}
