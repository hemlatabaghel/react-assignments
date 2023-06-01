import React, {useState, useMemo} from 'react'

const expensiveCalculation = (num) => {
    console.log("Calculating.....");
    for( let i = 0; i<100000000; i++){
        num += 1;
    }
    return num;
};

export default function UseMemoHook() {
    const [count, setCount] = useState(0);
    const [toDo, setTodo] = useState(['Todo-1','Todo2']);
    const calculation = useMemo(() => expensiveCalculation(count),[count]);

    const increament = () => {
        setCount (count + 1);
    };
    const addTodo = () =>{
        setTodo((list)=>[...list,"NewTodo"])
    }
    return (
        <>
        <div className="container">
            <div className = "row">
                <h3>My ToDo List </h3>
                <ul>
                    {toDo.map((todoList,indx) => {return <li indx = {indx}>{todoList}</li>})}
                </ul>
                
            </div>
            <button onClick = {addTodo}>Add Todos</button>
        </div>
        <div className="container">
            <div className = "row">
                <h3>Counter </h3>
                <p>Count is = {count}</p>
               

            </div>
            <button onClick={increament}>Increament</button>
                <h3>Expensive Calculation</h3>
                <p>{calculation}</p>
        </div>
        
        </>
    )
}
