import React from 'react'

const Checked = ({ toDos }) => {
  return (
  
       <div className='footer'>
       
 {
        toDos.map(x => {
          if (x.status) {
           
            return <h3 key={x.id} style={{ color:'white'}}>
              Checked Tasks:<br/><p style={{ color:'black', fontSize: '16px' }} >{x.name}</p></h3>
          }
          return null
        })
      } 
 </div>
 
  )
}

export default Checked;
