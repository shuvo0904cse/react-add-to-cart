import React from 'react';
import classes from './Modal.module.css';

const Modal = ({showModal, modal, order, submitOrder}) => {
   // const orderData = order;
    const submitHandler = (event) => {
        console.log("vent", event.target.name);
        submitHandler.bind()
alert("clicked");
    }
    return (
        <div>
            <div className={[classes.modalBody, showModal ? classes.modalDisplayBlock : classes.modalDisplayNone].join([' '])}>
                <div className={classes.formContainer}>
                    <h1>Complete the form below and hit submit</h1>

                    <form className={classes.orderForm}>
                        <ul>
                            <li>
                                <input
                                    type="text"
                                    name="name"
                                   // value={orderData.name}
                                    className={[classes.fieldStyle, classes.fieldSplit, classes.alignLeft].join([" "])}
                                    placeholder="Name"
                                />
                                <input
                                    type="text"
                                    name="phone"
                                    className={[classes.fieldStyle, classes.fieldSplit, classes.alignRight].join([" "])}
                                    placeholder="Phone no."
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="email"
                                    className={[classes.fieldStyle, classes.fieldFull].join([" "])}
                                    placeholder="Email"
                                />
                            </li>
                            <li>
                                <textarea
                                    name="address"
                                    className={classes.fieldStyle}
                                    placeholder="Address"
                                ></textarea>
                            </li>
                            <li>
                                <button type="button" onClick={submitHandler} className={classes.order}>Submit Order</button> &nbsp; &nbsp;
                                <button type="button" onClick={ modal.bind(this)} className={classes.close}>Close</button>
                            </li>
                        </ul>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Modal;