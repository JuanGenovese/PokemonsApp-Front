import React from "react";
import style from "./Paginado.module.css";

export default function Paginado ({pokemonsPorPagina, allPokemons, paginado}){
    const pageNumbers = []

    for( let i = 1; i <= Math.ceil(allPokemons/pokemonsPorPagina); i++){ 
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul className={style.paginado}>
                { pageNumbers &&
                pageNumbers.map(number => (
                    <li className="number" key={number}>
                        <a onClick={() => paginado(number)}>{number}</a>
                    </li>   
                ))}
            </ul>
        </nav>
    )
}