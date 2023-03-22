document.getElementById('btn-case-plus').addEventListener('click', function(){
    // console.log('btn clicked');
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldStr = caseNumberField.value;
    const prevCasenumberField =parseInt(caseNumberFieldStr);
    // console.log(prevCasenumberField);
    const newCaseNumberField = prevCasenumberField + 1;
    caseNumberField.value = newCaseNumberField
})