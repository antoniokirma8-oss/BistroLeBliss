
const menuData = {
  "lunch": [
    {
      "category": "Soups",
      "items": [
        {
          "name": "West Bloomfield Onion",
          "price": "$8",
          "desc": "French onion soup with a twist"
        },
        {
          "name": "Roasted Ratatouille",
          "price": "$7",
          "desc": "Roasted vegetable soup"
        },
        {
          "name": "Soup du Jour",
          "price": "$7",
          "desc": "Depends on chef's inspiration"
        }
      ]
    },
    {
      "category": "Sandwiches",
      "items": [
        {
          "name": "Beef Wellington",
          "price": "$19",
          "desc": "beef tips, prosciutto di parma, arugula, mushroom duxelles, balsamic"
        },
        {
          "name": "Grilled Chicken Brie",
          "price": "$15",
          "desc": "fig jam, arugula, grilled ciabatta"
        },
        {
          "name": "Ari's Burger",
          "price": "$16",
          "desc": "8oz beef patty, gruyere cheese, mushrooms"
        },
        {
          "name": "Tuna Pan Bagnat",
          "price": "$16",
          "desc": "tuna salad, tomatoes, arugula"
        },
        {
          "name": "Turkey Croque Monsieur",
          "price": "$15",
          "desc": "roasted turkey, gruyere cheese, bechamel"
        },
        {
          "name": "Grilled Salmon Sandwich",
          "price": "$16",
          "desc": "field greens, tomatoes, mustard sauce"
        }
      ]
    },
    {
      "category": "Desserts",
      "items": [
        {
          "name": "Cr\u00e8me Br\u00fbl\u00e9e",
          "price": "$10",
          "desc": "Traditional French dessert"
        },
        {
          "name": "Basque Burnt Cheesecake",
          "price": "$10",
          "desc": ""
        },
        {
          "name": "Ray's Ice Cream",
          "price": "$7",
          "desc": ""
        }
      ]
    }
  ],
  "dinner": [
    {
      "category": "Hors d'oeuvres",
      "items": [
        {
          "name": "Fried Artichokes",
          "price": "$17",
          "desc": "peruvian peppers, arugula, lemon aioli"
        },
        {
          "name": "Tomato & Burrata Caprese",
          "price": "$17",
          "desc": "fresh basil, olive oil"
        },
        {
          "name": "Wild Mushroom Crostini",
          "price": "$16",
          "desc": "goat cheese, microgreens"
        },
        {
          "name": "Mussels Provencal",
          "price": "$18",
          "desc": "steamed mussels, white wine tomato sauce"
        }
      ]
    },
    {
      "category": "Entrees",
      "items": [
        {
          "name": "Boeuf Bourguignon",
          "price": "$38",
          "desc": "beef tenderloin tips, mushrooms, pearl onions"
        },
        {
          "name": "Charbroiled Lamb Chops",
          "price": "$50",
          "desc": "mashed potatoes, spinach, tart cherry glace"
        },
        {
          "name": "Salmon a la Plancha",
          "price": "$30",
          "desc": "roasted vegetables, herb beurre blanc"
        },
        {
          "name": "Rustic Ragu Bolognese",
          "price": "$26",
          "desc": "slow cooked creamy sauce"
        },
        {
          "name": "Truffle Saffron Risotto",
          "price": "$24",
          "desc": "mushrooms, spinach, truffle oil"
        },
        {
          "name": "Steak au Poivre",
          "price": "$50",
          "desc": "pepper crusted fillet, pomme frites"
        }
      ]
    },
    {
      "category": "Desserts",
      "items": [
        {
          "name": "Cr\u00e8me Br\u00fbl\u00e9e",
          "price": "$10",
          "desc": ""
        },
        {
          "name": "Basque Burnt Cheesecake",
          "price": "$10",
          "desc": ""
        },
        {
          "name": "Apple Pecan Strudel",
          "price": "$11",
          "desc": "A la mode"
        }
      ]
    }
  ]
};

function toggleMenu(){
document.querySelector(".nav-menu").classList.toggle("active");
}

function renderMenu(type){
const container=document.getElementById("menu");
container.innerHTML="";
menuData[type].forEach(cat=>{
let section=document.createElement("div");
section.className="menu-section";
section.innerHTML="<h2>"+cat.category+"</h2>";
cat.items.forEach(item=>{
let row=document.createElement("div");
row.className="menu-item";
row.innerHTML=`<span>${item.name}</span><span>${item.price}</span>`;
section.appendChild(row);
if(item.desc){
let desc=document.createElement("div");
desc.style.fontSize="13px";
desc.style.color="#777";
desc.innerText=item.desc;
section.appendChild(desc);
}
});
container.appendChild(section);
});
}
