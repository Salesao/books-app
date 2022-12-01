export const transformHashBooks = (category: string[]) =>
  category.map(
    (word) =>
      "#" +
      word
        .replace(/(^|\s)\S/g, (w) => w.toUpperCase())
        .replace(/[\s|-|&|,]/g, "")
  );
