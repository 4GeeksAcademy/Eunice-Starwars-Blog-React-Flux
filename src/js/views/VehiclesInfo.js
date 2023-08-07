import React, { useContext, useState } from 'react'
import { Context } from '../store/appContext';

const VehiclesInfo = () => {
  const { store } = useContext(Context);


  return (
    <div className="infoContainer">
      <img src={`https://starwars-visualguide.com/assets/img/vehivcles/${store.uidVehicle}.jpg`} onError={({ currentTarget }) => {
        currentTarget.onerror = null; currentTarget.src = "https://starwars-visualguide.com/assets/img/placeholder.jpg";
      }} className="card-img-top" alt="..." />
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h1 className="mb-5 text-warning">{!!store.idVehicle ? store.idVehicle.name : "...Loading"}</h1>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Vehicle Description
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idVehicle ? store.idVehicle.description : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Model
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idVehicle ? store.idVehicle.model : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Manufacturer
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idVehicle ? store.idVehicle.manufacturer : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFourth" aria-expanded="false" aria-controls="flush-collapseFourth">
              Vehicle Class
            </button>
          </h2>
          <div id="flush-collapseFourth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idVehicle ? store.idVehicle.vehicle_class : "...Loading"}</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFifth" aria-expanded="false" aria-controls="flush-collapseFifth">
              Created at
            </button>
          </h2>
          <div id="flush-collapseFifth" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">{!!store.idVehicle ? store.idVehicle.created : "...Loading"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VehiclesInfo