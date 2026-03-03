const ORDER_URL = "https://www-bistrolebliss-com.filesusr.com/html/dd4884_19b5a4411184bac2e01eceef5a79bf1f.html#/restaurants/fd2f0f80/32343";
const MENU_DATA = {
  "lunch": {
    "meta": {
      "title": "Lunch",
      "note": "WE'RE OPEN FOR LUNCH!\nServing lunch from 11:30am to 4pm on weekdays, Tuesday to Friday. Excited to see you!"
    },
    "categories": [
      {
        "name": "Soups",
        "items": [
          {
            "name": "West Bloomfield onion",
            "price": "$8",
            "desc": "French onion soup with a twist!"
          },
          {
            "name": "Roasted Ratatouille",
            "price": "$7",
            "desc": "roasted vegetable soup"
          },
          {
            "name": "Soup Du jour",
            "price": "$7",
            "desc": "Depends on chef's inspiration"
          }
        ]
      },
      {
        "name": "Hors d'oeuvres",
        "items": [
          {
            "name": "Haricot vert and escargot almondine",
            "price": "$15",
            "desc": "In Beurre Maître d'Hôtel and parmigiano-reggiano"
          },
          {
            "name": "Fried Artichokes",
            "price": "$17",
            "desc": "peruvian teardrop peppers, arugula, lemon aioli"
          },
          {
            "name": "Mussels Provencal & Pomme Frites",
            "price": "$19",
            "desc": "steamed mussels, white wine tomato sauce, fresh herbs"
          }
        ]
      },
      {
        "name": "Classic Sandwiches",
        "note": "All sandwiches come with housemade chips, add $2 for pomme frites, $2 for sweet pomme frites, or $3 for truffle fries",
        "items": [
          {
            "name": "Beef Wellington",
            "price": "$19",
            "desc": "beef tips, prosciutto di parma, arugula, mushroom duxelles, balsamic, toasted baguette"
          },
          {
            "name": "Grilled Chicken Brie",
            "price": "$15",
            "desc": "fig jam, arugula, grilled ciabatta"
          },
          {
            "name": "Ari's Burger",
            "price": "$16",
            "desc": "8oz beef patty, gruyere cheese, grilled mushrooms, lettuce, tomatoes, toasted brioche"
          },
          {
            "name": "Tuna Pan Bagnat",
            "price": "$16",
            "desc": "tuna salad, tomatoes, arugula, hard boiled egg, nicoise olive aioli, baguette"
          },
          {
            "name": "Turkey Croque Monsieur",
            "price": "$15",
            "desc": "roasted turkey, gruyere cheese, bechamel sauce, grilled brioche"
          },
          {
            "name": "Grilled Salmon sandwich",
            "price": "$16",
            "desc": "field greens, tomatoes, mustard sauce, ciabatta"
          }
        ]
      },
      {
        "name": "Salads",
        "note": "Add chicken 7, salmon 9, shrimp 8, cajun beef tips 15",
        "items": [
          {
            "name": "Tomato and burrata caprese",
            "price": "$17",
            "desc": "fresh basil, arbequina olive oil, d'Espelette, fleur de sel, balsamic glaze"
          },
          {
            "name": "Classic caesar",
            "price": "$15",
            "desc": "Half caesar 8"
          },
          {
            "name": "Roasted Butternut, grilled shrimp and couscous",
            "price": "$20",
            "desc": "field greens, grape tomatoes, french cut beans, nicoise olives, feta, house vinaigrette"
          },
          {
            "name": "Michigan Bistro",
            "price": "$14",
            "desc": "crumbled blue, dried cherries, toasted pecans, red onion, grape tomatoes, cucumbers, field greens, creamy balsamic vinaigrette"
          },
          {
            "name": "Tuna Nicoise Salad",
            "price": "$18",
            "desc": "scoop of tuna salad, green beans, roasted potatoes, roma tomatoes, hard boiled egg, nicoise olives, on the bed of romaine lettuce, house vinaigrette"
          }
        ]
      },
      {
        "name": "Sides",
        "items": [
          {
            "name": "Roasted cauliflower",
            "price": "$8",
            "desc": "with Parmigiano-Reggiano and truffle oil"
          },
          {
            "name": "Grilled asparagus",
            "price": "$7",
            "desc": "with Parmigiano-Reggiano and truffle oil"
          },
          {
            "name": "Sweet Pomme Frites",
            "price": "$7",
            "desc": ""
          },
          {
            "name": "Truffle Pomme Frites",
            "price": "$8",
            "desc": "House cut truffle pomme frites with parmesan cheese"
          },
          {
            "name": "Pomme Frites",
            "price": "$7",
            "desc": ""
          },
          {
            "name": "House Salad",
            "price": "$6",
            "desc": ""
          },
          {
            "name": "Extra bread basket",
            "price": "$2",
            "desc": "4 pieces"
          }
        ]
      },
      {
        "name": "Desserts",
        "items": [
          {
            "name": "Apple Pecan Strudel (Fri and Sat only)",
            "price": "$11",
            "desc": "A la mode"
          },
          {
            "name": "Crème brûlée",
            "price": "$10",
            "desc": "Traditional French dessert"
          },
          {
            "name": "Ray's ice cream",
            "price": "$7",
            "desc": ""
          },
          {
            "name": "Pecan framboise moelleux cake",
            "price": "$12",
            "desc": "Belgian dark chocolate with raspberry sauce and brandied cherries, a la mode"
          },
          {
            "name": "Basque burnt cheesecake",
            "price": "$10",
            "desc": ""
          }
        ]
      },
      {
        "name": "Drinks",
        "items": [
          {
            "name": "Harney and sons sachet tea",
            "price": "$5",
            "desc": "Variety of delicious teas"
          },
          {
            "name": "Sparkling water",
            "price": "$5",
            "desc": "Badoit, Pellegrino,or Perrier\nSmall 3 Large 5"
          }
        ]
      }
    ]
  },
  "dinner": {
    "meta": {
      "title": "Dinner menu",
      "note": "Dinner service: Tuesday - Friday from 4pm to 9pm and Saturday 5pm-9pm. Wine and liquor now available.  For Carryout on Friday and Saturday, please call before 5pm for pickup by 6pm only. Tuesday - Thursday, regular hours for carryout."
    },
    "categories": [
      {
        "name": "Wine",
        "items": [
          {
            "name": "We have a selection of mostly French and Italian wines, European beer as well as spirits",
            "price": "",
            "desc": ""
          }
        ]
      },
      {
        "name": "Hors d'oeuvres",
        "items": [
          {
            "name": "Fried Artichokes",
            "price": "$17",
            "desc": "peruvian teardrop peppers, arugula, lemon aioli"
          },
          {
            "name": "Tomato and burrata caprese",
            "price": "$17",
            "desc": "fresh basil, arbequina olive oil, d'Espelette, fleur de sel, balsamic glaze"
          },
          {
            "name": "Wild Mushroom Duxelles crostini",
            "price": "$16",
            "desc": "goat cheese, microgreens, balsamic glaze"
          },
          {
            "name": "Haricot vert and escargot almondine",
            "price": "$15",
            "desc": "In Beurre Maître d'Hôtel and parmigiano-reggiano"
          },
          {
            "name": "Scallops St Jacques",
            "price": "$19",
            "desc": "white wine poached scallop gratin, cremini mushrooms, gruyere cheese (dine in only)"
          },
          {
            "name": "Mussels Provencal",
            "price": "$18",
            "desc": "steamed mussels, white wine tomato sauce, fresh herbs"
          }
        ]
      },
      {
        "name": "Soups",
        "items": [
          {
            "name": "West Bloomfield onion",
            "price": "$8",
            "desc": "French onion soup with a twist!"
          },
          {
            "name": "Roasted Ratatouille",
            "price": "$7",
            "desc": "roasted vegetable soup"
          },
          {
            "name": "Soup Du jour",
            "price": "$7",
            "desc": "Depends on chef's inspiration"
          }
        ]
      },
      {
        "name": "Salads",
        "note": "Add chicken 7, salmon 9, shrimp 8, cajun beef tips 15",
        "items": [
          {
            "name": "Classic caesar",
            "price": "$15",
            "desc": "Half caesar 8"
          },
          {
            "name": "Roasted Butternut, grilled shrimp and couscous",
            "price": "$20",
            "desc": "field greens, grape tomatoes, french cut beans, nicoise olives, feta, house vinaigrette"
          },
          {
            "name": "Michigan Bistro",
            "price": "$14",
            "desc": "crumbled blue, dried cherries, toasted pecans, red onion, grape tomatoes, cucumbers, field greens, creamy balsamic vinaigrette"
          }
        ]
      },
      {
        "name": "Entrees",
        "items": [
          {
            "name": "Boeuf Bourguignon",
            "price": "$38",
            "desc": "beef tenderloin tips, cremini mushrooms, pearl onions, carrots, yukon gold mashed potatoes, burgundy wine"
          },
          {
            "name": "Charbroiled Lamb Chops *",
            "price": "$50",
            "desc": "charbroiled lamb chops, yukon gold mashed potatoes, sauteed spinach, tart cherry glace"
          },
          {
            "name": "Salmon a la plancha*",
            "price": "$30",
            "desc": "Faroe Island salmon, everything seasoning roasted vegetable medley, fresh herb beurre blanc"
          },
          {
            "name": "Canard aux cerises*",
            "price": "$30",
            "desc": "seared duck breast, sweet potato puree, sauteed spinach, goat cheese, drunken michigan tart cherries"
          },
          {
            "name": "Rustic ragu Bolognese",
            "price": "$26",
            "desc": "slow cooked creamy Bolognese sauce over pappardelle pasta"
          },
          {
            "name": "Truffle Saffron Risotto",
            "price": "$24",
            "desc": "roasted acorn, mushrooms, onions, sun dried tomatoes, spinach, truffle oil"
          },
          {
            "name": "Grilled Walleye",
            "price": "$32",
            "desc": "cracker meal crusted fillet, grilled asparagus, roasted red skin potatoes, whole grain beurre blanc"
          },
          {
            "name": "Steak au Poivre*",
            "price": "$50",
            "desc": "pepper crusted 8 oz Australian grass fed fillet, grilled asparagus, sweet pomme frites, peppercorn sauce"
          },
          {
            "name": "Poussin Tabaka",
            "price": "$28",
            "desc": "garlic infused spring chicken, yukon gold mashed potatoes, baby carrots and petite french peas with glace de poulet"
          }
        ],
        "footer": "*\\nConsuming raw or undercooked meats, poultry, seafood, shellfish or eggs may increase your risk of foodborne illness"
      },
      {
        "name": "Accompagnements",
        "items": [
          {
            "name": "Truffle Pomme Frites",
            "price": "$8",
            "desc": "House cut truffle pomme frites with parmesan cheese"
          },
          {
            "name": "Sweet Pomme Frites",
            "price": "$7",
            "desc": ""
          },
          {
            "name": "Pomme Frites",
            "price": "$7",
            "desc": ""
          },
          {
            "name": "Roasted cauliflower",
            "price": "$8",
            "desc": "with Parmigiano-Reggiano and truffle oil"
          },
          {
            "name": "Grilled asparagus",
            "price": "$7",
            "desc": "with Parmigiano-Reggiano and truffle oil"
          }
        ]
      },
      {
        "name": "Desserts",
        "items": [
          {
            "name": "Basque burnt cheesecake",
            "price": "$10",
            "desc": ""
          },
          {
            "name": "Crème brûlée",
            "price": "$10",
            "desc": "Traditional French dessert"
          },
          {
            "name": "Pecan framboise moelleux cake",
            "price": "$12",
            "desc": "Belgian dark chocolate with raspberry sauce and brandied cherries, a la mode"
          },
          {
            "name": "Apple Pecan Strudel (Fri and Sat only)",
            "price": "$11",
            "desc": "A la mode"
          },
          {
            "name": "Ray's ice cream",
            "price": "$7",
            "desc": ""
          }
        ]
      }
    ]
  }
};

function qs(sel, el=document){ return el.querySelector(sel); }
function qsa(sel, el=document){ return [...el.querySelectorAll(sel)]; }

function setActiveNav() {
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  qsa('.nav a[data-nav]').forEach(a => {
    const href = (a.getAttribute('href')||'').toLowerCase();
    a.classList.toggle('active', href === path);
  });
}

function initMenusPage() {
  const root = qs('[data-page="menus"]');
  if (!root) return;

  const tabLunch = qs('#tab-lunch');
  const tabDinner = qs('#tab-dinner');
  const searchInput = qs('#menuSearch');
  const noteEl = qs('#menuNote');
  const accordion = qs('#accordion');
  const noMatches = qs('#noMatches');
  const activePill = qs('#activePill');

  let activeKey = 'lunch';
  let query = '';

  function normalize(s) {
    return (s || '')
      .toString()
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  function itemMatches(item, q) {
    if (!q) return true;
    const hay = normalize(item.name + ' ' + (item.desc||''));
    return hay.includes(q);
  }

  function buildAccordion() {
    accordion.innerHTML = '';
    noMatches.dataset.show = 'false';

    const data = MENU_DATA[activeKey];
    noteEl.textContent = data.meta.note || '';
    activePill.textContent = data.meta.title || (activeKey === 'lunch' ? 'Lunch' : 'Dinner');

    const q = normalize(query);
    let totalMatches = 0;

    data.categories.forEach((cat, idx) => {
      const panelId = `acc-panel-${activeKey}-${idx}`;
      const btnId = `acc-btn-${activeKey}-${idx}`;

      const matchedItems = (cat.items || []).filter(it => itemMatches(it, q));
      const hasMatches = matchedItems.length > 0;

      if (q && !hasMatches) return;

      totalMatches += matchedItems.length;

      const item = document.createElement('section');
      item.className = 'acc-item';

      const header = document.createElement('button');
      header.className = 'acc-header';
      header.type = 'button';
      header.id = btnId;
      header.setAttribute('aria-expanded', q ? 'true' : 'false');
      header.setAttribute('aria-controls', panelId);

      const left = document.createElement('div');
      const title = document.createElement('div');
      title.className = 'acc-title';
      title.textContent = cat.name;
      const meta = document.createElement('div');
      meta.className = 'acc-meta';
      meta.textContent = q ? `${matchedItems.length} match${matchedItems.length===1?'':'es'}` : '';
      left.appendChild(title);
      if (meta.textContent) left.appendChild(meta);

      const chev = document.createElement('div');
      chev.className = 'acc-meta';
      chev.textContent = '▾';

      header.appendChild(left);
      header.appendChild(chev);

      const panel = document.createElement('div');
      panel.className = 'acc-panel';
      panel.id = panelId;
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-labelledby', btnId);
      panel.dataset.open = q ? 'true' : 'false';

      if (cat.note) {
        const note = document.createElement('p');
        note.className = 'menu-cat-note';
        note.textContent = cat.note;
        panel.appendChild(note);
      }

      const list = document.createElement('div');
      list.className = 'menu-list';

      (q ? matchedItems : (cat.items||[])).forEach(it => {
        const mi = document.createElement('div');
        mi.className = 'menu-item';

        const row = document.createElement('div');
        row.className = 'row';

        const name = document.createElement('div');
        name.className = 'name';
        name.textContent = it.name;

        const dots = document.createElement('div');
        dots.className = 'dots';

        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = it.price || '';

        row.appendChild(name);
        row.appendChild(dots);
        row.appendChild(price);

        mi.appendChild(row);

        if (it.desc) {
          const desc = document.createElement('div');
          desc.className = 'desc';
          desc.textContent = it.desc;
          mi.appendChild(desc);
        }

        list.appendChild(mi);
      });

      panel.appendChild(list);

      if (cat.footer) {
        const foot = document.createElement('p');
        foot.className = 'menu-cat-note';
        foot.style.whiteSpace = 'pre-line';
        foot.textContent = cat.footer;
        panel.appendChild(foot);
      }

      header.addEventListener('click', () => {
        const open = panel.dataset.open === 'true';
        panel.dataset.open = open ? 'false' : 'true';
        header.setAttribute('aria-expanded', String(!open));
      });

      item.appendChild(header);
      item.appendChild(panel);
      accordion.appendChild(item);
    });

    if (q && totalMatches === 0) {
      noMatches.dataset.show = 'true';
    }
  }

  function setActiveTab(key) {
    activeKey = key;
    tabLunch.setAttribute('aria-selected', String(key === 'lunch'));
    tabDinner.setAttribute('aria-selected', String(key === 'dinner'));
    buildAccordion();
  }

  tabLunch.addEventListener('click', () => setActiveTab('lunch'));
  tabDinner.addEventListener('click', () => setActiveTab('dinner'));

  searchInput.addEventListener('input', (e) => {
    query = e.target.value || '';
    buildAccordion();
  });

  setActiveTab('lunch');
}

document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initMenusPage();
});
