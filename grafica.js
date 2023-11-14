var data = new Date();
var dia = data.getDate();
var mes = data.getMonth()+1;

function mostrarData() {

    //alert(dia + "/" +(mes+1));
    pData = document.getElementById('data');
    pData.innerHTML = dia + "/" + (mes);
}
function calcularValorBanner(item) {
    
    if (dia >= 1 && dia <= 8 ) {
        var ValorFinal = ["R$55,00", "R$75,00", "R$100,00"];

        var preco = document.getElementById('preco' + item);
        let semana = document.getElementById('semana');
        semana.innerHTML = "semana de promoção 1 à 8"
        semana.style.backgroundColor = 'red';
        semana.style.color = 'white';
        semana.style.textTransform = 'uppercase'

        preco.innerHTML = ValorFinal[item]
    }

}
function calcularValorCartao(item) {
    
    if (dia >= 9 && dia <= 15 ) {
        var ValorFinal = ["R$95,00", "R$100,00", "R$125,00", "R$150,00"];

        var preco = document.getElementById('precos' + item);
        let semana = document.getElementById('semana');
        semana.innerHTML = "semana de promoção: 9 à 15"
        semana.style.backgroundColor = 'red';
        semana.style.color = 'white';
        semana.style.textTransform = 'uppercase';
        semana.style.textAlign = 'center';

        preco.innerHTML = ValorFinal[item]
    }

}

function tela() {
    display = window.screen.width;
    var boxCard = document.getElementsByClassName(".box-card");
    let fundo_lonas = document.getElementById('fundo_lonas');
    if (display < 600) {


        fundo_lonas.style.background = '#cecece', fundo_lonas.style.padding = '10px';


        boxCard.style.width = '500px'

    }
}
function temaMes(){
    var classeNov = document.getElementsByClassName("nov");
    

    if(mes == 11){
        body = document.body
        body.style.backgroundColor = 'black';
        body.style.color = 'white'

        for ( i = 0 ; i < classeNov.length; i++){
            classeNov[i].style.backgroundColor = 'black';
        }
        
    }
    if(mes == 12 && dia >=15){
        body = document.body
        body.style.backgroundColor = '#800000';
        body.style.color = 'white'

        for ( i = 0 ; i < classeNov.length; i++){
            classeNov[i].style.backgroundColor = '#501111';
        }
        
    }
}
function formulario(){
   
    
    
    form = document.getElementById("zap-verde");
    logZap = document.querySelector('.zap-verde');
    logZap.style.display = 'none';
    logZap.style.transition = '2s';
    form.style.display = 'block';
    form.style.transition = '2s';

}
function closedForm(){
    form = document.getElementById("zap-verde");
    logZap = document.querySelector('.zap-verde');
    logZap.style.display = 'block';
    form.style.display = 'none';
}
function abrirWhatsapp() {
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var msg = document.getElementById("msg").value;
    var url = "https://wa.me/5527995321787?text=" // Seu numero
      + "*Formulário de Contato*" + "%0a" // Mensagem personalizada
      + "%0a" // Quebra de linha
      + "*Nome*: " + nome + "%0a" // Dados do formulário
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
    window.open(url, '_blank').focus();
  }
