const form = document.getElementById("form");
const buttonMailto = document.getElementById("send-info");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

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
