// Links to photos
const driveLinks = {
    photos: [
        "https://haqqi123.github.io/lala/assets/photos/photo1.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo2.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo3.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo4.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo5.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo6.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo7.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo8.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo9.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo10.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo11.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo12.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo13.jpg",
        "https://haqqi123.github.io/lala/assets/photos/photo14.jpg",
        // Tambahkan foto lainnya
    ],
};

// Populate gallery
const galleryElement = document.getElementById("gallery");
driveLinks.photos.forEach((photo, index) => {
    const imgElement = document.createElement("img");
    imgElement.src = photo;
    imgElement.alt = `Foto ${index + 1}`;
    galleryElement.appendChild(imgElement);
});

// Text pages and button
const pages = [
    "alooo lala as ngookk paliiing cantiiikkk seduniaaaaaaaa.",
    "happy besdeee lalaaa🎂, mogaa lalaaa selalu dikelilingi orang baiiikkkk.",
    "jugaaa sekali lagi aku mo ngucapin terima kasiiih ke lalaa buat semuanyaaa.",
    "see you on top lalaaaa👋, jaga dirii baik baik dan semoga impianmuu tecapai yaaa.",
];
let currentPage = 0;
const contentDisplay = document.getElementById("text-display");
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", () => {
    if (currentPage < pages.length - 1) {
        currentPage++;
        contentDisplay.innerText = pages[currentPage];
        if (currentPage === pages.length - 1) {
            nextButton.style.display = "none"; // Hide button on the last page
        }
    }
});
