function showProject(project) {
    const modal = document.getElementById("myModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    // Устанавливаем заголовок и описание в зависимости от выбранного проекта
    if (project === 'project1') {
        modalTitle.innerText = "Проект 1";
        modalDescription.innerText = "Я сделал в Vizial Studio Code игру 'Казино'.";
    } else if (project === 'project2') {
        modalTitle.innerText = "Проект 2";
        modalDescription.innerText = "Я сделал в Vizial Studio Code игру 'Крестики-нолики'.";
    }

    // Показываем модальное окно
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Закрытие модального окна при клике вне его содержимого
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}