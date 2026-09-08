const imageInput = document.getElementById("imageInput");
const imagePreview = document.getElementById("imagePreview");


// Show uploaded image
imageInput.addEventListener("change", function () {

    const file = imageInput.files[0];

    if (file) {

        const imageURL = URL.createObjectURL(file);

        imagePreview.innerHTML = `
            <img src="${imageURL}" alt="Satellite Image">
        `;

    }

});


// Analyze button
function analyzeImage() {

    const query = document.getElementById("queryInput").value;
    const result = document.getElementById("result");


    // Check image
    if (!imageInput.files[0]) {

        result.innerHTML = `
            <p>Please upload a satellite image first.</p>
        `;

        return;
    }


    // Check question
    if (query.trim() === "") {

        result.innerHTML = `
            <p>Please enter a question.</p>
        `;

        return;
    }


    // Demo AI result
    result.innerHTML = `

        <h3>✅ Analysis Complete</h3>

        <br>

        <p>
            <strong>Question:</strong>
            ${query}
        </p>

        <br>

        <p>
            <strong>Detected Task:</strong>
            Single Image VQA
        </p>

        <br>

        <p>
            <strong>AI Answer:</strong>
            This is a demonstration response.
            The real remote-sensing AI model will be
            connected in a later version.
        </p>

        <br>

        <p>
            <strong>Confidence:</strong>
            87%
        </p>

    `;

}