/* step-1 event handler add to deposit button
2.get element from the deposit input field
2.5 make sure string deposit amount to a number type
3. clear the input deposit input field after getting value
5.calcute new deposit total
6.get current balance
4.get previous deposit total
*/

document.getElementById("btn-deposit").addEventListener("click", function () {
  const depositInput = document.getElementById("deposit-input");
  const newDepositAmountString = depositInput.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  console.log(newDepositAmount);
  //   step-3
  depositInput.value = "";

  //   step-4
  const depositTotalElement = document.getElementById("deposit-total");
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  // step-5
  const newDepositTotal = previousDepositTotal + newDepositAmount;
  depositTotalElement.innerText = newDepositTotal;

  //   step-6
  const balanaceTotalElement = document.getElementById("balance-total");
  const previousbalanceTotalString = balanaceTotalElement.innerText;
  const previousbalanceTotalAmount = parseFloat(previousbalanceTotalString);

  // step-7

  const newBalanceTotal = previousbalanceTotalAmount + newDepositAmount;
  balanaceTotalElement.innerText = newBalanceTotal;
});
