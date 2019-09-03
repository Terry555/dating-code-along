import React from 'react';
import Actions from './Actions';

const Person = ({ person, modifySuperficialChoices }) => {
  const { name, desc, age, image } = person;

  return (
    <>
      <div className="person">
        <div className="person-photo">
          <img src={`/images/users/${image}`} alt={name} />
        </div>

        <div className="person-description">
          <p className="person-name-age">

          </p>
        </div>
      </div>
    </>
  )
}

export default Person;