const qrText = document.getElementById("qrText");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");
const qrContainer = document.getElementById("qrContainer");

let qrCode = null;


generateBtn.addEventListener("click", function () {

    const text = qrText.value.trim();

    if (text === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    // Remove previous QR code
    qrContainer.innerHTML = "";

    // Create new QR code
    qrCode = new QRCode(qrContainer, {
        text: text,
        width: 250,
        height: 250,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    downloadBtn.disabled = false;
});


downloadBtn.addEventListener("click", function () {

    const qrImage = qrContainer.querySelector("img");

    if (!qrImage) {
        return;
    }

    const link = document.createElement("a");

    link.href = qrImage.src;
    link.download = "my-qr-code.png";

    link.click();
});
