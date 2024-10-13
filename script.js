const uploadImageBtn = document.querySelector(".upload-image__button");
const uploadImageInput = document.querySelector(".upload-image__input");

uploadImageBtn.addEventListener("click", () => {
    uploadImageInput.click();
})

uploadImageInput.addEventListener("change", function(event) {
    var file = event.target.files[0];
    if(!file.type.match("image/png")) {
        alert("Por favor, insira uma imagem PNG para continuar.");
        uploadImageInput = "";
        return;
    }

    if(file > 2 * 1024 * 1024) {
        alert("A imagem precisa ter no máximo 2MB.");
        uploadImageInput = "";
        return;
    }

    console.log(file);
})

function readFileContent(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            resolve({ url: reader.result, nome: file.name });
        }

        reader.onerror = () => {
            reject(`Erro na leitura do arquivo ${file.name}`);
        }

        reader.readAsDataURL(file);
    })
}

const imageUpload = document.querySelector(".upload-image__item__img");
const textUpload = document.querySelector(".upload-image__info p");

uploadImageInput.addEventListener("change", async (event) => {
    const file = event.target.files[0];

    if(file) {
        try {
            const fileContent = await readFileContent(file);
            imageUpload.src = fileContent.url;
            textUpload.src = fileContent.nome;
        } catch (erro) {
            console.log("Erro na leitura do arquivo.");
        }
    }
})


let listOfCats = [
    { name: 'Garfield', color: 'Laranja' },
    { name: 'Snowball', color: 'Branco' },
    { name: 'Whiskers', color: 'Preto' },
    { name: 'Mittens', color: 'Laranja' },
    { name: 'Mingau', color: 'Branco' },
    { name: 'Bola de pelos', color: 'Preto e branco' },
]

function filterCatsByColor(listOfCats, catColor) {
    return listOfCats.filter(cat => cat.color === catColor);
}

let listOfDogs = [
    { name: 'Amélia', color: 'Marrom' },
    { name: 'Alfredo', color: 'Branco' },
    { name: 'Tory', color: 'Branco' },
    { name: 'Zeca', color: 'Marrom' },
    { name: 'Bidu', color: 'Preto' },
    { name: 'Caramelo', color: 'Caramelo' },
]

function filterDogsByColor(listOfDogs, dogColor) {
    return listOfDogs.filter(dog => dog.color === dogColor);
}

let gatosLaranja = filterCatsByColor(listOfCats, 'Laranja');
let cachorrosBranco = filterDogsByColor(listOfDogs, 'Branco');
console.log(gatosLaranja);
console.log(cachorrosBranco);
