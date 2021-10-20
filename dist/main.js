async function runApplication() {
    const url = "https://jsonplaceholder.typicode.com/posts";
    async function getData() {
        try {
            const response = await fetch(url);
            return response.json();
        }
        catch (error) {
            console.log(error);
        }
    }
    function renderData(users) {
        const list = document.querySelector(".posts");
        users.forEach((item) => {
            list.innerHTML += `
        <li class = "post__item">
          <div class = "post__item--title">${item.title}</div>
          <div class = "post__item--text">${item.body}</div>
        </li>
      `;
        });
    }
    function updateObjectInArray(initialArray, keyToFind, keyValueToFind, patch) {
        const clonedArray = [...initialArray];
        const modifiedclonedArray = clonedArray.map((el) => {
            if (el[keyToFind] === keyValueToFind) {
                return { ...el, ...patch };
            }
            else {
                return el;
            }
        });
        return modifiedclonedArray;
    }
    const users = await getData();
    renderData(users);
    const update = updateObjectInArray(users, "title", "sunt aut facere repellat provident occaecati excepturi optio reprehenderit", {
        title: "gggg",
        body: "ggffdee",
    });
    console.log(update);
    const update2 = updateObjectInArray(users, "id", 3, {
        title: "11111111",
        userId: 110,
    });
    console.log(update2);
}
runApplication();
//# sourceMappingURL=main.js.map