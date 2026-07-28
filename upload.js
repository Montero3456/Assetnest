const uploadButton = document.getElementById("uploadButton");
const uploadStatus = document.getElementById("uploadStatus");


uploadButton.addEventListener("click", async () => {

    const title = document.getElementById("assetTitle").value;
    const description = document.getElementById("assetDescription").value;
    const category = document.getElementById("assetCategory").value;
    const file = document.getElementById("assetFile").files[0];


    if (!title || !description || !file) {

        uploadStatus.textContent =
            "Please complete all fields.";

        return;

    }


    uploadStatus.textContent =
        "Uploading file...";


    const fileName =
        `${Date.now()}-${file.name}`;


    const { data, error } =
        await supabaseClient
            .storage
            .from("assets")
            .upload(fileName, file);



    if (error) {

        console.error(error);

        uploadStatus.textContent =
            "Upload failed.";

        return;

    }


    const { data: urlData } =
        supabaseClient
            .storage
            .from("assets")
            .getPublicUrl(fileName);



    console.log({
        title,
        description,
        category,
        fileUrl: urlData.publicUrl
    });


    uploadStatus.textContent =
        "File uploaded successfully!";


});
