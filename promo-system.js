document.addEventListener("DOMContentLoaded", () => {

    if (!window.PROMO || !PROMO.enabled) {

        document.getElementById("floatingPromo").remove();

        return;

    }

    const promo = document.getElementById("floatingPromo");

    const image = document.getElementById("promoImage");

    const link = document.getElementById("promoLink");

    const close = document.getElementById("closePromo");

    image.src = PROMO.image;

    image.alt = PROMO.alt;

    link.href = PROMO.link;

    close.addEventListener("click", function (e) {

        e.preventDefault();

        e.stopPropagation();

        promo.style.display = "none";

    });

});