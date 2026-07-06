/* ============ ICONS ============ */
const ICON = {
  leaf: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><path d="M10 38C6 22 16 8 38 8C38 30 24 40 10 38Z" stroke="currentColor" stroke-width="2.2" stroke-linejoin="round"/><path d="M10 38C16 30 24 22 34 14" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 4h2l2.2 11.4a2 2 0 0 0 2 1.6h7.6a2 2 0 0 0 2-1.6L20.5 8H6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9.5" cy="20" r="1.3" fill="currentColor"/><circle cx="17.5" cy="20" r="1.3" fill="currentColor"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><circle cx="10.5" cy="10.5" r="6.2" stroke="currentColor" stroke-width="1.8"/><path d="M20 20l-4.5-4.5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5 5l14 14M19 5L5 19" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  arrow: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path d="M4 12h16M13 5l7 7-7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  back: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path d="M20 12H4M11 5l-7 7 7 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="15" height="15"><path d="M5 13l4 4 10-10" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  checkBig: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%"><circle cx="24" cy="24" r="21" stroke="currentColor" stroke-width="2.3"/><path d="M14 25l7 7 13-14" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  star: `<svg viewBox="0 0 24 24" width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M12 3.5l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17.4l-5.4 2.9 1-6.1L3.2 10l6.1-.9L12 3.5Z" fill="currentColor"/></svg>`,
  empty: `<svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" width="46" height="46"><path d="M10 16h28l-2.5 22a3 3 0 0 1-3 2.7H15.5a3 3 0 0 1-3-2.7L10 16Z" stroke="currentColor" stroke-width="1.8"/><path d="M17 16v-3a7 7 0 0 1 14 0v3" stroke="currentColor" stroke-width="1.8"/></svg>`
};

const CAT_COLOR = {
  "Tops":       {bg:"var(--sage-tint)",  fg:"var(--sage-dark)"},
  "Bottoms":    {bg:"var(--amber-tint)", fg:"var(--amber-dark)"},
  "Outerwear":  {bg:"var(--blush-tint)", fg:"var(--blush-dark)"},
  "Footwear":   {bg:"var(--sage-tint)",  fg:"var(--sage-dark)"},
  "Accessories":{bg:"var(--amber-tint)", fg:"var(--amber-dark)"}
};
const CAT_EMOJI = { "Tops":"👕", "Bottoms":"👖", "Outerwear":"🧥", "Footwear":"👟", "Accessories":"👜" };
const TAG_COLOR = { "New":"var(--sage-dark)", "Popular":"var(--amber-dark)", "Featured":"var(--blush-dark)", "Sale":"var(--error)" };
const TAG_EMOJI = { "New":"✨", "Popular":"🔥", "Featured":"💫", "Sale":"🏷️" };
const TAGS = ["New","Popular","Featured","Sale"];
const CATEGORIES = ["Tops","Bottoms","Outerwear","Footwear","Accessories"];

/* ============ DATA ============ */
const PRODUCTS = [
  {id:1,  name:"T-Shirt",    category:"Tops",        price:48,  rating:4.6, emoji:"👕", tag:"Featured", sizes:["XS","S","M","L","XL"]},
  {id:2,  name:"Tank Top",         category:"Tops",        price:24,  rating:4.3, emoji:"🎽", tag:"New",      sizes:["XS","S","M","L"]},
  {id:3,  name:"Silk Blouse",         category:"Tops",        price:68,  rating:4.8, emoji:"👚", tag:"Popular",  sizes:["S","M","L","XL"]},
  {id:4,  name:"Wide-Leg Trousers",   category:"Bottoms",     price:58,  rating:4.5, emoji:"👖", tag:"Featured", sizes:["XS","S","M","L","XL"]},
  {id:5,  name:"Fitness Shorts",        category:"Bottoms",     price:36,  rating:4.1, emoji:"🩳", tag:"New",      sizes:["S","M","L"]},
  {id:6,  name:"Dress",       category:"Bottoms",     price:52,  rating:4.7, emoji:"👗", tag:"Popular",  sizes:["XS","S","M","L"]},
  {id:7,  name:"Quilted Jacket",      category:"Outerwear",   price:92,  rating:4.6, emoji:"🧥", tag:"New",      sizes:["S","M","L","XL"]},
  {id:8,  name:"Wool Trench Coat",    category:"Outerwear",   price:120, rating:4.9, emoji:"🥼", tag:"Featured", sizes:["XS","S","M","L","XL"]},
  {id:9,  name:"Cardigan",    category:"Outerwear",   price:64,  rating:4.4, emoji:"🧶", tag:"Sale",     sizes:["S","M","L"]},
  {id:10, name:"Running Sneakers",     category:"Footwear",    price:54,  rating:4.5, emoji:"👟", tag:"Popular",  sizes:["XS","S","M","L","XL"]},
  {id:11, name:"Leather Sandals",     category:"Footwear",    price:46,  rating:4.2, emoji:"👡", tag:"Sale",     sizes:["S","M","L","XL"]},
  {id:12, name:"Winter Boots",         category:"Footwear",    price:88,  rating:4.7, emoji:"🥾", tag:"Featured", sizes:["XS","S","M","L","XL"]},
  {id:13, name:"Straw Tote",          category:"Accessories", price:38,  rating:4.4, emoji:"👜", tag:"New",      sizes:["One size"]},
  {id:14, name:"Diamond Earrings",  category:"Accessories", price:22,  rating:4.6, emoji:"💎", tag:"Popular",  sizes:["One size"]},
  {id:15, name:"Silk Scarf",          category:"Accessories", price:28,  rating:4.3, emoji:"🧣", tag:"Sale",     sizes:["One size"]},
];

/* ============ STATE ============ */
const state = {
  view: "splash",           // splash | shop | about | contact | checkout
  drawerOpen: false,
  searchTerm: "",
  categoryFilter: "",
  priceFilter: "",
  ratingFilter: 0,
  tagFilter: "",
  selectedSize: {},         // productId -> chosen size string
  cart: [],                 // {id, qty, size}
  checkoutStep: 0,          // 0 review,1 shipping,2 payment,3 confirmation
  order: { name:"", email:"", address:"", city:"", postal:"", card:"", expiry:"", cvc:"" },
  errors: {},
  orderNumber: null,
  rating: 0,
  feedback: "",
  surveySent: false,
  contactSent: false
};

const $app = document.getElementById("app");

/* ============ HELPERS ============ */
function money(n){ return "$" + n.toFixed(2); }
function findProduct(id){ return PRODUCTS.find(p => p.id === id); }
function cartCount(){ return state.cart.reduce((s,c)=>s+c.qty,0); }
function cartTotal(){ return state.cart.reduce((s,c)=> s + findProduct(c.id).price * c.qty, 0); }
function starString(rating){ const full = Math.round(rating); return "★".repeat(full) + "☆".repeat(5-full); }

function priceMatches(price, tier){
  if(!tier) return true;
  if(tier === "under30") return price < 30;
  if(tier === "30to60") return price >= 30 && price <= 60;
  if(tier === "60to100") return price > 60 && price <= 100;
  if(tier === "100plus") return price > 100;
  return true;
}
const PRICE_LABEL = { "under30":"Under $30", "30to60":"$30 – $60", "60to100":"$60 – $100", "100plus":"$100+" };

function filteredItems(){
  const term = state.searchTerm.trim().toLowerCase();
  return PRODUCTS.filter(p => {
    const matchesCat = !state.categoryFilter || p.category === state.categoryFilter;
    const matchesTerm = !term || p.name.toLowerCase().includes(term);
    const matchesPrice = priceMatches(p.price, state.priceFilter);
    const matchesRating = p.rating >= state.ratingFilter;
    const matchesTag = !state.tagFilter || p.tag === state.tagFilter;
    return matchesCat && matchesTerm && matchesPrice && matchesRating && matchesTag;
  });
}

function addToCart(id){
  const p = findProduct(id);
  const size = state.selectedSize[id] || p.sizes[0];
  const existing = state.cart.find(c => c.id === id && c.size === size);
  if(existing) existing.qty += 1;
  else state.cart.push({id, qty:1, size});
  render();
}
function changeQty(id, size, delta){
  const row = state.cart.find(c => c.id === id && c.size === size);
  if(!row) return;
  row.qty += delta;
  if(row.qty <= 0) state.cart = state.cart.filter(c => !(c.id === id && c.size === size));
  render();
}
function removeFromCart(id, size){
  state.cart = state.cart.filter(c => !(c.id === id && c.size === size));
  render();
}

/* ============ VALIDATION ============ */
function validateShipping(v){
  const errs = {};
  if(!v.name.trim()) errs.name = "Please enter your full name.";
  if(!v.email.trim()) errs.email = "Please enter your email.";
  else if(!/^\S+@\S+\.\S+$/.test(v.email.trim())) errs.email = "Enter a valid email address.";
  if(!v.address.trim()) errs.address = "Please enter your street address.";
  if(!v.city.trim()) errs.city = "Please enter your city.";
  if(!v.postal.trim()) errs.postal = "Please enter your postal code.";
  return errs;
}
function validatePayment(v){
  const errs = {};
  const digits = v.card.replace(/\s/g,"");
  if(!digits) errs.card = "Please enter your card number.";
  else if(!/^\d{12,19}$/.test(digits)) errs.card = "Enter a valid card number (12–19 digits).";
  if(!v.expiry.trim()) errs.expiry = "Please enter the expiry date.";
  else if(!/^(0[1-9]|1[0-2])\/\d{2}$/.test(v.expiry.trim())) errs.expiry = "Use MM/YY format.";
  if(!v.cvc.trim()) errs.cvc = "Please enter the CVC.";
  else if(!/^\d{3,4}$/.test(v.cvc.trim())) errs.cvc = "Enter a valid CVC.";
  return errs;
}

/* ============ RENDER: SPLASH ============ */
function renderSplash(){
  return `
  <div class="splash" id="splashScreen">
    <div class="blob b1"></div>
    <div class="blob b2"></div>
    <div class="blob b3"></div>
    <div class="blob b4"></div>
    <div class="splash-content">
      <div class="mark">${ICON.leaf}</div>
      <h1>Linnea</h1>
      <p class="tag">Everyday clothing and small accessories, chosen slowly and worn often.</p>
      <button class="go-btn" id="goShoppingBtn">Go Shopping ${ICON.arrow}</button>
      <div class="splash-footer">Tops · Bottoms · Outerwear · Footwear · Accessories</div>
    </div>
  </div>`;
}

/* ============ RENDER: NAV (sticky, search next to cart) ============ */
function renderNav(current){
  return `
  <div class="nav-sticky-wrap" id="navStickyWrap">
    <div class="nav-inner">
      <div class="nav">
        <div class="brand">${ICON.leaf.replace('width="100%" height="100%"','width="26" height="26"')}<span>Linnea</span></div>
        <div class="nav-links">
          <button class="nav-link ${current==='shop'?'active':''}" data-nav="shop">Shop</button>
          <button class="nav-link ${current==='about'?'active':''}" data-nav="about">About</button>
          <button class="nav-link ${current==='contact'?'active':''}" data-nav="contact">Contact</button>
        </div>
        <div class="nav-search">
          ${ICON.search}
          <input id="searchInput" type="text" placeholder="Search items…" value="${state.searchTerm.replace(/"/g,'&quot;')}" />
        </div>
        <button class="cart-btn" id="openCartBtn">${ICON.cart}
          <span>Cart</span>
          ${cartCount() > 0 ? `<span class="cart-count">${cartCount()}</span>` : ""}
        </button>
      </div>
    </div>
  </div>`;
}

/* ============ RENDER: SIDEBAR (categories + facets) ============ */
function renderSidebar(){
  const anyActive = state.categoryFilter || state.priceFilter || state.ratingFilter || state.tagFilter || state.searchTerm;
  return `
  <aside class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-section-title">Category</div>
      <div class="sidebar-list">
        <button class="sidebar-btn ${!state.categoryFilter?'active':''}" data-sidebar-cat="">All items</button>
        ${CATEGORIES.map(c => `<button class="sidebar-btn ${state.categoryFilter===c?'active':''}" data-sidebar-cat="${c}">${CAT_EMOJI[c]} ${c}</button>`).join("")}
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-title">Collection</div>
      <div class="sidebar-list">
        <button class="sidebar-btn ${!state.tagFilter?'active':''}" data-sidebar-tag="">All collections</button>
        ${TAGS.map(t => `<button class="sidebar-btn ${state.tagFilter===t?'active':''}" data-sidebar-tag="${t}">${TAG_EMOJI[t]} ${t==="New"?"New Arrivals":t}</button>`).join("")}
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-title">Price</div>
      <div class="sidebar-list">
        <button class="sidebar-btn ${!state.priceFilter?'active':''}" data-sidebar-price="">Any price</button>
        ${Object.keys(PRICE_LABEL).map(k => `<button class="sidebar-btn ${state.priceFilter===k?'active':''}" data-sidebar-price="${k}">${PRICE_LABEL[k]}</button>`).join("")}
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-section-title">Rating</div>
      <div class="sidebar-list">
        <button class="sidebar-btn ${state.ratingFilter===0?'active':''}" data-sidebar-rating="0">Any rating</button>
        <button class="sidebar-btn ${state.ratingFilter===4?'active':''}" data-sidebar-rating="4">4★ & up</button>
        <button class="sidebar-btn ${state.ratingFilter===4.5?'active':''}" data-sidebar-rating="4.5">4.5★ & up</button>
      </div>
    </div>
    ${anyActive ? `<button class="sidebar-clear" id="sidebarClearBtn">Clear all filters</button>` : ""}
  </aside>`;
}

/* ============ RENDER: ACTIVE CHIPS + GRID ============ */
function renderActiveChips(){
  return `
  <div class="chips">
    ${state.categoryFilter ? `<span class="chip">${state.categoryFilter}<button data-clear="cat">${ICON.x}</button></span>` : ""}
    ${state.searchTerm ? `<span class="chip">"${state.searchTerm}"<button data-clear="term">${ICON.x}</button></span>` : ""}
    ${state.priceFilter ? `<span class="chip">${PRICE_LABEL[state.priceFilter]}<button data-clear="price">${ICON.x}</button></span>` : ""}
    ${state.ratingFilter ? `<span class="chip">${state.ratingFilter}★ & up<button data-clear="rating">${ICON.x}</button></span>` : ""}
    ${state.tagFilter ? `<span class="chip">${state.tagFilter==="New"?"New Arrivals":state.tagFilter}<button data-clear="tagf">${ICON.x}</button></span>` : ""}
  </div>
  <div class="result-line">${filteredItems().length} item${filteredItems().length===1?'':'s'} found</div>
  `;
}

function renderGrid(){
  const items = filteredItems();
  if(items.length === 0){
    return `<div class="empty-state">${ICON.empty}<div>No items match your filters. Try clearing one on the left.</div></div>`;
  }
  return `<div class="grid">
    ${items.map(p => {
      const col = CAT_COLOR[p.category];
      const currentSize = state.selectedSize[p.id] || p.sizes[0];
      const inCart = state.cart.find(c => c.id === p.id && c.size === currentSize);
      const hasRealSizes = !(p.sizes.length === 1 && p.sizes[0] === "One size");
      return `
      <div class="card">
        <div class="card-art" style="background:${col.bg}">
          <span class="card-tag" style="background:${TAG_COLOR[p.tag]}">${p.tag==="New"?"New":p.tag}</span>
          ${p.emoji}
        </div>
        <div class="card-body">
          <div class="card-cat">${p.category}</div>
          <div class="card-name">${p.name}</div>
          <div class="card-rating">${starString(p.rating)} <span style="color:var(--ink-light); font-weight:600;">${p.rating.toFixed(1)}</span></div>
          ${hasRealSizes ? `
          <div class="size-row">
            ${p.sizes.map(s => `<button class="size-chip ${currentSize===s?'active':''}" data-size-pick="${p.id}" data-size-val="${s}">${s}</button>`).join("")}
          </div>` : `<div class="size-hint">One size fits most</div>`}
          <div class="card-bottom">
            <div class="price">${money(p.price)}</div>
            <button class="add-btn ${inCart ? 'added':''}" data-add="${p.id}">
              ${inCart ? ICON.check + ' Added' : ICON.plus + ' Add'}
            </button>
          </div>
        </div>
      </div>`;
    }).join("")}
  </div>`;
}

function renderShopView(){
  return `
  ${renderNav('shop')}
  <div class="shell">
    <div class="hero">
      <h2>Shop the collection</h2>
      <p>Use the filters on the left to narrow by category, collection, price, and rating or search by name up top.</p>
    </div>
    <div class="shop-layout">
      ${renderSidebar()}
      <div class="shop-main">
        ${renderActiveChips()}
        ${renderGrid()}
      </div>
    </div>
  </div>
  ${renderCartDrawer()}
  `;
}

/* ============ RENDER: ABOUT ============ */
function renderAboutView(){
  return `
  ${renderNav('about')}
  <div class="shell">
    <div class="static-page">
      <h2>About Linnea</h2>
      <p class="lead">Linnea began as a small wardrobe edit shared between friends who were tired of buying clothes they'd forget in a season. We keep the range small, the fabrics honest, and the fit considered.</p>
      <div class="stitch" style="margin:28px 0;"></div>
      <div class="about-grid">
        <div class="about-card">
          <div class="about-emoji">🧵</div>
          <h3>Made to last</h3>
          <p>Natural fibers and simple construction, chosen so each piece earns its place in daily rotation.</p>
        </div>
        <div class="about-card">
          <div class="about-emoji">🌿</div>
          <h3>Small batches</h3>
          <p>We produce in limited runs rather than chasing every trend, which keeps waste low.</p>
        </div>
        <div class="about-card">
          <div class="about-emoji">🤝</div>
          <h3>Fair partners</h3>
          <p>We work with a handful of workshops we know by name, and pay them on time, every time.</p>
        </div>
      </div>
    </div>
  </div>
  ${renderCartDrawer()}`;
}

/* ============ RENDER: CONTACT ============ */
function renderContactView(){
  return `
  ${renderNav('contact')}
  <div class="shell">
    <div class="static-page">
      <h2>Get in touch</h2>
      <p class="lead">Questions about an order, a return, or a fit? Send a note — a person reads every one.</p>
      <div class="contact-layout">
        <div class="contact-info">
          <div class="contact-row">📧 hello@linnea.shop</div>
          <div class="contact-row">📍 12 Street, Ottawa, ON</div>
          <div class="contact-row">🕘 Mon–Fri, 9am–5pm</div>
        </div>
        <div class="panel">
          ${state.contactSent ? `<div class="thanks-note">Thanks for reaching out — we'll reply within a day.</div>` : `
          <div class="field"><label>Name</label><input id="c_name" placeholder="Your name"/></div>
          <div class="field"><label>Email</label><input id="c_email" placeholder="you@email.com"/></div>
          <div class="field"><label>Message</label><textarea id="c_message" placeholder="How can we help?" style="min-height:100px;"></textarea></div>
          <button class="primary-btn" id="sendContactBtn" style="margin-top:4px;">Send message</button>
          `}
        </div>
      </div>
    </div>
  </div>
  ${renderCartDrawer()}`;
}


/* ============ RENDER: CART DRAWER ============ */
function renderCartDrawer(){
  const items = state.cart.map(c => ({...findProduct(c.id), qty:c.qty, size:c.size}));
  return `
  <div class="overlay ${state.drawerOpen?'open':''}" id="drawerOverlay"></div>
  <div class="drawer ${state.drawerOpen?'open':''}">
    <div class="drawer-head">
      <h3>Your Bag</h3>
      <button class="icon-btn" id="closeDrawerBtn">${ICON.x}</button>
    </div>
    <div class="drawer-items">
      ${items.length === 0 ? `<div class="empty-state">${ICON.empty}<div>Your bag is empty.</div></div>` :
      items.map(it => {
        const col = CAT_COLOR[it.category];
        const sizeLabel = it.size && it.size !== "One size" ? ` · Size ${it.size}` : "";
        return `
        <div class="cart-row">
          <div class="cart-thumb" style="background:${col.bg}">${it.emoji}</div>
          <div class="cart-info">
            <div class="name">${it.name}</div>
            <div class="meta">${money(it.price)} · ${it.category}${sizeLabel}</div>
            <div class="qty-row">
              <button class="qty-btn" data-qty="-1" data-id="${it.id}" data-size="${it.size}">−</button>
              <span>${it.qty}</span>
              <button class="qty-btn" data-qty="1" data-id="${it.id}" data-size="${it.size}">+</button>
            </div>
          </div>
          <button class="remove-x" data-remove="${it.id}" data-remove-size="${it.size}">${ICON.x}</button>
        </div>`;
      }).join("")}
    </div>
    <div class="drawer-foot">
      <div class="subtotal-row"><span>Subtotal</span><span>${money(cartTotal())}</span></div>
      <button class="checkout-btn" id="goCheckoutBtn" ${items.length===0?'disabled':''}>Checkout ${ICON.arrow}</button>
    </div>
  </div>`;
}

/* ============ RENDER: CHECKOUT ============ */
const STEP_LABELS = ["Review", "Shipping", "Payment", "Confirmation"];

function renderStepper(){
  return `<div class="stepper">
    ${STEP_LABELS.map((label,i) => {
      const cls = i < state.checkoutStep ? "done" : (i === state.checkoutStep ? "current" : "");
      return `
      <div class="step ${cls}">
        ${i>0 ? `<div class="step-line ${i<=state.checkoutStep?'done':''}"></div>` : ""}
        <div class="dot">${i < state.checkoutStep ? ICON.check : i+1}</div>
        <div class="label">${label}</div>
      </div>`;
    }).join("")}
  </div>`;
}

function renderCheckoutStepReview(){
  const items = state.cart.map(c => ({...findProduct(c.id), qty:c.qty, size:c.size}));
  return `
  <div class="panel">
    <h3>Review your bag</h3>
    <p class="sub">Make sure everything looks right before shipping details.</p>
    ${items.map(it => `<div class="review-item"><span>${it.emoji} ${it.name}${it.size && it.size!=="One size" ? ` (${it.size})` : ""} × ${it.qty}</span><span>${money(it.price*it.qty)}</span></div>`).join("")}
    <div class="order-line total"><span>Total</span><span>${money(cartTotal())}</span></div>
    <div class="panel-actions">
      <button class="ghost-btn" id="backToShopBtn">${ICON.back} Back to shop</button>
      <button class="primary-btn" id="toShippingBtn">Continue ${ICON.arrow}</button>
    </div>
  </div>`;
}

function field(id, label, value, placeholder, errKey, full){
  const err = state.errors[errKey];
  return `<div class="field ${full?'full':''}">
    <label>${label}</label>
    <input id="${id}" value="${(value||'').replace(/"/g,'&quot;')}" placeholder="${placeholder}" class="${err?'err':''}"/>
    ${err ? `<div class="field-error">${err}</div>` : ""}
  </div>`;
}

function renderCheckoutStepShipping(){
  const o = state.order;
  const hasErrors = Object.keys(state.errors).length > 0;
  return `
  <div class="panel">
    <h3>Shipping information</h3>
    <p class="sub">Tell us where to send your order. All fields are required.</p>
    ${hasErrors ? `<div class="form-note">Please fix the highlighted fields before continuing.</div>` : ""}
    <div class="field-grid">
      ${field("f_name","Full name",o.name,"Jane Doe","name")}
      ${field("f_email","Email",o.email,"jane@email.com","email")}
      ${field("f_address","Address",o.address,"123 Maple Street","address",true)}
      ${field("f_city","City",o.city,"Ottawa","city")}
      ${field("f_postal","Postal code",o.postal,"K1N 6N5","postal")}
    </div>
    <div class="panel-actions">
      <button class="ghost-btn" id="backStepBtn">${ICON.back} Back</button>
      <button class="primary-btn" id="toPaymentBtn">Continue ${ICON.arrow}</button>
    </div>
  </div>`;
}

function renderCheckoutStepPayment(){
  const o = state.order;
  const hasErrors = Object.keys(state.errors).length > 0;
  return `
  <div class="panel">
    <h3>Payment details</h3>
    <p class="sub">This is a prototype — no real payment is processed. All fields are required.</p>
    ${hasErrors ? `<div class="form-note">Please fix the highlighted fields before placing your order.</div>` : ""}
    <div class="field-grid">
      ${field("f_card","Card number",o.card,"4242 4242 4242 4242","card",true)}
      ${field("f_expiry","Expiry (MM/YY)",o.expiry,"MM/YY","expiry")}
      ${field("f_cvc","CVC",o.cvc,"123","cvc")}
    </div>
    <div class="order-line total"><span>Total due</span><span>${money(cartTotal())}</span></div>
    <div class="panel-actions">
      <button class="ghost-btn" id="backStepBtn">${ICON.back} Back</button>
      <button class="primary-btn" id="placeOrderBtn">Place order ${ICON.arrow}</button>
    </div>
  </div>`;
}

function renderCheckoutStepConfirmation(){
  return `
  <div class="panel confirm-wrap">
    <div class="confirm-icon">${ICON.checkBig}</div>
    <h3>Thank you, ${state.order.name || "friend"}!</h3>
    <p>Your order has been placed and is being prepared.</p>
    <div class="order-num">Order #${state.orderNumber}</div>
    <div class="stitch" style="margin: 4px 0 24px;"></div>
    <div class="survey">
      ${state.surveySent ? `<div class="thanks-note">Thanks for the feedback — it helps us shape Linnea.</div>` : `
      <h3 style="font-size:17px; text-align:center;">How was your experience?</h3>
      <div class="stars">
        ${[1,2,3,4,5].map(n => `<button class="star-btn ${n<=state.rating?'filled':''}" data-star="${n}">${ICON.star}</button>`).join("")}
      </div>
      <textarea id="feedbackText" placeholder="Anything we could improve? (optional)">${state.feedback}</textarea>
      <div class="panel-actions" style="justify-content:center; margin-top:16px;">
        <button class="primary-btn" id="sendFeedbackBtn">Send feedback</button>
      </div>`}
    </div>
    <div class="panel-actions" style="justify-content:center; margin-top:22px;">
      <button class="ghost-btn" id="doneShoppingBtn">Continue shopping</button>
    </div>
  </div>`;
}

function renderCheckoutView(){
  let stepPanel;
  if(state.checkoutStep === 0) stepPanel = renderCheckoutStepReview();
  else if(state.checkoutStep === 1) stepPanel = renderCheckoutStepShipping();
  else if(state.checkoutStep === 2) stepPanel = renderCheckoutStepPayment();
  else stepPanel = renderCheckoutStepConfirmation();

  return `
  <div class="checkout-wrap">
    ${state.checkoutStep < 3 ? `<button class="back-link" id="exitCheckoutBtn">${ICON.back} Back to shop</button>` : ""}
    ${renderStepper()}
    ${stepPanel}
  </div>`;
}

/* ============ MASTER RENDER ============ */
function render(){
  if(state.view === "splash"){ $app.innerHTML = renderSplash(); bindSplash(); return; }
  if(state.view === "checkout"){ $app.innerHTML = renderCheckoutView(); bindCheckout(); return; }
  if(state.view === "about"){ $app.innerHTML = renderAboutView(); bindCommon(); return; }
  if(state.view === "contact"){ $app.innerHTML = renderContactView(); bindCommon(); bindContact(); return; }
  $app.innerHTML = renderShopView();
  bindCommon();
  bindShop();
}

/* ============ BINDERS ============ */
function bindSplash(){
  document.getElementById("goShoppingBtn").addEventListener("click", () => {
    const s = document.getElementById("splashScreen");
    s.classList.add("hide");
    setTimeout(() => { state.view = "shop"; render(); }, 480);
  });
}

// shared across shop / about / contact: nav (links, search, cart drawer)
function bindCommon(){
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.view = btn.dataset.nav;
      state.drawerOpen = false;
      render();
    });
  });

  const searchInput = document.getElementById("searchInput");
  if(searchInput){
    searchInput.addEventListener("input", (e) => {
      state.searchTerm = e.target.value;
      const caretPos = e.target.selectionStart;
      render();
      const newInput = document.getElementById("searchInput");
      if(newInput){ newInput.focus(); newInput.setSelectionRange(caretPos, caretPos); }
    });
  }

  const openCart = document.getElementById("openCartBtn");
  if(openCart) openCart.addEventListener("click", () => { state.drawerOpen = true; render(); });
  const overlay = document.getElementById("drawerOverlay");
  if(overlay) overlay.addEventListener("click", () => { state.drawerOpen = false; render(); });
  const closeBtn = document.getElementById("closeDrawerBtn");
  if(closeBtn) closeBtn.addEventListener("click", () => { state.drawerOpen = false; render(); });

  document.querySelectorAll("[data-qty]").forEach(btn => {
    btn.addEventListener("click", () => changeQty(parseInt(btn.dataset.id), btn.dataset.size, parseInt(btn.dataset.qty)));
  });
  document.querySelectorAll("[data-remove]").forEach(btn => {
    btn.addEventListener("click", () => removeFromCart(parseInt(btn.dataset.remove), btn.dataset.removeSize));
  });

  const goCheckout = document.getElementById("goCheckoutBtn");
  if(goCheckout) goCheckout.addEventListener("click", () => {
    if(state.cart.length === 0) return;
    state.drawerOpen = false;
    state.view = "checkout";
    state.checkoutStep = 0;
    state.errors = {};
    render();
  });

  setupStickyNav();
}

function setupStickyNav(){
  const wrap = document.getElementById("navStickyWrap");
  if(!wrap) return;
  const onScroll = () => {
    if(window.scrollY > 8) wrap.classList.add("scrolled");
    else wrap.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function bindShop(){
  document.querySelectorAll("[data-sidebar-cat]").forEach(btn => {
    btn.addEventListener("click", () => { state.categoryFilter = btn.dataset.sidebarCat; render(); });
  });
  document.querySelectorAll("[data-sidebar-tag]").forEach(btn => {
    btn.addEventListener("click", () => { state.tagFilter = btn.dataset.sidebarTag; render(); });
  });
  document.querySelectorAll("[data-sidebar-price]").forEach(btn => {
    btn.addEventListener("click", () => { state.priceFilter = btn.dataset.sidebarPrice; render(); });
  });
  document.querySelectorAll("[data-sidebar-rating]").forEach(btn => {
    btn.addEventListener("click", () => { state.ratingFilter = parseFloat(btn.dataset.sidebarRating); render(); });
  });
  const clearBtn = document.getElementById("sidebarClearBtn");
  if(clearBtn) clearBtn.addEventListener("click", () => {
    state.categoryFilter = ""; state.searchTerm = ""; state.priceFilter = ""; state.ratingFilter = 0; state.tagFilter = "";
    render();
  });

  document.querySelectorAll("[data-clear]").forEach(btn => {
    btn.addEventListener("click", () => {
      const w = btn.dataset.clear;
      if(w === "cat") state.categoryFilter = "";
      if(w === "term") state.searchTerm = "";
      if(w === "price") state.priceFilter = "";
      if(w === "rating") state.ratingFilter = 0;
      if(w === "tagf") state.tagFilter = "";
      render();
    });
  });

  document.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => addToCart(parseInt(btn.dataset.add)));
  });

  document.querySelectorAll("[data-size-pick]").forEach(btn => {
    btn.addEventListener("click", () => {
      state.selectedSize[parseInt(btn.dataset.sizePick)] = btn.dataset.sizeVal;
      render();
    });
  });
}

function bindContact(){
  const sendContact = document.getElementById("sendContactBtn");
  if(sendContact) sendContact.addEventListener("click", () => {
    state.contactSent = true;
    render();
  });
}

function bindCheckout(){
  const exitBtn = document.getElementById("exitCheckoutBtn");
  if(exitBtn) exitBtn.addEventListener("click", () => { state.view = "shop"; render(); });

  const backToShop = document.getElementById("backToShopBtn");
  if(backToShop) backToShop.addEventListener("click", () => { state.view = "shop"; render(); });

  const toShipping = document.getElementById("toShippingBtn");
  if(toShipping) toShipping.addEventListener("click", () => { state.errors = {}; state.checkoutStep = 1; render(); });

  const backStep = document.getElementById("backStepBtn");
  if(backStep) backStep.addEventListener("click", () => { state.errors = {}; state.checkoutStep -= 1; render(); });

  const toPayment = document.getElementById("toPaymentBtn");
  if(toPayment) toPayment.addEventListener("click", () => {
    const vals = {
      name: document.getElementById("f_name").value,
      email: document.getElementById("f_email").value,
      address: document.getElementById("f_address").value,
      city: document.getElementById("f_city").value,
      postal: document.getElementById("f_postal").value,
    };
    state.order = {...state.order, ...vals};
    const errs = validateShipping(vals);
    if(Object.keys(errs).length){ state.errors = errs; render(); return; }
    state.errors = {};
    state.checkoutStep = 2;
    render();
  });

  const placeOrder = document.getElementById("placeOrderBtn");
  if(placeOrder) placeOrder.addEventListener("click", () => {
    const vals = {
      card: document.getElementById("f_card").value,
      expiry: document.getElementById("f_expiry").value,
      cvc: document.getElementById("f_cvc").value,
    };
    state.order = {...state.order, ...vals};
    const errs = validatePayment(vals);
    if(Object.keys(errs).length){ state.errors = errs; render(); return; }
    state.errors = {};
    state.orderNumber = Math.floor(10000 + Math.random()*89999);
    state.cart = [];
    state.checkoutStep = 3;s
    render();
  });

  document.querySelectorAll("[data-star]").forEach(btn => {
    btn.addEventListener("click", () => { state.rating = parseInt(btn.dataset.star); render(); });
  });

  const sendFeedback = document.getElementById("sendFeedbackBtn");
  if(sendFeedback) sendFeedback.addEventListener("click", () => {
    state.feedback = document.getElementById("feedbackText").value;
    state.surveySent = true;
    render();
  });

  const doneBtn = document.getElementById("doneShoppingBtn");
  if(doneBtn) doneBtn.addEventListener("click", () => {
    state.view = "shop";
    state.checkoutStep = 0;
    state.rating = 0;
    state.feedback = "";
    state.surveySent = false;
    state.order = { name:"", email:"", address:"", city:"", postal:"", card:"", expiry:"", cvc:"" };
    render();
  });
}
render();