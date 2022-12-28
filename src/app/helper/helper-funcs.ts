export const getRandomInteger = (max: number, max_included = false) => {
  max = max_included ? (max + 1) : max;

  return Math.floor(Math.random() * (max));
};

export const getRandomStringArray = (strings: string[]) => {
  const clonedStrings = strings.slice()

  const getString = () => {
    let i = getRandomInteger(clonedStrings.length);
    return clonedStrings.splice(i, 1)[0];
  };

  const returnStrings: string[] = [getString()];

  if (Math.random() < 0.5) {
    returnStrings.push(getString());

    if (Math.random() < 0.5) {
      returnStrings.push(getString());

      if (Math.random() < 0.5) {
        returnStrings.push(getString());
      }
    }
  }

  return returnStrings;
};