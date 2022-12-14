export const accordion = () => {
    let acc = document.getElementsByClassName("category__accordion");
    let i;
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this
                .classList
                .toggle("footer__active");
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    }

}