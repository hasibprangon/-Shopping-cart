

document.getElementById('btn-case-plus').addEventListener('click', function () {
  ;
  const newCaseNumberField = updateCaseNumber(true);

  updateCaseTotalPrice (newCaseNumberField);
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
  const newCaseNumberField = updateCaseNumber(false);

  updateCaseTotalPrice (newCaseNumberField)
})