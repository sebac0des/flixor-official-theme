export function currencyFormatter(value: number) {
  return value.toLocaleString("es-AR", {
    minimumFractionDigits: 0,
    currency: "ARS",
  });
}
