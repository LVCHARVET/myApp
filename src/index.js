"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Converter = /** @class */ (function () {
    function Converter() {
        this.rate = 1.06;
    }
    Converter.prototype.convertToFrancs = function (euros) {
        return parseFloat((euros * this.rate).toFixed(2));
    };
    Converter.prototype.convertToEuros = function (francs) {
        return parseFloat((francs / this.rate).toFixed(2));
    };
    return Converter;
}());
function assertIsNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
        throw new Error("La valeur doit être un nombre valide.");
    }
}
var converter = new Converter();
var form = document.getElementById("conversionForm");
var eurosInput = document.getElementById("euros");
var francsInput = document.getElementById("francs");
eurosInput.oninput = function () {
    var euros = parseFloat(eurosInput.value);
    try {
        assertIsNumber(euros);
        francsInput.value = converter.convertToFrancs(euros).toString();
    }
    catch (error) {
        console.error(error.message);
    }
};
francsInput.oninput = function () {
    var francs = parseFloat(francsInput.value);
    try {
        assertIsNumber(francs);
        eurosInput.value = converter.convertToEuros(francs).toString();
    }
    catch (error) {
        console.error(error.message);
    }
};
