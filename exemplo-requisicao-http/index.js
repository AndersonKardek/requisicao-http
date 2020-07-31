// const axios = require('axios');
const url = "http://localhost:3000";
let carros = [];

const get = async (endpoint) => {
    let result = await fetch(url + endpoint, {
        method: 'get',
    });
    // .then(res => {
    //     result = res;
    //     console.log(res.data);
    // })
    // .catch(error => {
    //     console.log(error);
    // })

    // .finally(() => {
    //     console.log('terminei');
    // });

    //then() -> em caso de sucesso na requisição, faça isoo

    // catch() -> em caso de erro, faça isso

    // finally() -> depois de tudo o que foi feito, faça isso

    return result.json();
}

const post = (endpoint, dado) => {
    axios.post(url + endpoint, dado)
        .then(res => {
            console.log('Dado add com sucessro' + endpoint);
            console.log(res.data);
        })
        .catch(error => {
            console.log('houve erro ao tentar add em ' + endpoint);
            console.log(error);
        });
}

const put = (endpoint, dado) => {
    axios.put(url + endpoint, dado)
        .then(res => {
            console.log('Dado att com sucessro' + endpoint);
            console.log(res.data);
        })
        .catch(error => {
            console.log('houve erro ao tentar att em ' + endpoint);
            console.log(error);
        });
}



(async () => {


    carros = await get('/carros');

    let div = document.getElementById('carros');


    carros.forEach(carro => {
        let ul = document.createElement('ul');
        ul.classList.add('lista')

        let nome = document.createElement('li');
        nome.innerHTML = "nome:" + carro.nome;

        let versao = document.createElement('li');
        versao.innerHTML = "versao: " + carro.versao

        let ano = document.createElement('li');
        ano.innerHTML = "ano: " + carro.ano;

        ul.appendChild(nome)
        ul.appendChild(versao)
        ul.appendChild(ano)

        div.appendChild(ul);
    })


    // console.log(await get('/carros'))
    // put('/carros/1', {
    //     id: 1,
    //     nome: "Golf gti",
    //     ano: "2018",
    //     versao: "highline"
    // })
})();

