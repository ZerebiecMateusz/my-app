import React from "react";

const Form = props => {
    return ( 
        <form onSubmit={props.submitButton}>
            <input 
                type="text" 
                value={props.value} 
                placeholder="Wpisz miasto" 
                onChange={props.changeInput}
                />
            <button>Wyszukaj miasto</button>

        </form>
     );
}
 
export default Form;