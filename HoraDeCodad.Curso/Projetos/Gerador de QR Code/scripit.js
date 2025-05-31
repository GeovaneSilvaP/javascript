const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Função para gerar o QR Code
function generateQrCode() {
  const qrCodeInputValue = qrCodeInput.value.trim();

  if (!qrCodeInputValue) return;

  qrCodeBtn.innerText = "Gerando Código...";

  qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrCodeInputValue)}`;

  qrCodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrCodeBtn.innerText = "Código Criado!";
  }, { once: true }); // garante que o evento execute apenas uma vez
}

// Clique no botão
qrCodeBtn.addEventListener("click", generateQrCode);

// Pressionar Enter no input
qrCodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    generateQrCode();
  }
});

// Limpar QR Code ao apagar o texto do input
qrCodeInput.addEventListener("keyup", () => {
  if (!qrCodeInput.value.trim()) {
    container.classList.remove("active");
    qrCodeBtn.innerText = "Gerar QR Code";
  }
});
