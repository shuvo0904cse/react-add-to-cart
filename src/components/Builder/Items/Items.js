import React from "react";
import Item from "./Item/Item"

const Items = ({items, scoops, add, remove}) => {
    var flavours = Object.keys(items)
    return (
        <div>
            <ul>
                {flavours.map((flavour) => (
                    <Item key={flavour} name={flavour} scoops={scoops} add={add} remove={remove}/>
                ))}
            </ul>
        </div>
    )
}

export default Items;