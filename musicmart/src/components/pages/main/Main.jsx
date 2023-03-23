import React from 'react'
import Card from '../../../reusable-components/cards/Card'



const albums = [
  {
    id: 1,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 2,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 3,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 4,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 5,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 6,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 7,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 8,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 9,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },

  {
    id: 10,
    imgSrc: "https://images.unsplash.com/photo-1623200693945-ec1e9991039a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=826&q=80"
  },
]

const Main = () => {


  return (
    <div className='main'>
        <div className="upperNav">
          dummy text
        </div>
        <div className="mainContent">
          <h1>Uniquely yours</h1>
          <div className="cardsWrap">


            {albums.map((album) => (
               <Card key={album.id} imgSrc={album.imgSrc} />
              
            ))}
            {/* <div className="card">
              <div className="cardImage">
                  <img src="https://images.unsplash.com/photo-1678649877879-01706b17cd37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80" alt="image1" />
              </div>
              <div className="cardContent">
                  <p>Liked songs</p>
              </div>
            </div> */}
          </div>
        </div>
    </div>
  )
}

export default Main