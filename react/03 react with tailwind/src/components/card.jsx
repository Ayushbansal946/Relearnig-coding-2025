/*
rfce 
import React from 'react'

function card() {
  return (
    <div>
      
    </div>
  )
}
export default card

rafce
import React from 'react'

const card = () => {
  return (
    <div>
    
    </div>
  )
}
export default card

*/
import React from 'react'



const card = ({username , myarray=[1]}) => {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-amber-300 hover:bg-amber-400 transition duration-300 ease-in-out">
      <img className="w-full" src="https://cdn.pixabay.com/photo/2025/03/06/17/45/duck-9451249_1280.jpg" alt="Card image cap" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tailwind Card</div>
        <p className="text-fuchsia-800 text-1xl font-semibold">
          This is a simple card component styled with Tailwind CSS. & my name is {username} {myarray[1]} !
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-fuchsia-700 rounded-full px-3 py-1 text-sm font-semibold text-amber-50 mr-2 mb-2">#tailwind</span>
        <span className="inline-block bg-fuchsia-700 rounded-full px-3 py-1 text-sm font-semibold text-amber-50 text-center justify-self-center mx-8 my-4">React</span>
      </div>
</div>

    </>
  )
}

export default card
