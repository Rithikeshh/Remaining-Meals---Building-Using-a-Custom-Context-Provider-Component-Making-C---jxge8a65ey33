'use client'
import React, { createContext, useState } from "react";

const todaysMeals = [
    { id: 1, name: 'Baked Beans' },
    { id: 2, name: 'Baked Sweet Potatoes' },
    { id: 3, name: 'Baked Potatoes' },
]
export const MealContext = createContext({
    meals : 3,
    setMeals :()=>{}
})
const MealsProvider = ({children}) => {
    const [meals, setMeals] = useState(3);

    const tickMeal = (e) => {
        e.target.checked ? setMeals(meals-1) : setMeals(meals+1)
    }

    return (
        <MealContext.Provider value={{ todaysMeals, meals, tickMeal }}>
            <div>
                {children}
            </div>
        </MealContext.Provider>
    )
};

export default MealsProvider;