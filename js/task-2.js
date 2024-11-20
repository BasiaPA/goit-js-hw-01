function getShippingMessage(country, price, deliveryFee) {
    let message;
    const totalPrice = price + deliveryFee;
    let country;
    message = `Shipping to ${country} will cost ${totalPrice}credits`;
    return message;
}