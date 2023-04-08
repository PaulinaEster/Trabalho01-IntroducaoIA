let respostas;
let formularioValido = false;

document.getElementById('submitForm').addEventListener('click', validarForm);

function validarForm(){
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('click', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        console.log(form.checkValidity(), "invalido")
        form.classList.add('was-validated');
      } else {
        calculaResultado();
      }
    }, false);
  });
}


function calculaResultado(){
  


  mostraResultado();
}




function mostraResultado() {
  let tipoResultado = 'light';
  let legandaResultado = 'Não foi possivel calcular o resultado';
  let recomendacao = 'é altamente recomendado blablabla';

  document.getElementById('resultado').innerHTML = `
  <div class="card">
    <div class="card-header">
      Resultado: 
    </div>
    <div class="card-body">
      <blockquote class="blockquote mb-0">
        <div class="alert alert-${tipoResultado}" role="alert">
          ${legandaResultado}
        </div>
        <footer class="blockquote-footer"> ${recomendacao} </footer>
      </blockquote>
    </div>
  </div> `; 
}

/*
<div class="alert alert-primary" role="alert">
  A simple primary alert—check it out!
</div>
<div class="alert alert-secondary" role="alert">
  A simple secondary alert—check it out!
</div>
<div class="alert alert-success" role="alert">
  A simple success alert—check it out!
</div>
<div class="alert alert-danger" role="alert">
  A simple danger alert—check it out!
</div>
<div class="alert alert-warning" role="alert">
  A simple warning alert—check it out!
</div>
<div class="alert alert-info" role="alert">
  A simple info alert—check it out!
</div>
<div class="alert alert-light" role="alert">
  A simple light alert—check it out!
</div>
<div class="alert alert-dark" role="alert">
  A simple dark alert—check it out!
</div>
*/