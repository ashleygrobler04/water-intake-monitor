const init = () => {
  if (!localStorage.count) localStorage.setItem("count", 0);
  if (!localStorage.date)
    localStorage.setItem("date", new Date().toISOString());
  if (!localStorage.history) localStorage.setItem("history", []);
  document.getElementById(
    "count"
  ).innerHTML = `${localStorage.count} glasses of water`;
};

const increment = () => {
  const currentDate = new Date();
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satterday",
    "Sunday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (new Date(localStorage.date).getDay() == currentDate.getDay()) {
    localStorage.setItem("count", Number(localStorage.count) + 1);
    document.getElementById(
      "count"
    ).innerHTML = `${localStorage.count} glasses of water`;
  } else {
    renderListView(
      `${weekDays[new Date(localStorage.date).getDay() - 2]}, ${
        months[new Date(localStorage.date).getMonth()]
      } ${new Date(localStorage.date).getDate()-1}, ${new Date(
        localStorage.date
      ).getFullYear()} ${localStorage.count} cups of water`
    );
    localStorage.setItem("count", 1);
    localStorage.setItem("date", currentDate.toISOString());
    document.getElementById(
      "count"
    ).innerHTML = `${localStorage.count} glasses of water`;
  }
};

init();

const renderListView = (item) => {
  const items = JSON.parse(localStorage.history || "[]"); // the list to store all the items in
  const listView = document.getElementById("history");
  items.push(item);
  listView.innerHTML = ""; // clear previous list items before rendering new ones
  items.forEach((v) => {
    const li = document.createElement("li"); // create a new list item element
    li.innerText = v;
    listView.appendChild(li);
  });
  localStorage.setItem("history", JSON.stringify(items));
};

document.getElementById("inc").addEventListener("click", increment);
//localStorage.setItem("date","2023/03/29")
//localStorage.clear();