import React from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

import { ImBin } from "react-icons/im";

const CartCard = props => {
    const dispatch = useDispatch();

    const removeItemHandler = () => {
        dispatch(cartActions.removeItem(props.id));
    };

    const changeAmountHandler = amountChange => {
        dispatch(cartActions.changeAmount({ id: props.id, quantity: props.quantity, amountChange }));
    };

    return (
        <div className="my-2 flex flex-row bg-slate-100 rounded-xl shadow-xl">
            <div className="h-32 w-2/6">
                <img src={props.img} className="h-full mx-auto rounded-xl" alt="Item Display" />
            </div>

            <div className="w-5/12 sm:w-3/6 flex flex-col lg:flex-row justify-center items-center">
                <p className="text-xl italic pr-0 lg:pr-8">{props.desc}</p>
                <div className="flex flex-row items-center">
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={() => {changeAmountHandler(-1)}}
                    >
                        -
                    </button>
                    <p className="px-2 py-2 bg-slate-200">{props.quantity}</p>
                    <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                        onClick={() => {changeAmountHandler(1)}}
                    >
                        +
                    </button>
                </div>
            </div>

            <div className="w-3/12 sm:w-1/6 flex flex-col items-center justify-center">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                    onClick={removeItemHandler}
                >
                    <ImBin />
                </button>
                <p className="text-xl font-bold pt-10">${props.price}</p>
            </div>
        </div>
    );
};

export default CartCard;