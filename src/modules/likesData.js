import showLikes from "./displayLikes";

const involvementURL =
  "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tr6fRffFTZh6EiaoJoDj";

  const getLikes = async () => {
    await fetch(`${involvementURL}/likes`)
      .then((response) => response.json())
      .then((response) => showLikes(response));
  };

const postLikes = async (id) => {
  await fetch(`${involvementURL}/likes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ item_id: id }),
  });
};

export { postLikes, getLikes };