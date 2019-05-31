const remoteURL = "http://localhost:5002";

export default {
  getById(id, dataset, embedItem) {
    return fetch(`${remoteURL}/${dataset}/${id}?${embedItem}`).then((r) =>
      r.json()
    );
  },

  getAll(dataset, embedItem) {
    return fetch(`${remoteURL}/${dataset}?${embedItem}`).then((r) => r.json());
  },

  post(dataset, newObject) {
    return fetch(`${remoteURL}/${dataset}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newObject)
    }).then((r) => r.json());
  },

  registerIt(username, password) {
    return fetch(
      `http://localhost:5002/users?userName=${username}&password=${password}`
    ).then((response) => response.json());
  }
};
