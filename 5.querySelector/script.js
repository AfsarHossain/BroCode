document.querySelector("#myButton").onclick = function () {
  const h1 = document.querySelector("#myH1");
  const underline = document.createElement("u");
  underline.innerText = "Bye World!";
  h1.innerText = "";
  h1.append(underline);

  const p = document.querySelectorAll(".myP");
  //   p[0].innerText = "WHOAAAAAAAA!";
  p.forEach((ele) => (ele.innerText = "WHOA!"));

  const buttons = document.querySelectorAll("button");
  //   buttons[0].remove();
  buttons.forEach((element) => element.remove());
};
