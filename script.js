// Array of content for each page
const pages = [
    "alooo lala as ngookk paliiing cantiiikkk seduniaaaaaaaa.",
    "happy besdeee lalaaa🎂, mogaa lalaaa selalu dikelilingi orang baiiikkkk.",
    "jugaaa sekali lagi aku mo ngucapin terima kasiiih ke lalaa buat semuanyaaa, buaat lalaa yang selaluuu maafiinn dan ngasiii akuuu banyaakk kesempatan padahal akuuu sering bikin lalaa kecewaaa. makasiiii jugaaa yaaa laaa udaaa mo nemeniin akuu mam, udaaa bikiin akuu seneng, udaaa mo kuajak nonton, tuuuss apalagi yak, pokokkk akuu timaaciiww ke lalaaa buat semuanyaaa, buat lalaa yang mauuu nemeniiin akuuu padahal lalaa sibuuukk bangeett. akuuu jugaa belajaarr banyaak dariii lalaaaa, entah ituuu tentang gimana ngertiiin perasaannya orang tuuss bagi prioritas amaa masiii banyaakk lah pokookkk. terima kasih yaaa lalaaaa, buat setiap tawa, bahagian dan care darii lalaa.",
    "see you on top lalaaaa👋, jaga dirii baik baik yaaa.",
    `
        <div id="gallery-title">i still miss butterfly era with you hehe</div>
        <div id="gallery">
            ${Array(14)
                .fill("")
                .map((_, i) => `<img src="assets/photo${i + 1}.jpg" alt="Foto ${i + 1}">`)
                .join("")}
        </div>
    `,
];

// Keep track of the current page index
let currentPage = 0;

// Select the content display and button elements
const contentDisplay = document.getElementById("content");
const textDisplay = document.getElementById("text-display");
const nextButton = document.getElementById("next-btn");

// Add event listener for the Next button
nextButton.addEventListener("click", () => {
    // Smoothly transition the content out
    contentDisplay.style.opacity = "0";
    contentDisplay.style.transform = "translateY(20px)";

    setTimeout(() => {
        // Move to the next page if available
        if (currentPage < pages.length - 1) {
            currentPage++;
            textDisplay.innerHTML = pages[currentPage];
            if (currentPage === pages.length - 1) {
                nextButton.style.display = "none"; // Hide button on the last page
            }
        }

        // Smoothly transition the content back in
        contentDisplay.style.opacity = "1";
        contentDisplay.style.transform = "translateY(0)";
    }, 1000);
});
