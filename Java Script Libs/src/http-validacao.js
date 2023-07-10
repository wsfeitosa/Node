function extraiLinks(arrayLinks) {
    return arrayLinks.map((objetoLink) => {
        return Object.values(objetoLink).join()
    });
}

function listaValidada(listaDeLinks) {
    return extraiLinks(listaDeLinks);
}

export default listaValidada;