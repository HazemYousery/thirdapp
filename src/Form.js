import React from 'react';
import './App.css';
const Form =(state)=>{
    const{getWeather}=state;
    return(
        <div className='form'>
            <form onSubmit={getWeather}>
           <p className="in"> <input type='text' placeholder='city' name='city'/></p> 
    <p className='int'> <input type='text' placeholder='Country' name='country' /></p>   
<button>Get weather</button>
                </form>   

</div>

        )
}
export default Form;