const src = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${src}/news/${id}`).then(e => e.json);
  },
  getAll() {
    return fetch(`${src}/news`).then(e => e.json());
  },
  delete(id) {
    return fetch(`${src}/news/${id}`, {
      method: "DELETE"
    }).then(e => e.json());
  },
  post(news) {
    return fetch(`${src}/news`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(news)
    }).then(e => e.json());
  },
  edit(editedNews) {
    return fetch(`${src}/news/${editedNews.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedNews)
    }).then(e => e.json());
  }
};
