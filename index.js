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
  {
    progressBar: "372",
    progressNumber: "38",
  },
  {
    minutes: "12",
  },
  {
    currentStreak: "4",
  },
  {
    bestStreak: "12",
  },
];

const month = [
  {
    number: "1",
    name: "Marty McFly",
    distance: "105m",
    icon: "fas fa-location-arrow",
  },
  {
    number: "2",
    name: "Walter Wynne",
    distance: "52m",
    icon: "fas fa-circle circle",
  },
  {
    number: "3",
    name: "Annabel Ferdinand ",
    distance: "50m",
    icon: "fas fa-location-arrow",
  },
  {
    number: "7",
    name: "You!",
    distance: "38m",
    icon: "fas fa-location-arrow",
  },
  {
    progressBar: "118",
    progressNumber: "12",
  },
  {
    minutes: "186",
  },
  {
    currentStreak: "7",
  },
  {
    bestStreak: "44",
  },
];

$(document).ready(function () {
  $('select option[value="week"]').attr("selected", true);
  let data;
  const selectHandler = (value) => {
    switch (value) {
      case "week":
        return week;

      case "month":
        return month;

      default:
        return week;
    }
  };

  const loadData = (data) => {
    $("#listItems").empty();

    $(data).each(function (i, el) {
      if (el.number) {
        const li = document.createElement("li");
        li.innerHTML = `<span> ${el.number}</span>
     <span> ${el.name}</span><span> ${el.distance}</span><i class="${el.icon}"> </i>`;
        $("#listItems")[0].appendChild(li);
      } else {
        if (el.progressBar) {
          $("svg path:last-child").attr(
            "stroke-dasharray",
            `${el.progressBar}, 490`
          );
          $(".progressBar span").text(el.progressNumber + "m");
        }
        $("#minutes").text(el.minutes);
        $("#currentStreak").text(el.currentStreak);
        $("#bestStreak").text(el.bestStreak);
      }
    });
  };

  loadData(week);

  $("select").change(function (e) {
    data = selectHandler(e.target.value);
    loadData(data);
  });
});
