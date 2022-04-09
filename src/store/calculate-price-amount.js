const calculatePriceAmount = allCartItems => {
    const prices = {
        total: 0,
        hst: 0,
        subTotal: 0
    };

    let itemAmount = 0;

    allCartItems.forEach(eachItem => {
        prices.total += eachItem.quantity * eachItem.price;
        itemAmount += eachItem.quantity;
    });

    prices.total = parseFloat( prices.total).toFixed(2);
    prices.hst = parseFloat( prices.total * 0.13).toFixed(2);
    prices.subTotal = parseFloat( prices.total * 1.13).toFixed(2);

    const returnObj = {
        prices,
        itemAmount
    };

    return returnObj;
};

export default calculatePriceAmount;