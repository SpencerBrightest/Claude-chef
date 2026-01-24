import React from 'react'

const Name = () => {

  const ingridients = ['onions', 'tomatoes', 'cheese']

const ingridientsList=ingridients.map((ingridients)=>(
  <li key={ingridients}>{ingridients}</li>
))

function submit (){
  console.log('submitted')
}
  
  return (
   <>
   
    <main>
       <form action="" className='add-ingridient-form' onSubmit={submit}>
        <input type="text"  
        arai-label="Add ingridient"
         placeholder='e.g onions' />
        <button>Add ingridient</button>
        </form> 

        <ul>
          {ingridientsList}
        </ul>
    </main>
  
   </>
  )
}

export default Name