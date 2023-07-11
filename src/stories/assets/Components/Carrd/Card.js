import React from "react";
import './card.css'

const Card = ({ label, variant,contactname,fb,github }) => {


    return (

         <div className={["storybook-card", `storybook-card-${variant}`].join(" ")}>
            <div
             className={['storybook-cardheader', `storybook-cardheader-${variant}`].join(' ')}>
            <h1   
            >{label}</h1>
            </div>
            <main className={["storybook-cardmain", `storybook-cardmain-${variant}`].join(" ")}>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <p> remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

            </main>
            <footer className={["storybook-cardfooter"].join(" ")}>
                <h3>Contact Me</h3>
                <h5>{contactname}</h5>
                <h6>FB: {fb}</h6>
                <h6>GitHub:{github}</h6>
            </footer>
        </div>
    
    )
}
export default Card

