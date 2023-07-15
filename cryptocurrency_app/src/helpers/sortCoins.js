const sortWithName = (tempFilteredCoins) => {
  return tempFilteredCoins.sort(
    (a, b) => a.name.localeCompare(b.name) || a.symbol.localeCompare(b.symbol)
  );
};

const sortWithPrice = (tempFilteredCoins, priceValue) => {
  return tempFilteredCoins.sort((a, b) => a[priceValue] - b[priceValue]);
};

export const sortCoins = (tempFilteredCoins, sortOption) => {
  switch (sortOption) {
    case "A-Z":
      sortWithName(tempFilteredCoins);
      break;
    case "Z-A":
      sortWithName(tempFilteredCoins).reverse();
      break;
    case "Ch2Ex":
      sortWithPrice(tempFilteredCoins, "current_price");
      break;
    case "Ex2Ch":
      sortWithPrice(tempFilteredCoins, "current_price").reverse();
      break;
    case "High Ch2Ex":
      sortWithPrice(tempFilteredCoins, "high_24h");
      break;
    case "High Ex2Ch":
      sortWithPrice(tempFilteredCoins, "high_24h").reverse();
      break;
    case "Low Ch2Ex":
      sortWithPrice(tempFilteredCoins, "low_24h");
      break;
    case "Low Ex2Ch":
      sortWithPrice(tempFilteredCoins, "low_24h").reverse();
      break;
    case "Percentage Ch2Ex":
      sortWithPrice(tempFilteredCoins, "price_change_percentage_24h");
      break;
    case "Percentage Ex2Ch":
      sortWithPrice(tempFilteredCoins, "price_change_percentage_24h").reverse();
      break;
    case "Supply Ch2Ex":
      sortWithPrice(tempFilteredCoins, "circulating_supply");
      break;
    case "Supply Ex2Ch":
      sortWithPrice(tempFilteredCoins, "circulating_supply").reverse();
      break;
    case "Market Ch2Ex":
      sortWithPrice(tempFilteredCoins, "market_cap");
      break;
    case "Market Ex2Ch":
      sortWithPrice(tempFilteredCoins, "market_cap").reverse();
      break;
    case "Rank Ch2Ex":
      sortWithPrice(tempFilteredCoins, 'market_cap_rank');
      break;
    case "Rank Ex2Ch":
      sortWithPrice(tempFilteredCoins, 'market_cap_rank').reverse();
      break;
  }
};
