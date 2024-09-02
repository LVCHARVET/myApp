export default interface CurrencyConverter {
    convertToFrancs(euros: number): number;
    convertToEuros(francs: number): number;
  }
  