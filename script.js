const pages = [
    "alooo lala as ngookk paliiing cantiiikkk seduniaaaaaaaa.",
    "happy besdeee lalaaa🎂, mogaa lalaaa selalu dikelilingi orang baiiikkkk.",
    "jugaaa sekali lagi aku mo ngucapin terima kasiiih ke lalaa buat semuanyaaa, buaat lalaa yang selaluuu maafiinn dan ngasiii akuuu banyaakk kesempatan padahal akuuu sering bikin lalaa kecewaaa. makasiiii jugaaa yaaa laaa udaaa bikiin akuu seneng, udaaa mo ngelarang aku buat ninggalin hal hal yang ga baik, tuuuss apalagi yak, pokokkk akuu timaaciiww ke lalaaa buat semuanyaaa. akuuu jugaa belajaarr banyaak darii lalaaaa, entah ituuu tentang gimana ngertiiin perasaannya orang tuuss bagi prioritas amaa masiii banyaakk lah pokookkk. terima kasih yaaa lalaaaa, buat setiap tawa, bahagian dan care darii lalaa.",
    "see you on top lalaaaa👋, jaga dirii baik baik dan semoga impian lala tercapai yaaa.",
    `
        <div id="gallery-title">i still miss butterfly era with you hehe</div>
        <div id="gallery">
            ${Array(14)
                .fill("")
                .map((_, i) => {
                    const photoUrl = `https://haqqi123.github.io/lala/assets/photos/photo${i + 1}.jpg`;
                    return `<img src="${photoUrl}" alt="Foto ${i + 1}">`;
                })
                .join("")}
        </div>
    `,
];

let currentPage = 0;

const contentDisplay = document.getElementById("content");
const textDisplay = document.getElementById("text-display");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
    contentDisplay.style.opacity = "0";
    contentDisplay.style.transform = "translateY(20px)";

    setTimeout(() => {
        if (currentPage < pages.length - 1) {
            currentPage++;
            textDisplay.innerHTML = pages[currentPage];
            if (currentPage === pages.length - 1) {
                nextButton.style.display = "none";
            }
        }
        contentDisplay.style.opacity = "1";
        contentDisplay.style.transform = "translateY(0)";
    }, 1000);
});
