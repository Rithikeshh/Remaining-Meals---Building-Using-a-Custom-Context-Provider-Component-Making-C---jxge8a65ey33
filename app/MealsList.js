'use client'
import React, { useContext } from "react";
import { MealContext } from "./MealsProvider";
const MealsList = () => {
    const {todaysMeals, tickMeal} = useContext(MealContext)
    return (
        <div>
            <h2>Meals:</h2>
            <ul>

                {todaysMeals.map((item)=>(
                <li key={item.id} onClick={tickMeal}>
                    <input 
                        type="checkbox"
                    />
                    {item.name}
                </li>))}
            </ul>
        </div>
    )
}

export default MealsList;