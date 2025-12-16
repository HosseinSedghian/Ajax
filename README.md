# AJAX Posts Table

A simple front‑end project built with **HTML, CSS, and JavaScript** that fetches data from a public API using **AJAX** and displays the response in a table.

The project demonstrates how to:

* Make an asynchronous HTTP request (AJAX)
* Consume a REST API
* Parse JSON data
* Dynamically render content in the DOM

---

## 📌 API Used

This project uses the free public API provided by **JSONPlaceholder**:

```
https://jsonplaceholder.typicode.com/posts
```

The API returns a list of posts in JSON format with the following structure:

```json
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
}
```

---

## 🛠️ Technologies Used

* **HTML5** – Structure of the page
* **CSS3** – Styling the table and layout
* **JavaScript** –

  * AJAX request (XMLHttpRequest / Fetch API)
  * DOM manipulation

---

## 📂 Project Structure

```
project-root/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🚀 How It Works

1. When the page loads, JavaScript sends an AJAX request to the API.
2. The API responds with a JSON array of posts.
3. The JSON data is parsed.
4. Each post is displayed as a row inside an HTML table.

---

## ▶️ How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   ```

2. Navigate to the project folder:

   ```bash
   cd your-repository-name
   ```

3. Open `index.html` in your browser.

*No additional setup or dependencies are required.*

---

## 📖 What You Can Learn From This Project

* Basics of AJAX requests
* Working with REST APIs
* Handling JSON data in JavaScript
* Dynamically generating table rows
* Separating concerns between HTML, CSS, and JS

---

## 📄 License

This project is open‑source and available under the **MIT License**.

---

## 🙌 Acknowledgments

* [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for providing a free fake REST API for testing and prototyping.
