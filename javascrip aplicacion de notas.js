document.getElementById('formulario-notas').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que la página se recargue al enviar el formulario

    // Obtener el valor del título y de la nota
    const titleInput = document.getElementById('titulo');
    const noteInput = document.getElementById('nota');
    const titleText = titleInput.value;
    const noteText = noteInput.value;

    // Crear un nuevo elemento de lista
    const newNote = document.createElement('li');

    // Crear elementos para el título y la nota
    const noteTitle = document.createElement('h3');
    noteTitle.textContent = titleText;

    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;

    // Agregar el título y la nota al nuevo elemento de lista
    newNote.appendChild(noteTitle);
    newNote.appendChild(noteContent);

    // Agregar la nueva nota a la lista
    document.getElementById('lista-nota').appendChild(newNote);

    // Limpiar los campos de texto
    titleInput.value = '';
    noteInput.value = '';
});