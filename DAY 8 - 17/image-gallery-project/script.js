const gallery = document.getElementById("gallery");
const lightbox = document.getElementById("lightbox");
const fullImage = document.getElementById("fullImage");
const categorySelect = document.getElementById("categorySelect");
const themeCheckbox = document.getElementById("themeToggleCheckbox");

let currentIndex = 0;

let allImages = [
  { url: "https://picsum.photos/id/1015/600/400", caption: "Tranquil Lake in the Mountains", category: "nature" },
  { url: "https://picsum.photos/id/1024/600/400", caption: "Eagel", category: "animals" },
  // { url: "https://picsum.photos/id/1031/600/400", caption: "Tall Waterfall in Forest", category: "nature" },
  { url: "https://picsum.photos/id/1022/600/400", caption: "Busy City Street at Night", category: "cities" },
  { url: "https://picsum.photos/id/1041/600/400", caption: "Skyscrapers in Blue Hour", category: "cities" },
  { url: "https://picsum.photos/id/1050/600/400", caption: "Misty Forest Trail", category: "nature" },
  { url: "https://picsum.photos/id/1062/600/400", caption: "Cute Cat Sleeping Peacefully", category: "animals" },
  { url: "https://picsum.photos/id/1067/600/400", caption: "Golden Sand Dunes", category: "nature" },
  { url: "https://picsum.photos/id/1084/600/400", caption: "Sunset over the Ocean", category: "nature" },
  { url: "https://picsum.photos/id/1080/600/400", caption: "Elephants in the Wild", category: "animals" },
  { url: "https://picsum.photos/id/1082/600/400", caption: "Modern City Skyscrapers", category: "cities" },
  { url: "https://picsum.photos/id/1081/600/400", caption: "Butterfly Resting on Flower", category: "nature" },
  // { url: "https://picsum.photos/id/1085/600/400", caption: "Highway Lights in Motion", category: "cities" },
  { url: "https://picsum.photos/id/1083/600/400", caption: "Koala Hugging Tree", category: "animals" },
  { url: "https://picsum.photos/id/1079/600/400", caption: "Colorful Autumn Trees", category: "nature" },
  { url: "https://picsum.photos/id/1077/600/400", caption: "Seagulls Flying Over Sea", category: "animals" },
  { url: "https://picsum.photos/id/1076/600/400", caption: "Snow-Covered Mountain Peaks", category: "nature" },
  { url: "https://picsum.photos/id/1072/600/400", caption: "Close-Up of Tiger Face", category: "animals" },
  { url: "https://picsum.photos/id/1069/600/400", caption: "Snowy Landscape Hills", category: "nature" },
  { url: "https://picsum.photos/id/1066/600/400", caption: "Colorful Parrot Perched", category: "animals" },
  { url: "https://picsum.photos/id/1055/600/400", caption: "Raindrops on Window Glass", category: "nature" },
  { url: "https://picsum.photos/id/1049/600/400", caption: "Smiling Golden Retriever", category: "animals" },
  { url: "https://picsum.photos/id/1045/600/400", caption: "Graffiti on Urban Wall", category: "cities" },
  { url: "https://picsum.photos/id/1035/600/400", caption: "Historic Clock Tower", category: "cities" },
  { url: "https://picsum.photos/id/1029/600/400", caption: "Cow Grazing in Field", category: "animals" },
  { url: "https://picsum.photos/id/1027/600/400", caption: "Country Road through Forest", category: "nature" },
  { url: "https://picsum.photos/id/1021/600/400", caption: "River Crossing a City", category: "cities" },
  { url: "https://picsum.photos/id/1018/600/400", caption: "Puppy Sleeping on Floor", category: "animals" },
  { url: "https://picsum.photos/id/1009/600/400", caption: "Bridge during Sunset", category: "cities" },
  { url: "https://picsum.photos/id/1003/600/400", caption: "Tree Reflection on Water", category: "nature" }
];

let currentImages = [...allImages];

function renderGallery() {
  gallery.innerHTML = "";
  currentImages.forEach((img, index) => {
    const container = document.createElement("div");
    container.className = "img-container";

    const imageEl = document.createElement("img");
    imageEl.src = img.url;
    imageEl.alt = img.caption;
    imageEl.onclick = () => openModal(index);

    const caption = document.createElement("div");
    caption.className = "caption";
    caption.textContent = img.caption;

    container.appendChild(imageEl);
    container.appendChild(caption);
    gallery.appendChild(container);
  });
}

function openModal(index) {
  currentIndex = index;
  fullImage.src = currentImages[index].url;
  fullImage.alt = currentImages[index].caption;
  lightbox.style.display = "flex";
}

function closeModal() {
  lightbox.style.display = "none";
}

function prevImage() {
  currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
  openModal(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % currentImages.length;
  openModal(currentIndex);
}

function filterByCategory() {
  const value = categorySelect.value;
  if (value === "all") {
    currentImages = [...allImages];
  } else {
    currentImages = allImages.filter(img => img.category === value);
  }
  renderGallery();
}

function handleUpload() {
  const input = document.getElementById("uploadInput");
  if (input.files) {
    [...input.files].forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        allImages.push({ url: reader.result, caption: file.name, category: "custom" });
        currentImages = [...allImages];
        renderGallery();
      };
      reader.readAsDataURL(file);
    });
  }
}

themeCheckbox.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeCheckbox.checked);
});

renderGallery();
