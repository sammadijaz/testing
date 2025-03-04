function Popup({ custom }){
    // task + my stuff
    function clickedConfirm (){
        console.log("You clicked Confirm");

        document.querySelector(".popup").remove();
        document.querySelector(".backdrop").remove();
        
    };

    function clickedCancel(){
        console.log("You clicked Cancel");
        
        document.querySelector(".popup").remove();
        document.querySelector(".backdrop").remove();
        
    };
    
    return (
        <>

        <div className="popup">
            <span>{ custom }</span>
            <div className="popup__btns">
                <button className="popup__btn" onClick={() =>{clickedConfirm()}} >Confirm</button>
                <button className="popup__btn popup__btn--cancel" onClick={() =>{clickedCancel()}} >Cancel</button>
            </div>
        </div><div className="backdrop"></div>

        </>

    )
}

export default Popup;