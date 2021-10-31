import React, { useEffect, useState } from 'react';
import Place from '../OurPlace/Place';


const Places = () => {
    const [places,setPlaces] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/places")
          .then((res) => res.json())
          .then((data) => setPlaces(data));
    },[])
    return (
        <div className="places">
            <h2 className="text-white py-3"> Most Beautiful Places You Can Travel </h2>
            <div className="row">
                {
                    places.map(place => <Place 
                    key={place.key}
                    place={place}
                        ></Place>)
                }
            </div>
        </div>
    );
};

export default Places;