const formulario = document.getElementById('meu-formulario');
const mensagem = document.getElementById('mensagem');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido: B é maior que A!";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: B não é maior que A.";
        mensagem.style.color = "red";
    }
});