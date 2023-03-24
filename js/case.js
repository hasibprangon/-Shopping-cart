

document.getElementById('btn-case-plus').addEventListener('click', function () {
  ;
  const newCaseNumberField = updateCaseNumber(true);

  const caseTotalPrice = newCaseNumberField * 59;
  const caseTotalElement = document.getElementById('case-total');
  caseTotalElement.innerText = caseTotalPrice;
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
  updateCaseNumber(false);
})