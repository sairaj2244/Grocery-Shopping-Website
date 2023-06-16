let itemsel = document.querySelector(".elements");
let cartitemsel = document.querySelector(".cartitems");
let subtotalel = document.querySelector(".subtotal");
let itemsincartel = document.querySelector(".btn-white sup");
const grocery = [
    {
        id: 1,
        name: 'Coconut, Indonesia(piece)',
        desc: 'Fruits and vegetables',
        price: 2.99,
        stock: 10,
        qty: 0
    },
    {
        id: 2,
        name: 'Soft cream cheese(200g)',
        desc: 'Dairy and Eggs',
        price: 3.99,
        stock: 8,
        qty: 0
    },
    {
        id: 3,
        name: 'Pepsi Soda Can(33ml)',
        desc: 'Soft Drinks and Juice',
        price: 1.00,
        stock: 5,
        qty: 0
    },
    {
        id: 4,
        name: 'Fresh Orange, Spain',
        desc: 'Fruits and vegetables',
        price: 1.75,
        stock: 7,
        qty: 0
    },
    {
        id: 5,
        name: 'Moisture body Lotion',
        desc: 'Personal hygiene',
        price: 5.20,
        stock: 8,
        qty: 0
    },
    {
        id: 6,
        name: 'Nut Chocolate Pasta',
        desc: 'Snacks, Sweets and Chips',
        price: 7.50,
        stock: 6,
        qty: 0
    },
    {
        id: 7,
        name: 'Mozzarella Mini cheese ',
        desc: 'Dairy and Eggs',
        price: 4.99,
        stock: 5,
        qty: 0
    },
    {
        id: 8,
        name: 'Mozzarella Cheese(125g)',
        desc: 'Dairy and Eggs',
        price: 4.30,
        stock: 5,
        qty: 0
    },
    {
        id: 9,
        name: 'Men Shampoo (400ml)',
        desc: 'Personal Hygiene',
        price: 5.99,
        stock: 8,
        qty: 0
    },
    {
        id: 10,
        name: 'Frozen Oven-ready Poultry',
        desc: 'Meat and Poultry',
        price: 12.00,
        stock: 7,
        qty: 0
    },
    {
        id: 11,
        name: 'Dark Chocolate with Nuts',
        desc: 'Snacks Sweets Chips',
        price: 2.50,
        stock: 6,
        qty: 0
    },
    {
        id: 12,
        name: 'Corn Oil Bottle(500ml)',
        desc: 'Canned Food and Oil',
        price: 3.10,
        stock: 4,
        qty: 0
    },
    {
        id: 13,
        name: 'Steak Salmon Fillet(1kg)',
        desc: 'Fish and Seafood',
        price: 17.99,
        stock: 9,
        qty: 0
    },
    {
        id: 14,
        name: 'Sardine in Tomato Sauce',
        desc: 'Canned Food and Oil',
        price: 3.25,
        stock: 7,
        qty: 0
    },
    {
        id: 15,
        name: 'Italian Pasta(500g)',
        desc: 'Packet, cereals',
        price: 2.99,
        stock: 5,
        qty: 0
    },
    {
        id: 16,
        name: 'Rice Cakes with Chia Seeds',
        desc: 'Packet, cereals',
        price: 1.40,
        stock: 4,
        qty: 0
    }

]
function displayitems() {
    grocery.forEach((product) => {
        itemsel.innerHTML += `
        <div class="col">
                <div class="card shadow">
                    <button type="button" class="btn btn-light" data-bs-toggle="tooltip" data-bs-placement="left" title="Add to Wishlist " style="height: 40px; width: 40px; border-radius: 50%; margin-left: auto;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                    </svg>
                    </button>
                    <a href="product.html"><img src="images/${product.id}.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                    <p class="card-text text-muted"> ${product.desc}</p>
                    <h6 class="card-title"> ${product.name}</h6>
                    <div class="d-flex flex-row bd-highlight mb-3">
                        <div class="p-2 bd-highlight flex-grow-1">
                        <p class="text-primary">$${product.price}</p></a>
                        </div>
                        <div class="p-2 bd-highlight hide">
                        <button type="button" class="btn btn-danger" onclick="addtocart(${product.id})">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                            <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9V5.5z"/>
                            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                            </svg>
                        </button>
                        </div>
                    </div>
                    </div>
                </div>`
    })
}

displayitems();
let cart = JSON.parse(localStorage.getItem("CART")) || [];
updatecart();
function addtocart(id) {
    // check if product already exist
    if (cart.some((item) => item.id === id)) {
        changeqty("plus", id);
    }
    else {
        const item = grocery.find((product) => product.id === id);
        cart.push({
            ...item, qty: 1
        });
    }
    updatecart();
}
function updatecart() {
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART", JSON.stringify(Cart));
}
function rendercartitems() {
    cartitemsel.innerHTML = "";
    cart.forEach((item) => {
        cartitemsel.innerHTML += `
           <table class="table" style="width:75vh;">
           <tbody>
            <tr><td><img src="images/${item.id}.jpg" height=60 width=60></td>
            <td><p style="font-size:15px;">${item.name}</p></td>
            <td>$${item.price}</td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg></td>
            <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16" onclick="removeitem(${item.id})">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg></td></tr></tbody></table>`
    })
}
function changeqty(action, id) {
    cart = cart.map((item) => {
        let qty = item.qty;
        if (item.id === id) {
            if (action === "minus" && qty > 1) {
                qty--;
            }
            else if (action === "plus" && qty < item.stock) {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal() {
    let totalprice = 0, totalitems = 0;
    cart.forEach((item) => {
        totalprice += item.price * item.qty;
        totalitems += item.qty;
    });
    subtotalel.innerHTML = `$${totalprice.toFixed(2)}`
    itemsincartel.innerHTML = totalitems;
}
function removeitem(id) {
    cart = cart.filter((item) => item.id !== id);
    updatecart();
}