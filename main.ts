interface IUser {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const url: string = "https://jsonplaceholder.typicode.com/posts";

const newData: IUser[] = [];

async function getData() {
  try {
    let response = await fetch(url);
    let result = await response.json();
    newData.push(...result);

    const list = document.querySelector(".posts");

    let key: any;

    for (key in newData) {
      list.innerHTML += `
        <li class = "post__item">
          <div class = "post__item--title">${newData[key].title}</div>
          <div class = "post__item--text">${newData[key].body}</div>
        </li>
      `;
    }
  } catch (error) {
    console.log(error);
  }
}

getData();
console.log(newData.length);

function updateObjectInArray<ObjectShape>(initialArray: ObjectShape[]) {
  const newArray = initialArray.map((el) => el);
  console.log(newArray);

  return newArray;
}

updateObjectInArray<IUser>(newData);

// keyToFind,
// keyValueToFind,
// patch
