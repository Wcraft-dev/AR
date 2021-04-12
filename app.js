let marker = document.querySelector("a-marker");

marker.addEventListener("markerFound", (e) => {
  console.log("found");
});

document.getElementById("btn").addEventListener("click", () => {
  let entity = document.getElementById("entityId1");
  entity.setAttribute("scale",".3 .3 .3")
});
