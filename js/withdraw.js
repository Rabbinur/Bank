console.log("with");
/*
1.add event handler with the withdraw button
2.get the withdraw amount from  the input filed 
3. clear the withdraw input filed
4.get previous withdraw total amount
5.calculte the total withdraw amount and set it to the withdraw total element
6.get previous balance
7.calculate new balance
*/
// step-1

document.getElementById("btn-withdraw").addEventListener("click", function () {
  //step - 2;
  const WithdrawInput = document.getElementById("withdraw-input");
  const newWithdrawAmountString = WithdrawInput.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);
  console.log(newWithdrawAmount);
  // step-3 clear input field
  WithdrawInput.value = "";

  //   step-4
  const withdrawTotalElement = document.getElementById("withdraw-total");
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

  //   step-5
  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = newWithdrawTotal;
  //   step-6
  const balanceElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  //   step-7

  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  balanceElement.innerText = newBalanceTotal;
});
