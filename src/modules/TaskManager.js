const src = "http://localhost:5002";

export default {
    getAll() {
        return fetch(`${src}/tasks`).then(e => e.json());

    },
    delete(id) {
        return fetch(`${src}/tasks/${id}`, {
            method: "DELETE"
        }).then(e => e.json())
    },
    post(tasks) {
        return fetch(`${src}/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(tasks)
        }).then(e => e.json())
    },
    edit(editTasks) {
        return fetch(`${src}/tasks/${editTasks.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editTasks)
        }).then(e => e.json())
    }
}