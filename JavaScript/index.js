const form = document.getElementById("form");
const buttonMailto = document.getElementById("send-info");
//Escucho el evento submit de mi formulario
form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  //Capturo la informacion del formulario. this hace referencia al elemento html $form
  const form = new FormData(this);
  // console.log(form.get('name'))
  // Debo llenar la informacion, modificare el atributo href, el segundo argumento es lo que ira nuevo()
  buttonMailto.setAttribute(
    "href",
    `mailto:joshua_dup@hotmail.com?subject=${form.get("name")} ${form.get(
      "email"
    )}&body=${form.get("message")}`
  );
  buttonMailto.click();
}

const _itemList = document.getElementById("navList");
const _toggle = document.getElementById("menu");
_toggle.onclick = () => {
  console.log("event click");
  _itemList.classList.toggle("open");
  _toggle.classList.toggle("close");
};

_itemList.onclick = () => {
  _itemList.classList.toggle("close-list");
  _itemList.classList.toggle("open");
  _toggle.classList.toggle("close");
};
