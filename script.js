const init = () => {
  if (!localStorage.count) localStorage.setItem("count", 0);
  if (!localStorage.date) localStorage.setItem("date", new Date());
  document.getElementById(
    "count"
  ).innerHTML = `${localStorage.count} glasses of water`;
};

const increment = () => {
  const currentDate = new Date();
  if (new Date(localStorage.date).getDay() == currentDate.getDay()) {
    localStorage.setItem("count", Number(localStorage.count) + 1);
    document.getElementById(
      "count"
    ).innerHTML = `${localStorage.count} glasses of water`;
  } else {
    localStorage.setItem("count", 1);
    localStorage.setItem("date", currentDate);
    document.getElementById(
      "count"
    ).innerHTML = `${localStorage.count} glasses of water`;
  }
};
init();
document.getElementById("inc").addEventListener("click", increment);
