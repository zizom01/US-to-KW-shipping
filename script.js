const perc = 0.35;
const price = document.getElementById("price");
const result = document.getElementById("list");
let field = document.getElementById("field");
let hasH2 = false;


function addtoprice() {
    pricevalue = price.value.trim();
    makep = document.createElement('h2');
    actual = pricevalue * perc;
    makep.textContent = +actual + +pricevalue;
    result.appendChild(makep);
}


function haveh2() {
    // Loop through each child element
for (let i = 0; i < result.children.length; i++) {
    let child = result.children[i];
    // Check if the current child element is an h2 element
    if (child.tagName.toLowerCase() === "h2") {
        hasH2 = true;
        console.log("Found h2 element");
        break; // Exit the loop since we found an h2 element
    }
}

// If an h2 element was found, add the class to the field element
if (hasH2 == true) {
    field.classList.add("has-child");
}
}


function removeh2() {
       while (result.firstChild) {
        result.removeChild(result.firstChild);
        console.log("removed a child");
       }

       if (result.children.length == 0) {
        field.classList.remove("has-child");
       }
}
