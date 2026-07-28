const uploadButton = document.getElementById("uploadButton");
const uploadStatus = document.getElementById("uploadStatus");


uploadButton.addEventListener("click", async () => {

    const title = document.getElementById("assetTitle").value.trim();
    const description = document.getElementById("assetDescription").value.trim();
    const category = document.getElementById("assetCategory").value;
    const file = document.getElementById("assetFile").files[0];


    console.log("Upload started");

    console.log({
        title,
        description,
        category,
        file
    });


    if (!title || !file) {

        uploadStatus.textContent =
            "Please add a title and choose a file.";

        return;

    }


    try {

        uploadStatus.textContent =
            "Uploading file...";


        // Create unique filename
        const fileName =
            `${Date.now()}-${file.name}`;


        console.log("Uploading to Storage:", fileName);



        // Upload file to Storage
        const { error: storageError } =
            await supabaseClient
                .storage
                .from("assets")
                .upload(fileName, file);



        if (storageError) {

            console.error(
                "Storage Error:",
                storageError
            );

            throw storageError;

        }


        console.log("Storage upload complete");



        // Get public URL
        const { data: publicURL } =
            supabaseClient
                .storage
                .from("assets")
                .getPublicUrl(fileName);



        const fileUrl =
            publicURL.publicUrl;


        console.log(
            "File URL:",
            fileUrl
        );



        uploadStatus.textContent =
            "Saving asset information...";



        // Insert into database
        const { data, error: databaseError } =
            await supabaseClient
                .from("assets")
                .insert([
                    {
                        title: title,
                        description: description,
                        category: category,
                        file_url: fileUrl,
                        file_name: fileName
                    }
                ])
                .select();



        console.log(
            "Database response:",
            data
        );


        console.log(
            "Database error:",
            databaseError
        );



        if (databaseError) {

            throw databaseError;

        }



        uploadStatus.textContent =
            "Upload successful!";


        console.log(
            "Asset uploaded successfully"
        );



        // Clear form
        document.getElementById("assetTitle").value = "";
        document.getElementById("assetDescription").value = "";
        document.getElementById("assetFile").value = "";


    } catch (error) {


        console.error(
            "UPLOAD FAILED:",
            error
        );


        uploadStatus.textContent =
            "Upload failed: " + error.message;

    }

});
