import React from 'react';

const LikedPerson = ({person}) => (
  <div className="liked-person">
    <div className="liked-person-image">
      <img
        src={`/images/users/${person.image}`}
        alt={`You liked ${person.alt}`}
      />
    </div>
  </div>
)

export default LikedPerson;
