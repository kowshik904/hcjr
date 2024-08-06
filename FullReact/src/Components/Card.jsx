import React from 'react'
import './Card.css'
const items = [
    {
        name: "Chicken Biryani",
        Duration: "  Duration : 1-hr",
        Category: "V",
        image:"https://tse4.explicit.bing.net/th?id=OIP.FHJDPQCHkCaXpj5sSEf9vQHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Idly",
        Duration: " Duration: 1/2-hr",
        Category: "V",
        image:"https://tse1.mm.bing.net/th?id=OIP.ldbU7sPNoy9Gx3EFsaDXXgHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Dosa",
        Duration: " Duration: 1/60-hr",
        Category: "V",
        image:"https://tse1.mm.bing.net/th?id=OIP.ldbU7sPNoy9Gx3EFsaDXXgHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Dosa",
        Duration: " Duration: 1/60-hr",
        Category: "V",
        image:"https://tse1.mm.bing.net/th?id=OIP.ldbU7sPNoy9Gx3EFsaDXXgHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Dosa",
        Duration: " Duration: 1/60-hr",
        Category: "V",
        image:"https://tse1.mm.bing.net/th?id=OIP.ldbU7sPNoy9Gx3EFsaDXXgHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Dosa",
        Duration: " Duration: 1/60-hr",
        Category: "V",
        image:"https://tse1.mm.bing.net/th?id=OIP.ldbU7sPNoy9Gx3EFsaDXXgHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Chicken Biryani",
        Duration: "  Duration : 1-hr",
        Category: "V",
        image:"https://tse4.explicit.bing.net/th?id=OIP.FHJDPQCHkCaXpj5sSEf9vQHaE8&pid=Api&P=0&h=180",
    },
    {
        name: "Dosa",
        Duration: " Duration: 1/60-hr",
        Category: "V",
        image:"https://tse1.mm.bing.net/th?id=OIP.ldbU7sPNoy9Gx3EFsaDXXgHaE8&pid=Api&P=0&h=180",
    },
];
function Recipe(props){
    return(
     <div className='container'>
        <h1 className='title'>{props.name}</h1>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
          <img src={props.image}/>
        <p className='duration'>{props.Duration}</p> 
            <h2 className={(props.Category== 'V')? "Veg": "Non-Veg"}> 
            {(props.Category === 'V')? "Vegetarian": "Non-Vegetarian"}
            </h2>
     </div>
    );
}
const Card = () => {
  return (
    <>
    {items.map((dish,index)=>(
        <Recipe key={index} name={dish.name} Duration={dish.Duration} Category={dish.Category} image={dish.image}/>
    ))}
    </>
  )
}

export default Card;
