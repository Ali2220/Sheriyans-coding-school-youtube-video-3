// toaster bna rhe hain
// 👉 Ye code ek closure-based reusable toaster function banata hai jo given config ke sath screen par notification show karta hai aur kuch seconds baad automatically remove kar deta hai.
function createToaster(config) {
  return function (notification) {
    let parent = document.querySelector(".parent");

    let div = document.createElement("div");
    div.textContent = notification;
    div.className = 
    `bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg border-2  border-black ${config.positionX === "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`;

    parent.appendChild(div);

    setTimeout(() => {
      parent.removeChild(div);
    }, config.duration * 1000);
  };
}

let toaster = createToaster({
  positionX: "left",
  positionY: "top",
  theme: "dark",
  duration: 3,
});

toaster("This a dummy notification!");
toaster("New norification");
