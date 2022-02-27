 import { newIn } from "/Home/scripts/index.js";
 document.getElementById("newin-btn").addEventListener("click", newIn);
// document.getElementById("bedroom-btn").addEventListener("click", dropdown)
// document.getElementById("clothing-btn").addEventListener("click", Clothing)
// document.getElementById("living-btn").addEventListener("click", Living)
// document.getElementById("dinig-btn").addEventListener("click", Dining)
// document.getElementById("bathroom-btn").addEventListener("click", Bathroom)
// document.getElementById("kids-btn").addEventListener("click", Kids)
// document.getElementById("stories-btn").addEventListener("click", Stories)
// document.getElementById("info-btn").addEventListener("click", Info)


 document.getElementById("newin").style.display="none";
// document.getElementById("bedroom").style.display="none";
// document.getElementById("clothing").style.display="none";
// document.getElementById("living").style.display="none";
// document.getElementById("dinig").style.display="none";
// document.getElementById("bathroom").style.display="none"
// document.getElementById("kids").style.display="none";
// document.getElementById("stories").style.display="none";
// document.getElementById("info").style.display="none"

 newIn();
// dropdown();
// Living();
// Bathroom();
// Clothing();
// Dining();
// Kids();
// Info();
// Stories();


import getData from "/scripts/data.js";
import { navbar, footer } from "/Home/components/navbar.js"
document.getElementById("navbar").innerHTML=navbar();
document.getElementById("footer").innerHTML=footer();


var women=getData("data_footwear_women");
mapDataToFootwearPage(women)



function mapDataToFootwearPage(input){
    document.getElementById("content").innerHTML=""
    localStorage.setItem("Footwear_Data",JSON.stringify(input))
    input.map((elem)=>{

        var card=document.createElement("div");
        card.className="card";

        var image=document.createElement("img");
        image.src=elem.imagelink1;

        var add_to_basket_btn=document.createElement("div");
        add_to_basket_btn.className="add-to-basket-btn";
        add_to_basket_btn.textContent="ADD TO BASKET";
        add_to_basket_btn.addEventListener("click", ()=>{addToBasket(elem)})

        var txt=document.createElement("div");
        txt.className="txt";

        var name=document.createElement("div");
        name.className="name";
        name.textContent=elem.name;
        name.addEventListener("click",()=>{localStorage.setItem("Footwear_Data_single",JSON.stringify(elem));window.location.href="/product page/product.html"})

        var price=document.createElement("div");
        price.className="price";
        price.textContent=elem.price;
        
        txt.append(name,price);
        card.append(image,add_to_basket_btn,txt);
        document.getElementById("content").append(card);
    })
}


function addToBasket(elem){
    var basketArray=JSON.parse(localStorage.getItem("basketArray"))||[];
    if(basketArray.length==0){
        basketArray.push(elem);
    }
    else{
        var match=false;
        for(var i=0;i<basketArray.length;i++){
            if(basketArray[i].ref==elem.ref ){
            match=true;
            break;
            }
        }
        if(match){
            basketArray[i].qty++;
        }
        else{
            basketArray.push(elem);  
        }
    }
    
    localStorage.setItem("basketArray",JSON.stringify(basketArray))

}












