function makeTransaction (quantity,pricePerDroid){
    let message;
    const totalPrice = quantity * pricePerDroid;
    message = `You ordered ${quantity} droids worth ${totalPrice} credits!`; 
    return message;
}