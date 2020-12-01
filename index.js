function adicionarVeiculo(){
    let marca = document.getElementById('marca');
    let marcaVeiculo = marca.value;

    let modelo = document.getElementById('modelo');
    let modeloVeiculo = modelo.value;

    let portas = document.getElementById('portas');
    let portasVeiculo = portas.value;

    let valor = document.getElementById('valor');
    let valorVeiculo = valor.value;

    let ano = document.getElementById('ano');
    let anoVeiculo = ano.value;

    let placa = document.getElementById('placa');
    let placaVeiculo = placa.value;

    let categoria = document.getElementById('categoria');
    let categoriaVeiculo = categoria.value;

    if(marcaVeiculo == "" || modeloVeiculo == "" || portasVeiculo == "" || valorVeiculo == "" || anoVeiculo == "" || placaVeiculo == "" || categoriaVeiculo == ""){
        alert("Os campos não estão todos preenchidos");
        return;
    }

    var tbClientes = document.getElementById('tbClientes');
    inserirLinha(tbClientes, marcaVeiculo, modeloVeiculo, portasVeiculo, valorVeiculo, anoVeiculo, placaVeiculo, categoriaVeiculo);

    salvarCarro(marcaVeiculo, modeloVeiculo, portasVeiculo, valorVeiculo, anoVeiculo, placaVeiculo, categoriaVeiculo);

    location.reload()
    return alert('O veiculo foi cadastrado no nosso banco de dados.');
}

let salvaform = document.getElementById('salvaform');
salvaform.addEventListener('click', adicionarVeiculo);

function inserirLinha(tabela, marcaVeiculo, modeloVeiculo, portasVeiculo, valorVeiculo, anoVeiculo, placaVeiculo, categoriaVeiculo){
    let linha = tabela.insertRow(-1);
    let col1 = linha.insertCell(0);
    let col2 = linha.insertCell(1);
    let col3 = linha.insertCell(2);
    let col4 = linha.insertCell(3);
    let col5 = linha.insertCell(4);
    let col6 = linha.insertCell(5);
    let col7 = linha.insertCell(6);

    col1.textContent = marcaVeiculo;
    col2.textContent = modeloVeiculo;
    col3.textContent = portasVeiculo;
    col4.textContent = valorVeiculo;
    col5.textContent = anoVeiculo;
    col6.textContent = placaVeiculo;
    col7.textContent = categoriaVeiculo;
}

function salvapesquisa(marcaVeiculo, modeloVeiculo, portasVeiculo, valorVeiculo, anoVeiculo, placaVeiculo, categoriaVeiculo){
    if(localStorage.getItem('Veiculomarca') && localStorage.getItem('Veiculomodelo') && localStorage.getItem('Veiculovalor') && localStorage.getItem('Veiculoano') && localStorage.getItem('Veiculoplaca') && localStorage.getItem('Veiculocategoria')){
        let VeiculoMarca = localStorage.getItem('Veiculomarca') + ';' + marcaVeiculo;
        localStorage.setItem('Veiculomarca', VeiculoMarca);
        
        let Veiculomodelo = localStorage.getItem('Veiculomodelo') + ';' + modeloVeiculo;
        localStorage.setItem('Veiculomodelo', Veiculomodelo);

        let Veiculoportas = localStorage.getItem('Veiculoportas') + ';' + portasVeiculo;
        localStorage.setItem('Veiculoportas', Veiculoportas);

        let VeiculoValor = localStorage.getItem('Veiculovalor') + ';' + valorVeiculo;
        localStorage.setItem('Veiculovalor', VeiculoValor);

        let Veiculoano = localStorage.getItem('Veiculoano') + ';' + anoVeiculo;
        localStorage.setItem('Veiculoano', Veiculoano);

        let Veiculoplaca = localStorage.getItem('Veiculoplaca') + ';' + placaVeiculo;
        localStorage.setItem('Veiculoplaca', Veiculoplaca);

        let Veiculocategoria = localStorage.getItem('Veiculocategoria') + ';' + categoriaVeiculo;
        localStorage.setItem('Veiculocategoria', Veiculocategoria);

    }

    else{
        localStorage.setItem('Veiculomarca', marcaVeiculo);
        localStorage.setItem('Veiculomodelo', modeloVeiculo);
        localStorage.setItem('Veiculoportas', portasVeiculo);
        localStorage.setItem('Veiculovalor', valorVeiculo);
        localStorage.setItem('Veiculoano', anoVeiculo);
        localStorage.setItem('Veiculoplaca', placaVeiculo);
        localStorage.setItem('Veiculocategoria', categoriaVeiculo);
    }
}
