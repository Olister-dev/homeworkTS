const url = "https://jsonplaceholder.typicode.com/posts";
const newData = [];
async function getData() {
    try {
        let response = await fetch(url);
        let result = await response.json();
        newData.push(...result);
        const list = document.querySelector(".posts");
        let key;
        for (key in newData) {
            list.innerHTML += `
        <li class = "post__item">
          <div class = "post__item--title">${newData[key].title}</div>
          <div class = "post__item--text">${newData[key].body}</div>
        </li>
      `;
        }
    }
    catch (error) {
        console.log(error);
    }
}
getData();
//# sourceMappingURL=main.js.map