import { GET, RANK } from "./constansts";

export function validateQuery(inputString: string) {
  if (inputString.length === 0) return;
  const regex = /^(\w+):(.*)$/;
  const match = inputString.match(regex);
  let result;
  let valuesRegex;
  const keyValuePairs = [];
  if (match) {
    const operation = match[1];
    const valuesString = match[2];
    let valueMatch;
    if (operation === GET) {
      valuesRegex = /([a-zA-Z0-9-]+)=([a-zA-Z0-9-]+)/g;
      while ((valueMatch = valuesRegex.exec(valuesString)) !== null) {
        keyValuePairs.push({
          key: valueMatch[1].toString().toLowerCase(),
          value: valueMatch[2].toString().toLowerCase(),
        });
      }
    } else if (operation === RANK) {
      valuesRegex = /(\w+)=([a-zA-Z0-9- ]+)&(\w+)=(\d+)/g;
      while ((valueMatch = valuesRegex.exec(inputString)) !== null) {
        keyValuePairs.push({
          key: valueMatch[2].toString().toLowerCase(),
          value: valueMatch[4],
        });
      }
    }
    result = { operation, values: keyValuePairs };
  }
  return result;
}
