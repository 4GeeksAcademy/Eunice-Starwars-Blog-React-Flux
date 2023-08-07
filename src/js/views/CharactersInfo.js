import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';

const CharactersInfo = () => {
  const { store } = useContext(Context);


  return (
    <div className="infoContainer">
      <img src={`https://starwars-visualguide.com/assets/img/characters/${store.uidCharacter}.jpg `} className="card-img-top" alt="..." />
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
        <h1 className="mb-5 text-warning">{!!store.idCharacter ? store.idCharacter.name : "...Loading"}</h1>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Character Description
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idCharacter ? store.idCharacter.description : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Gender
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idCharacter ? store.idCharacter.gender : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Birth Year
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idCharacter ? store.idCharacter.birth_year : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
              Height
            </button>
          </h2>
          <div id="flush-collapseFourth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idCharacter ? store.idCharacter.height : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifth" aria-expanded="false" aria-controls="flush-collapseFifth">
              Created at
            </button>
          </h2>
          <div id="flush-collapseFifth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idCharacter ? store.idCharacter.created : "...Loading"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CharactersInfo