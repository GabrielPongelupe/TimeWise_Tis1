const inputName = document.getElementById('InputName');
const textComment = document.getElementById('InputText');
const starRating = document.querySelectorAll('.star-icon');
const form = document.getElementById('formulario');
const commentPost = document.getElementById('comentPost');
const mediaAvaliacao = document.getElementById('mediaAvaliacao');

window.onload = function() {
    // Verificar se é a primeira vez que a página é carregada
    if (!localStorage.getItem('isPageLoaded')) {
      // Limpar o localStorage
      localStorage.clear();
  
      // Definir um item no localStorage para indicar que a página foi carregada
      localStorage.setItem('isPageLoaded', true);
    }
  };

// Recuperar os comentários e avaliações armazenados no localStorage
const savedComments = JSON.parse(localStorage.getItem('comments')) || [];
let totalRating = 0;

// Função para exibir os comentários e avaliações salvos
function displayComments() {
    for (let comment of savedComments) {
        let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap text-dark border rounded bg-info text-break';
        p.innerHTML = `<span class="">${comment.name}: </span> &nbsp ${comment.comment} | &nbsp <strong> Avaliação: </strong> &nbsp ${comment.rating} estrela(s)`;

        // Inserir o novo elemento como o primeiro filho
        if (commentPost.children.length >= 2) {
            commentPost.insertBefore(p, commentPost.children[1]);
        } else {
            commentPost.appendChild(p);
        }

        totalRating += parseInt(comment.rating);
    }

    if (savedComments.length > 0) {
        const averageRating = totalRating / savedComments.length;
        mediaAvaliacao.textContent = averageRating.toFixed(1);
    }
}

// Exibir os comentários e avaliações ao carregar a página
displayComments();

// Função para salvar um novo comentário no localStorage
function saveComment(name, comment, rating) {
    const newComment = {
        name: name,
        comment: comment,
        rating: rating
    };

    savedComments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(savedComments));
}

// Função para limpar o formulário
function clearForm() {
    inputName.value = '';
    textComment.value = '';
    starRating.forEach(star => star.classList.remove('ativo'));
}

starRating.forEach(star => {
    star.addEventListener('click', function () {
        const selectedRating = this.getAttribute('data-avaliacao');

        starRating.forEach(star => {
            if (star.getAttribute('data-avaliacao') <= selectedRating) {
                star.classList.add('ativo');
            } else {
                star.classList.remove('ativo');
            }
        });
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let selectedRating = null;
    starRating.forEach(star => {
        if (star.classList.contains('ativo')) {
            selectedRating = star.getAttribute('data-avaliacao');
        }
    });

    if (inputName.value && textComment.value && selectedRating) {
        let p = document.createElement('p');
        p.classList = 'p-2 d-flex text-wrap text-dark border rounded bg-info text-break';
        p.innerHTML = `<strong>${inputName.value}: </strong> &nbsp ${textComment.value} | &nbsp <strong> Avaliação: </strong> &nbsp  ${selectedRating} estrela(s)`;

        // Inserir o novo elemento como o segundo filho
        if (commentPost.children.length >= 2) {
            commentPost.insertBefore(p, commentPost.children[1]);
        } else {
            commentPost.appendChild(p);
        }

        // Salvar o comentário no localStorage
        saveComment(inputName.value, textComment.value, selectedRating);

        // Atualizar a média de avaliação
        totalRating += parseInt(selectedRating);
        const averageRating = totalRating / savedComments.length;
        mediaAvaliacao.textContent = isNaN(averageRating) ? '0' : averageRating.toFixed(1);

        // Limpar o formulário
        clearForm();
    }
});