document.addEventListener('DOMContentLoaded', function(){
    const shoppingList = [
        'Laroche face serum',
        'charcoal mask',
        'salt scrub',
        'sugar scrub'
    ];

    function getSavedList(){
        const savedList = localStorage.getItem("shoppingList"); // Corrected variable name
        if (savedList){
            return JSON.parse(savedList);
        } else {
            return [];
        }
    }

    const inputForm = document.getElementById("form");
    const resetButton = document.getElementById("resetButton");
    const newItemInput = document.getElementById("newItem"); // variable name

    function createButtonContainer2(){
        const buttonContainer2 = document.createElement("div");
        buttonContainer2.classList.add("buttonContainer2");
        
        const editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.classList.add("edit-button");
        
        const purchaseButton = document.createElement("button");
        purchaseButton.textContent = "purchase";
        purchaseButton.classList.add("purchase-button");

        buttonContainer2.appendChild(editButton);
        buttonContainer2.appendChild(purchaseButton);

        return buttonContainer2;
    }

    function addNewItem(event){
        event.preventDefault();
        const newItemText = newItemInput.value.trim();
        
        if(newItemText === ''){
            alert("Please enter a valid input");
            return;
        }
        
        const newItem = document.createElement("li");
        newItem.textContent = newItemText;

        const buttonContainer2 = createButtonContainer2();
        
        buttonContainer2.querySelector(".edit-button").addEventListener("click", function(){
            const newInput = prompt("Edit", newItem.firstChild.textContent.trim());  
            if (newInput !== null){
                newItem.firstChild.textContent = newInput.trim();
            }
        });
        
        buttonContainer2.querySelector(".purchase-button").addEventListener("click", function(){
            if (newItem.classList.contains("purchased")) {
                newItem.classList.remove("purchased");
            } else {
                newItem.classList.add("purchased");
            }
        });

        newItem.appendChild(buttonContainer2);
        
        shoppingList.push(newItem.textContent); // Push text content to shoppingList array

        newItemInput.value = ''; // Clear input after adding item
    }

    inputForm.addEventListener('submit', addNewItem); // event listener name
    resetButton.addEventListener("click", function(){
        shoppingList.innerHTML; // Clear the shoppingList array
    });
});
