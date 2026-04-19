// --- CHEFMASTER MASTER CODEBASE (ULTRA-RELIABLE VIDEO EDITION) ---

const sampleRecipes = [
    // --- BREAKFAST ---
    { id: 101, title: "Spicy Shakshuka", time: "20 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format", youtubeId: "B6Wp-6M09kY", category: "Breakfast", tag: "🌅 Morning", ingredients: ["Eggs", "Tomatoes", "Bell Peppers", "Onions", "Cumin", "Feta Cheese"], steps: ["Sauté onions & peppers.", "Add spiced tomato sauce.", "Poach eggs."] },
    { id: 102, title: "Classic Scrambled Eggs", time: "5 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format", youtubeId: "PUP7U5vT0_U", category: "Breakfast", tag: "🥞 Gordon's Way", ingredients: ["Eggs", "Butter", "Chives", "Crème Fraîche"], steps: ["Whisk in pan.", "Cook low and slow.", "Finish with cream."] },
    { id: 103, title: "Best French Toast", time: "12 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format", youtubeId: "2-9m_Kk4sYI", category: "Breakfast", tag: "🍞 Sweet", ingredients: ["Brioche", "Eggs", "Cinnamon", "Vanilla Syrup"], steps: ["Dip bread.", "Fry in butter.", "Serve."] },

    // --- TRENDING CLASSICS ---
    { id: 1, title: "Creamy Garlic Pasta", time: "15 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?auto=format", youtubeId: "f1s9t1G5c7Q", category: "Trending", tag: "🔥 Hot", ingredients: ["Pasta", "Garlic", "Heavy Cream", "Cheese"], steps: ["Boil pasta.", "Sauté garlic.", "Combine."] },
    { id: 2, title: "Honey Garlic Chicken", time: "18 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format", youtubeId: "e247y6J5-U8", category: "Chicken", tag: "🍗 Popular", ingredients: ["Chicken", "Honey", "Soy Sauce", "Ginger"], steps: ["Fry chicken.", "Glaze.", "Serve."] },
    { id: 3, title: "Egg Fried Rice", time: "12 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format", youtubeId: "NybhwoK6am0", category: "Rice", tag: "🍚 Chef Classic", ingredients: ["Rice", "Eggs", "Green Onion", "Soy Sauce"], steps: ["Fry eggs.", "Toss rice.", "Serve."] },
    { id: 4, title: "Best Beef Tacos", time: "20 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format", youtubeId: "J8lF88zF69Q", category: "Budget", tag: "🌮 Quick", ingredients: ["Beef", "Shells", "Taco Spices", "Cheese"], steps: ["Brown beef.", "Fill shells."] },
    
    // --- GHANA SPECIALS (20 NEW RECIPES) ---
    { id: 701, title: "Ghanaian Waakye", time: "1 hr", difficulty: "Medium", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "mXWn8S3pExE", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Rice", "Beans", "Waakye Leaves", "Shito"], steps: ["Boil beans with leaves.", "Add rice and salt.", "Serve with shito and salad."] },
    { id: 702, title: "Banku & Grilled Tilapia", time: "45 min", difficulty: "Hard", image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format", youtubeId: "uY_R_2R7-Cg", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Corn Dough", "Cassava Dough", "Tilapia", "Pepper Sauce"], steps: ["Mix doughs and cook.", "Grill tilapia.", "Serve with pepper."] },
    { id: 703, title: "Spicy Kelewele", time: "15 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format", youtubeId: "vBghHn9cTMc", category: "Ghana", tag: "🇬🇭 Snack", ingredients: ["Plantains", "Ginger", "Pepper", "Cloves"], steps: ["Dice plantains.", "Season with spices.", "Deep fry."] },
    { id: 704, title: "Fufu & Goat Light Soup", time: "1.5 hrs", difficulty: "Hard", image: "https://images.unsplash.com/photo-1547928576-a4a33237bec3?auto=format", youtubeId: "mZJgOshS6E4", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Cassava", "Plantain", "Goat Meat", "Tomatoes"], steps: ["Pound cassava & plantain.", "Boil soup with meat.", "Combine."] },
    { id: 705, title: "Gobbɛ (Red Red)", time: "40 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "6gS95VqL2oY", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Black-eyed Peas", "Palm Oil", "Plantain", "Gari"], steps: ["Boil beans.", "Fry plantains.", "Mix with palm oil."] },
    { id: 706, title: "Kontomire Stew (Palava Sauce)", time: "30 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "s8rE411_KxM", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Spinach", "Egusi", "Palm Oil", "Fish"], steps: ["Fry onions & pepper.", "Add spinach & egusi.", "Simmer."] },
    { id: 707, title: "Kenkey & Fried Fish", time: "2 hrs", difficulty: "Hard", image: "https://images.unsplash.com/photo-1580959375944-abd7e991f971?auto=format", youtubeId: "PUP7U5vT0_U", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Corn Dough", "Fish", "Black Pepper Sauce"], steps: ["Ferment dough.", "Steam kenkey.", "Fry fish."] },
    { id: 708, title: "Angwa Mo (Oiled Rice)", time: "25 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format", youtubeId: "NybhwoK6am0", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Rice", "Oil", "Onions", "Salted Fish"], steps: ["Fry onions & fish.", "Add rice & water.", "Cook until soft."] },
    { id: 709, title: "Tatale (Plantain Cakes)", time: "20 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format", youtubeId: "_X9_Ue75m7w", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Overripe Plantain", "Ginger", "Pepper", "Cornmeal"], steps: ["Mash plantain.", "Mix with spices.", "Fry cakes."] },
    { id: 710, title: "Tuo Zaafi", time: "50 min", difficulty: "Hard", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "8U_29i9Qp5U", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Corn Flour", "Cassava Flour", "Spinach Soup", "Meat"], steps: ["Cook flour into soft dough.", "Prepare green soup.", "Serve."] },
    { id: 711, title: "Ghanaian Groundnut Soup", time: "45 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format", youtubeId: "22-fH68zZEY", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Peanut Butter", "Chicken", "Tomatoes", "Onions"], steps: ["Roast peanut paste.", "Add to chicken soup base.", "Simmer."] },
    { id: 712, title: "Garden Egg Stew", time: "30 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format", youtubeId: "Ax09sCUdWxs", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Garden Eggs", "Palm Oil", "Cured Fish", "Spinach"], steps: ["Boil garden eggs.", "Mash and sauté.", "Add fish."] },
    { id: 713, title: "Hausa Koko & Koose", time: "30 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1590412200988-a436970781fa?auto=format", youtubeId: "B6Wp-6M09kY", category: "Ghana", tag: "🇬🇭 Breakfast", ingredients: ["Millet Milk", "Ginger", "Black Eyed Peas", "Pepper"], steps: ["Boil millet porridge.", "Fry bean cakes (Koose).", "Serve."] },
    { id: 714, title: "Bofrot (Puff Puff)", time: "1 hr", difficulty: "Medium", image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format", youtubeId: "13K1lK3n9xI", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Flour", "Yeast", "Sugar", "Nutmeg"], steps: ["Mix dough & proof.", "Deep fry balls.", "Serve."] },
    { id: 715, title: "Etor (Mashed Yam)", time: "25 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "s8rE411_KxM", category: "Ghana", tag: "🇬🇭 Ritual", ingredients: ["Yam", "Palm Oil", "Eggs", "Roasted Peanuts"], steps: ["Boil and mash yam.", "Mix with palm oil.", "Garnish with eggs."] },
    { id: 716, title: "Mfante Mfante", time: "35 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1559113202-c916b8e44373?auto=format", youtubeId: "PUP7U5vT0_U", category: "Ghana", tag: "🇬🇭 Coastal", ingredients: ["Fish", "Palm Oil", "Onions", "Peppers"], steps: ["Fry fish.", "Simmer in palm oil sauce.", "Serve with Kenkey."] },
    { id: 717, title: "Wasawasa", time: "40 min", difficulty: "Hard", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "8U_29i9Qp5U", category: "Ghana", tag: "🇬🇭 North", ingredients: ["Yam Flour", "Salt", "Onion Oil"], steps: ["Steam flour pellets.", "Season.", "Serve with oil sauce."] },
    { id: 718, title: "Apapransa", time: "30 min", difficulty: "Hard", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "6gS95VqL2oY", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Cornmeal", "Soup", "Crabmeat"], steps: ["Mix toasted cornmeal with soup.", "Stir until thick.", "Top with crab."] },
    { id: 719, title: "Gari Foto", time: "15 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "s8rE411_KxM", category: "Ghana", tag: "🇬🇭 Ghana", ingredients: ["Gari", "Tomatoes", "Onions", "Eggs"], steps: ["Sauté vegetables.", "Dampen gari.", "Mix together."] },
    { id: 720, title: "Ghanaian Meat Pie", time: "45 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format", youtubeId: "kL_K8e0mC4k", category: "Ghana", tag: "🇬🇭 Snacks", ingredients: ["Flour", "Meat", "Onions", "Margerine"], steps: ["Make pastry dough.", "Fill with spiced meat.", "Bake."] },
];

    // --- AFRICA ---
    { id: 21, title: "Perfect Jollof Rice", time: "45 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1629115911301-443b78583483?auto=format", youtubeId: "6gS95VqL2oY", category: "Africa", tag: "🇳🇬 Authentic", ingredients: ["Rice", "Tomato Paste", "Peppers", "Onions", "Stock"], steps: ["Sauce.", "Fry.", "Steam."] },
    { id: 22, title: "Nigerian Egusi Soup", time: "40 min", difficulty: "Hard", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "s8rE411_KxM", category: "Africa", tag: "🥣 Tradition", ingredients: ["Egusi", "Meat", "Spinach", "Palm Oil"], steps: ["Fry melon seeds.", "Add meat and spinach.", "Simmer."] },

    // --- ASIAN ---
    { id: 23, title: "Thai Pad Thai", time: "15 min", difficulty: "Hard", image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format", youtubeId: "A32va3sLi5M", category: "Asian", tag: "🍜 Thai", ingredients: ["Noodles", "Shrimp", "Tamarind", "Peanuts"], steps: ["Soak noodles.", "Wok fry shrimp.", "Add tamarind and toss."] },
    { id: 24, title: "Beef Bulgogi", time: "20 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1594179047519-f347310d3322?auto=format", youtubeId: "g8D3j6lK9wQ", category: "Asian", tag: "🥩 K-Food", ingredients: ["Beef", "Pear", "Soy Sauce", "Ginger"], steps: ["Marinate beef.", "Grill high heat."] },

    // --- MEDITERRANEAN & MIDDLE EAST (NEW) ---
    { id: 401, title: "Authentic Falafel", time: "30 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1593001874117-c99c87076650?auto=format", youtubeId: "9y6XIn_0dF8", category: "Middle East", tag: "🥙 Vegan", ingredients: ["Chickpeas", "Parsley", "Coriander", "Garlic"], steps: ["Blend ingredients.", "Form balls.", "Deep fry."] },
    { id: 402, title: "Greek Moussaka", time: "1.5 hrs", difficulty: "Hard", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format", youtubeId: "8U_29i9Qp5U", category: "Middle East", tag: "🇬🇷 Classic", ingredients: ["Eggplant", "Lamb", "Bechamel", "Potatoes"], steps: ["Layer eggplant.", "Add meat sauce.", "Add bechamel and bake."] },
    { id: 403, title: "Hummus from Scratch", time: "10 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1574071318508-1cdbad80ad50?auto=format", youtubeId: "v_Uv6u8aUAI", category: "Middle East", tag: "🥣 Dip", ingredients: ["Chickpeas", "Tahini", "Lemon", "Olive Oil"], steps: ["Process until smooth.", "Garnish."] },

    // --- SOUTH AMERICAN (NEW) ---
    { id: 601, title: "Brazilian Picanha", time: "40 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format", youtubeId: "xYwB8G2K-Xk", category: "South America", tag: "🇧🇷 BBQ", ingredients: ["Picanha Beef", "Rock Salt"], steps: ["Slice meat.", "Skew and salt.", "Grill fat-side up."] },
    { id: 602, title: "Argentinian Empanadas", time: "1 hr", difficulty: "Hard", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format", youtubeId: "kL_K8e0mC4k", category: "South America", tag: "🇦🇷 Pastry", ingredients: ["Beef", "Dough", "Olives", "Eggs"], steps: ["Cook filling.", "Fill dough circles.", "Bake or fry."] },
    { id: 603, title: "Brazilian Brigadeiro", time: "20 min", difficulty: "Easy", image: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format", youtubeId: "A6GZ7R5mCUM", category: "Desserts", tag: "🍫 Sweet", ingredients: ["Condensed Milk", "Cocoa", "Butter", "Sprinkles"], steps: ["Cook until thick.", "Roll into balls.", "Cover in sprinkles."] },

    // --- DESSERTS ---
    { id: 201, title: "Chocolate Lava Cake", time: "20 min", difficulty: "Medium", image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format", youtubeId: "_X9_Ue75m7w", category: "Desserts", tag: "🍰 Tasty", ingredients: ["Chocolate", "Butter", "Eggs", "Sugar"], steps: ["Melt chocolate.", "Whisk eggs.", "Bake."] },
    { id: 202, title: "Classic Cheesecake", time: "1 hr", difficulty: "Hard", image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format", youtubeId: "Z4Sbe728p90", category: "Desserts", tag: "🍰 Best", ingredients: ["Cream Cheese", "Graham Crust", "Sour Cream"], steps: ["Mix filling.", "Bake water bath.", "Chill."] }
];

let currentFilter = 'All';
let searchQuery = '';
let isProUser = localStorage.getItem('chefmaster_pro') === 'true';

document.addEventListener('DOMContentLoaded', () => { initApp(); });

function initApp() {
    renderAll();
    const searchInput = document.getElementById('main-search');
    searchInput.addEventListener('input', (e) => { searchQuery = e.target.value.toLowerCase(); renderAll(); });
    
    document.querySelectorAll('.category-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            haptic();
            document.querySelectorAll('.category-chip').forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            let txt = chip.textContent.trim().toLowerCase();
            if(txt.includes("all")) currentFilter = "All";
            else if(txt.includes("breakfast")) currentFilter = "Breakfast";
            else if(txt.includes("desserts")) currentFilter = "Desserts";
            else if(txt.includes("middle east")) currentFilter = "Middle East";
            else if(txt.includes("south america")) currentFilter = "South America";
            else if(txt.includes("ghana")) currentFilter = "Ghana";
            else if(txt.includes("asian")) currentFilter = "Asian";
            else if(txt.includes("africa")) currentFilter = "Africa";
            else if(txt.includes("luxury")) currentFilter = "Luxury";
            else currentFilter = "All";
            renderAll();
        });
    });
    window.addEventListener('load', () => { checkOnboarding(); });
}

function renderAll() {
    const feed = document.getElementById('dynamic-feed');
    feed.innerHTML = '';
    
    // 1. Filter main recipes by search
    const searchedRecipes = sampleRecipes.filter(r => 
        r.title.toLowerCase().includes(searchQuery)
    );

    if (currentFilter === 'All') {
        // --- TRENDING SLIDER ---
        const trending = searchedRecipes.slice(0, 5);
        if (trending.length) {
            feed.innerHTML += `
                <section class="horizontal-section">
                    <div class="section-header"><h3>🔥 Trending</h3></div>
                    <div class="card-slider">
                        ${trending.map(r => `
                            <div class="recipe-card ${r.isPro ? 'pro-locked' : ''}" onclick="attemptOpenRecipe(${r.id})">
                                <img src="${r.image}" alt="${r.title}">
                                ${r.isPro ? '<div class="lock-icon">🔒</div>' : ''}
                                <div class="card-info">
                                    <span class="tag">${r.tag}</span>
                                    <h4>${r.title}</h4>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </section>
            `;
        }

        // --- CATEGORICAL SECTIONS ---
        const categories = ["Ghana", "Africa", "Middle East", "South America", "Asian", "Breakfast", "Desserts", "Luxury"];
        categories.forEach(cat => {
            const catRecipes = searchedRecipes.filter(r => r.category.includes(cat));
            if (catRecipes.length) {
                feed.innerHTML += `
                    <section class="vertical-section">
                        <div class="section-header"><h3>${getCategoryEmoji(cat)} ${cat}</h3></div>
                        <div class="recipe-list">
                            ${catRecipes.map(r => generateRecipeListItem(r)).join('')}
                        </div>
                    </section>
                `;
            }
        });

        // --- ALL THE REST ---
        feed.innerHTML += `
            <section class="vertical-section" style="margin-top:20px;">
                <div class="section-header"><h3>🍛 Explore All</h3></div>
                <div class="recipe-list">
                    ${searchedRecipes.map(r => generateRecipeListItem(r)).join('')}
                </div>
            </section>
        `;

    } else {
        // --- SINGLE FILTER VIEW ---
        const filtered = searchedRecipes.filter(r => r.category.includes(currentFilter));
        feed.innerHTML = `
            <section class="vertical-section">
                <div class="section-header"><h3>Showing: ${currentFilter}</h3></div>
                <div class="recipe-list">
                    ${filtered.length ? filtered.map(r => generateRecipeListItem(r)).join('') : '<p style="padding:20px;">No recipes found.</p>'}
                </div>
            </section>
        `;
    }
}

function getCategoryEmoji(cat) {
    const emojis = { "Ghana": "🇬🇭", "Africa": "🌍", "Middle East": "🥙", "South America": "🇧🇷", "Asian": "🍜", "Breakfast": "🌅", "Desserts": "🍰", "Luxury": "💎" };
    return emojis[cat] || "🍛";
}

function generateRecipeListItem(r) {
    return `
        <div class="recipe-item" onclick="attemptOpenRecipe(${r.id})">
            <img src="${r.image}" alt="${r.title}">
            <div class="item-info">
                <div style="display:flex; justify-content:space-between; align-items:center;">
                    <h4 style="margin:0;">${r.title}</h4>
                    ${r.isPro ? '<span class="pro-badge">PRO</span>' : ''}
                </div>
                <p>⏱️ ${r.time} • ${r.difficulty}</p>
            </div>
        </div>
    `;
}

function attemptOpenRecipe(id) {
    const recipe = sampleRecipes.find(r => r.id === id);
    if (recipe.isPro && !isProUser) {
        openUpgrade();
    } else {
        openRecipe(id);
    }
}

function openRecipe(id) {
    haptic();
    const recipe = sampleRecipes.find(r => r.id === id);
    const overlay = document.getElementById('recipe-overlay');
    
    const embedUrl = `https://www.youtube-nocookie.com/embed/${recipe.youtubeId}?rel=0&modestbranding=1&enablejsapi=1`;

    overlay.innerHTML = `
        <div class="overlay-header">
            <button class="close-overlay" onclick="closeRecipe()">✕</button>
            <h3>${recipe.title}</h3>
        </div>
        <div class="recipe-detail-content">
            <div class="video-container" style="background:#000; position:relative; padding-bottom:56.25%; height:0; overflow:hidden;">
                <iframe src="${embedUrl}" 
                        style="position:absolute; top:0; left:0; width:100%; height:100%; border:0;"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowfullscreen title="ChefMaster Tutorial">
                </iframe>
            </div>
            <div style="padding:24px;">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
                    <h2 style="font-size:28px; margin:0; font-family:'Playfair Display', serif;">${recipe.title}</h2>
                    <button onclick="startCookingMode(${id})" class="start-prep-btn">Start Cooking 👨‍🍳</button>
                </div>
                <div class="meta" style="color:var(--text-muted); margin-bottom:25px; font-weight:600; display:flex; gap:15px;">
                    <span>⏱️ ${recipe.time}</span>
                    <span>👨‍🍳 ${recipe.difficulty}</span>
                    <span>🌍 ${recipe.category}</span>
                </div>
                
                <h3 class="section-title">🛒 Ingredients</h3>
                <div class="ingredients-grid">
                    ${recipe.ingredients.map(i => `
                        <div class="ingredient-box" onclick="addToList('${i}')">
                            <span>${i}</span>
                            <span class="add-plus">+</span>
                        </div>
                    `).join('')}
                </div>

                <h3 class="section-title" style="margin-top:30px;">👨‍🍳 Instructions</h3>
                <div class="steps-list">
                    ${recipe.steps.map((s, idx) => `
                        <div class="step-card">
                            <span class="step-circle">${idx + 1}</span>
                            <p>${s}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('active'), 10);
    speak(`Excellent choice! This is ${recipe.title}. I've set up the tutorial and ingredient list for you.`);
}

let cookingStep = 0;
let currentCookingRecipe = null;

function startCookingMode(id) {
    haptic();
    currentCookingRecipe = sampleRecipes.find(r => r.id === id);
    cookingStep = 0;
    const overlay = document.getElementById('cooking-mode-overlay');
    renderCookingStep();
    overlay.classList.remove('hidden');
    setTimeout(() => overlay.classList.add('active'), 10);
    speak("Entering cooking mode. Step 1: " + currentCookingRecipe.steps[0]);
}

function renderCookingStep() {
    const content = document.getElementById('cooking-content');
    const step = currentCookingRecipe.steps[cookingStep];
    const total = currentCookingRecipe.steps.length;
    
    content.innerHTML = `
        <div class="cooking-step-card">
            <div class="step-progress">Step ${cookingStep + 1} of ${total}</div>
            <h2 class="step-text">${step}</h2>
            <div class="cooking-controls">
                ${cookingStep > 0 ? '<button onclick="prevStep()" class="cook-btn secondary">Prev</button>' : '<span></span>'}
                ${cookingStep < total - 1 ? 
                    `<button onclick="nextStep()" class="cook-btn">Next Step →</button>` : 
                    `<button onclick="finishCooking()" class="cook-btn finish">Finish! 🎉</button>`}
            </div>
        </div>
    `;
}

function nextStep() {
    haptic();
    cookingStep++;
    renderCookingStep();
    speak(currentCookingRecipe.steps[cookingStep]);
}

function prevStep() {
    haptic();
    cookingStep--;
    renderCookingStep();
}

function finishCooking() {
    haptic();
    speak("Congratulations! You've finished cooking the " + currentCookingRecipe.title + ". Don't forget to take a photo!");
    closeCookingMode();
    // Award achievement
    updateAchievements();
}

function closeCookingMode() {
    const o = document.getElementById('cooking-mode-overlay');
    o.classList.remove('active');
    setTimeout(() => o.classList.add('hidden'), 500);
}

function closeRecipe() {
    const o = document.getElementById('recipe-overlay');
    o.classList.remove('active');
    setTimeout(() => o.classList.add('hidden'), 500);
}

function haptic() { if ('vibrate' in navigator) navigator.vibrate(15); }

function checkOnboarding() {
    if (!localStorage.getItem('chefmaster_onboarded')) {
        document.getElementById('onboarding-overlay').classList.remove('hidden');
    } else {
        document.getElementById('splash').classList.add('hidden');
        document.getElementById('main-content').classList.remove('hidden');
    }
}

function nextOnboarding(slide) {
    haptic();
    const slides = document.querySelectorAll('.onboarding-slide');
    slides.forEach(s => s.classList.remove('active'));
    slides[slide - 1].classList.add('active');
}

function startApp() {
    haptic();
    localStorage.setItem('chefmaster_onboarded', 'true');
    document.getElementById('onboarding-overlay').classList.add('hidden');
    document.getElementById('splash').classList.add('hidden');
    document.getElementById('main-content').classList.remove('hidden');
}

const shoppingList = JSON.parse(localStorage.getItem('chef_shopping')) || [];
function addToList(i) {
    haptic();
    if(!shoppingList.includes(i)){
        shoppingList.push(i);
        localStorage.setItem('chef_shopping', JSON.stringify(shoppingList));
        speak("Added " + i + " to your shopping list.");
    }
}

function openShopping(e){
    if(e) e.preventDefault();
    haptic();
    const o = document.getElementById('shopping-overlay');
    o.classList.remove('hidden');
    setTimeout(() => o.classList.add('active'), 10);
    renderShopping();
}

function closeShopping(){
    const o = document.getElementById('shopping-overlay');
    o.classList.remove('active');
    setTimeout(() => o.classList.add('hidden'), 500);
}

function renderShopping(){
    const c = document.getElementById('shopping-items');
    c.innerHTML = shoppingList.length ? shoppingList.map((i,idx) => `<div class="shopping-item"><span>✅ ${i}</span><button onclick="removeFromList(${idx})" style="color:red; background:none; border:none; font-size:18px;">✕</button></div>`).join('') : "<div class='empty-state'>Your list is empty!</div>";
}

function removeFromList(idx){
    shoppingList.splice(idx, 1);
    localStorage.setItem('chef_shopping', JSON.stringify(shoppingList));
    renderShopping();
}

function speak(t){ if('speechSynthesis' in window){ window.speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t); u.rate = 1.0; u.pitch = 1.0; window.speechSynthesis.speak(u); } }

function openProfile(e) {
    if(e) e.preventDefault();
    haptic();
    const o = document.getElementById('profile-overlay');
    o.classList.remove('hidden');
    setTimeout(() => o.classList.add('active'), 10);
}

function closeProfile() {
    const o = document.getElementById('profile-overlay');
    o.classList.remove('active');
    setTimeout(() => o.classList.add('hidden'), 500);
}

function openUpgrade() {
    haptic();
    const o = document.getElementById('upgrade-overlay');
    o.classList.remove('hidden');
    setTimeout(() => o.classList.add('active'), 10);
}

function closeUpgrade() {
    const o = document.getElementById('upgrade-overlay');
    o.classList.remove('active');
    setTimeout(() => o.classList.add('hidden'), 500);
}

function startPayment() {
    haptic();
    const loading = document.getElementById('payment-loading');
    loading.classList.remove('hidden');
    setTimeout(() => {
        isProUser = true;
        localStorage.setItem('chefmaster_pro', 'true');
        loading.classList.add('hidden');
        closeUpgrade();
        renderAll();
        speak("Payment successful! You are now a ChefMaster Pro member.");
    }, 2500);
}

function updateAchievements() {
    const current = parseInt(localStorage.getItem('chef_cooked_count') || 0);
    localStorage.setItem('chef_cooked_count', current + 1);
}

function initAIChat(){
    const tray = document.getElementById('ai-chat-overlay');
    const input = document.getElementById('ai-input');
    const send = document.getElementById('send-btn');
    const hist = document.getElementById('chat-history');
    
    document.querySelectorAll('.ai-trigger').forEach(b => {
        b.onclick = () => { tray.classList.remove('hidden'); setTimeout(() => tray.classList.add('active'), 10); };
    });
    
    tray.querySelector('.close-overlay').onclick = () => { tray.classList.remove('active'); setTimeout(() => tray.classList.add('hidden'), 500); };
    
    send.onclick = () => {
        const t = input.value.toLowerCase();
        if(!t) return;
        
        const userMsg = document.createElement('div');
        userMsg.className = 'chat-bubble user'; 
        userMsg.textContent = input.value;
        hist.appendChild(userMsg); 
        input.value = '';
        hist.scrollTop = hist.scrollHeight;

        setTimeout(() => {
            let response = "I'm not sure about that. Try asking about a recipe or saying 'Quick dinner'!";
            
            if(t.includes("chicken")) response = "I have a great Honey Garlic Chicken recipe! It only takes 18 minutes. Would you like me to show you?";
            else if(t.includes("quick") || t.includes("fast")) response = "The Scrambled Eggs or French Toast are super fast! Both ready in under 12 minutes.";
            else if(t.includes("spicy") || t.includes("pepper")) response = "You should try the Spicy Shakshuka or the Jollof Rice!";
            else if(t.includes("pro") || t.includes("masterclass")) response = "Pro members get access to my Wagyu Steak and Lobster Masterclasses. They are incredible!";
            else if(t.includes("ghana")) response = "I love Ghanaian food! You must try the Waakye, Banku, or the spicy Kelewele snacks.";
            else if(t.includes("waakye")) response = "Waakye is a Ghanaian favorite! It's rice and beans boiled with special waakye leaves. I have an authentic recipe for it!";
            else if(t.includes("brazil") || t.includes("picanha")) response = "Ah, Picanha! The king of Brazilian BBQ. It's in the South America category.";
            
            const aiMsg = document.createElement('div');
            aiMsg.className = 'chat-bubble ai'; 
            aiMsg.textContent = response;
            hist.appendChild(aiMsg); 
            speak(response);
            hist.scrollTop = hist.scrollHeight;
        }, 800);
    };
}

initAIChat();
registerServiceWorker();

function registerServiceWorker() { if ('serviceWorker' in navigator) { navigator.serviceWorker.register('sw.js'); } }
