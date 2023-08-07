import axios from "axios";

async function getData(user_id) {
  const { data: user } = await axios(
    "https://jsonplaceholder.typicode.com/users/" + user_id
  );

  const { data: post } = await axios(
    "https://jsonplaceholder.typicode.com/posts/" + user_id
  );

  const merge = { user, post };

  return console.log(merge);
}

export default getData;
