const addTask = document.getElementById("add-task-btn")
const cancelTask = document.getElementById("cancel-task-btn")
const taskFormContainer = document.getElementById("task-form-container")
const taskForm = document.getElementById("task-form")
const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")
const emptyState = document.getElementById("empty-state") 

let tasks = []
let nextId = 1

addTask.addEventListener("click", () => {

    tasks.forEach(tasks => {
        tasks.isEditing = false
    })
    renderTasks()
    taskFormContainer.classList.remove("hidden")
        console.log("Plus clicked")
    taskInput.focus()
})

cancelTask.addEventListener("click", () => {
    taskInput.value = ""
    taskFormContainer.classList.add("hidden")
})

taskForm.addEventListener("submit", (event) => {
    event.preventDefault()
    let taskContent = taskInput.value.trim()

    if (taskContent != "") {
        tasks.push(
            {
                id: nextId,
                task: taskContent,
                completed: false,
                isEditing: false
            }
        )
        taskInput.value = ""
        nextId++
        renderTasks()
        taskFormContainer.classList.add("hidden")
        console.log(tasks);
    }
})

let renderTasks = () => { 
    taskList.innerHTML =""
    if (tasks.length === 0) {
        emptyState.classList.remove("hidden")
        return
    }
    emptyState.classList.add("hidden")
    tasks.forEach(element => {

        const li = document.createElement("li")
        li.classList.add("task-item")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = element.completed
        checkbox.addEventListener("change", () => {
                    element.completed = checkbox.checked
                    renderTasks()
                })

        const deleteButton = document.createElement("button")
        deleteButton.classList.add("delete-btn")
        deleteButton.textContent = "Delete"

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"

        li.appendChild(checkbox)
       

        if (element.isEditing) {

            const editInput = document.createElement("input")
            editButton.classList.add("edit-btn")
            editInput.type = "text"
            editInput.value = element.task
            editInput.maxLength = 50

            const saveButton = document.createElement("button")
            saveButton.classList.add("save-btn")
            saveButton.textContent = "Save"

            saveButton.addEventListener("click", () => {

                const updatedTask = editInput.value.trim()

                if (updatedTask !== "") {
                    element.task = updatedTask
                    element.isEditing = false

                    renderTasks()
                }

            })

            li.appendChild(editInput)
            li.appendChild(saveButton)

        } else {

            const taskText = document.createElement("span")
            taskText.textContent = element.task
            taskText.style.cursor = "pointer"

            taskText.addEventListener("click", () => {

                element.completed = !element.completed

                renderTasks()

            })
            if (element.completed) {
                taskText.classList.add("completed-task")
            }

            li.appendChild(taskText)
            li.appendChild(editButton)

        }

        deleteButton.addEventListener("click", () => {

            tasks = tasks.filter(task => task.id !== element.id)

            renderTasks()

        })
        editButton.addEventListener("click", () => {
            taskFormContainer.classList.add("hidden")

            tasks.forEach(task => {
            task.isEditing = false
        })

            element.isEditing = true

            renderTasks()
        })

        li.appendChild(deleteButton)
        taskList.appendChild(li)
    })
}

/*
tasks.forEach(element => {
        const li = document.createElement("li")
        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.checked = element.completed

        // const taskText = document.createElement("span")
        // taskText.textContent = element.task

        const deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"

        const editButton = document.createElement("button")
        editButton.textContent = "Edit"

        li.appendChild(checkbox)
        li.appendChild(taskText)
        li.appendChild(deleteButton)
        li.appendChild(editButton)
        li.classList.add("task-item")

        deleteButton.addEventListener("click", () => {
            // let taskToBedeletedId = element.id /
            tasks = tasks.filter(task => task.id != element.id)

            renderTasks()
            
        })

        editButton.addEventListener("click", () => {
            element.isEditing = true
            if (element.isEditing) {
                const editInput = document.createElement("input")
                editInput.type = "text"
                editInput.value = element.task
            }
            // else {
            //     const taskText = document.createElement("span")
            // }
            renderTasks()
        })

        taskList.appendChild(li)
    });
*/