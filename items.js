items = [{
    name: "mangoe",
    category: "fruit",
    price: "50",
    quantity: "0"
},

{
    name: "banana",
    category: "fruit",
    price: "40",
    quantity: "0"
},

{
    name: "blueberry",
    category: "fruit",
    price: "60",
    quantity: "0"
},

{
    name: "apple",
    category: "fruit",
    price: "120",
    quantity: "0"
},

{
    name: "grape",
    category: "fruit",
    price: "80",
    quantity: "0"
},

{
    name: "orange",
    category: "fruit",
    price: "40",
    quantity: "0"
},

{
    name: "cauliflower",
    category: "vagetable",
    price: "30",
    quantity: "0"
},
{
    name: "potato",
    category: "vegetable",
    price: "20",
    quantity: "0"
},
{
    name: "onion",
    category: "vegetable",
    price: "30",
    quantity: "0"
},
{
    name: "brinjal",
    category: "vegetable",
    price: "40",
    quantity: "0"
},
{
    name: "ladiesfinger",
    category: "vegetable",
    price: "60",
    quantity: "0"
},

{
    name: "sunfeast",
    category: "biscuit",
    price: "20",
    quantity: "0"
},
{
    name: "oreo",
    category: "biscuit",
    price: "10",
    quantity: "0"
},
{
    name: "marigold",
    category: "biscuit",
    price: "10",
    quantity: "0"
},
{
    name: "britania",
    category: "biscuit",
    price: "15",
    quantity: "0"
},
{
    name: "milano",
    category: "biscuit",
    price: "30",
    quantity: "0"
},
{
    name: "motherdairy",
    category: "milk",
    price: "30",
    quantity: "0"
},
{
    name: "amul",
    category: "milk",
    price: "20",
    quantity: "0"
},
{
    name: "cowmilk",
    category: "milk",
    price: "30",
    quantity: "0"
},]

function callfunc() {



    var data = "<tr><th>Name</th><th>Category</th><th>Price</th><th>Quantity</th></tr>";

    for (let i = 0; i < items.length; i++) {

        val = RegExp(document.getElementById("src").value, "i");// i = Case Insensitive;
        if (items[i].name.match(val)) {
            data = data + "<tr><td>" + items[i].name + "</td><td>" + items[i].category + "</td><td>" + items[i].price + "</td><td><input type='number'min='0' id='num" + i + "'></td></tr>";

        }
        else {

        }

    }
    document.getElementById("populate").innerHTML = data;
}

add = "";
add = add + "<tr><th>Name</th><th>Quantity</th></tr>";
function addtocart() {

    for (let i = 0; i < items.length; i++) {
        if (items[i].name.match(val)) {
            items[i].quantity = document.getElementById("num" + i).value;// Value Updated to JSON;
        }
    }
    for (let i = 0; i < items.length; i++) {

        if (items[i].name.match(val))
            add = add + "<tr><td>" + items[i].name + "</td><td>" + items[i].quantity + "</td></tr>";

        
    }document.getElementById("addcart").innerHTML = add;
}
function clear() {

    
    for(i=0;i<items.length;i++){
        items[i].quantity=0;
    }
    document.getElementById("src").innerHTML = "";
    document.getElementById("populate").innerHTML="";
}
finalcheck="";
finalcheck = finalcheck + "<tr><th>Name</th><th>Category</th><th>Price</th><th>Quantity</th><th>Total</th></tr>";
function checkout(){
      for(let i=0;i<items.length;i++)
      {
                 if(items[i].quantity>0){
                     finalcheck=finalcheck+"<tr><td>" + items[i].name + "</td><td>" + items[i].category + "</td><td>"+items[i].price+"</td><td>" + items[i].quantity + "</td><th>"+items[i].quantity*items[i].price+"</th></tr>";
                 }
      }
      document.getElementById("finalt").innerHTML = finalcheck; 
}
