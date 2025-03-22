import { useState } from "react";


function Counter (){

    // useState() with normal variables
    const [count, setCount] = useState(0)

    
    // useState() with objects
    // task: make age respond to buttons without affecting name property
    const [user, setUser] = useState({name:"Sam", age: 19})


    // useState() with arrays
    const [myArr, setMyArr] = useState([])
    





    return(
        <>
            {/* With simple userState variables */}
            <span>Counter: { count }</span>
            <br />
            <button
                // onClick = { () => {
                //     setCount(count + 1)
                // } }
                
                // When our current value depends on the first variable of useState(), we do not use this method.

                // This is not a good practice and it has issues. if we write "setCount(count + 1)" twice, we would expect to get increments twice but that does not happen it only registers one.

                // To fix that, all we need is to put it inside a call back function, the parameter of the call back function would have the previous value from the first variable of the useState()

                // like this:

                onClick={() => {
                    setCount((previousCount) => { return previousCount + 1 })
                }}

                // now if we write "setCount((previousCount) => {previousCount + 1})" twice, it will implement both of them not just one


            >Increment</button>

            <button
            onClick={() => {
                setCount((previousCount) => { return previousCount - 1})
            }}
            >Decrement</button>

            <button
            onClick = { () => {
                    setCount(0)
                }}
            >Reset</button>

        <br /><br /><br />    
        
        

        {/* Now with objects: */}  
        <span>Objects | { user.name }: { user.age } </span> 
        <br />
        <button
            onClick={() => {
                setUser((previousUser) => {
                    return {
                        ...previousUser,
                        age: previousUser.age + 1
                    }                     
                })
            }}
        >+1 in age</button>

        <button
            onClick={() =>{
                setUser((previousUser) => {
                    return {
                        ...previousUser,
                        age: previousUser.age - 1
                     }
                })
            }}
        >-1 in age</button>       

        <button
            onClick={() => {
                setUser((previousUser) => {
                    return{
                        ...previousUser,
                        age: 19
                    }
                })
            }}
        >Reset Object</button>

        <br /><br /><br />  



        {/* Now with Arrays */}
        {/* After learning to use useState() with objects, arrays are pretty much the same thing */}
        <span>Arrays | { myArr.toString() } </span>
        <br />
        <button
        onClick={() => {
            setMyArr((previousArray) => {
                return [
                    ...previousArray,
                    ' +1'
                ]
            })
        }}
        >+1 in Array</button>

        <button
            onClick={() => {
                setMyArr((previousArray) => {
                    return [
                        ...previousArray,
                        ' −1'
                    ]
                })
            }}
        >-1 in Array</button>
        
        <button
            onClick={() => {
                setMyArr((previousArray) => {
                    return []
                })
            }}
        >Reset Array</button>



        </>

    )
}

export default Counter;