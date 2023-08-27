import React from 'react'

const WorkoutGallery = () => {

  return (
    <div className='grid xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-6 grid-cols-4 gap-4'>
        {[1,2,3,4,5,6,7,8,9,10,11,12].map((val,ind)=>{
            console.log(`../assets/gallery${ind+1}.jpeg`)
            return <img src={`src\\assets\\gallery${val}.jpeg`} key={ind} className='cursor-pointer hover:scale-105 transition-all duration-100 hover:overflow-clip'/>
        })}
    </div>
  )
}

export default WorkoutGallery