import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

export default function About() {
  const mockData = './data/MOCK_DATA.json';
  const [cardList, setCardList] = useState([]);
  const linkTo = useParams();

  useEffect(()=>{
    (async ()=>{
      const rel = await axios.get(mockData);
      setCardList(rel.data);
    })()
  });

  const filterData = cardList.filter( (card,idx)=> idx < 20 );

  return (
    <div className='page_wrap'>
      <h2>About page</h2>
      <ul className='card_wrap'>
        {filterData.map((card,idx)=> 
          <li key={idx}>
            {card.first_name+' '+card.last_name}
            <div className='link_btn'>

              {/* <Link
              to = {card.first_name}
              onClick={(e)=>(
                e.preventDefault()

              )}>
              {card.first_name}
              </Link> */}
              <button type='button'
              onClick={ ()=> { nav(card.first_name) }}>
              {card.first_name}
              </button>
            </div>
          </li>
          )}
      </ul>
    </div>
  )
}
