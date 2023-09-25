'use client'
import React, { useContext } from "react";
import { MealContext } from "./MealsProvider";

const Counter = () => {
    const {meals} = useContext(MealContext);
    return (
        <div>
            <h3>Meals Remaining: {meals}</h3>
        </div>
    )
}

export default Counter;