const perc = 0.35;
const price = document.getElementById("price");


function addtoprice() {
    pricevalue = price.value.trim();
    makep = document.createElement('h2');
    actual = pricevalue * perc;
    makep.textContent = +actual + +pricevalue;
    result.appendChild(makep);
}
const result = document.getElementById("list");
let field = document.getElementById("field");
let hasH2 = false;

// Loop through each child element
for (let i = 0; i < result.children.length; i++) {
    let child = result.children[i];
    // Check if the current child element is an h2 element
    if (child.tagName.toLowerCase() === "h2") {
        hasH2 = true;
        break; // Exit the loop since we found an h2 element
    }
}

// If an h2 element was found, add the class to the field element
if (hasH2) {
    field.classList.add("has-child");
}

// did it work ?