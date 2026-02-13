import React from 'react'

const Clauderecipe = ({ recipeshown }) => {
  return (
  <>
     { recipeshown&&<section>
          <h2>Chef claude recommendations:</h2>
          <article className='sugested-recipe-container'>
            <p>Based on the ingridients available, I would recommend making a delicious  <strong>Beef Bolognese</strong>.Here is the recipe:</p>

            <h3>Beef Bolognese pasta</h3>
            <strong>Ingridients:</strong>
            <ul>
              <li>1 lb. ground beef</li>
              <li>1 onion, d!ced</li>
              <li>3 cloves garlic ,minced</li>
              <li>1 (28 0z) can crush the tomatoes</li>
              <li>1 Cup beef broth</li>
              <li>1 teaspoon dr!ed organzo</li>
              <li>1 teaspoon dr!ed basile</li>
              <li>salt and pepper to taste</li>
              <li>8 oz paste of your choice (e.g., spaghetti,penne, linguine)</li>
            </ul>

            <strong>Instructions:</strong>
            <ol>
              <li>  Bring a large ppot of salted water to build for the paste</li>
              <li>In a large skilled or dutch oven, cook the ground beef over meduim-high heat, breaking it up with a wooden spoon, until browned and cooked through about 5-7 minutes</li>
              <li>Add the onion and minced garlic to the skilet and cook for 2-3 minutes until the union is translucent</li>
              <li>Add crushed tomatoes and minced garlic to skillet and cook for 2-3 minutes</li>
              <li>Reduce the heat to low and let the sauce sinnner for 15-20minutes, stirring occasionaly to allow flowers meld</li>
              <li>Add the bolognese sauce to the cooked pasta and toss to combine</li>
              <li>Serve hot , garnish with additional fresh basil or grated parmasan cheese if desired</li>
            </ol>

          </article>
         </section>}
  
  </>
  )
}

export default Clauderecipe