// Add the coffee to local storage with key "coffee"
const url = "https://masai-mock-api.herokuapp.com/coffee/menu";
let count=JSON.parse(localStorage.getItem("coffee")) || [];

async function getData() {
  try {
    let res = await fetch(url);
    let showData = await res.json();
    let data1=showData.menu.data
    append(data1);
    console.log(data1);
  } catch (err) {
    console.log(err);
  }
}

getData();

function append(data1) {
  let container = document.getElementById("menu");
  data1.forEach(function (el) {
    //let div=document.createElement("div")
    let image = document.createElement("img");
    image.src = el.image;

    let h2 = document.createElement("h2");
    h2.innerText = el.price;

    let btn=document.createElement("button");
    btn.innerText="Add to Bucket";
    btn.setAttribute("id","add_to_bucket")

    let div = document.createElement("div");
    div.append(image, h2,btn);
    container.append(div);
  });
}
