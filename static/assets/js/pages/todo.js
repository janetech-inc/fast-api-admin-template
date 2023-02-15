'use strict';
document.addEventListener("DOMContentLoaded", function () {
    bindclick();
    document.querySelector('button#create-task').addEventListener('click', function () {
        var task = document.querySelector('input[name=task-insert]').value;
        if (task.length == 0) {
            alert('please enter a task');
        } else {
            var newTask = '<li>' + '<p>' + task + '</p>' + '</li>'
            document.querySelector('#task-list').insertAdjacentHTML("beforeend", newTask);
            document.querySelector('input[name=task-insert]').value = "";
            bindclick();
        }
    });

    function bindclick() {
        var pclinkclick = document.querySelectorAll("#task-list li");
        for (var i = 0; i < pclinkclick.length; i++) {
            pclinkclick[i].removeEventListener("click", function () {});
            pclinkclick[i].addEventListener("click", function (event) {
                event.stopPropagation();
                var targetElement = event.target;
                if (targetElement.tagName == "P") {
                    targetElement = targetElement.parentNode;
                }
                targetElement.classList.toggle('complete');
            });
        }
    }
    document.querySelector("#clear-all-tasks").addEventListener('click', function () {
        var temp = document.querySelectorAll("#task-container li");
        for (var i = 0; i < temp.length; i++) {
            temp[i].remove();
        }
    });
    // ==================
    var i = 7;
    checkstate();
    document.querySelector("#add-btn").addEventListener("click", function () {
        var task = document.querySelector('.add_task_todo').value;
        if (task == "") {
            alert("please enter task");
        } else {
            i++;
            var add_todo = '<div class="to-do-list mb-3">' +
                '<div class="float-end"><a href="#!" class="delete_todolist"><i class="far fa-trash-alt"></i></a></div>' +
                '<div class="d-inline-block">' +
                '<div class="check-task form-check">' +
                '<input type="checkbox" class="form-check-input" id="customCheck' + i + '">' +
                '<label class="form-check-label" for="customCheck' + i + '">' + task + '</label>' +
                '</div>' +
                '</div>' +
                '</div>';
            document.querySelector('.new-task').insertAdjacentHTML("beforeend", add_todo);
            checkstate();
            document.querySelector('.add_task_todo').value = "";
        }
    });
});

function checkstate() {
    var pclinkclick = document.querySelectorAll(".delete_todolist");
    for (var i = 0; i < pclinkclick.length; i++) {
        pclinkclick[i].removeEventListener("click", function () {});
        pclinkclick[i].addEventListener("click", function (event) {
            event.stopPropagation();
            var targetElement = event.target;
            if (targetElement.tagName == "I") {
                targetElement = targetElement.parentNode;
            }
            targetElement.parentNode.parentNode.remove();
        });
    }
    var changestate = document.querySelectorAll(".to-do-list input[type=checkbox]");
    for (var i = 0; i < changestate.length; i++) {
        changestate[i].removeEventListener("change", function () {});
        changestate[i].addEventListener("change", function (event) {
            if (event.currentTarget.checked) {
                var evnt = event.target;
                evnt.parentNode.classList.add('done-task');
            } else {
                var evnt = event.target;
                evnt.parentNode.classList.remove('done-task');
            }
        });
    }
}
var k = 4;

document.querySelector('button.btn_save').addEventListener('click', function () {
    var task = document.querySelector('input[name=task-insert-modal]').value;
    if (task.length == 0) {
        alert('please enter a task');
    } else {
        k++;
        var add_todo = '<div class="to-do-list mb-3">' +
            '<div class="float-end"><a href="#!" class="delete_todolist"><i class="far fa-trash-alt"></i></a></div>' +
            '<div class="d-inline-block">' +
            '<div class="check-task form-check">' +
            '<input type="checkbox" class="form-check-input" id="customCheckmod' + k + '">' +
            '<label class="form-check-label" for="customCheckmod' + k + '">' + task + '</label>' +
            '</div>' +
            '</div>' +
            '</div>';
        document.querySelector('.tasks-widget').insertAdjacentHTML("beforeend", add_todo);
        checkstate();
        document.querySelector('.save_task_todo').value = "";
    }
});