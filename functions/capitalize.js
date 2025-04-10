export default function capitalize(string) {
  const firstCharacter = string[0];
  const firstCharacterCapitalized = firstCharacter.toUpperCase();

  const restOfTheString = string.slice(1);

  return firstCharacterCapitalized + restOfTheString;
}
