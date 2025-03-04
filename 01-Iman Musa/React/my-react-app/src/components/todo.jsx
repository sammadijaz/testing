function Todo ({ modifiedTask, description }){

    // console.log(props);

    // console.log(props.modifiedTask); // each output will be shown twice because of strict mode enabled in main.jsx remove it to see normal output but dont remove it in actual projects it helps in debugging code 
    
    // in function parameter you can write "{ modifiedTask }" instead aswell to destructre the object, before I wrote "props.modifiedTask"
    // console.log(typeof props); // Object
    // (in order for the ABOVE commented code to work, replace {modifiedTask} in parameter with "props")
    
    // console.log(modifiedTask);
    
    
    function deleteTask (){
        console.log(`Delete ${modifiedTask} Task?`);
    };

    return (
        <div className="task">
        <h2>{ modifiedTask }</h2>
        <p>{ description }</p>
        <button
        onClick={() => {
            // console.log(`Delete '${modifiedTask}' Task?`);
            deleteTask(); // we can use either of the methods
        }}
        >Mark Finish</button>
        </div>
    )
}

export default Todo; 