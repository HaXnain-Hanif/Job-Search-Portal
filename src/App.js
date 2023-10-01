import { Box } from "@mui/material";
import './index.css';
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import JobDetails from "./pages/JobDetails";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  
  const [jobResults, setJobResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [locationText, setLocationText] = useState('');

  return (
    <Box m='auto'>
      <NavBar searchText={searchText} setSearchText={setSearchText} locationText={locationText} setLocationText={setLocationText} setJobResults={setJobResults} setIsLoading={setIsLoading}/>
      
      <Routes>
        <Route path='/' element ={<Home searchtext={searchText} locationText={locationText} jobResults={jobResults} isLoading={isLoading}/>}/>
        <Route path='/details/:id' element={<JobDetails/>}/>
      </Routes>
      <Footer/>
    </Box>
  );
}

export default App;
