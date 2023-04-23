let username ="ck_ba0a44c10f08f15ac1a219d3ee097f1371d62a6e";

let password ="cs_e2b698742a47035f0866ff57fa6b4bf8fd32728a";


const detailsContainer = document.querySelector(".details")

const checkout = document.querySelector(".checkouts")

const body = document.querySelector("body");



const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id =  params.get("id");

let cartArray = JSON.parse(localStorage.getItem("cartId")) || []


console.log(id, "id")

const atProductPage = window.location.pathname === "/infoscreen.html"

if (atProductPage) {

const url ="https://www.myhre.shop/wp-json/wc/v3/products/" + id;

async function callApi(){
    const response = await fetch(url,{
        method:"GET",
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(username + ":" + password)

        })
    
    });
    const json = await response.json();


        detailsContainer.innerHTML += `<li class"stat-grid">
        <h1> ${json.name}</h1>
        <img class = "product-img" src = ${json.images[0].src}></img>

        <h3> ${json.price} kr</h3>

        <button id="minKnapp" class="myButton">Add to cart</button>

        </li>`

        
        
        const myBtn = document.getElementById("minKnapp")


        if (myBtn) {
            myBtn.addEventListener("click", () => {
                console.log(json, "json")
                cartArray.push(json)
                localStorage.setItem("cartId", JSON.stringify(cartArray));
                location.replace("checkout.html")
            })
            
        }


};
callApi(); 
}


const atCheckoutOrPayment = window.location.pathname === "/checkout.html" || "/payment.html"

if (atCheckoutOrPayment) {
    checkout.innerHTML = cartArray.map((json) => {
        return  `<div class"stat-grid">
        <h1> ${json.name}</h1>
        <img class = "product-img" src = ${json.images[0].src}></img>
    
        <h3> ${json.price} kr</h3>
    
    
        </div>`
        
     }).join("") || ""
}





let hamburger = document.querySelector(".hamburger")

let navbar = document.querySelector(".navbar")

let menuOpen = false

hamburger.onclick = () =>{
    if (!menuOpen){
        hamburger.classList.toggle("active")
        navbar.classList.toggle("activeNav")

        menuOpen = true
    } else {
        hamburger.classList.toggle("active")
        navbar.classList.toggle("activeNav")

        menuOpen = false
    }

};


