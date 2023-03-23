function updateCaseNumber (){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldStr = caseNumberField.value;
    const prevCasenumberField = parseInt(caseNumberFieldStr);
    // console.log(prevCasenumberField);
    const newCaseNumberField = prevCasenumberField + 1;
    caseNumberField.value = newCaseNumberField
}