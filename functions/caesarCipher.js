export default function caesarCipher(string, shiftFactor) {
  const stringArray = string.split("");

  const stringArrayShifted = stringArray.map((character) => {
    const charCode = character.charCodeAt(0);

    // A - Z
    if (charCode >= 65 && charCode <= 90) {
      let charCodeShifted = charCode + shiftFactor;

      if (charCodeShifted < 65) {
        charCodeShifted += 26;
      } else if (charCodeShifted > 90) {
        charCodeShifted -= 26;
      }

      return String.fromCharCode(charCodeShifted);
    }

    // a - z
    if (charCode >= 97 && charCode <= 122) {
      let charCodeShifted = charCode + shiftFactor;

      if (charCodeShifted < 97) {
        charCodeShifted += 26;
      } else if (charCodeShifted > 122) {
        charCodeShifted -= 26;
      }

      return String.fromCharCode(charCodeShifted);
    }

    // other characters
    return character;
  });

  return stringArrayShifted.join("");
}
