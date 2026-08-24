const qrText = document.getElementById("qrText");

const qrColorPicker = document.getElementById("qrColorPicker");

const qrColorHex = document.getElementById("qrColorHex");

const generateBtn = document.getElementById("generateBtn");

const downloadBtn = document.getElementById("downloadBtn");

const qrContainer = document.getElementById("qrContainer");


let qrCode = null;


/* =========================
   GENERATE QR CODE
========================= */

function generateQRCode() {

    const text = qrText.value.trim();

    if (text === "") {

        qrContainer.innerHTML = `
            <p>Your QR code will appear here</p>
        `;

        downloadBtn.disabled = true;

        return;
    }


    /* Remove old QR */

    qrContainer.innerHTML = "";


    /* Create new QR */

    qrCode = new QRCode(qrContainer, {

        text: text,

        width: 250,

        height: 250,

        colorDark: qrColorPicker.value,

        colorLight: "#ffffff",

        correctLevel: QRCode.CorrectLevel.H

    });


    downloadBtn.disabled = false;
}


/* =========================
   GENERATE BUTTON
========================= */

generateBtn.addEventListener("click", function () {

    generateQRCode();

});


/* =========================
   COLOR PICKER
========================= */

qrColorPicker.addEventListener("input", function () {

    const color = qrColorPicker.value;

    /* Update HEX input */

    qrColorHex.value = color.toUpperCase();


    /* Update QR automatically */

    if (qrText.value.trim() !== "") {

        generateQRCode();

    }

});


/* =========================
   HEX COLOR INPUT
========================= */

qrColorHex.addEventListener("input", function () {

    let hex = qrColorHex.value.trim();


    /* Add # if user doesn't type it */

    if (hex.length === 6 && !hex.startsWith("#")) {

        hex = "#" + hex;

    }


    /* Check if valid HEX */

    const validHex = /^#[0-9A-Fa-f]{6}$/;


    if (validHex.test(hex)) {

        /* Change color picker */

        qrColorPicker.value = hex;


        /* Generate new QR */

        if (qrText.value.trim() !== "") {

            generateQRCode();

        }

    }

});


/* =========================
   HEX INPUT - FORMAT
========================= */

qrColorHex.addEventListener("blur", function () {

    let hex = qrColorHex.value.trim();


    if (!hex.startsWith("#")) {

        hex = "#" + hex;

    }


    const validHex = /^#[0-9A-Fa-f]{6}$/;


    if (validHex.test(hex)) {

        qrColorHex.value = hex.toUpperCase();

        qrColorPicker.value = hex;

    } else {

        /* Reset to current color */

        qrColorHex.value =
            qrColorPicker.value.toUpperCase();

    }

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
