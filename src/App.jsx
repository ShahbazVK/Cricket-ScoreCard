import React,{useEffect,useState} from 'react';
import {Button} from '@material-ui/core'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Mycard from './components/Mycard';
import getMatches from './Api/Api'

const App = () => {
  const [matches,setMatches]=useState([]);
  useEffect(() => {
    getMatches().
    then((data)=>{
      setMatches(data.matches)
      //console.log("DATAaa",data)
      console.log("AVC",data.matches);
    }).
    catch();
  },[]);



  return (
    <div className='text-center'>
    <Navbar/>
    <h1 className=' pt-5'>Welcome To My Live Score App</h1>

    {matches.map((match)=>(
      <>
      {
        match.type=='Twenty20'?(
          <Mycard match={match} key={match.unique_id} />
        ):
        (null)
      }
      </>
    ))}
    </div>
  );
}

export default App;
