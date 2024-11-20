function getShippingMessage(country, price, deliveryFee) {
  let message;
  const totalPrice = price + deliveryFee;

  message = `Shipping to ${country} will cost ${totalPrice}credits`;
  return message;
}
