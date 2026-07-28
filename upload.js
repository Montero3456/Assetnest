const uploadButton = document.getElementById("uploadButton");
const uploadStatus = document.getElementById("uploadStatus");


uploadButton.addEventListener("click", async () => {

    const title = document.getElementById("assetTitle").value;
    const description = document.getElementById("assetDescription").value;
    const category = document.getElementById("assetCategory").value;
    const file = document.getElementById("assetFile").files[0];


    if (!title || !description || !file) {

        uploadStatus.textContent =
            "Please fill in all fields and select a file.";

        return;

    }


    uploadStatus.textContent =
        "Preparing upload...";


    console.log({
        title,
        description,
        category,
        fileName: file.name
    });


    uploadStatus.textContent =
        "Upload system ready!";

});
