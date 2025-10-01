const productsContainer = document.querySelector(".products")

const products = [
    {
        name: "Watch",
        image: "",
        price: 65000,
        itemColor: "blue",
        Category: "Electronics"
    },
    {
        name: "Mobile",
        image: "Apple1.jpg",
        price: 35000,
        itemColor: "red",
        Category: "Electronics" 
    }
]

function displayProduct(data){
    const card = document.createElement("div");
    card.setAttribute("class","card");

    card.innerHTML = `<img src="${data.image}" alt="" />
                        <p>ProductName : ${data.name}</p>
                        <p>Category : ${data.Category}</p>
                        <p>Price : ${data.price}</p>
                        <button>Update</button>
                        <button>Delete</button>`;
    productsContainer.append(card)
}
products.forEach((ele,i)=>{
    displayProduct(ele)
})