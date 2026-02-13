import React from 'react'

const Ingridientlist = ({ ingridients, togglerecipeshown }) => {

  const ingridientsList=ingridients.map((ingridient)=>(
    <li key={ingridient}>{ingridient}</li>
  ))

  return (
   <>
   <section>
              <h2>Ingridients on hand:</h2>
           <ul className='ingridients-list'>
          {ingridientsList}
        </ul>
         
        {ingridients.length > 3 && <div className="get-recipe-container">
          <h3>Ready for a recipe?</h3>
          <p>Generate me a recipe from your list of ingridietnts</p>
          <button onClick={togglerecipeshown}>Get a recipe</button>
        </div>}
        
        </section>
   </>
  )
}

export default Ingridientlist