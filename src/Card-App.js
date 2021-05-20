import React from 'react'
import './App.css';
import Card from './Card';
import pic from './mypic.jpg';

function Cards()
{
    return(
        <div className='Cards'>
            <Card title='Card Title'
            imageUrl={pic}
            body="Career Saathi Program conducts selection conference to the
            select the meritorious yet underprivilized students from
            governament schools every year after completion of their
            tenth standard. They conducts written test, group
            discussion and interviews for selection."
             />
        </div>        
    );
}
export default Cards;