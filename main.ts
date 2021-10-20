interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function runApplication() {
  const url: string = "https://jsonplaceholder.typicode.com/posts";

  async function getData() {
    try {
      const response = await fetch(url);
      return response.json();
    } catch (error) {
      console.log(error);
    }
  }

  function renderData(users: IUser[]) {
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

  // keyToFind,
  // keyValueToFind,
  // patch

  function updateObjectInArray<ObjectShape, V>(
    initialArray: ObjectShape[],
    keyToFind: string,
    keyValueToFind: V,
    patch: Partial<ObjectShape>
  ) {
    const clonedArray = [...initialArray];

    const modifiedclonedArray = clonedArray.map((el) => {
      if (el[keyToFind] === keyValueToFind) {
        return { ...el, ...patch };
      } else {
        return el;
      }
    });
    return modifiedclonedArray;
  }

  const users = await getData();

  renderData(users);

  //Тестим модифікації

  const update = updateObjectInArray<IUser, string>(
    users,
    "title",
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    {
      title: "gggg",
      body: "ggffdee",
    }
  );
  console.log(update);

  const update2 = updateObjectInArray<IUser, number>(users, "id", 3, {
    title: "11111111",
    userId: 110,
  });
  console.log(update2);
}

runApplication();
