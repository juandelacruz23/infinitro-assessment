const formatter = new Intl.NumberFormat(undefined, {
  style: "currency",
  maximumFractionDigits: 2,
  currency: "USD",
  currencyDisplay: "narrowSymbol",
});

function formatPrice(price: number) {
  return formatter.format(price);
}

export default formatPrice;
