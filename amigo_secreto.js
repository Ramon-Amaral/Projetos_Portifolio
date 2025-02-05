const participantes = ["Ana", "Bruno", "Carlos", "Diana", "Eduardo", "Fernanda"];

function sortearAmigoSecreto(participantes) {
    const sorteio = [...participantes];
    const resultado = {};

    participantes.forEach(participante => {
        let amigoSecreto;
        do {
            amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigoSecreto === participante);

        resultado[participante] = amigoSecreto;
        sorteio.splice(sorteio.indexOf(amigoSecreto), 1);
    });

    return resultado;
}

const sorteio = sortearAmigoSecreto(participantes);
Object.entries(sorteio).forEach(([participante, amigoSecreto]) => {
    console.log(`${participante} tirou ${amigoSecreto}`);
});
