// togle clas active

const navbar = document.querySelector(".header.navbar");

// ketika menu diclik

document.querySelector("#menu").onclick = () => {
  navbar.classlist.toggle("active");
};

var counter = 1;
setInterval(function () {
  document.getElementById("radio" + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);
