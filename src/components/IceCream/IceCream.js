import React from "react";
import classes from "./IceCream.module.css"
import Scoop from "./Scoop/Scoop.js"
import {uniq} from 'lodash';

const IceCream = ({scoops = {}}) => {
    var scoopsUniq = uniq(scoops);
    return (
        <div className={classes.icecream}>
            <p className={classes.cone}></p>
            {(scoopsUniq.length > 0) ? scoopsUniq.map((scoop) => (
                <Scoop key={`${scoop}${Math.random()}`} scoop={scoop}/>
            )) : null}
            <div className={classes.cherry}></div>
        </div>
    )
}

export default IceCream;