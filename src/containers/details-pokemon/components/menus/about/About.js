import React from 'react';
import Badge from 'components/badge/Badge';

function About({ pokemonPayload }) {
  const pokemonAbility = pokemonPayload?.data?.abilities ?? {};

  return (
    <>
      <div style={{ maxWidth: '200px' }}>
        <div className="d-flex justify-content-between mt-1">
          <div>Experience</div>
          <div style={{ width: '88px' }} className="font-weight-bold">
            {' '}
            {pokemonPayload.data.base_experience}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <div>Height</div>
          <div style={{ width: '88px' }} className="font-weight-bold">
            {pokemonPayload.data.height}
          </div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <div>Weight</div>
          <div style={{ width: '88px' }} className="font-weight-bold">
            {pokemonPayload.data.weight}
          </div>
        </div>
      </div>
      <div className="pt-2">
        <span>Abilities :</span>
      </div>
      <div className="d-flex flex-wrap pt-2">
        {pokemonAbility.map((abilities) => (
          <div key={abilities.ability.name} className="pr-2">
            <Badge>{abilities.ability.name}</Badge>
          </div>
        ))}
      </div>
    </>
  );
}

export default About;
