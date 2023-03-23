document.getElementById('btn-case-plus').addEventListener('click', function () {
    // console.log('btn clicked');
  
})


document.getElementById('btn-case-minus').addEventListener('click', function () {
    // console.log('btn clicked')

    const caseNumberFieldMinus = document.getElementById('case-number-field');
    const caseNumberFieldMinusStr = caseNumberFieldMinus.value;
    const prevCasenumberFieldMinus = parseInt(caseNumberFieldMinusStr);
    // console.log(prevCasenumberFieldMinus);
    const newCaseNumberFieldMinus = prevCasenumberFieldMinus - 1;
    caseNumberFieldMinus.value = newCaseNumberFieldMinus;
    if (newCaseNumberFieldMinus < 0) {
        // prevCasenumberFieldMinus = 0;
        caseNumberFieldMinus.value = 0;
        alert('ERROR, you can not buy a product less than zero')
    }
})