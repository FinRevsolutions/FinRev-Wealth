// ============================================================
// FINREV SOLUTIONS — Calculator Formatting Utilities
// Indian Numbering System (Lakhs & Crores) formatting
// ============================================================

export function formatINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return "₹0";
  const rounded = Math.round(val);
  const isNegative = rounded < 0;
  const abs = Math.abs(rounded);

  let formatted = "";
  if (abs >= 10000000) {
    formatted = `₹${(abs / 10000000).toFixed(2)} Cr`;
  } else if (abs >= 100000) {
    formatted = `₹${(abs / 100000).toFixed(2)} Lakh`;
  } else {
    formatted = "₹" + abs.toLocaleString("en-IN");
  }

  return isNegative ? `-${formatted}` : formatted;
}

export function formatExactINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return "₹0";
  const rounded = Math.round(val);
  const isNegative = rounded < 0;
  const abs = Math.abs(rounded);
  const formatted = "₹" + abs.toLocaleString("en-IN");
  return isNegative ? `-${formatted}` : formatted;
}

export function formatPercent(val: number, decimals: number = 1): string {
  if (isNaN(val) || !isFinite(val)) return "0%";
  return `${Number(val.toFixed(decimals))}%`;
}

export function formatYears(val: number): string {
  if (val === 1) return "1 Year";
  return `${val} Years`;
}
