export const moneyFormat = (money) => {
  const formattedMoney = money.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formattedMoney
}