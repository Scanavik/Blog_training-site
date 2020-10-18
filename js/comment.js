"use strict";
let like = document.querySelector('.like');
let likesNumber = document.querySelector('.likes-number');


like.onclick = function () {
  if (like.classList.contains('added')) {
   likesNumber.textContent--;
  } else {
    likesNumber.textContent++;
  }
  like.classList.toggle('added');
};

let list = document.querySelector('.comment-list');
let input = document.querySelector('.input-comment');
let name = document.querySelector('.name-autor');
let form = document.querySelector('.comment-form');
let submitButton = document.querySelector('.submit-button');
const max = 20;


form.onsubmit = function(evt) {
  evt.preventDefault();
  let newLi = document.createElement('li');
  let newImg = document.createElement('img');
  let newSpan = document.createElement('span');
  let newP = document.createElement('p');
  newImg.classList.add("comment-img");
  newP.classList.add("comment-text");
  newSpan.classList.add("comment-autor");
  newImg.setAttribute("src", "./img/avatar.jpg");
  newSpan.textContent = name.value;
  newP.textContent = input.value;
  list.append(newLi);
  newLi.append(newImg);
  newLi.append(newSpan);
  newLi.append(newP);
  input.value = '';
};

input.oninput = function () {
  if ((input.value.length > 20) || (input.value.length < 4)) {
    form.classList.add('warning');
    submitButton.disabled = true;
    input.style.color = 'red';
  } else {
    form.classList.remove('warning');
    submitButton.disabled = false;
    input.style.color = '#2e2f22';
  }
};
