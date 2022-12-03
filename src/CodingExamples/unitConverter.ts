
 const ABSOLUTE_ZERO_IN_CELSIUS = -273.15;
 export class UnitConverters {
  public static celsiusToFarenheit(celsius: number): number | never {
    if (celsius < ABSOLUTE_ZERO_IN_CELSIUS) {
      throw new Error(
        `Cannot convert temperatures below ${ABSOLUTE_ZERO_IN_CELSIUS} degrees Celsius`
      );
    }
    return celsius * 1.8 + 32;
  }
}

const isValidTemperature = (celsius: number): boolean => {
 
  return celsius >= ABSOLUTE_ZERO_IN_CELSIUS;
};

const celsiusToFarenheit = (celsius: number): number => {
    return celsius * 1.8 + 32;
}
