import React from 'react';
const VisibilityControl = function(props){

    return(
        <div className="form-check">
        <input  type="checkbox"
             className='form-check-input'
             checked={props.isChecked }
             onChange={e => props.callback(e.target.checked)}
             >
        
        </input>
       
        <label htmlFor="form-check-label">
            show completed Task
        </label>
           </div>
       
    )
}

export default VisibilityControl;





