const CURRENCY_FORMATTER = new Intl.NumberFormat("de-DE", {
    currency: "EUR", style: "currency"
});

export function formatCurrency(num: number): string {
    return CURRENCY_FORMATTER.format(num)
}