const LOCALE = 'es-ES';
const MONEY_FORMATTER = new Intl.NumberFormat(LOCALE, { style: 'currency', currency: 'EUR' });
const PERCENTAGE_FORMATTER = new Intl.NumberFormat(LOCALE, { style: 'percent' });

export default class NumberUtils {

  static formatCurrency(number) {

  	return MONEY_FORMATTER.format(number);
  }

  static formatPercentage(number) {

    return PERCENTAGE_FORMATTER.format(number);
  }

  static identity(val) {
    
    return val;
  }
}
