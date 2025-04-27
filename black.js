const products = [
    { name: "Pc Portable", price: 4500, image: "pcPo.jpg" },
    { name: "Watch", price: 500, image: "D.jpg" },
    { name: "Watch Sport", price: 600, image: "w3.jpg" },
    { name: "Smart Watch", price: 550, image: "w1.jpg" },
    { name: "Smart Watch", price: 550, image: "w4.jpg" },
    { name: "Réfrigérateur", price: 10000, image: "ref.jpg" },
    { name: "AirFryer", price: 400, image: "B.jpg" },
    { name: "Climatiseur", price: 70, image: "G.jpg" },
    { name: "Airpods", price: 400, image: "C.jpg" },
    { name: "Aspirateur", price: 900, image: "A.jpg" },
    { name: "Machine à laver", price: 7500, image: "machineAlaver.jpg" },
    { name: "TV", price: 500, image: "F.jpg" }
];


const searchBar = document.getElementById("searchBar");
const productList = document.getElementById("productList");


searchBar.addEventListener("input", (event) => {
    const query = event.target.value.toLowerCase().trim();
    productList.innerHTML = "";

    if (query === "") {
        productList.style.display = "none";
        return;
    }

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(query)
    );

    if (filteredProducts.length === 0) {
        productList.style.display = "none";
        return;
    }

    productList.style.display = "block";

    filteredProducts.forEach(product => {
        const li = document.createElement("li");
        li.innerHTML = `
            <img src="${product.image}" style="width: 50px; height: 50px; margin-right: 10px;">
            ${product.name} - ${product.price} DH
        `;

        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
            window.location.href = `produit.html?product=${encodeURIComponent(product.name)}`;

        });

        productList.appendChild(li);
    });
});
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", function () {
        document.getElementById("formContainer").style.display = "block";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("purchaseModal");
    const closeModal = document.querySelector(".close");
    const productNameInput = document.getElementById("productName");
    const purchaseForm = document.getElementById("purchaseForm");

    // Sélectionner tous les boutons "Acheter"
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function () {
            const productInfo = this.previousElementSibling.textContent;
            productNameInput.value = productInfo; // Insérer le nom du produit
            modal.style.display = "flex"; // Afficher le modal
        });
    });

    // Fermer le modal quand on clique sur la croix
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Fermer le modal si on clique en dehors
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Gérer la soumission du formulaire
    purchaseForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Empêcher le rechargement de la page
        alert("Achat confirmé ! Merci pour votre commande.");
        modal.style.display = "none"; // Fermer le modal après l'envoi
    });
});