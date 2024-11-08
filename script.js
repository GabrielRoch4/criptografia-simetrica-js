// Função para criptografar a mensagem
function encryptMessage() {
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    if (!message || !key) {
        alert("Por favor, insira a mensagem e a chave de criptografia.");
        return;
    }

    const encrypted = CryptoJS.AES.encrypt(message, key).toString();
    document.getElementById("output").value = encrypted;
}

// Função para descriptografar a mensagem
function decryptMessage() {
    const encryptedMessage = document.getElementById("message").value;
    const key = document.getElementById("key").value;

    if (!encryptedMessage || !key) {
        alert("Por favor, insira a mensagem criptografada e a chave de criptografia.");
        return;
    }

    try {
        const decrypted = CryptoJS.AES.decrypt(encryptedMessage, key).toString(CryptoJS.enc.Utf8);
        if (!decrypted) throw new Error("Mensagem inválida.");
        document.getElementById("output").value = decrypted;
    } catch (e) {
        alert("Falha na descriptografia. Verifique se a chave está correta.");
        document.getElementById("output").value = "";
    }
}
