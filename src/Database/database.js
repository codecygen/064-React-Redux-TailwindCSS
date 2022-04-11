

const databaseLink =
    'https://food-order-app-database-fa642-default-rtdb.firebaseio.com/cart.json'
;

export const sendData = async cart => {
    try {
        const res = await fetch(databaseLink, {
            method: 'PUT',
            body: JSON.stringify(cart)
        });

        if (!res.ok) {
            throw new Error(`Error, HTTP Status: ${res.status}`);
        }

    } catch (error) {
        console.error(error.message);
    }
};

export const getData = async () => {
    try {
        const res = await fetch(databaseLink);

        if (!res.ok) {
            throw new Error(`Error, HTTP Status: ${res.status}`);
        }

        const data = await res.json();
        return data;

    } catch (error) {
        console.error(error.message);
    }
};