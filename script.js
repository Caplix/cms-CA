
let username ="ck_ba0a44c10f08f15ac1a219d3ee097f1371d62a6e";

let password ="cs_e2b698742a47035f0866ff57fa6b4bf8fd32728a";

const url ="https://www.myhre.shop/wp-json/wc/v3/products";

const resultsContainer = document.querySelector(".results")

const featuredContainer = document.querySelector(".featured");

const body = document.querySelector("body");

const atHomepage = window.location.pathname !== "/index.html"

if (atHomepage) {

async function callApi(){
    const response = await fetch(url,{
        method:"GET",
        headers: new Headers({
            'Authorization': 'Basic ' + btoa(username + ":" + password)

        })
    
    });
    const json = await response.json();

    const featuredProducts = json.filter((product) => {
    return product.name !== "AUTO-DRAFT" && product.featured ; 

    });

    const allOtherProducts = json.filter((product) => {
        return product.name !== "AUTO-DRAFT" && product.featured === false; 
    
        });

    console.log(featuredProducts)

    featuredProducts.forEach(function(results){
        featuredContainer.innerHTML += `<a href="infoscreen.html?id=${results.id}" class ="test">
        <h1> ${results.name}</h1>
        <img class = "product-img" src = ${results.images[0].src}></img>

        <h3> ${results.price} kr</h3>

        </a>`
        console.log(results.price)
    })

    allOtherProducts.forEach(function(results){
        resultsContainer.innerHTML += `<a href="infoscreen.html?id=${results.id}" class ="test">
        <h1> ${results.name}</h1>
        <img class = "product-img" src = ${results.images[0].src}></img>

        <h3> ${results.price} kr</h3>

        </a>`
        console.log(results.price)
    })
    
}

callApi(); 
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