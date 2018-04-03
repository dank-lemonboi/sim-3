import React, { Component } from 'react'
import './Html.css'

export default class Html extends Component {
    render() {
        return(
            <div className='element_selector'>
              <div>
               <p>Html</p>
              </div>
              <div>
              <p id='hoverme'>Html</p>
             </div>
             <div className='children'>
             <p>Html</p>
             <p>Html</p>
             <p>Html</p>
             <p>Html</p>
             <p>Html</p>
             <p>Html</p>
             <p>Html</p>
            </div>
            <div>
            <p>Html</p>
           </div>
           <button className='disabled_button'>click me...</button>
            </div>
        )
    }
}