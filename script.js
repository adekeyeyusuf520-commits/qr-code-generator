const qrText = document.getElementById("qrText");
const qrColor = document.getElementById("qrColor");
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

    // Remove the previous QR code
    qrContainer.innerHTML = "";

    // Create the QR code
    qrCode = new QRCode(qrContainer, {
        text: text,

        width: 250,
        height: 250,

        colorDark: qrColor.value,
        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H
    });

    // Enable download button
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
