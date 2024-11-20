function getElementWidth(content, padding, border) {
  const contentWidth = parseFloat(content); // konwertuje treść na liczbę
  const paddingWidth = parseFloat(padding) * 2; // wypełnienie z obu stron
  const borderWidth = parseFloat(border) * 2; // obramowanie z obu stron

  // Obliczamy całkowitą szerokość
  const totalWidth = contentWidth + paddingWidth + borderWidth;

  return totalWidth; // zwróć całkowitą szerokość
}
