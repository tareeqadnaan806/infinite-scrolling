const root = document.getElementById("root");

const fetchImage = () => {
  const promise = fetch(
    "https://api.unsplash.com/photos/random/?client_id=B3AVyZxTaMjksvdnDX-M1erqlhldoj2pnfSbG3mWzRw&count=10"
  );
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      //   console.log(data);
      data.map((ele) => {
        const image = document.createElement("img");
        image.src = ele.urls.small;
        root.appendChild(image);
      });
    });
};

fetchImage();

window.addEventListener("scroll", () => {
  if (
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight
  ) {
    fetchImage();
  }
});
