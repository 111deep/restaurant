import React, {useState, useEffect} from 'react';
import './style.css';

const getLocalData = () => {
    const list = localStorage.getItem("mytodolist");
    if(list)
        return JSON.parse(list);
    else
        return [];
};

const Todo = () => {
    const [inputData, setinputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isUpdateItem, setIsUpdateItem] = useState("");
    const [toggleButton, settoggleButton] = useState(false);
    // console.log(items);

    const addItems = () => {
        if(!inputData){
            alert("Please add the item!");
        }else if(inputData && toggleButton){
            setItems(
                items.map((curElem) => {
                    if(curElem.id === isUpdateItem){
                        return {...curElem, name : inputData}
                    }else{
                        return curElem;
                    }
                })
            ); 
            setinputData("");
            setIsUpdateItem("");
            settoggleButton(false); 
        }
        else{
            const myNewInputData = {
                id : new Date().getTime().toString(),
                name: inputData,
            }
            setItems((preValue) => [...preValue, myNewInputData]);
            setinputData('');
        }
    };

    const delItem = (index) => {
        const updateData = items.filter((curElem) => curElem.id !== index);
        setItems(updateData);
    };

    const removeAll = () => {
        setItems([]);
    };

    const updateItem = (index) => {
        const item_todo_edited = items.find((curElem) => {
            return curElem.id === index;
        });
        setinputData(item_todo_edited.name);
        setIsUpdateItem(index);
        settoggleButton(true);
    };

    useEffect(() => {
       localStorage.setItem('mytodolist', JSON.stringify(items));
    }, [items])
    return   (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todoImage" />
                        <figcaption>Add your list here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Item" className="form-control" value={inputData} onChange={(event) => setinputData(event.target.value)}/>
                        {toggleButton ? <i className="far fa-edit add-btn" onClick={() => addItems()}></i> : <i className="fa fa-plus add-btn" onClick={() => addItems()}></i>}
                        
                    </div>

                    <div className="showItems">
                        {items.map((curElem, index) => {
                            return (
                                <>
                                    <div className="eachItem" key={index}>
                                        <h3>{curElem.name}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-edit add-btn" onClick={() => updateItem(curElem.id)}></i>
                                            <i className="far fa-trash-alt add-btn" onClick={() => delItem(curElem.id)}></i>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={()=>removeAll()}>
                           <span>CHECK LIST</span> 
                        </button>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Todo;
