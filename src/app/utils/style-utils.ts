export class StyleUtils {
  // This function should return the hex code for either black or white for text, depending on the provided base background color
  // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color
  public static invertColor(baseColor: string) {
    if (baseColor.indexOf('#') === 0) {
      baseColor = baseColor.slice(1);
    }
    // convert 3-digit baseColor to 6-digits.
    if (baseColor.length === 3) {
      baseColor = baseColor[0] + baseColor[0] + baseColor[1] + baseColor[1] + baseColor[2] + baseColor[2];
    }
    if (baseColor.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    var r = parseInt(baseColor.slice(0, 2), 16),
      g = parseInt(baseColor.slice(2, 4), 16),
      b = parseInt(baseColor.slice(4, 6), 16);
      // https://stackoverflow.com/a/3943023/112731
    return (r * 0.299 + g * 0.587 + b * 0.114) > 186
      ? '#000000'
      : '#FFFFFF';
  }
}
