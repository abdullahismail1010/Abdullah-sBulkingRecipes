
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyC7OYZOHgDpVlddgY7dzB8pT5nKV7UHgu0",
    authDomain: "bulkingrecipes-daf90.firebaseapp.com",
    projectId: "bulkingrecipes-daf90",
    storageBucket: "bulkingrecipes-daf90.firebasestorage.app",
    messagingSenderId: "256283378035",
    appId: "1:256283378035:web:39da091772b77a09c38506",
    measurementId: "G-N4XEDZ7R2E"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const recipeNameInput = document.getElementById('recipeName');
const recipeStepsInput = document.getElementById('recipeSteps');
const recipeIngredientsInput = document.getElementById('recipeIngredients');
const submitRecipeButton = document.getElementById('submitRecipe');

submitRecipeButton.addEventListener('click', () => {
    const recipeName = recipeNameInput.value.trim();
    const recipeSteps = recipeStepsInput.value.trim();
    const recipeIngredients = recipeIngredientsInput.value.trim();


    if (recipeName === '' || recipeSteps === '' || recipeIngredients === '') {
        alert('Please fill in all fields.'); 
        return;
    }

   
    addDoc(collection(db, 'recipeSuggestions'), {
        recipeName,
        recipeSteps,
        recipeIngredients
    })
    .then(() => {
        console.log('Recipe suggestion added successfully!');
        alert('Recipe Submitted'); 
        
      
        recipeNameInput.value = ''; 
        recipeStepsInput.value = '';
        recipeIngredientsInput.value = '';
    })
    .catch((error) => {
        console.error('Error adding document: ', error);
    });
});