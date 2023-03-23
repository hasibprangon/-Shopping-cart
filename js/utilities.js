function updateCaseNumber (isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberFieldStr = caseNumberField.value;
    const prevCasenumberField = parseInt(caseNumberFieldStr);
    let newCaseNumberField ;
    if(isIncrease === true || prevCasenumberField < 1 ){
        alert('ERROR, You cannot buy less than zero quantity of products')
        newCaseNumberField = prevCasenumberField + 1;
       
    }
    else{
        newCaseNumberField = prevCasenumberField - 1;
    }
    caseNumberField.value = newCaseNumberField
}