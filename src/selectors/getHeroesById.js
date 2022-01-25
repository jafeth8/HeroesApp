import { heroes } from "../data/heroes";

export const getHeroesById = (idHeroe='')=> {
    
    return heroes.find(heroe=>heroe.id===idHeroe);
     
}