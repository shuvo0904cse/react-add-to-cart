import React from "react";
import classes from "./Item.module.css"
import {countBy} from 'lodash';
const Item = ({name, scoops = {}, add, remove}) => {
    const scoopsByCount = countBy(scoops)

    return (
        <div>
            <ul>
                <li className={classes.item}>
                    <span>{name}</span>
                    {scoopsByCount[name] >= 0 ? (<span className={classes.quantity}>{scoopsByCount[name]}</span>) : null}
                    <div className="right">
                        <button type="button" onClick={add.bind(this, name)} className={[classes.plus, classes.rounded].join([" "])}>+</button>
                        <button type="button" onClick={remove.bind(this, name)} className={[classes.minus, classes.rounded].join([" "])}>-</button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Item;