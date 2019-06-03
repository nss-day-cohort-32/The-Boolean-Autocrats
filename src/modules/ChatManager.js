const remoteURL = "http://localhost:5002"

export default {
  getUser(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  },
  getUserName(username) {
    return fetch(`${remoteURL}/users/${username}`).then(e => e.json())
  },
  getAllUsers() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },

  getMessage(id) {
    return fetch(`${remoteURL}/chat/${id}`).then(e => e.json())
  },
  getAllMessages() {
    return fetch(`${remoteURL}/chat`).then(e => e.json())
  },
  postNewMessages(newMessages) {
    return fetch(`${remoteURL}/chat`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMessages)
    }).then(e => e.json())
  },
  putMessages(editedMessages) {
    return fetch(`${remoteURL}/chat/${editedMessages.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedMessages)
    }).then(e => e.json());
  },
  deleteMessages(id) {
    return fetch(`${remoteURL}/chat/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(e => e.json())
  }}
