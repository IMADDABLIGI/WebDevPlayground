import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DrinksComponent() {
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/drinks/');
        setDrinks(response.data.drink); // Assuming the API response is in the format { "drink": [...] }
        console.log(response.data.drink)
      } catch (error) {
        console.error('Error fetching drinks:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Drinks</h1>
      <ul>
        {drinks.map((drink) => (
          <li key={drink.id}>{drink.name} : {drink.price}.99 $</li>
        ))}
      </ul>
    </div>
  );
}

export default DrinksComponent;