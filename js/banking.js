// functional Programming
/* 
function doubleIt(num) {
    const result = num * 2;
    return result;
}
const first = doubleIt(3); */

function getInputValue(inputId) {
    // deposit input
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);

    // clear input field
    inputField.value = '';

    return amountValue;
}

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');
    /*
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + amount; 
    */
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    } else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }
}


// Procidural Programming
document.getElementById('deposit-button').addEventListener('click', function () {

    // Get and update deposit total
    /*  
    const depostiTotal = document.getElementById('deposit-total');
     const depostiTotalText = depostiTotal.innerText;
     const previousDepositTotal = parseFloat(depostiTotalText)
 
     depostiTotal.innerText = previousDepositTotal + depositAmount; */

    // Update balance
    /* 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + depositAmount; */
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

});

// Handle  withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    /* const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText); */

    // get and update withdraw total
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);

    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; 
    */


    // Update balance after withdraw

    /*     
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
    
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount;
     */

    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
    if (withdrawAmount > currentBalance) {
        alert('you can not withdraw more than your account balance');
    }

})