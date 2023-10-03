const menuBar = document.querySelector(".menu-bar");
const menuNav = document.querySelector(".menu");
const navBar = document.querySelector(".navbar");
const menuItems = document.querySelectorAll(".menu li a");


let isMenuActive = false; // Track whether menu is active or not


// Hide scrollbars
document.documentElement.style.overflow = "hidden";

// Function to hide loading screen and show content
function hideLoadingScreenAndShowContent() {
  // Your existing code to hide the loading screen

  // Show scrollbars again
  document.documentElement.style.overflow = "visible";
}

// Wait for content to load and then call the function
window.addEventListener("load", function () {
  setTimeout(hideLoadingScreenAndShowContent, 5000);
});

// Loading
window.addEventListener("load", function () {
  setTimeout(function () {
    var aosElements = document.querySelectorAll("[data-aos]");
    aosElements.forEach(function (element) {
      element.classList.add("aos-animate");
    });
  }, 5000); // Menjalankan setelah 5 detik (5000 ms)
});

menuBar.addEventListener("click", () => {
  if (!isMenuActive) {
    menuNav.classList.add("menu-active");
    menuNav.style.pointerEvents = "auto"; // Mengaktifkan pointer events
    isMenuActive = true;
  } else {
    menuNav.classList.remove("menu-active");
    isMenuActive = false;
  }
});

menuItems.forEach((menuItem) => {
  menuItem.addEventListener("click", () => {
    menuNav.classList.remove("menu-active");
    isMenuActive = false;
  });
});

window.addEventListener("scroll", () => {
  const windowPosition = window.scrollY > 0;
  navBar.classList.toggle("scrolling-active", windowPosition);
});

// Menutup menu saat mengklik di luar elemen navbar dan menu-bar
document.addEventListener("click", (event) => {
  const targetElement = event.target;

  if (!navBar.contains(targetElement) && !menuBar.contains(targetElement)) {
    menuNav.classList.remove("menu-active");
    // menuNav.style.pointerEvents = "none"; // Menonaktifkan pointer events
    isMenuActive = false;
  }
});

// Fungsi untuk menghilangkan loading setelah 2 detik
function hideLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");
  loadingScreen.style.display = "none";
}

function hideLoadingScreenAndShowHome() {
  const loadingScreen = document.getElementById("loadingScreen");
  const mainContainer = document.querySelector(".main-container");

  // Menghilangkan loading screen
  loadingScreen.style.display = "none";

  // Menampilkan bagian Home dengan menghapus class "active" dari bagian lain
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => section.classList.remove("active"));
  document.getElementById("home").classList.add("active");

  // Mengaktifkan konten utama
  mainContainer.style.display = "block";
}

// Menunggu konten website selesai dimuat
window.addEventListener("load", function () {
  // Setelah 2 detik, panggil fungsi hideLoadingScreenAndShowHome untuk menghilangkan loading dan menampilkan bagian Home
  setTimeout(hideLoadingScreenAndShowHome, 5000);
});

document.getElementById("aboutButton").addEventListener("click", function () {
  // Mengarahkan pengguna ke bagian "about" saat tombol diklik
  window.location.href = "#about";
});

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuCardImgs = document.querySelectorAll(".product-button");
  const popup = document.getElementById("popup");
  const closePopup = document.getElementById("close-popup");

  menuCardImgs.forEach((img) => {
    img.addEventListener("click", (event) => {
      const card = img.closest(".menu-card");
      const productName = card.querySelector(".menu-card-title").textContent;

      popup.querySelector("#popup-title").textContent = productName;
      popup.classList.add("active");
    });
  });

  closePopup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".testimoni-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true, // Tambahkan loop: true di sini
    grabCursor: true, // Ganti 'true' dengan true
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
});

function showPopup() {
  var popup = document.getElementById("about-popup");
  popup.style.display = "flex";
}

function closePopup() {
  var popup = document.getElementById("about-popup");
  popup.style.display = "none";
}



