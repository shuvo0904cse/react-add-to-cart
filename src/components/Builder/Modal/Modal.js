import React from 'react';
import classes from './Modal.module.css';

const Modal = ({showModal, modal, submitOrder}) => {
    return (
        <div>
            <div className={[classes.modalBody, showModal ? classes.modalDisplayBlock : classes.modalDisplayNone].join([' '])}>
                <div className={classes.formContainer}>
                    <h1>Complete the form below and hit submit</h1>
                    <form className={classes.orderForm} onSubmit={submitOrder.bind(this)}>
                        <ul>
                            <li>
                                <input
                                    type="text"
                                    name="name"
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
                                <button type="button" className={classes.order}>Submit Order</button> &nbsp; &nbsp;
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