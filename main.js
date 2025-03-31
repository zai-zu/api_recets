import { obtenerApi } from './src/API.js';

const randomRecipeButton = document.getElementById("randomRecipe");
const searchRecipeButton = document.getElementById("searchRecipe");
const appContainer = document.getElementById("app");
const inputTitle = document.getElementById("input_title");
console.log(import.meta.env);
// Mostrar receta aleatoria
randomRecipeButton.addEventListener("click", async () => {
  const data = await obtenerApi();
  
  if (data && Array.isArray(data)) {
    const randomIndex = Math.floor(Math.random() * data.length);
    const randomRecipe = data[randomIndex];
    displayRecipe(randomRecipe);
  } else {
    appContainer.innerHTML = "<p>No recipes found.</p>";
  }
});


// Buscar receta por título
searchRecipeButton.addEventListener("click", async () => {
  const searchTerm = inputTitle.value.trim().toLowerCase();
  const data = await obtenerApi();
  
  if (data && Array.isArray(data)) {
    // Busca la primera receta que contenga el término ingresado en su título
    const foundRecipe = data.find(recipe => recipe.title.toLowerCase().includes(searchTerm));
    if (foundRecipe) {
      displayRecipe(foundRecipe);
    } else {
      appContainer.innerHTML = "<p>No recipe found matching that title.</p>";
    }
  } else {
    appContainer.innerHTML = "<p>No recipes found.</p>";
  }
});

function displayRecipe(recipe) {
  appContainer.innerHTML = `
    <div class="highlight">
      <h3>${recipe.title}</h3>
      <img src="${recipe.image}" alt="${recipe.title}" style="max-width: 300px; height: auto;" />
    </div>
  `;
}
