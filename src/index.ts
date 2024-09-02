import CurrencyConverter from "./Intefaces/CurrencyConverter";
import './scss/style.scss'

class Converter implements CurrencyConverter {
  private readonly rate: number = 1.06;

  convertToFrancs(euros: number): number {
    return Number((euros * this.rate).toFixed(2));
  }

  convertToEuros(francs: number): number {
    return Number((francs / this.rate).toFixed(2));
  }
}

function assertIsNumber(value: any): asserts value is number {
  if (typeof value !== 'number' || isNaN(value)) {
    throw new Error("La valeur doit être un nombre valide.");
  }
}

const converter = new Converter();

const eurosInput = document.getElementById("euros") as HTMLInputElement;
const francsInput = document.getElementById("francs") as HTMLInputElement;

eurosInput.oninput = () => {
  const euros = Number(eurosInput.value);
  try {
    assertIsNumber(euros);
    francsInput.value = converter.convertToFrancs(euros).toString();
  } catch (error) {
    console.error(error.message);
  }
};

francsInput.oninput = () => {
  const francs = Number(francsInput.value);
  try {
    assertIsNumber(francs);
    eurosInput.value = converter.convertToEuros(francs).toString();
  } catch (error) {
    console.error(error.message);
  }
};