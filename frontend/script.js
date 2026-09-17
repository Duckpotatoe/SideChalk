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

function analyzeImage(){
  
}
