document.addEventListener("DOMContentLoaded", function () {
    let currentYear = new Date().getFullYear();
    let firstParagraph = document.getElementById("footerFirstParagraph");

    let decoratedName = "🔘 Bruno Panzacchi";
    let mexicoFlag = "Mexico";
    let mexicoFlagImage = `<img src="images/mexico.webp" alt="Flag of Uruguay" width="60" height="40"style="vertical-align: middle;">`;

    firstParagraph.innerHTML = `&copy; ${currentYear} ${decoratedName} -  ${mexicoFlag} ${mexicoFlagImage}`;

    let lastModifiedParagraph = document.getElementById("lastModified");
    lastModifiedParagraph.innerHTML = "Última modificación: " + document.lastModified;
});