// To read and try to understand
// clousures: https://developer.mozilla.org/es/docs/Web/JavaScript/Closures

// This is an example function to practice an important topic that is 'clousures' that for me, it is the way to know how we can work with anidated functions  to keep variable's  values in an lexic ambit
function moneyBox() {
  let saveCoins = 0;
  function countCoins(coins) {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
}

const myMoneyBox = moneyBox();

myMoneyBox(5); // MoneyBox: $5
myMoneyBox(2); // MoneyBox: $7
myMoneyBox(3); // MoneyBox: $10
