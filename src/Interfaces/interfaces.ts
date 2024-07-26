export interface IStock {
  c: number;    // Current price
  d: number | null;    // Change in price
  dp: number | null;   // Change in percentage
  h: number;    // Highest price
  l: number;    // Lowest price
  o: number;    // Opening price
  pc: number;   // Previous closing price
  t: number;    // Timestamp
}