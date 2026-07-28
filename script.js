const assetGrid = document.getElementById("assetGrid");


async function loadAssets() {

    if (!assetGrid) {
        return;
    }

    assetGrid.innerHTML = `
        <div class="loading">
            <h2>Loading assets...</h2>
            <p>Getting files from AssetNest</p>
        </div>
    `;

}


loadAssets();
