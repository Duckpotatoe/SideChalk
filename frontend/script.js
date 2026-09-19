
var loadFile = function(event) {
    let image = document.getElementById('output');
    let fileInput = document.getElementById('file');

    if(fileInput.files.length > 0){
        image.src = URL.createObjectURL(fileInput.files[0]);
    } else{
        alert("Please select an image first.")
    }
    
};

let uploadImage = document.getElementById('submitButton');
uploadImage.addEventListener('click', loadFile);

async function getData() {
    let fileInput = document.getElementById('file');
    const url = "http://localhost:3000/api/analyze";
    const formData = new FormData();
    formData.append ('imageID', "IT WORKS");
    formData.append ('image', fileInput.files[0]);
    try {
    const response = await fetch(url, {
        method: "POST",
        body: formData,
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error.message);
  }
}