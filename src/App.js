import React,{Component, Fragment}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Layout/Search';
import Navbar from './components/Layout/Navbar';
import Users from './components/users/Users';
import About from './components/pages/About';
import User from './components/users/User';
import './App.css';
import axios from 'axios';
import  Alert  from './components/Layout/Alert';
class App extends Component {
  state ={
    user:[],
    users:{},
    loading:false,
    alert:null
  }
//  async componentDidMount(){
//    this.setState({loading:true});
//    const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//    this.setState({user:res.data.items,loading:false});
//  }
    //search github users
    searchUsers = async text =>{
      this.setState({loading:true});
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({user:res.data.items,loading:false});
    };
    getUser = async (username) => {
      this.setState({loading:true});
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
      this.setState({users:res.data,loading:false});
    }
    //clear users
    clearUsers = () => {
      this.setState({ user : [], loading:false });
    }
    //alert msg when  nothing typed
    setAlert=( msg , type )=>{
      this.setState({ alert : { msg ,type}});
      setTimeout(()=>this.setState({alert:null}),3000)
    };
  render() {
  const {loading,users,user,alert}=this.state;

   return(
    <Router>
     <div className='App'>
       <Navbar />
      
       <div className='container'>
       <Alert alert={alert}/>
       <Routes>
       <Route exact path='/' />
       </Routes>
        
           <Fragment>
            <Search 
            searchUsers = {this.searchUsers} 
            clearUsers = {this.clearUsers} 
            showClear = {user.length > 0 ? true : false} 
            setAlert ={this.setAlert}
            />
            <Users loading={loading} users={user}/>
           </Fragment>
        
      
     
           <Routes>
         <Route exact path='/about' element={<About />} />
        
         <Route exact path='/user/:login' render={props => (
           <User 
              {...props}
              getUser={this.getUser} 
              users={users} 
              loading={loading}/>
         )}/>
          </Routes>
      
       </div>
     
     
      </div>
      </Router>
    );
   }
  }

export default App;

