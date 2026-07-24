const mugs = [
    {
        image: "mug.jpg",
        title: "Ceramic Mug",
        price: "₱360"
    },
    {
        image: "mug2.jpg",
        title: "Lady Ceramic Mug",
        price: "₱480"
    }
];

let currentMug = 0;

function changeMug() {
    currentMug = (currentMug + 1) % mugs.length;

    document.getElementById("mugImage").src = mugs[currentMug].image;
    document.getElementById("mugTitle").textContent = mugs[currentMug].title;
    document.getElementById("mugPrice").textContent = mugs[currentMug].price;
}
