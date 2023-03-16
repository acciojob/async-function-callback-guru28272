const url = "https://jsonplaceholder.typicode.com/posts/1";

//your JS code here. If required.

const btn = document.querySelector(`#btn`);
const output = document.querySelector(`#output`);

btn.addEventListener(`click`, getData());

//your JS code here. If required.
async function getData() {
  const res = await fetch(url);
  //   console.log(res);
  const titleData = await data(res);
  output.textContent = titleData.title;
}

async function data(res) {
  const data = await res.json();
  return data;
}
