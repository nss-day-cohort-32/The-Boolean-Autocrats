const src = "http://localhost:5002";

export default {
    
    get(id) {
        return fetch(`${src}/tasks/${id}`).then(e => e.json());
    },
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
    edit(editTask) {
        return fetch(`${src}/tasks/${editTask.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editTask)
        }).then(e => e.json())
    }
}