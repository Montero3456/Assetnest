\const assetGrid = document.getElementById("assetGrid");


async function loadAssets(){

    assetGrid.innerHTML = `
        <div class="loading">
            <h2>Loading assets...</h2>
            <p>Getting files from database</p>
        </div>
    `;


    // Assets will be loaded here after we create the database table

}


loadAssets();
