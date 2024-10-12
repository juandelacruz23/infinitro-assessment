const formatter = new Intl.NumberFormat(undefined, {
  style: "percent",
  maximumFractionDigits: 2,
});

function formatPercentage(value: number) {
  return formatter.format(value / 100);
}

export default formatPercentage;
