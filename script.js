const assets = [
    {
        title: "Modern House",
        description: "A detailed modern Roblox house ready to use.",
        creator: "BuilderMike",
        downloads: 142,
        image: "https://picsum.photos/500/300?random=1"
    },
    {
        title: "Fantasy Sword",
        description: "High-quality medieval sword model.",
        creator: "SwordDev",
        downloads: 89,
        image: "https://picsum.photos/500/300?random=2"
    },
    {
        title: "City Map",
        description: "Large open-world city with roads and buildings.",
        creator: "MapCreator",
        downloads: 354,
        image: "https://picsum.photos/500/300?random=3"
    }
];

const assetGrid = document.getElementById("assetGrid");

function loadAssets() {

    assetGrid.innerHTML = "";

    assets.forEach(asset => {

        const card = document.createElement("div");
        card.className = "asset-card";

        card.innerHTML = `
            <img src="${asset.image}" alt="${asset.title}">

            <div class="card-content">

                <h2>${asset.title}</h2>

                <p>${asset.description}</p>

                <p><strong>Creator:</strong> ${asset.creator}</p>

                <p><strong>Downloads:</strong> ${asset.downloads}</p>

                <button class="download">
                    Download
                </button>

            </div>
        `;

        const button = card.querySelector(".download");

        button.addEventListener("click", () => {
            alert("Later this will download the RBXM/RBXL file.");
        });

        assetGrid.appendChild(card);

    });

}

loadAssets();

/* Search */

const search = document.getElementById("search");

search.addEventListener("input", function () {

    const text = this.value.toLowerCase();

    const cards = document.querySelectorAll(".asset-card");

    cards.forEach(card => {

        const title = card.querySelector("h2").textContent.toLowerCase();

        const description = card.querySelector("p").textContent.toLowerCase();

        if (
            title.includes(text) ||
            description.includes(text)
        ) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });

});
