import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className="py-4">
      <div className="container">
        <div className="row">
            <div className="col-md-4">
              <Card contact={{ 
                imageUrl:"http://placekitten.com/g/300/200",
                title:"First Post", 
                published:"06 Nov 2020",
               }} />
            </div>
            <div className="col-md-4">
              <Card contact={{ 
                imageUrl:"http://placekitten.com/300/200", 
                title:"Second Post", 
                published:"07 Nov 2020",
               }} />
            </div>
            <div className="col-md-4">
              <Card contact={{ 
                imageUrl:"http://placekitten.com/g/300/200", 
                title:"Third Post", 
                published:"08 Nov 2020",
               }} />
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default App
