document.addEventListener('DOMContentLoaded', () => {
    let imgBox = document.getElementById("imgBox")
    let qrImage = document.getElementById("qrImage");
    let qrText = document.getElementById("qrText");
// let generateBtn = document.getElementById("generateBtn");

function generateQR() {
    const qrValue = qrText.value;
    if (qrValue.trim() === "") {
        alert("Please enter a valid URL or text");
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrValue);
    imgBox.style.display = "block";
    
}

document.getElementById("generateBtn").addEventListener('click', generateQR);
});


 