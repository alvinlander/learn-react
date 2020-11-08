import React from 'react'

function Card(props) {
    console.log(props)
    return (
        <div>
            <div className="card">
              <img src={props.contact.imageUrl} alt="cat" className="card-img-top"/>
                <div className="card body">
                    <h4>{props.contact.title}</h4>
                    <small className="text-muted">Published {props.contact.published}</small>
                  </div>
              </div>
        </div>
    )
}

export default Card
