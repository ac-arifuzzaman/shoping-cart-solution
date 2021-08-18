function updateCaseNumber(proudct, isIncreasing) {
    const caseInput = document.getElementById(proudct + '-number');
    let caseNumber = caseInput.value;
    if (isIncreasing == true) {
        caseNumber = parseInt(caseNumber) + 1;
    }
    else if (caseNumber > 0) {
        caseNumber = parseInt(caseNumber) - 1;
    }
    caseInput.value = caseNumber;
    // update balance
    const caseTotal = document.getElementById('case-total')
    caseTotal.innerText = caseNumber * 59;
}
// phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateCaseNumber(/* 'phone', */ true);
})
// handle case increase decrease ev ents
document.getElementById('case-plus').addEventListener('click', function () {
    updateCaseNumber('case', true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateCaseNumber('case', false);
})

// update total balance
