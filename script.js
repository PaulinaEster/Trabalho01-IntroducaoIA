let respostas = '';
let formularioValido = false;
const forms = document.querySelectorAll('.needs-validation'); 
document.getElementById('submitForm').addEventListener('click', calculaResultado);

let select = document.getElementById('opcoes')
select.addEventListener("click", geraPergunta);

let assunto = null;

function geraPergunta() {
  let selecionado = select.options[select.selectedIndex].value;
  assunto = selecionado.includes("Selecione o tipo de notícia desejada") ? null : selecionado;

  if (assunto) {
    let pergunta = `
        <div class="col-12 formulario">
          <label for="pergunta01" class="form-label pergunta">
            Sobre ${assunto}:
          </label>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pergunta${assunto}" id="pergunta${assunto}Geral">
            <label class="form-check-label" for="pergunta${assunto}Geral">
              Estou interessado em acessar notícias gerais sobre este assunto.
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="pergunta${assunto}" id="pergunta${assunto}Tecnico"
              checked>
            <label class="form-check-label" for="pergunta${assunto}Tecnico">
            Estou interessado em acessar notícias especificas sobre este assunto.
            </label>
          </div> 
        </div>
        
      `

    
      document.getElementById("formularioPrincipal").innerHTML = pergunta;
  }
}

function calculaResultado() { 
  respostas = '';
  let aux = document.querySelectorAll('.formulario'); 
  aux.forEach((node, index) => {
    gerarResposta(node, 'Tecnologia', 'https://olhardigital.com.br/?amp', ' https://g1.globo.com/tecnologia/');
    gerarResposta(node, 'Economia', 'https://www.infomoney.com.br/ ', 'https://g1.globo.com/economia/negocios/ ');
    gerarResposta(node, 'Saude', 'http://conselho.saude.gov.br/ultimas-noticias-cns', 'https://g1.globo.com/saude/');
    gerarResposta(node, 'Educacao', 'https://exame.com/busca/Educa%C3%A7%C3%A3o%20/', 'https://g1.globo.com/educacao/ ');
    gerarResposta(node, 'Agricultura', 'https://fia.com.br/blog/agronegocio/#:~:text=O%20agroneg%C3%B3cio%20se%20refere%20a,Empresas%20agr%C3%ADcolas', 'https://www.portaldoagronegocio.com.br/');
    gerarResposta(node, 'Moda', 'https://br.fashionnetwork.com/ ', 'https://g1.globo.com/pop-arte/moda-e-beleza/');
    gerarResposta(node, 'Esporte', 'https://ge.globo.com/', 'https://ge.globo.com/');
    gerarResposta(node, 'Marketing', 'https://www.mundodomarketing.com.br/', 'https://g1.globo.com/economia/negocios/');
    gerarResposta(node, 'Ciencia', 'https://www.ipea.gov.br/portal/', 'https://g1.globo.com/ciencia/');
  });
  mostraResultado();
}

function gerarResposta(node, assunto, linkTecnico, linkGeral) {
  if (node.querySelector(".pergunta").textContent.includes(assunto)) {

    let opcoes = node.querySelectorAll('.form-check');

    opcoes.forEach((form) => {
      if (form.childNodes[1].checked) {

        if (form.childNodes[1].id.includes('Tecnico')) {

          respostas += ` 
            <div class="alert alert-primary" role="alert">
              ${assunto}: interresse técnico. Para saber mais sobre <a href="${linkTecnico}" target="_blank" class="alert-link">clique aqui.</a>
            </div> `;
        } else if (form.childNodes[1].id.includes('Geral')) {

          respostas += `  
            <div class="alert alert-warning" role="alert">
              ${assunto}: interresse geral. Para saber mais sobre <a href="${linkGeral}" target="_blank" class="alert-link">clique aqui.</a>
            </div>  `;
        } 
      };
    });
  };
}


function mostraResultado() {
  let tipoResultado = respostas == '' ? 'light' : 'primary';
  let legandaResultado = respostas == '' ? 'Não foi possivel calcular o resultado' : respostas;
  let recomendacao = 'é altamente recomendado blablabla';

  document.getElementById('resultado').innerHTML = `
    <div class="row">
      ${legandaResultado}
    </div>`;
}
