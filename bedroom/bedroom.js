var data = [
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
        name:"REVERSIBLE FLANNEL DUVET COVER",
        price:"45.99 €  - 59.99 €",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
        name:"TOILE DE JOUY PRINT DUVET COVER",
        price:"59.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
        name:"MELANGE BAMBOO DUVET COVER",
        price:"45.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
        name:"MINI FLORAL PRINT DUVET COVER",
        price:"45.99 € ",
       
    },

    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6124/088/250/6124088250_7_1_3.jpg?t=1635935233667",
        name:"DYED THREAD PERCALE DUVET COVER",
        price:"69.99 €  - 99.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/3117/088/250/3117088250_7_1_3.jpg?t=1638180608729",
        name:"TOILE DE JOUY PRINT DUVET COVER",
        price:"59.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6113/088/406/6113088406_7_1_3.jpg?t=1636370351813",
        name:"(140 GSM) WASHED LINEN DUVET COVER",
        price:"78.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/0107/088/802/0107088802_7_1_3.jpg?t=1637163312195",
        name:"MINI FLORAL PRINT DUVET COVER",
        price:"86.99 € ",
       
    },

    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
        name:"REVERSIBLE FLANNEL DUVET COVER",
        price:"45.99 €  - 59.99 €",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
        name:"TOILE DE JOUY PRINT DUVET COVER",
        price:"59.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
        name:"MELANGE BAMBOO DUVET COVER",
        price:"45.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
        name:"MINI FLORAL PRINT DUVET COVER",
        price:"45.99 € ",
       
    },
    
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6124/088/250/6124088250_7_1_3.jpg?t=1635935233667",
        name:"DYED THREAD PERCALE DUVET COVER",
        price:"69.99 €  - 99.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/3117/088/250/3117088250_7_1_3.jpg?t=1638180608729",
        name:"TOILE DE JOUY PRINT DUVET COVER",
        price:"59.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6113/088/406/6113088406_7_1_3.jpg?t=1636370351813",
        name:"(140 GSM) WASHED LINEN DUVET COVER",
        price:"78.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6102/088/300/6102088300_7_1_3.jpg?t=1632324449360",
        name:"REVERSIBLE FLANNEL DUVET COVER",
        price:"45.99 €  - 59.99 €",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/0105/088/300/0105088300_7_1_3.jpg?t=1630912807357",
        name:"TOILE DE JOUY PRINT DUVET COVER",
        price:"59.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2022/V/4/1/p/1150/088/250/1150088250_7_1_3.jpg?t=1642428608750",
        name:"MELANGE BAMBOO DUVET COVER",
        price:"45.99 € ",
       
    },
    {
        imgUrl:"https://static.zarahome.net/8/photos4/2021/I/4/1/p/6101/088/300/6101088300_7_1_3.jpg?t=1632405184789",
        name:"MINI FLORAL PRINT DUVET COVER",
        price:"45.99 € ",
       
    }
]


data.map(function(elem){
    
    var bed_card = document.createElement("div");
     var bed_card_div = document.createElement("div");
     var card = document.createElement("div");
    bed_card_div.style.backgroundImage = `url(${elem.imgUrl})`;
    bed_card_div.id = "buttondiv";
    // var image = document.createElement("img");
    // image.setAttribute("src", elem.imgUrl);

    var button = document.createElement("button");
    button.textContent = "Add to Basket";

    var item_name = document.createElement("p");
    item_name.textContent = elem.name;

    var price = document.createElement("p");
    price.innerHTML = elem.price;


    bed_card.append(item_name,price);
    bed_card_div.append(button,bed_card);
    card.append(bed_card_div,bed_card);
    document.querySelector("#container").append(card);

});

