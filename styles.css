// Tautan Google Drive
const driveLinks = {
    music: "https://drive.google.com/file/d/1DFcDy3MojjrUsFM5j_6RmqLaCGiiv1BG/view?usp=drive_link",
    photos: [
        "https://drive.google.com/file/d/1Qk1FHrDWehxjWgNNqRB1nvORwwWixgvS/view?usp=sharing",
        "https://drive.google.com/file/d/1Qk1FHrDWehxjWgNNqRB1nvORwwWixgvS/view?usp=sharing",
        "https://drive.google.com/file/d/1GaM1fAn0nZ-mZnX6cJDfFW7ZwRlAevzK/view?usp=drive_link",
        "https://drive.google.com/file/d/1UCqCV3r3BHMb0vSX-bAyh4YUkywwWPYd/view?usp=drive_link",
        "https://drive.google.com/file/d/1n8LKsDkPBsCDu_wRi3_Ra8H7x-__mgir/view?usp=drive_link",
        "https://drive.google.com/file/d/1fNhx00JESgL3pLSrvXlrMavVhU0h5Aqv/view?usp=drive_link",
        "https://drive.google.com/file/d/1GMUb_J8YzxWsOcHf8qUAebv_oFz3dl0Z/view?usp=drive_link",
        "https://drive.google.com/file/d/1TInyOxMm2inXYOD8LHZRoaRu28HO_xus/view?usp=drive_link",
        "https://drive.google.com/file/d/1RAZoapip24pn8JtLnM13wQSVbk753a_5/view?usp=drive_link",
        "https://drive.google.com/file/d/1WPNb5s06H9mq9qqROvwxmzCyaU25p_ID/view?usp=drive_link",
        "https://drive.google.com/file/d/1upwe4VJxitRAfvLMl91UbNB911-TgvYq/view?usp=drive_link",
        "https://drive.google.com/file/d/1uz1nYvA9NWFudEqAFsf6k9NHSKn6p7TS/view?usp=drive_link",
        "https://drive.google.com/file/d/1N_pptY5yJ8WUQybNBbf26l5h__Mqbp0T/view?usp=drive_link",
        "https://drive.google.com/file/d/1pTw2d02nikHEZr5XWFGdrlIV-XGxeaVx/view?usp=drive_link",
    ],
};

// Fungsi untuk mengubah link berbagi Google Drive menjadi direct link
function convertToDirectLink(link) {
    return link.replace(
        /https:\/\/drive\.google\.com\/file\/d\/(.*?)\/view\?usp=.*$/,
        "https://drive.google.com/uc?export=view&id=$1"
    );
}

// Atur lagu latar
const backgroundMusic = document.getElementById("background-music");
backgroundMusic.src = convertToDirectLink(driveLinks.music);

// Array konten halaman
const pages = [
    "alooo lala as ngookk paliiing cantiiikkk seduniaaaaaaaa.",
    "happy besdeee lalaaa🎂, mogaa lalaaa selalu dikelilingi orang baiiikkkk.",
    "see you on top lalaaaa👋, jaga dirii baik baik yaaa.",
    `
        <div id="gallery-title">i still miss butterfly era with you hehe</div>
        <div id="gallery">
            ${driveLinks.photos
                .map(
                    (link, i) =>
                        `<img src="${convertToDirectLink(link)}" alt="Foto ${i + 1}">`
                )
                .join("")}
        </div>
    `,
];

// Indeks halaman saat ini
let currentPage = 0;

// Elemen HTML
const contentDisplay = document.getElementById("content");
const textDisplay = document.getElementById("text-display");
const nextButton = document.getElementById("next-btn");

// Fungsi untuk menangani perubahan halaman
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
