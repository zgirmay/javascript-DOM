// from data.js
var tableData = data;

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

$searchBtn.addEventListener("click", handleSearchButtonClick);
$resetBtn.addEventListener("click", handleResetButtonClick);

var filterData = data;

function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filterData.length; i++) {
    var sights = filterData[i];
    var field = Object.keys(sights);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sight[field];
    }
  }
}
function handleSearchButtonClick() {
    var filterDate = $dateInput.value.trim();
    var filterCity = $cityInput.value.trim();
    var filterState = $stateInput.value.trim();
    var filterCountry = $countryInput.value.trim();
    var filterShape = $shapeInput.value.trim();
    renderTable();
    console.log()
};
renderTable();
console.log()