// functional Programming
/* 
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(3); */

function getInputValue() {
    // deposit input
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);
    // clear input field
    depositInput.value = '';
    return depositAmount;
}


// Procidural Programming
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositAmount = getInputValue();
    // Get current deposit
    const depostiTotal = document.getElementById('deposit-total');
    const depostiTotalText = depostiTotal.innerText;
    const previousDepositTotal = parseFloat(depostiTotalText)

    depostiTotal.innerText = previousDepositTotal + depositAmount;

    // Update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount

});

// Handle  withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);

    // Update withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;

    // Update balance after withdraw
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    // clear withdraw input field
    withdrawInput.value = '';
})