
const products=document.querySelector(".products");

async function fetchData(){
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    data.forEach((ele,i)=>{
        createCard(ele);
    })
    console.log(data)
}
fetchData();

const createCard = (user)=>{
    const card = document.createElement("div");
    card.setAttribute("class","userCard");
    card.innerHTML= `<img src = "${user.avatar_url}" alt=""/>
                        <p>user Name : ${user.login}</p>
                        <p> user Id : ${user.id}</p>`;
                    
    products.append(card);

};