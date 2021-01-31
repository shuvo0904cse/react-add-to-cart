import React from 'react'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer>
            <div className={["container", classes.container].join(" ")}>
                <div>
                    Copyright &copy;2021
                </div>
            </div>
        </footer>
    )
}

export default Footer