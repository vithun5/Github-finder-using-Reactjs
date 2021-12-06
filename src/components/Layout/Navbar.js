import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
 const Navbar = ({icon,title}) =>  {
     
    
        return (
            <nav className='navbar bg-primary'>
                <h1>
                    <i className={icon}/>
                         {title}
                    </h1>
                    <div div className='navbar '>
                        
                            <Link to=' ' style={styles}>Home</Link>
                        
                        
                        
                            <Link to='/about' style={styles}>About</Link>
                        
                    </div>
            </nav>
        );
    
}
Navbar.defaultProps={
    title: ' GitHub Finder',
    icon:  ' fab fa-github'
 };
 Navbar.propTypes = {
     title: PropTypes.string.isRequired,
     icon : PropTypes.string.isRequired
 };
 const styles={
     color:'black',
     display:'flex',
     padding:'10px'

 }
export default Navbar;
