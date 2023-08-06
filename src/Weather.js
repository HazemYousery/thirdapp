import React from "react"
import './App.css';
const Weather=(state) =>{

    return(
        <div className="temperature">
         {
state.temperature&&<p>temperature:{state.temperature}</p>

         }   
       {
state.city&&<p>city:{state.city}</p>

       }
        {
state.country&&<p>country:{state.country}</p>

        }
        {
state.humidity&&<p>humidity:{state.humidity}</p>

        }
        
{
    state.description&&<p>description:{state.description}
    </p>
}


        </div>
    )

}
export default Weather;