import React from 'react'
import Clauderecipe from './clauderecipe'

const Name = () => {

  const [ingridients,setIngridients]=React.useState([])
  const [recipeshown,setRecipeshown]=React.useState(false)


  function togglerecipeshown(){
    setRecipeshown(prevshown=>!prevshown)
  }



const ingridientsList=ingridients.map((ingridients)=>(
  <li key={ingridients}>{ingridients}</li>
))

function addIngridient(formData){
  const ingridient=formData.get('ingridients')
   setIngridients(ingrid=>[...ingrid,ingridient])
}


  
  return (
   <>


    <main>
       <form action={addIngridient} className='add-ingridient-form' >
        <input type="text"  
        arai-label="Add ingridient"
         placeholder='e.g onions'
         name="ingridients" />
        <button>Add ingridient</button>
        </form> 


        {ingridients.length > 0 && <section>
              <h2>Ingridients on hand:</h2>
           <ul className='ingridients-list'>
          {ingridientsList}
        </ul>
         
        {ingridientsList.length> 3 && <div className="get-recipe-container">
          <h3>Ready for a recipe?</h3>
          <p>Generate me a recipe from your list of ingridietnts</p>
          <button onClick={togglerecipeshown}>Get a recipe</button>
        </div>}
        
        </section>}
        {recipeshown && <Clauderecipe recipeshown={recipeshown}/>}
      
       
    </main>
   </>
  )
}

export default Name