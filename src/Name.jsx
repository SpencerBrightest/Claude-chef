import React from 'react'

const Name = () => {

  const [ingridients,setIngridients]=React.useState([])

const ingridientsList=ingridients.map((ingridients)=>(
  <li key={ingridients}>{ingridients}</li>
))

function submit (event){
  event.preventDefault()
  alert('submitted')

  const formdata=new FormData(event.target)
  const ingridient=formdata.get('ingridients')
   setIngridients(ingrid=>[...ingrid,ingridient])
}
  
  return (
   <>
   
    <main>
       <form action="" className='add-ingridient-form' onSubmit={submit}>
        <input type="text"  
        arai-label="Add ingridient"
         placeholder='e.g onions'
         name="ingridients" />
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