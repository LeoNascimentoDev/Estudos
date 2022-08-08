import React from "react";

// Ao não utilizar Default, devemos nomear a função para esta ser exportada. 
export const GoodMorning = props => <h2>Good Morning, {props.name}!</h2> 
export const GoodAfternoon = props => <h2>Good Afternoon, {props.name}!</h2> 
export const GoodNight= props => <h2>Good Night, {props.name}!</h2> 

export default GoodNight