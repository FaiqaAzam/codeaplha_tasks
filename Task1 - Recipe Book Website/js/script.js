var styling = document.createElement('style');

styling.textContent = `
.listItems{
    margin-bottom: 1em;
    padding: 1em;
    background-image: url('/images/formbg.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-left: 50px
}

.delbtn{
    padding: 5px 20px 5px 20px;
    font-weight: 700;
    background-color: #e5e5e5;
    margin-bottom: 8px
}
`;

document.head.appendChild(styling);

function addRecipe(){
    const RecipeName = document.getElementById('RecipeName').value;
    const ingredients = document.getElementById('ingredients').value;
    const instructions = document.getElementById('instructions').value;

    if(RecipeName && ingredients && instructions){
        const listRecipe = document.getElementById('listRecipe');
        const listItems = document.createElement('li');
        listItems.classList = 'listItems';

        const recipeContent = `
        <h3><strong>Recipe Name: </strong><span class="RecipeName">${RecipeName}</span></h3>
        <h5><strong>Ingredients: </strong><span class="ingredients">${ingredients}</span></h5>
        <h5><strong>Instructions: </strong><span class="instructions">${instructions}</span></h5>
        <button type="button" onclick="deleteRecipe(this)" class="delbtn">Delete</button>
        <br>
        <button type="button" onclick="updateRecipe(this)" class="delbtn">Update</button>
        `;

        listItems.innerHTML = recipeContent;
        listRecipe.appendChild(listItems);

        document.getElementById('form1').reset();
    }
    else{
        alert('Please enter all the fields');
    }
}

function deleteRecipe(button){
    const listItems = button.closest('.listItems');
    listItems.remove();
}

function updateRecipe(button){
    const listItems = button.closest('.listItems');
    const RecipeName = listItems.querySelector('.RecipeName');
    const ingredients = listItems.querySelector('.ingredients');
    const instructions = listItems.querySelector('.instructions');

    const newRecipeName = prompt("Update Recipe Name: ", RecipeName.innerText);
    const newIngredients = prompt("Update Ingredients: ", ingredients.innerText);
    const newInstructions = prompt("Update Instructions: ", instructions.innerText);

    if(newRecipeName !== null || newIngredients !==null || newInstructions !== null){
        RecipeName.innerText = newRecipeName;
        ingredients.innerText = newIngredients;
        instructions.innerText = newInstructions;
    }
}