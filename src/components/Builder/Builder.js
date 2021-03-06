import React from "react";
import classes from "./Builder.module.css"
import Items from "./Items/Items";
import TotalPrice from "./TotalPrice/TotalPrice";
import Modal from "./Modal/Modal";

const Builder = ({items, price, scoops, showModal, order, add, remove, modal, submitOrder}) => {
    return(
        <div>
            <div className={classes.builder}>
                <h3>Build your own Ice Cream Sundae</h3>
                <Items items={items} scoops={scoops} add={add} remove={remove}/>
                <TotalPrice price={price}/>
                {scoops.length > 0 &&
                    <button type="button" onClick={modal.bind(this)} className={[classes.order, 'classes'].join([" "])}>
                        Add to Cart
                    </button>
                }
            </div>
            <Modal showModal={showModal} modal={modal} order={order} submitOrder={submitOrder}/>
        </div>
    )
}

export default Builder