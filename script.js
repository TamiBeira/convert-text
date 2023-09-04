document.getElementById('converter').addEventListener('click', function() {
    const textoEntrada = document.getElementById('textoEntrada').value;
    const opcaoConversao = document.getElementById('opcaoConversao').value;
    let textoConvertido = '';

    if (opcaoConversao === 'maiusculas') {
        textoConvertido = textoEntrada.toUpperCase();
    } else if (opcaoConversao === 'primeiraMaiuscula') {
        textoConvertido = textoEntrada.replace(/(^\w|\.\s\w)/gm, (match) => match.toUpperCase());
    } else if (opcaoConversao === 'minusculas') {
        textoConvertido = textoEntrada.toLowerCase();
    }

    document.getElementById('textoConvertido').textContent = textoConvertido;
});
