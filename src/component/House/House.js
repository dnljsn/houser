import React from 'react';

export default function House(props) {
  var { id, name, address, city, state, zip } = props.listOfHouses
  var { deleteClick } = props.deleteClick

  return (
    <div className="houses">

      <button
                onClick={() => deleteClick(id)}
      >Delete</button>

      <p style={{ fontWeight: "bold", margin: "5px 0px 0px" }}>Property Address:{name}</p>
      <p style={{ fontWeight: "bold", margin: "5px 0px 0px" }}>Property Address:{address}</p>
      <p style={{ fontWeight: "bold", margin: "5px 0px 0px" }}>Property Address:{city}</p>
      <p style={{ fontWeight: "bold", margin: "5px 0px 0px" }}>Property Address:{state}</p>
      <p style={{ fontWeight: "bold", margin: "5px 0px 0px" }}>Property Address:{zip}</p>


    </div>
  )
}
