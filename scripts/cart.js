


function populateInCartPage(){
    let cart=JSON.parse(localStorage.getItem("basketArray")) ||[]
    
    document.getElementById("items").innerHTML=""
    cart.map((elem,index)=>{

        var image=document.createElement("img");
        image.src=elem.imagelink1

        var card=document.createElement("div");
        card.className="card"
        

        var fav_div=document.createElement("div");
        fav_div.className="fav-div"

        var fav=document.createElement("fav");
        fav.className="fab"

        var buy_later_btn=document.createElement("div");
        buy_later_btn.className="buy-later-btn"
        buy_later_btn.textContent="BUY LATER"
        buy_later_btn.addEventListener("click",()=>{addToBuylater(elem)})

        var fab_icon=document.createElement("div");
        fab_icon.className="material-icons fab-icon"
        fab_icon.textContent="favorite_border"

        var cross_icon=document.createElement("div");
        cross_icon.className="material-icons cross-icon";
        cross_icon.textContent="close"
        cross_icon.addEventListener("click",()=>{removeItems(index)})

        var txt=document.createElement("div");
        txt.className="txt";

        var name=document.createElement("div");
        name.id="name";
        name.textContent=elem.name;

        var price_div=document.createElement("div")
        price_div.id="price-div";

        var price=document.createElement("div")
        price.id="price";
        price.textContent=elem.price;

        var quantity=document.createElement("div")
        quantity.id="quantity";

        var minus=document.createElement("div")
        minus.id="minus";
        minus.textContent="-"

        var count=document.createElement("div")
        count.id="count";
        count.textContent="1"

        var plus=document.createElement("div")
        plus.id="plus";
        plus.textContent="+"

        var ref1=document.createElement("div")
        ref1.id="ref1";
        ref1.textContent=elem.ref;
        
        var ref2=document.createElement("div")
        ref2.id="ref2";




        fav.append(buy_later_btn,fab_icon,cross_icon);
        fav_div.append(fav);

        price_div.append(price,quantity);
        quantity.append(minus,count,plus);
        txt.append(name,price_div,ref1,ref2);

        card.append(image,fav_div,txt);

        document.getElementById("items").append(card);
        
    })
}
populateInCartPage()


function removeItems(index){
    let cart=JSON.parse(localStorage.getItem("basketArray"));
    cart.splice(index,1);
    localStorage.setItem("basketArray",JSON.stringify(cart))
    populateInCartPage()
}


function addToBuylater(elem){
    var buylater=JSON.parse(localStorage.getItem("buylaterArray")) ||[];
    buylater.push(elem);
    localStorage.setItem("buylaterArray",JSON.stringify(buylater))

}


