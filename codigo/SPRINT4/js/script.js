document.addEventListener('DOMContentLoaded', function() {
    carregarConfiguracoesConta()
    carregarConfiguracoesSenha()
    carregarConfiguracoesSeguranca()
    carregarConfiguracoesAplicativo();
    carregarConfiguracoesNotificacao();
  });


function salvarConfiguracoesConta() {
    
    var primeiroNome = document.querySelector('#prinome').value;
    var ultimoNome = document.querySelector('#ultnome').value;
    var email = document.querySelector('#seumail').value;
    var telefone = document.querySelector('#numtel').value;
    var ocupacao = document.querySelector('#ocupac').value;
    var idade = document.querySelector('#suaida').value;
    var sobreMim = document.querySelector('#sobrevc').value;
  
   
    var configuracoesConta = {
      primeiroNome: primeiroNome,
      ultimoNome: ultimoNome,
      email: email,
      telefone: telefone,
      ocupacao: ocupacao,
      idade: idade,
      sobreMim: sobreMim
    };

    var nomeCompleto = primeiroNome + " " + ultimoNome;
   document.getElementById("nomecompleto").innerHTML = nomeCompleto;

  
    
    localStorage.setItem('configuracoesConta', JSON.stringify(configuracoesConta));
  }
  
 
function carregarConfiguracoesConta() {
    
 var configuracoesConta = JSON.parse(localStorage.getItem('configuracoesConta'));
  
   
 document.querySelector('#prinome').value = configuracoesConta.primeiroNome;
 document.querySelector('#ultnome').value = configuracoesConta.ultimoNome;
 document.querySelector('#seumail').value = configuracoesConta.email;
 document.querySelector('#numtel').value = configuracoesConta.telefone;
 document.querySelector('#ocupac').value = configuracoesConta.ocupacao;
 document.querySelector('#suaida').value = configuracoesConta.idade;
 document.querySelector('#sobrevc').value = configuracoesConta.sobreMim;
 }

    
function salvarConfiguracoesSenha() {
  
    var senhaAtual = document.querySelector('#atusenha').value;
    var novaSenha = document.querySelector('#novasenha').value;
    var confirmarNovaSenha = document.querySelector('#confsenha').value;
  
    
    var configuracoesSenha = {
      senhaAtual: senhaAtual,
      novaSenha: novaSenha,
      confirmarNovaSenha: confirmarNovaSenha
    };
  
    localStorage.setItem('configuracoesSenha', JSON.stringify(configuracoesSenha));
  }

  
function carregarConfiguracoesSenha() {
    
    var configuracoesSenha = JSON.parse(localStorage.getItem('configuracoesSenha'));
  
 
    document.querySelector('#atusenha').value = configuracoesSenha.novaSenha;
   // document.querySelector('#novasenha').value = configuracoesSenha.novaSenha;
  // document.querySelector('#confsenha').value = configuracoesSenha.confirmarNovaSenha;
  }
  
 
function salvarConfiguracoesSeguranca() {
    var senha = document.querySelector('#senha2').value;
    var palavraChave = document.querySelector('#pchave1').value;

    var configuracoesSeguranca = {
      senha: senha,
      palavraChave: palavraChave,
    };
  

    localStorage.setItem('configuracoesSeguranca', JSON.stringify(configuracoesSeguranca));
  }
  
 
function carregarConfiguracoesSeguranca() {
   
    var configuracoesSeguranca = JSON.parse(localStorage.getItem('configuracoesSeguranca'));
  
   
    document.querySelector('#senha2').value = configuracoesSeguranca.senha;
    document.querySelector('#pchave1').value = configuracoesSeguranca.palavraChave;
  }
  
  
function salvarConfiguracoesAplicativo() {
   
    var modoDaltonico = document.querySelector('#mododalt').checked;
    var modoEconomiaDados = document.querySelector('#ecodados').checked;
  
    
    var configuracoesAplicativo = {
      modoDaltonico: modoDaltonico,
      modoEconomiaDados: modoEconomiaDados
    };
  
  
    localStorage.setItem('configuracoesAplicativo', JSON.stringify(configuracoesAplicativo));
  }
  
  
function carregarConfiguracoesAplicativo() {
   
    var configuracoesAplicativo = JSON.parse(localStorage.getItem('configuracoesAplicativo'));
  
    
    document.querySelector('#mododalt').checked = configuracoesAplicativo.modoDaltonico;
    document.querySelector('#ecodados').checked = configuracoesAplicativo.modoEconomiaDados;
  }
  
 
function salvarConfiguracoesNotificacao() {
   
    var todasNotificacoes = document.querySelector('#noti1').checked;
    var notificacoesSelecionadas = document.querySelector('#noti2').checked;
    var notificacoesDesligadas = document.querySelector('#noti3').checked;
  
 
    var configuracoesNotificacao = {
      todasNotificacoes: todasNotificacoes,
      notificacoesSelecionadas: notificacoesSelecionadas,
      notificacoesDesligadas: notificacoesDesligadas
    };
  
 
    localStorage.setItem('configuracoesNotificacao', JSON.stringify(configuracoesNotificacao));
  }
  
 
function carregarConfiguracoesNotificacao() {
    
    var configuracoesNotificacao = JSON.parse(localStorage.getItem('configuracoesNotificacao'));
  
  
    document.querySelector('#noti1').checked = configuracoesNotificacao.todasNotificacoes;
    document.querySelector('#noti2').checked = configuracoesNotificacao.notificacoesSelecionadas;
    document.querySelector('#noti3').checked = configuracoesNotificacao.notificacoesDesligadas;
  }
  

  
