const uploadButton = document.getElementById("uploadButton");
const uploadStatus = document.getElementById("uploadStatus");


uploadButton.addEventListener("click", async () => {

    const title = document.getElementById("assetTitle").value;
    const description = document.getElementById("assetDescription").value;
    const category = document.getElementById("assetCategory").value;
    const file = document.getElementById("assetFile").files[0];


    if (!title || !description || !file) {

        uploadStatus.textContent =
            "Please fill out all fields and choose a file.";

        return;

    }


    uploadStatus.textContent =
        "Uploading file...";


    try {

        // Create unique file name
        const fileName =
            `${Date.now()}-${file.name}`;


        // Upload file to Supabase Storage
        const { data: storageData, error: storageError } =
            await supabaseClient
                .storage
                .from("assets")
                .upload(fileName, file);



        if (storageError) {

            throw storageError;

        }



        // Get public download URL
        const { data: urlData } =
            supabaseClient
                .storage
                .from("assets")
                .getPublicUrl(fileName);



        const fileUrl = urlData.publicUrl;



        // Save asset information to database
        const { error: databaseError } =
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

                ]);



        if (databaseError) {

            throw databaseError;

        }



        uploadStatus.textContent =
            "Upload successful!";


        // Clear form
        document.getElementById("assetTitle").value = "";
        document.getElementById("assetDescription").value = "";
        document.getElementById("assetFile").value = "";


    } catch (error) {

        console.error(error);


        uploadStatus.textContent =
            "Upload failed: " + error.message;

    }

});
