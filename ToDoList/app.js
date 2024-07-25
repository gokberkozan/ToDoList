document.addEventListener('DOMContentLoaded', (event) => {
    const taskInput = document.getElementById('task');
    const addButton = document.getElementById('liveToastBtn');
    const taskList = document.getElementById('list');
    const successToast = document.getElementById('liveToast');
    const errorToast = document.getElementById('liveToastError');

    // Function to add a new task
    function newElement() {
        const taskValue = taskInput.value.trim();

        if (taskValue === '') {
            showErrorToast();
            return;
        }

        const li = document.createElement('li');
        li.textContent = taskValue;
        taskList.appendChild(li);
        taskInput.value = '';

        const span = document.createElement('span');
        span.textContent = '\u00D7';
        span.className = 'close';
        li.appendChild(span);

        showSuccessToast();

        span.onclick = function() {
            const div = this.parentElement;
            div.style.display = 'none';
        };

        li.onclick = function() {
            this.classList.toggle('checked');
        };
    }

    // Function to show success toast message
    function showSuccessToast() {
        successToast.classList.remove('hide');
        successToast.classList.add('show');
        setTimeout(() => {
            successToast.classList.remove('show');
            successToast.classList.add('hide');
        }, 4000);
    }

    // Function to show error toast message
    function showErrorToast() {
        errorToast.classList.remove('hide');
        errorToast.classList.add('show');
        setTimeout(() => {
            errorToast.classList.remove('show');
            errorToast.classList.add('hide');
        }, 4000);
    }

    // Listen for click event on the add button
    addButton.addEventListener('click', newElement);

    // Add new task when Enter key is pressed
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            newElement();
        }
    });
});