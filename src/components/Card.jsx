import React from 'react';

function Card() {
    return (
        <div>
          <p>{props.cancion}</p>
          <p>{props.cantante}</p>
        </div>
      );
    }
export default Card;