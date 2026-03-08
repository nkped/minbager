import React from "react";
import { useContext } from 'react';
import { LevelContext } from '../../context/LevelContext';
import { Outlet } from 'react-router-dom'

export const Test = () => {
let level = useContext(LevelContext);



console.log("test called", level);

    return (
        <>
        <div>Hello from Test, level: {level} </div>
         <LevelContext value={level + 1}>
          <Outlet context={{mother: 'Bølle', daughter: 'Billie'}} />
         </LevelContext>

        <div className="border-solid border-2 shadow-lg ">fsfkhkhkh</div>

        </>
    );
}