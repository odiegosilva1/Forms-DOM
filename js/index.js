document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons[0].checked = true;

    const formulario = document.getElementById('formulario');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const endereco = document.getElementById('endereco').value;
        const cidade = document.getElementById('cidade').value;
        const estado = document.getElementById('estado').value;
        const cargo = document.querySelector('input[name="cargo"]:checked').value;

        const areasSelecionadas = document.querySelectorAll('input[name="area"]:checked');
        const areasInteresse = Array.from(areasSelecionadas).map(area => area.value);
        const curriculo = document.getElementById('curriculo').value;

        console.log('Nome:', nome);
        console.log('Endereço:', endereco);
        console.log('Cidade:', cidade);
        console.log('Estado:', estado);
        console.log('Cargo:', cargo);
        console.log('Áreas de Interesse:', areasInteresse);
        console.log('Currículo:', curriculo);
    });
});