import React from 'react';
import PropsTypes from 'prop-types';

 const UserItem = ({ user : {avatar_url,login,html_url}})=>  {
    
    
    
        return (
            <div className='card text-center'>
                <img 
                src={avatar_url} 
                alt=""
                className='rounded-circle mx-auto d-block'
                 style={{width:'70px',textAlign:'center'}} 
                />
        
      <h3>{login}</h3>
        <div>
       <a href={html_url} className="btn btn-dark btn-sm my-1">More</a>


    </div>
                
            </div>
        );
    
};
UserItem.propsTypes = {
    user:PropsTypes.object.isRequired
};

export default UserItem
