import("./index.css");
var fm = document.querySelector("form");
fm.addEventListener("submit", addtodo);
function addtodo(e) {
  e.preventDefault();
  var task = document.getElementById("task").value;
  var Plan = document.getElementById("Plan").value;
  var Time = document.getElementById("Time").value;
  if (task.length > 0) {
    createRow(task, Plan, Time);
  }

  document.getElementById("task").value = "";
  document.getElementById("Plan").value = "";
  document.getElementById("Time").value = "";
}
var tb = document.querySelector("table");
function createRow(task, plan, time) {
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.textContent = task;
  var td2 = document.createElement("td");
  td2.textContent = plan;
  var td3 = document.createElement("td");
  td3.textContent = time;
  var td5 = document.createElement("td");
  td5.textContent = "IF completed then delete";
  td5.addEventListener("click", makrDelete);
  row.append(td1, td2, td3, td5);
  tb.appendChild(row);
}
function makrDelete(e) {
  e.target.parentNode.remove();
}
