/*class Cliente {
    constructor(){
        this.clientes = localStorage.getItem('tbClientes') === null
                        ? []
                        : JSON.parse(localStorage.getItem('tbClientes'))
    }
    salva(cliente){
            if(document.getElementById('codigo').getAttribute('disabled')==='disabled'){
               this.apaga(cliente.codigo) 
            }
            this.clientes.push(cliente) //adiciona um novo elemento ao array
            alert('Cliente salvo com Sucesso!')
            localStorage.setItem('tbClientes', JSON.stringify(this.clientes)) 
    }

    edita(cliente){
        document.getElementById('codigo').value = cliente.codigo
        document.getElementById('codigo').setAttribute('disabled', 'disabled') //nao deixa editar o campo CODIGO        
        document.getElementById('nome').value = cliente.nome
        document.getElementById('rg').value = cliente.rg
        document.getElementById('endereco').value = cliente.endereco
        document.getElementById('bairro').value = cliente.bairro
        document.getElementById('cidade').value = cliente.cidade
        document.getElementById('cep').value = cliente.cep
        document.getElementById('uf').value = cliente.uf
        document.getElementById('celular').value = cliente.celular
        document.getElementById('cpf').value = cliente.cpf
        document.getElementById('nfantasia').value = cliente.nfantasia
        document.getElementById('contato').value = cliente.contato
        document.getElementById('emailpessoal').value = cliente.emailpessoal
        document.getElementById('nascimento').value = cliente.nascimento
        document.getElementById('observacoes').value = cliente.observacoes
    }

    apaga(codigo){
        let index = this.clientes.findIndex(cliente => cliente.codigo == codigo)
        this.clientes.splice(index, 1) //splice remove o item do indice no array
        localStorage.setItem('tbClientes',JSON.stringify(this.clientes))
        cliente.atualiza()
    }

    lista(){
       const listagem = this.clientes.map((cliente) => (
        `<tr>
            <td>${cliente.codigo}</td>
            <td>${cliente.nome}</td>
            <td>${cliente.rg}</td>
            <td>${cliente.endereco}</td>
            <td>${cliente.bairro}</td>
            <td>${cliente.cidade}</td>
            <td>${cliente.cep}</td>
            <td>${cliente.uf}</td>
            <td>${cliente.celular}</td>
            <td>${cliente.cpf}</td>
            <td>${cliente.nfantasia}</td>
            <td>${cliente.contato}</td>
            <td>${cliente.emailpessoal}</td>
            <td>${cliente.nascimento}</td>
            <td>${cliente.observacoes}</td>
            <td>
            <button id='apagar' onClick='cliente.apaga(${cliente.codigo})'>
            🗑️Apagar </button>
            <button id='editar' onClick='cliente.edita(${JSON.stringify(cliente)})'>
            ✐Editar </button>
            </td>
        </tr>
        `
        ))
        return(`<table border='1' class='paleBlueRows'>
        <caption>Relação de Clientes</caption>
        <thead> 
            <th>Código</th>
            <th>Nome</th>
            <th>RG/IE</th>
            <th>Endereço</th>
            <th>Bairro</th>
            <th>Cidade</th>
            <th>CEP</th>
            <th>UF</th>
            <th>Celular</th>
            <th>CPF</th>
            <th>Nome Fantasia</th>
            <th>Contato</th>
            <th>E-mail Pessoal</th>
            <th>Nascimento</th>
            <th>Observações</th>
            <th>Opções</th>
        </thead>
        <tbody>${listagem}</tbody>
        </table>
        `)     
    }
    atualiza(){
            document.getElementById('listagem').innerHTML = cliente.lista()
    }
} 
    //instanciamos um novo objeto
    const cliente = new Cliente() 
    //tratamos o botão salvar
    document.getElementById('salvar').onclick = function(){
        const registro = {
            codigo: document.getElementById('codigo').value,
            nome: document.getElementById('nome').value,
            rg: document.getElementById('rg').value,
            endereco: document.getElementById('endereco').value,
            bairro: document.getElementById('bairro').value,
            cidade: document.getElementById('cidade').value,
            cep: document.getElementById('cep').value,
            uf: document.getElementById('uf').value,
            celular: document.getElementById('celular').value,
            cpf: document.getElementById('cpf').value,
            nfantasia: document.getElementById('nfantasia').value,
            contato: document.getElementById('contato').value,
            emailpessoal: document.getElementById('emailpessoal').value,
            nascimento: document.getElementById('nascimento').value,
            observacoes: document.getElementById('observacoes').value
        }

        cliente.salva(registro)
    }

    //tratamos a Listagem
    window.onload = function(){
        cliente.atualiza()
    }

    //tratamos a alteracao no campo utlizado
    document.getElementById('utilizado').onchange = function (){
        let limite = document.getElementById('limite').value
        let utilizado = document.getElementById('utilizado').value
              if(parseFloat(utilizado) > parseFloat(limite)){
            alert(`O valor utilizado ${utilizado} não pode ser maior que o limite de Crédito ${limite}!`)
            document.getElementById('utilizado').value = 0
        } else {
            saldo = (limite - utilizado)
        }
        document.getElementById('saldo').value = saldo.toFixed(2)
        
        

    }*/

    