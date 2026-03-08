import React, {useState} from "react";

let originalVal = [
    [{name: 'nk', id: 0, category: 0}],
    [{name: 'a', id: 1, category: 1}]
];

const StateTest = () => {
const [list, setList] = useState(originalVal);
//console.log('list: ', list);
// let category = 1;
// let id = 2;
const addData = (id = 2, category = 1 ) => {

    let listCopy = [...list];
    //console.log('listCopy: ', listCopy);
    let oldCatObj = listCopy[category].find(ele => ele.id === id)
    console.log('oldCatObj: ', oldCatObj)
    
    if (oldCatObj === undefined) {
        //console.log('catArr: ', catArr);
        let product = {name: 'skipper', id: 2, category: 2};
        listCopy[category].push(product); //bakeryData
        setList([...listCopy]);
    } else {
        oldCatObj.name = 'super man' //increase count
        setList([...listCopy]);
    }
}

    return (
        <>
        <button onClick={() => {
            addData();
            //setList()
            }}>setState</button>

        </>
    );
}



export default StateTest