//guardo las id etiquetas del documento HTML en estas variables
const $form = document.getElementById('form')
const $buttonMailto = document.getElementById('send-info')
//Escucho el evento submit de mi formulario
$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
  event.preventDefault()
  //Capturo la informacion del formulario. this hace referencia al elemento html $form
  const form = new FormData(this)
  // console.log(form.get('name'))
  // Debo llenar la informacion, modificare el atributo href, el segundo argumento es lo que ira nuevo()
  $buttonMailto.setAttribute('href', `mailto:joshua_dup@hotmail.com?subject=${form.get('name')} ${form.get('email')}&body=${form.get('message')}`)
  $buttonMailto.click()
}