import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { getHeroesById } from '../../selectors/getHeroesById';

export const HeroScreen = () => {

    const {heroeId} = useParams();

    //console.log(heroeId);
    const hero=getHeroesById(heroeId)

    if(!hero){

        return <Navigate to="/"/>
        
    }
    
    return (
        <div>
            <h1>HeroScreen</h1>
            <p>{hero.superhero}</p>
        </div>
    );
};
