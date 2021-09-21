"use strict";
console.clear();

const div = document.querySelector("#myDiv");

div.style.backgroundColor = "green";
div.style.width = "200px";
div.style.height = "200px";

/*********      CLICK   **********/

div.addEventListener("click", (e) => {
  console.log("You Clicked the mouse!");
  div.style.backgroundColor = "red";
});

/*********     MOUSE DOWN   **********/
/*
div.addEventListener("mousedown", (e) => {
  console.log("You are holding the mouse down!");
  div.style.backgroundColor = "yellow";
});
*/

/*********     MOUSE UP   **********/
/*
div.addEventListener("mouseup", function () {
  console.log("You let go of the mouse!");
  div.style.backgroundColor = "purple";
});
*/

/*********   DOUBLE  CLICK   **********/
/*
div.addEventListener("dblclick", (e) => {
  console.log("You Double Click!");
  div.style.backgroundColor = "red";
});
*/

/*********   CONTEXT MENU   **********/
/*
div.addEventListener("contextmenu", (e) => {
  console.log("You opend the context menu!");
});
*/

/*********   MOUSE OVER   **********/
/*
div.addEventListener("mouseover", function () {
  console.log("You entered the square!");
  div.style.backgroundColor = "purple";
});
*/

/*********   MOUSE LEAVE   **********/
/*
div.addEventListener("mouseleave", function () {
  console.log("You left the square!");
  div.style.backgroundColor = "yellow";
});
*/

/*********  MOUSE MOVE  **********/
/*
div.addEventListener("mousemove", function () {
  console.log("You are within the square!");
});
*/
