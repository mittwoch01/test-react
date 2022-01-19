import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
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
              <button type='button'></button>
            </div>
          </li>
          )}
      </ul>
    </div>
  )
}
