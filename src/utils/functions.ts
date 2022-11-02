export const converNumberToBRL = (number: number): string => {
  return number.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
};

export const listAllEventListeners = (): Array<{
  node: any;
  type: string;
  func: any;
}> => {
  const allElements = Array.prototype.slice.call(
    document.querySelectorAll('*'),
  );
  allElements.push(document);
  allElements.push(window);

  const types = [];

  for (const ev in window) {
    if (/^on/.test(ev)) types[types.length] = ev;
  }

  const elements = [];
  for (let i = 0; i < allElements.length; i++) {
    const currentElement = allElements[i];
    for (let j = 0; j < types.length; j++) {
      if (typeof currentElement[types[j]] === 'function') {
        elements.push({
          node: currentElement,
          type: types[j],
          func: currentElement[types[j]].toString(),
        });
      }
    }
  }

  return elements.sort(function (a, b) {
    return a.type.localeCompare(b.type);
  });
};
