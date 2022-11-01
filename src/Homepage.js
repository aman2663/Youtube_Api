import React from 'react'

const Homepage = ({setLink,item}) => {
  return (
    <>
        <div style={{display:'flex',flexDirection:'column',cursor:'pointer',margin:'20px'}} onClick={()=>setLink(item?.trailer)}>
            <img src={item?.poster} alt='poster' style={{width:'300px',height:'200px',borderRadius:'20px'}} />
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
            <h3>{item?.name}</h3>
            <h3>{item?.year}</h3>
            </div>
        </div>
    </>
  )
}

export default Homepage