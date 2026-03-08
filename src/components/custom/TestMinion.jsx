import React, {useContext} from "react";
import { LevelContext } from "../../context/LevelContext";
import { useOutletContext } from "react-router";

 const TestMinion = () => {
    const {mother, daughter} = useOutletContext();
     const level = useContext(LevelContext);
     console.log("testminion called", level);


    return (<div> Hello from TestMinion, level: {level}<p>My fav cats are - outletContext - : {mother} and {daughter} </p></div>);
}


export default TestMinion