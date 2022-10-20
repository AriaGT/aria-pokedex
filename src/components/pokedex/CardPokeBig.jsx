import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/cardPoke.css";

const CardPokeBig = ({ pokemon }) => {
  const [stats, setStats] = useState();
  const navigate = useNavigate();

  const handleClick = () => {};

  useEffect(() => {
    const formatStats = pokemon?.stats;
    setStats(formatStats?.map((stat) => stat.stat.name.replace("-", " ")));
  }, [pokemon]);

  return (
    <article className={`poke-info ${pokemon?.types[0].type.name}`}>
      <header className="poke-info__header">
        <h3 className="poke-info__name">{pokemon?.name}</h3>
        <div className="poke-info__types">
          <p className="poke-info__type-label">TYPE:</p>
          <ul className="poke-info__types-container">
            {pokemon?.types.map((type) => (
              <li
                key={`${type.type.url}`}
                className={`poke-info__type ${type.type.name}`}
              >
                {type.type.name}
              </li>
            ))}
          </ul>
        </div>
        <img
          className={pokemon?.types[0].type.name}
          src={pokemon?.sprites.other["official-artwork"].front_default}
          alt="pokemon__img"
        />
      </header>
      <section className="poke-info__sprites-container">
        <p>SPRITES:</p>
        <div className="sprites-container">
          <div className="poke-info__sprite">
            <img src="/images/pokedex/pokeball_icon.png" alt="" />
            <img
              className="pokemon-sprite"
              src={pokemon?.sprites.front_default}
              alt=""
            />
          </div>
          <div className="poke-info__sprite">
            <img src="/images/pokedex/pokeball_icon.png" alt="" />
            <img
              className="pokemon-sprite"
              src={pokemon?.sprites.back_default}
              alt=""
            />
          </div>
          <div className="poke-info__sprite">
            <img src="/images/pokedex/pokeball_icon.png" alt="" />
            <img
              className="pokemon-sprite"
              src={pokemon?.sprites.front_shiny}
              alt=""
            />
          </div>
        </div>
      </section>
      <div className="poke-info__stats-container">
        {pokemon?.stats.map((stat) => {
          const url = stat.stat.url;
          const urlId = url[url.length - 2] - 1;
          return (
            <div key={urlId} className="poke-info-stat-data">
              <div className="poke-info__stat">
                <p className="poke-info__stat-label">
                  {stats ? stats[urlId] : null}
                </p>
              </div>
              <div className="poke-info__stat">
                <p className="poke-info__stat-number">{stat.base_stat}</p>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
};

export default CardPokeBig;
