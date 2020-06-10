const week = [
  {
    number: "1",
    name: "Walter Wynne",
    distance: "105m",
    icon: "fas fa-location-arrow",
  },
  {
    number: "2",
    name: "Annabel Ferdinand",
    distance: "52m",
    icon: "fas fa-circle circle",
  },
  {
    number: "3",
    name: "Marty McFly",
    distance: "50m",
    icon: "fas fa-location-arrow",
  },
  {
    number: "7",
    name: "You!",
    distance: "38m",
    icon: "fas fa-location-arrow",
  },
];

$(document).ready(function () {
  $(week).each(function (i, el) {
    const li = document.createElement("li");
    li.innerHTML = `<span> ${el.number}</span>
    <span> ${el.name}</span><span> ${el.distance}</span><i class="${el.icon}"> </i>`;
    //   "<span>" +
    //   el.number +
    //   "</span>" +
    //   "<span>" +
    //   el.name +
    //   "<span>" +
    //   "<span>" +
    //   el.distance +
    //   "</span>" +
    //   "</i class=" +
    //   el.icon +
    //   "></i>";
    $("#listItems")[0].appendChild(li);
  });
});

// const month = [
//   {
//     number: "1",
//     name: "Annabel Ferdinand",
//     distance: "105m",
//     icon: "arrow",
//   },
//   {
//     number: "2",
//     name: "Walter Wynne",
//     distance: "52m",
//     icon: "circle",
//   },
//   {
//     number: "3",
//     name: "Marty McFly",
//     distance: "50m",
//     icon: "arrow",
//   },
//   {
//     number: "7",
//     name: "You!",
//     distance: "38m",
//     icon: "arrow",
//   },
// ];
