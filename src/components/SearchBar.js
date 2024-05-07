import { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({onSubmit}){
     const [term,setTerm] = useState('cars');

    const handleChange = (e)=>{
        setTerm(e.target.value);
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        onSubmit(term);
    }

    return <div className='search-bar'>
        <form onSubmit={handleSubmit}>
        <label><h2>Search Images</h2></label>
        <input onChange={handleChange} value={term} required/>
        </form>
        
    </div>
}