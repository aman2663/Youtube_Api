import React from 'react'

const Sidebar = ({item,setLink}) => {
  return (
    <>
        <div style={{display:'flex',cursor:'pointer',margin:'20px'}} onClick={()=>setLink(item?.trailer)}>
            <img src={item?.poster} alt='poster' style={{width:'200px',height:'150px',borderRadius:'20px'}} />
            <div style={{display:'flex',flexDirection:'column',marginLeft:'20px'}}>
            <h3>{item?.name}</h3>
            <h3>{item?.year}</h3>
            </div>
        </div>
    </>
  )
}

export default Sidebar