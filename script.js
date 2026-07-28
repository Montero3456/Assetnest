const assetGrid = document.getElementById("assetGrid");
const search = document.getElementById("search");

// This will load real assets later from Supabase
function loadAssets() {

    assetGrid.innerHTML = `
        <div style="
            grid-column: 1 / -1;
            text-align: center;
            padding: 80px;
            color: #64748B;
        ">
            <h2>No assets uploaded yet</h2>
            <p>Be the first to upload an RBXM or RBXL file!</p>
        </div>
    `;

}

loadAssets();

// Search (will work once assets are loaded)
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
