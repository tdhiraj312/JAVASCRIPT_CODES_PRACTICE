const cities=["PUNE","BIHAR","PATNA","SHILLONG","SIWAN","HAJIPUR"];

const citiesList=document.getElementById("cities");

cities.forEach((ele,i)=>{
    const li = document.createElement("li");
    li.setAttribute("id",`list${i+1}`);
    
    const updateBtn = document.createElement("button");
    const deleteBtn = document.createElement("button");
        updateBtn.innerText="Update";
        deleteBtn.innerText="Delete";

    li.innerText=ele;       //INNERText is used too insert the text to li

    citiesList.append(li)   //It is used to insert the html element from javascript to html.
                                                //It can insert multiple elements  
})