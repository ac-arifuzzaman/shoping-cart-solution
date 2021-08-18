function updateCaseNumber(product, price, isIncrising) {
    const caseInput = document.getElementById(product + '-number');
    let caseText = caseInput.value;
    // caseInput.value = parseInt(caseText) + 1;
    if (isIncrising == true) {
        caseText = parseInt(caseText) + 1;
    }
    else if (caseText > 0) {
        caseText = parseInt(caseText) - 1;
    }
    caseInput.value = caseText;

    // update case total 
    const updateCaseTotal = document.getElementById(product + '-total');
    updateCaseTotal.innerText = caseText * price;
}
// phone increase decrease evnts
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, true)
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updateCaseNumber('phone', 1219, false);
})
// handle  case increase decrease events 
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', 59, false);
})