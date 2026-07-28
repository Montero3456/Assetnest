const assetGrid = document.getElementById("assetGrid");


async function loadAssets() {

    if (!assetGrid) {
        return;
    }


    assetGrid.innerHTML = `
        <div class="loading">
            <h2>Loading assets...</h2>
            <p>Connecting to database</p>
        </div>
    `;


    try {

        const { data: assets, error } = await supabaseClient
            .from("assets")
            .select("*")
            .order("created_at", { ascending: false });



        if (error) {

            throw error;

        }



        if (!assets || assets.length === 0) {

            assetGrid.innerHTML = `
                <div class="loading">
                    <h2>No assets yet</h2>
                    <p>Be the first person to upload one!</p>
                </div>
            `;

            return;

        }



        assetGrid.innerHTML = "";



        assets.forEach(asset => {


            const card = document.createElement("div");

            card.className = "asset-card";


            card.innerHTML = `

                <div class="card-content">

                    <h2>
                        ${asset.title}
                    </h2>


                    <p>
                        ${asset.description || "No description provided."}
                    </p>


                    <p>
                        Category: ${asset.category || "Other"}
                    </p>


                    <a 
                        class="download"
                        href="${asset.file_url}"
                        download
                    >
                        Download
                    </a>


                </div>

            `;


            assetGrid.appendChild(card);


        });



    } catch (error) {


        console.error(
            "Loading assets failed:",
            error
        );


        assetGrid.innerHTML = `

            <div class="loading">

                <h2>
                    Failed to load assets
                </h2>

                <p>
                    ${error.message}
                </p>

            </div>

        `;

    }

}



loadAssets();
