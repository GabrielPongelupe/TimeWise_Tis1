const inputName = document.getElementById(`inputName`);
const inputText = document.getElementById(`inputText`);
const commentPost = document.getElementById(`commentPost`);
const formulario = document.getElementById(`formulario`);


const comments = localStorage.getItem('comments');
if (comments) {
  commentPost.innerHTML = comments; 
}

formulario.addEventListener(`submit`, (event) => {
  event.preventDefault();

  let p = document.createElement(`p`);
  p.classList = `p-2 d-flex text-wrap`;
  p.innerHTML = `<strong> ${inputName.value}: </strong> ${inputText.value}`;
  commentPost.appendChild(p);
  inputName.value = ``;
  inputText.value = ``;
  inputName.focus();

  
  localStorage.setItem('comments', commentPost.innerHTML);
});
 