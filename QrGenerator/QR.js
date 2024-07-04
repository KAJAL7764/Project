document.addEventListener('DOMContentLoaded', () => {
let qrText = document.getElementById("imgText");
let qrImage = document.getElementById("qrImage");
let generateBtn = document.getElementById("generateBtn");

function generateQR() {
    const qrValue = qrText.value;
    if (qrValue.trim() === "") {
        alert("Please enter a valid URL or text");
        return;
    }
    qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrValue);
    qrImage.style.display = "block";
}
generateBtn.addEventListener('click', generateQR);
});

// document.addEventListener('DOMContentLoaded', () => {
//     const qrText = document.getElementById('qrText');
//     const qrImage = document.getElementById('qrImage');
//     const generateBtn = document.getElementById('generateBtn');

//     function generateQR() {
//         const qrValue = qrText.value;
//         if (qrValue.trim() === "") {
//             alert("Please enter a valid URL or text");
//             return;
//         }
//         qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(qrValue);
//         qrImage.style.display = "block";
//     }

//     generateBtn.addEventListener('click', generateQR);
// });
