import React, { useState } from 'react'
import PropTypes from 'prop-types'
const  Search=({showClear,clearUsers,searchUsers,setAlert}) => {
    const [text,setText] = useState('');
    
    const onChange = e => setText(e.target.value);
    //onsubmit function
   const onSubmit = e => { 
        e.preventDefault();
        if(text===""){
            setAlert('please enter something' , 'dark');
        }else{
            searchUsers(text);
            setText('');
        }
    };
   return (
            <div>
                <form onSubmit={onSubmit} className='form'>
                    <input type='text' name="text" placeholder="Seach here..." className="btn-block btn-sm" value={text}
                    onChange={onChange} />
                    <input type="submit" value="Search" className="btn btn-dark btn-block " />
                </form>
                {showClear &&<button 
                className="btn btn-outline-secondary btn-block " 
                 onClick={clearUsers} 
                >Clear</button>   }
                
            
            </div>
            
        );
    
}
Search.propTypes = {
    searchUsers : PropTypes.func.isRequired,
    clearUsers : PropTypes.func.isRequired,
    showClear : PropTypes.bool.isRequired
};

export default Search

