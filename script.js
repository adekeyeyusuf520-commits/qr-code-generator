const qrText = document.getElementById("qrText");

const generateBtn = document.getElementById("generateBtn");

const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.getElementById("qrContainer");

let qrCode = null;


/* =========================
   GENERATE QR CODE
========================= */

function generateQRCode() {

    const text = qrText.value.trim();


    // Check if the user entered something

    if (text === "") {

        alert("Please enter some text or a URL.");

        return;
    }


    // Remove the previous QR code

    qrContainer.innerHTML = "";


    // Create a new QR code

    qrCode = new QRCode(qrContainer, {

        text: text,

        width: 250,

        height: 250,

        colorDark: "#000000",

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });


    // Enable download button

    downloadBtn.disabled = false;

}


/* =========================
   GENERATE BUTTON
========================= */

generateBtn.addEventListener("click", function () {

    generateQRCode();

});


/* =========================
   DOWNLOAD QR CODE
========================= */

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
