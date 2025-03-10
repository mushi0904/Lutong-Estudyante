document.addEventListener("DOMContentLoaded", () => {

  const menuToggle = document.querySelector(".menu-toggle")
  const navLinks = document.querySelector(".nav-links")
  const dropdowns = document.querySelectorAll(".dropdown")
  const nestedDropdowns = document.querySelectorAll(".nested-dropdown")
  const allRecipesLink = document.querySelector(".nav-item")
  const exploreButton = document.querySelector(".explore-button")
  const searchIcon = document.querySelector(".search-icon")
  const recipeGrid = document.querySelector(".recipe-grid")
  const featuredRecipesTitle = document.querySelector(".featured-recipes h2")

  const modalContainer = document.createElement("div")
  modalContainer.className = "recipe-modal-container"
  document.body.appendChild(modalContainer)

  // Create search modal
  const searchModal = document.createElement("div")
  searchModal.className = "recipe-modal-container"
  searchModal.innerHTML = `
    <div class="recipe-modal">
      <div class="recipe-modal-content">
        <span class="close-modal">&times;</span>
        <div class="recipe-modal-header">
          <h2>Search Recipes</h2>
          <input type="text" id="search-input" placeholder="Enter recipe name, or method..." class="search-input">
        </div>
        <div id="search-results" class="recipe-grid">
          <!-- Search results will appear here -->
        </div>
      </div>
    </div>
  `
  document.body.appendChild(searchModal)

  // basta dito mag lalagay recipe
  const recipeData = {
    breakfast: [
      {
        title: "Tapsilog (Tapa, Sinangag, at Itlog)",
        description: "The word tapsilog stands for Tapa, Sinangag, at itlog.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2012/09/pork-tapsilog-recipe-730x1043.jpg",
        video: "https://www.youtube.com/embed/E2uATy7iKkg",
        ingredients: [
          "200g beef tapa (cured beef)",
          "2 cloves garlic, minced",
          "2 cups cooked rice (preferably day-old rice)",
          "2 eggs",
          "1 tbsp soy sauce",
          "1 tbsp vinegar",
          "1 tsp sugar",
          "Salt and pepper to taste",
          "Cooking oil",
        ],
        steps: [
          "Marinate the Beef Tapa: Sa isang bowl, mix soy sauce, vinegar, sugar, salt, and pepper. Ilagay ang beef tapa and marinate for at least 30 minutes.",
          "Cook the Beef Tapa: Heat oil sa frying pan. I-fry ang beef tapa hanggang mag-brown at malutong ang edges. Set aside.",
          "Sinangag (Garlic Fried Rice): Sa same frying pan, add a little oil and sauté the minced garlic hanggang mag-golden brown. Ilagay ang rice at haluin hanggang magka-brown ang rice. Add salt to taste.",
          "Fry the Eggs: Sa ibang pan, fry the eggs sunny side up or scrambled, depende sa preference.",
          "Assemble: Sa plate, ilagay ang sinangag, beef tapa, at itlog. Pwede mo itong i-serve with atchara or suka on the side.",
        ],
      },
      {
        title: "Longsilog (Longganisa, Sinangag, at Itlog)",
        description:
          "delicious breakfast than the classic –silog meal –– any meat you cook with eggs and fried garlic rice.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2021/06/longsilog.jpg",
        video: "https://www.youtube.com/embed/uXi6QDOdhGg",
        ingredients: [
          "4 pieces longganisa (Filipino sausage)",
          "2 cups cooked rice (preferably day-old rice)",
          "2 eggs",
          "2 cloves garlic, minced",
          "Salt and pepper to taste",
          "Cooking oil",
        ],
        steps: [
          "Cook the Longganisa: Sa frying pan, maglagay ng konting oil at lutuin ang longganisa over medium heat for about 10 minutes, or until golden brown and cooked through. Pwede mo silang i-prick gamit ang fork para hindi mag-burst.",
          "Sinangag (Garlic Fried Rice): Sa pan, maglagay ng konting oil at i-sauté ang garlic hanggang maging golden brown. Ilagay ang day-old rice at haluin. Add salt and pepper to taste. I-serve once evenly heated.",
          "Fry the Eggs: Sa ibang pan, i-fry ang itlog according to your preference.",
          "Assemble: Plate the rice, longganisa, and egg. Pwedeng i-serve with a side of tomato, atchara, or vinegar for dipping.",
        ],
      },
    ],
    lunch: [
      {
        title: "Chicken curry ",
        description: "A flavorful dish featuring tender chicken in a creamy coconut milk-based sauce infused with aromatic spices like turmeric, ginger, and garlic, or curry powder.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2018/10/Filipino-Style-Chicken-Curry-Recipe.jpg",
        video: "https://www.youtube.com/embed/7XTfubpo5Yo",
        ingredients: [
          "2 lbs. manok, hiniwa into serving pieces",
          "1 tablespoon curry powder",
          "1 piraso patatas, cubed",
          "4 cloves bawang, minced",
          "2 stalks celery, hiniwa",
          "1 piraso red bell pepper, hiniwa",
          "2 piraso long green pepper",
          "1 piraso sibuyas, chopped",
          "2 thumbs luya, hiniwa into strips",
          "2 cups gata (coconut milk)",
          "1/2 cup all-purpose cream (optional)",
          "1 cup tubig",
          "Fish sauce at ground black pepper, to taste",
        ],
        steps: [
          "I-prepare ang mga ingredients: Hiwain ang manok into serving pieces, at i-cube ang patatas. Hiwain din ang celery, red bell pepper, long green pepper, sibuyas, at luya into strips.",
          "Magluto ng manok: Sa isang malaking kawali o kaserola, igisa ang bawang at sibuyas sa konting mantika hanggang sa mag-golden brown. Idagdag ang manok at lutuin hanggang maging golden brown din.",
          "Ilagay ang curry powder: Ihalo ang curry powder sa manok at i-mix nang maayos. Lutoin ng ilang minuto para maghalo ang flavors.",
          "Ilagay ang mga gulay: Isunod ang patatas, celery, red bell pepper, at long green pepper. Haluin at lutuin ng mga 2-3 minuto.",
          "Ilagay ang liquid ingredients: Ibuhos ang gata (coconut milk) at tubig sa kawali. Haluin at hayaang kumulo. Kapag kumulo na, hinaan ang apoy at lutuin ng mga 20-30 minuto o hanggang sa maluto ang manok at patatas.",
          "Timplahan: Huwag kalimutang timplahan ng fish sauce at ground black pepper ayon sa iyong panlasa. Kung gusto mo ng creamy na sabaw, pwede mong idagdag ang all-purpose cream at haluin.",
          "I-serve: Pag luto na, i-serve at enjoyin ang iyong masarap na curry na manok!",
        ],
      },
      {
        title: "Adobong Manok (Chicken Adobo)",
        description: "Chicken Adobo is an authentic Filipino dish and is one of the mostly recognized Filipino foods.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2024/04/adobo-in-a-pan_-730x774.jpg",
        video: "https://www.youtube.com/embed/FWjp0ieChzs",
        ingredients: [
          "1 kg Chicken (cut into parts)",
          "1 medium Onion, sliced",
          "1 head Garlic, minced",
          "1/4 cup Soy sauce",
          "1/4 cup Vinegar",
          "2-3 Bay leaves",
          "1 tsp Peppercorns",
          "1-2 tbsp cooking oil",
          "1-2 tbsp Brown sugar (optional)",
          "1 cup Water",
        ],
        steps: [
          "Sa isang bowl, i-marinade ang manok sa soy sauce, vinegar, minced garlic, at peppercorns. (Leave it for about 15-30 minutes.)",
          "Sa isang pan, maglagay ng oil at i-sauté ang sibuyas at garlic hanggang mag-golden brown.",
          "Ilagay ang manok (kasama ang marinade) sa pan, at haluin.",
          "Idagdag ang bay leaves at water, at pakuluan. Once kumulo, hinaan ang apoy at hayaan itong mag-simmer for about 30-40 minutes or until the chicken is tender.",
          "Optional: Kung nais mo ng medyo matamis na flavor, magdagdag ng brown sugar at haluin.",
          "Timplahan ng asin o soy sauce ayon sa iyong panlasa.",
          "Serve with hot rice!",
        ],
      },
    ],
    dinner: [
      {
        title: "Sisig",
        description: "Pork sisig is a popular Filipino dish. It can be considered as a main dish or an appetizer.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2020/11/Sisig-recipe-1-730x487.jpg",
        video: "https://www.youtube.com/embed/gWSWtikr9g",
        ingredients: [
          "1/2 kilo pork belly (inihaw or boiled)",
          "1/4 kilo pork ears (hiniwa at pinakuluan)",
          "1 onion, finely chopped (sibuyas)",
          "2-3 cloves garlic, minced (bawang)",
          "2-3 green chilies (siling pang-sigang or labuyo), chopped",
          "1/4 cup soy sauce (toyo)",
          "1-2 tablespoons vinegar (suka)",
          "1 egg (itlog)",
          "1/4 cup mayonnaise (optional but masarap!)",
          "1-2 tablespoons calamansi (or lemon) juice",
          "Salt and pepper to taste (asin at paminta)",
          "Oil for frying (mantika)",
        ],
        steps: [
          "Prepare the Pork Boil the pork belly and pork ears until tender (about 30-40 minutes). Then, grill or pan-fry the pork until crispy and golden brown. Hiwain ng maliliit na piraso.",
          "Saute the Aromatics Sa isang kawali, magpainit ng konting mantika. I-sauté ang bawang at sibuyas hanggang maging malambot at mabango.",
          "Mix the Pork Ihalo ang inihaw na pork belly at pork ears sa kawali. Timplahan ng toyo, suka, at calamansi juice. I-mix ng maigi.",
          "Add the Heat Ihalo ang chopped green chilies. If you want it spicier, you can add more labuyo or siling pang-sigang.",
          "Season Timplahan ng asin at paminta ayon sa iyong panlasa.",
          "Finish with Egg & Mayo Pagkatapos, maglagay ng isang itlog at haluin ng mabilis hanggang mag-scramble. Optional, dagdagan ng mayonnaise para sa extra creamy texture.",
          "Serve it on a sizzling plate or a regular plate if you don't have one. Pwede ring maglagay ng konting calamansi sa ibabaw ",
        ],
      },
      {
        title: "Pakbet Recipe (Taglish Version)",
        description:
          "Pinakbet Tagalog is a Filipino vegetable dish. It is composed of a variety of vegetables and it also has a protein component.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2019/01/Pinakbet-Tagalog-Recipe.jpg",
        video: "https://www.youtube.com/embed/xNLonKXMYYw",
        ingredients: [
          "1/2 kilo pork belly, sliced into bite-sized pieces (baboy)",
          "1/2 cup shrimp paste (bagoong)",
          "2 medium tomatoes, sliced (kamatis)",
          "1 onion, chopped (sibuyas)",
          "1/4 cup water (tubig)",
          "1/2 kilo mixed vegetables",
          "1 medium eggplant, sliced (talong)",
          "1 medium bitter melon (ampalaya), sliced thinly",
          "1 medium squash, peeled and cubed (kalabasa)",
          "1/2 cup string beans (sitaw), cut into 2-inch pieces",
          "1 small okra, sliced (okra)",
          "1-2 long green chilies (siling pang sigang)",
          "Salt and pepper to taste (asin at paminta)",
        ],
        steps: [
          "Prepare the Pork Sa isang kawali, magpainit ng konting mantika. I- fry ang pork belly until slightly crispy at mag-brown. Set aside.",
          "Sauté the Aromatics Sa parehong kawali, mag-sauté ng sibuyas at kamatis hanggang maging malambot at medyo nagkaka-juicy. Add the shrimp paste (bagoong) and cook for another 2-3 minutes to release its flavor.",
          "Add the Water Maglagay ng tubig (around 1/4 cup) sa kawali, then mix everything well. Let it simmer for about 5 minutes.",
          "Now, ilagay ang mga gulay: kalabasa, sitaw, talong, ampalaya, and okra. Stir gently. Make sure the vegetables are covered with the shrimp paste mixture.",
          "Cover the kawali and let it simmer for 5-10 minutes, or hanggang maluto ang mga gulay. If needed, add more water to help the vegetables cook. Timplahan ng asin at paminta sa iyong panlasa.",
          "Add the green chilies for a slight spicy kick. If you like it extra spicy, you can cut the chilies open before adding them.",
          "Pag luto na ang mga gulay, serve it warm! Pakbet is usually served with rice and is best enjoyed with your favorite dipping sauce like fish sauce or soy sauce.",
        ],
      },
    ],
    dessert: [
      {
        title: "Leche Flan",
        description:
          "Leche Flan is a dessert made-up of eggs and milk with a soft caramel on top. It resembles crème caramel and caramel custard.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2009/07/Leche-Flan_-jpg.webp",
        video: "https://www.youtube.com/embed/vN5G2iBUHO0",
        ingredients: [
          "1 can (390g) condensed milk (condensada)",
          "1 can (370ml) evaporated milk (evaporada)",
          "6 large eggs (itlog)",
          "1 tsp vanilla extract (optional)",
          "1 cup white sugar (asukal)",
          "1/4 cup water (tubig)",
        ],
        steps: [
          "Make the Caramel: Sa isang pan, i-combine ang asukal at tubig. I-heat until mag-melt ang asukal at maging golden brown. Be careful not to burn it. Pag ready na, i-pour sa lalamangan (mold or llanera). Let it cool.",
          "Prepare the Egg Mixture: Sa isang malaking bowl, i-combine ang condensed milk, evaporated milk, at itlog. Whisk until well-blended. If you want a richer flavor, pwede mong idagdag ang vanilla extract.",
          "Strain the Mixture: Para sure na smooth ang flan, i-strain ang mixture using a fine mesh sieve bago i-pour sa llanera na may caramel.",
          "Steam the Leche Flan: Steam it for about 45 minutes to 1 hour, or until the flan is set. Check by poking with a toothpick – if it comes out clean, done na.",
          "Cool and Serve: Let the leche flan cool down before serving. Pwede mong i-chill for a few hours para mas masarap! Slice it, then enjoy this creamy Filipino treat!",
        ],
      },

      {
        title: "Halo-Halo (Taglish Version)",
        description: "Halo-halo is a famous dessert in the Philippines.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2011/05/Special-Halo-halo.jpg",
        video: "https://www.youtube.com/embed/kby-TtBv2Vs",
        ingredients: [
          "1 cup crushed ice (yelo)",
          "1/4 cup sweetened banana (saging na saba), sliced",
          "1/4 cup sweetened jackfruit (langka), shredded",
          "1/4 cup sweetened red beans (habhab)",
          "1/4 cup sweetened coconut strings (macapuno)",
          "1/4 cup nata de coco",
          "1/4 cup leche flan (cut into cubes)",
          "1 scoop ube ice cream (ube ice cream)",
          "1 scoop vanilla ice cream (optional)",
          "1-2 tbsp condensed milk (optional)",
        ],
        steps: [
          "Prepare the Glasses: Sa isang malaking glass o bowl, maglagay ng crushed ice (yelo) bilang base. Make sure full ang glass o bowl for a refreshing feel.",
          "Layer the Ingredients: I-arrange ang mga sweetened banana, jackfruit, red beans, coconut strings, nata de coco, and leche flan on top of the ice.",
          "Add the Ice Cream: Top it with 1 scoop of ube ice cream. Pwede ring maglagay ng vanilla ice cream if you like it extra creamy!",
          "Sweeten It: Drizzle with condensed milk para sa tamis. Pwede mo ring dagdagan ng sugar kung gusto mo ng mas matamis.",
          "Mix and Enjoy: I-mix all the ingredients together and enjoy your refreshing Halo-Halo. Pwede kang magdagdag ng more ice cream or toppings depende sa iyong gusto!",
        ],
      },
    ],
    chicken: [
      {
        title: "Misua soup with meatballs",
        description: " Misua with bola bola is a Filipino soup dish that features thin noodles called misua and meatballs (bola bola) made from ground pork.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2018/04/pork-bola-bola-soup-recipe.jpg",
        video: "https://www.youtube.com/embed/g2OhPW6UYzA",
        ingredients: [
          "1 lb. giniling na baboy (ground pork)",
          "1 itlog",
          "3/4 cup bread crumbs",
          "1 malaking patola (loofah), balatan at hiniwa",
          "2 ounces misua noodles",
          "1 (4 oz.) lata ng tomato sauce",
          "1 bungkos spring onions, chopped",
          "6 cloves bawang, dinikdik (crushed)",
          "1 medium yellow onion, minced",
          "1 teaspoon asin",
          "2 tablespoons fish sauce",
          "1/4 teaspoon ground black pepper",
          "6 cups tubig",
          "1 piraso beef cube",
          "6 tablespoons mantika (cooking oil)",
        ],
        steps: [
          "I-prepare ang mga ingredients: Hiwain ang patola, spring onions, bawang, at sibuyas. Ihanda rin ang giniling na baboy at bread crumbs sa isang malaking bowl.",
          "Gumawa ng meatballs: Sa isang bowl, ihalo ang giniling na baboy, itlog, bread crumbs, asin, at ground black pepper. Haluin mabuti at mag-form ng maliliit na bola (meatballs).",
          "Magluto ng meatballs: Sa isang kawali, painitin ang mantika. I-prito ang meatballs hanggang maging golden brown. Itabi muna.",
          "Gisa: Sa parehong kawali, igisa ang bawang at sibuyas hanggang mag-soft at maging fragrant. Idagdag ang tomato sauce at ihalo nang mabuti.",
          "Maglagay ng tubig: Idagdag ang 6 cups ng tubig at hayaang kumulo. Pag kumulo na, ilagay ang beef cube at haluin hanggang matunaw ito.",
          "Maglagay ng misua noodles at patola: Ilagay ang misua noodles at patola sa sabaw. Pakuluin ng ilang minuto hanggang maluto ang misua at patola.",
          "Ibalik ang meatballs: Pagkatapos, ibalik ang mga meatballs sa sabaw at pakuluin ng mga 5-7 minuto.",
          "Timplahan: Ilagay ang fish sauce at timplahan ng asin at pepper ayon sa iyong panlasa. Haluin at lutuin pa ng ilang minuto hanggang maghalo ang lahat ng flavors.",
          "I-serve: Garnish with chopped spring onions bago i-serve. Enjoy!",
        ],
      },
      {
        title: "Chicken Tinola",
        description: "A soup made from chicken, simmered in water, usually with various other ingredients.",
        image: "https://images.yummy.ph/yummy/uploads/2023/03/KNR_0035-500x360.jpg",
        video: "https://www.youtube.com/embed/RwVCI1SP5A4",
        ingredients: [
          "1 whole chicken (manok), cut into serving pieces",
          "1 medium onion (sibuyas), sliced",
          "3 cloves garlic (bawang), minced",
          "1 thumb-sized ginger (luya), sliced into thin strips",
          "2 medium potatoes (patatas), sliced thinly",
          "1 small green papaya (papaya), peeled and sliced",
          "2 cups spinach or malunggay leaves (dahon ng malunggay or spinach)",
          "4 cups chicken broth or water (sabaw o tubig)",
          "2 tablespoons fish sauce (patis)",
          "1 tablespoon soy sauce (toyo)",
          "Salt and pepper to taste (asin at paminta)",
          "1 tablespoon cooking oil (mantika)",
        ],
        steps: [
          "Sauté Aromatics: Magpainit ng mantika sa isang malaking pot. I-sauté ang bawang, sibuyas, at luya until fragrant.",
          "Cook the Chicken: Ilagay ang manok and cook for a few minutes until slightly browned. Timplahan ng toyo at patis, then mix well.",
          "Add the Broth and Vegetables: Pour in the chicken broth or water. Bring it to a boil, then lower the heat and simmer for about 20 minutes or until the chicken is tender. Add the sliced papaya and potatoes, then cook until tender as well.",
          "Add the Greens: Once the vegetables are cooked, add the malunggay or spinach. Let it cook for a few minutes, then season with salt and pepper.",
          "Serve: Ready to serve with warm rice. Enjoy your Chicken Tinola – a comforting, nutritious Filipino soup!",
        ],
      },
    ],
    pork: [
      {
        title: "Letchon Kawali",
        description: "Quick and easy pork stir fry with vegetables.",
        image: "https://www.seriouseats.com/thmb/orl1xkPajYxzsOZwkooPtdYvM-M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210508-lechon-kawali-melissa-hom-2-inchChunks-seriouseats-1d53c12cee234305b921362e2106bf29.jpg",
        video: "https://www.youtube.com/embed/bs0YWqHPURk",
        ingredients: [
          "1 kilo pork belly (baboy, hiniwa into chunks)",
          "2-3 cloves garlic (bawang), smashed",
          "1 onion (sibuyas), quartered",
          "2-3 bay leaves (dahon ng laurel)",
          "1 tablespoon salt (asin)",
          "1/2 teaspoon peppercorns (paminta)",
          "2 tablespoons soy sauce (toyo)",
          "Water (tubig, enough to cover the pork)",
          "Cooking oil for frying (mantika)",
        ],
        steps: [
          "Boil the Pork: Sa isang malaking pot, ilagay ang pork belly, garlic, onion, bay leaves, salt, peppercorns, and soy sauce. Add enough water to cover the pork. Pakuluan for 45 minutes to 1 hour or until the pork is tender.",
          "Dry the Pork: Once the pork is tender, let it cool down and then pat it dry with paper towels. This step is important to get crispy skin when frying.",
          "Fry the Pork: Heat oil in a deep pan for frying. Fry the pork belly chunks in hot oil until golden brown and crispy. Be careful of splattering oil. Fry in batches if necessary.",
          "Serve: Serve your Lechon Kawali with a dipping sauce of soy sauce and vinegar (toyomansi) or liver sauce. Best paired with hot rice!",
          "Serve hot with rice",
        ],
      },
      {
        title: "Pork Sinigang",
        description: "A comforting Filipino sour soup with pork and vegetables.",
        image: "https://images.yummy.ph/yummy/uploads/2019/03/sinigangbaboysamiso-recipe-1.jpg",
        video: "https://www.youtube.com/embed/3BKsDVgIw90",
        ingredients: [
          "1 kilo pork belly or pork ribs (baboy, hiniwa)",
          "1 onion (sibuyas), peeled and quartered",
          "2 medium tomatoes (kamatis), quartered",
          "1-2 long green chili peppers (siling pang sigang)",
          "1-2 tbsp fish sauce (patis)",
          "1 pack sinigang mix (optional, or you can use fresh tamarind)",
          "1 bunch kangkong (water spinach) or other greens (dahon ng kangkong)",
          "1 medium eggplant (talong), sliced",
          "1-2 radishes (labanos), sliced",
          "1-2 okra, sliced",
          "1-2 potatoes (patatas), peeled and cubed",
          "Salt and pepper to taste (asin at paminta)",
          "8-10 cups water (tubig)",
        ],
        steps: [
          "Boil the Pork: Sa isang malaking pot, ilagay ang pork belly o pork ribs at pakuluan kasama ang tubig, sibuyas, kamatis, at siling pang sigang. Let it simmer for about 45 minutes to 1 hour until the pork is tender.",
          "Add the Vegetables: Once the pork is tender, i-add ang mga gulay: eggplant, okra, labanos, and patatas. Let it cook for 10-15 minutes or until the vegetables are soft.",
          "Season the Soup: I-add ang sinigang mix (or fresh tamarind if you have), patis, and season with salt and pepper according to your taste. Adjust the sourness by adding more sinigang mix or fresh tamarind.",
          "Add the Greens: Lastly, ilagay ang kangkong or your choice of greens and cook for another 2-3 minutes.",
          "Serve: Serve your Pork Sinigang hot with steamed rice. Perfect for rainy days!",
        ],
      },
    ],
    beef: [
      {
        title: "Beef Caldereta",
        description: "a hearty Filipino beef stew with a tomato sauce base, potatoes, carrots, and other vegetables.",
        image: "https://api.lifegetsbetter.ph/uploads/recipes/featured/FamilySize-QNE-BeefCaldereta-Featured.jpg",
        video: "https://www.youtube.com/embed/RMGCWHpI9Ok",
        ingredients: [
          "1 kilo beef stew meat (karne ng baka, cut into cubes)",
          "1 onion (sibuyas), chopped",
          "2 cloves garlic (bawang), minced",
          "1 large carrot (karot), sliced",
          "1 medium potato (patatas), peeled and sliced",
          "1 red bell pepper (siling pula), chopped",
          "1 cup tomato sauce (sarsa ng kamatis)",
          "1/4 cup liver spread (dinurog na atay ng manok o baka)",
          "1/4 cup soy sauce (toyo)",
          "1/2 cup water (tubig)",
          "1/4 cup green olives (optional, olive)",
          "1-2 bay leaves (dahon ng laurel)",
          "1/2 teaspoon ground black pepper (paminta)",
          "Salt to taste (asin)",
          "2 tablespoons cooking oil (mantika)",
        ],
        steps: [
          "I-prepare ang mga ingredients: Hiwain ang patola, spring onions, bawang, at sibuyas. Ihanda rin ang giniling na baboy at bread crumbs sa isang malaking bowl.",
          "Gumawa ng meatballs: Sa isang bowl, ihalo ang giniling na baboy, itlog, bread crumbs, asin, at ground black pepper. Haluin mabuti at mag-form ng maliliit na bola (meatballs).",
          "Magluto ng meatballs: Sa isang kawali, painitin ang mantika. I-prito ang meatballs hanggang maging golden brown. Itabi muna.",
          "Gisa: Sa parehong kawali, igisa ang bawang at sibuyas hanggang mag-soft at maging fragrant. Idagdag ang tomato sauce at ihalo nang mabuti.",
          "Maglagay ng tubig: Idagdag ang 6 cups ng tubig at hayaang kumulo. Pag kumulo na, ilagay ang beef cube at haluin hanggang matunaw ito.",
          "Maglagay ng misua noodles at patola: Ilagay ang misua noodles at patola sa sabaw. Pakuluin ng ilang minuto hanggang maluto ang misua at patola.",
          "Ibalik ang meatballs: Pagkatapos, ibalik ang mga meatballs sa sabaw at pakuluin ng mga 5-7 minuto.",
          "Timplahan: Ilagay ang fish sauce at timplahan ng asin at pepper ayon sa iyong panlasa. Haluin at lutuin pa ng ilang minuto hanggang maghalo ang lahat ng flavors.",
          "I-serve: Garnish with chopped spring onions bago i-serve. Enjoy!",
        ],
      },
      {
        title: "Beef Tapa",
        description: "dried or cured beef, pork, mutton, venison or horse meat,",
        image: "https://www.maggi.ph/sites/default/files/srh_recipes/b807d01e43152f9312051691ae1d6cd8.jpg",
        video: "https://www.youtube.com/embed/YGNL4J8kY-g",
        ingredients: [
          "1/2 kilo beef sirloin or tenderloin, thinly sliced (karne ng baka, hiniwa ng     pino)",
          "1/4 cup soy sauce (toyo)",
          "1/4 cup vinegar (suka)",
          "3 cloves garlic (bawang), minced",
          "1 tablespoon sugar (asukal)",
          "1 teaspoon ground black pepper (paminta)",
          "1/2 teaspoon salt (asin)",
          "1/2 cup water (tubig)",
          "2 tablespoons cooking oil (mantika)",
        ],
        steps: [
          "Marinate the Beef: Sa isang bowl, i-mix ang soy sauce, vinegar, garlic, sugar, black pepper, and salt. I-marinade ang beef slices in the mixture for at least 30 minutes to 1 hour (the longer, the better!).",
          "Cook the Beef: Sa isang kawali, magpainit ng mantika. I-add ang marinated beef and cook it for about 5-7 minutes or until it's cooked through and slightly crispy on the edges.",
          "Simmer: Add the water to the pan, then let it simmer for 10 minutes to absorb the flavors and make the beef tender. You can adjust the seasoning with more salt or sugar, depending on your preference.",
          "Serve: Serve your Beef Tapa with garlic rice (sinangag) and a fried egg (itlog na ma-init)! Enjoy!",
        ],
      },
    ],
    seafood: [
      {
        title: "Sinigang na hipon (Shrimp in Sour Soup)",
        description: "Easy pan-fried fish fillet with minimal ingredients.",
        image: "https://shopsarisari.com/cdn/shop/articles/Sinigang-sa-Sampalok-Hipon-697x440.jpg?v=1622757523",
        video: "https://www.youtube.com/embed/wj2mmLJluVg",
        ingredients: [
          "500g shrimp, peeled and deveined (hipon, tinanggal ang ulo at balat)",
          "1 onion (sibuyas), quartered",
          "2 tomatoes (kamatis), quartered",
          "2 long green chili peppers (siling pang-sigang)",
          "1-2 tbsp fish sauce (patis)",
          "1 pack sinigang mix (optional, or fresh tamarind if available)",
          "1 medium radish (labanos), sliced",
          "1 medium eggplant (talong), sliced",
          "1-2 okra, sliced",
          "1 bunch kangkong (water spinach) or other greens (dahon ng kangkong)",
          "8-10 cups water (tubig)",
          "Salt and pepper to taste (asin at paminta)",
        ],
        steps: [
          "Boil the Aromatics: Sa isang malaking pot, ilagay ang tubig, sibuyas, kamatis, at siling pang sigang. Pakuluan for 5-10 minutes until the vegetables soften and the flavors are released.",
          "Add the Shrimp: Ilagay ang hipon and cook for 3-5 minutes until the shrimp turns pink. Don't overcook, kasi mabilis lang maluto ang shrimp.",
          "Add the Vegetables: I-add ang mga gulay: labanos, talong, okra. Let it simmer for another 10-15 minutes or until the vegetables are tender.",
          "Season: Timplahan ng sinigang mix (or fresh tamarind if you have), patis, asin, at paminta. Adjust the sourness and seasoning based on your taste.",
          "Finish with Greens: I-add ang kangkong or any other greens, and let it cook for another 2-3 minutes.",
          "Serve: Serve your Shrimp Sinigang hot with steamed rice. Enjoy the refreshing sourness!",
        ],
      },
      {
        title: "Ginataang Hipon (Shrimp in Coconut Milk)",
        description: "A Filipino seafood soup made from shrimp (hipon) in coconut milk (gata) and spices.",
        image: "https://i.ytimg.com/vi/ICoc2ZYdhfY/maxresdefault.jpg",
        video: "https://www.youtube.com/embed/4bPe6O4n2T4",
        ingredients: [
          "500g shrimp, peeled and deveined (hipon, tinanggal ang balat at ulo)",
          "1 can (400ml) coconut milk (gata)",
          "1 onion (sibuyas), chopped",
          "3 cloves garlic (bawang), minced",
          "1 thumb-sized ginger (luya), sliced thinly",
          "2 long green chili peppers (siling pang-sigang)",
          "1 medium eggplant (talong), sliced",
          "1-2 bitter melon (ampalaya), sliced (optional)",
          "2 tablespoons fish sauce (patis)",
          "1 tablespoon cooking oil (mantika)",
          "Salt and pepper to taste (asin at paminta)",
        ],
        steps: [
          "Sauté Aromatics: Sa isang kawali, magpainit ng mantika. I-sauté ang bawang, sibuyas, at luya until fragrant and soft.",
          "Add Coconut Milk: I-pour ang coconut milk into the pan and bring it to a simmer. Let it cook for 5-7 minutes until it thickens slightly.",
          "Add the Vegetables: Ilagay ang talong and ampalaya (if using). Let it simmer until the vegetables soften, about 10 minutes.",
          "Cook the Shrimp: I-add ang hipon and cook for 3-5 minutes, or until the shrimp turns pink. Stir occasionally and make sure the shrimp is coated with the coconut milk sauce.",
          "Season: Timplahan ng patis, asin, at paminta. Adjust the seasoning according to your taste.",
          "Serve: Serve your Ginataang Hipon hot with steamed rice. Enjoy the creamy, flavorful dish!",
        ],
      },
    ],
    vegetables: [
      {
        title: "Ginisang Monggo",
        description: "Healthy vegetable stir fry that's quick and nutritious.",
        image: "https://i0.wp.com/www.russianfilipinokitchen.com/wp-content/uploads/2015/02/Ginisang-Munggo-With-Dilis-Sauteed-Mung-Beans-With-Salted-Dried-Anchovies-00.jpg",
        video: "https://www.youtube.com/embed/IoYRwGJbo4g",
        ingredients: [
          "1 cup monggo beans (mung beans) (monggo)",
          "1/2 lb pork (baboy), cut into small pieces (optional, for added flavor)",
          "1 onion (sibuyas), chopped",
          "2-3 cloves garlic (bawang), minced",
          "1 tomato (kamatis), chopped",
          "2 cups spinach (dahon ng spinach or malunggay)",
          "1 tablespoon fish sauce (patis)",
          "1 tablespoon soy sauce (toyo)",
          "1-2 long green chili peppers (siling pang sigang)",
          "6-8 cups water (tubig)",
          "Salt and pepper to taste (asin at paminta)",
          "Cooking oil (mantika)",
        ],
        steps: [
          "Cook the Monggo: Sa isang pot, pakuluan ang monggo beans with water for about 30 minutes or until it becomes soft and tender. You can also pre-soak the monggo for faster cooking.",
          "Sauté the Aromatics: Sa isang kawali, magpainit ng mantika. I-sauté ang bawang, sibuyas, at kamatis until malambot and fragrant.",
          "Add the Pork (Optional): If you're using pork, i-add ang pork and cook until lightly browned. Season with a little soy sauce.",
          "Combine with Monggo: Once the monggo beans are soft, i-combine ang ginisang mixture sa monggo pot. Add the long green chili peppers and let it simmer for 10-15 minutes.",
          "Add the Greens: Lastly, add the spinach or malunggay and simmer for another 2-3 minutes. Season with fish sauce, salt, and pepper according to your taste.",
          "Serve: Serve your Ginisang Monggo with steamed rice!",
        ],
      },
      {
        title: "Pinakbet",
        description: "Traditional Filipino vegetable dish that's easy to prepare.",
        image: "https://www.seriouseats.com/thmb/BHTueEcNShZmWVlwc4_VVmhfLYs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20210712-pinakbet-vicky-wasik-seriouseats-12-37ac6b9ea57145728de86f927dc5fef6.jpg",
        video: "https://www.youtube.com/embed/eBceXwa6qY0",
        ingredients: [
          "1/2 kilo pork belly (baboy), cut into bite-sized pieces",
          "1/4 cup shrimp paste (bagoong)",
          "1 onion (sibuyas), chopped",
          "2 tomatoes (kamatis), chopped",
          "1 medium bitter melon (ampalaya), sliced",
          "1 medium eggplant (talong), sliced",
          "1/2 kilo string beans (sitaw), cut into 2-inch pieces",
          "1 small squash (kalabasa), peeled and cubed",
          "2 tablespoons fish sauce (patis)",
          "1-2 cups water (tubig)",
          "Salt and pepper to taste (asin at paminta)",
        ],
        steps: [
          "Cook the Pork: Sa isang kawali, magpainit ng konting mantika. I-fry ang pork belly pieces until they're slightly crispy. Set aside.",
          "Sauté the Aromatics: Sa parehong kawali, i-sauté ang sibuyas at kamatis until malambot and nagrelease ng juice.",
          "Add the Shrimp Paste: I-add ang bagoong and cook for about 2-3 minutes to bring out the flavor.",
          "Combine the Vegetables: I-add ang squash, string beans, eggplant, and bitter melon. Stir everything gently to combine.",
          "Add Water and Simmer: Pour in the water and let it simmer for about 10-15 minutes until the vegetables are cooked. If needed, add more water.",
          "Season and Finish: Timplahan ng fish sauce, salt, and pepper to taste. Simmer for another 2-3 minutes to allow the flavors to meld together.",
          "Serve: Serve your Pinakbet with hot rice! It's a delicious mix of flavors with the savory shrimp paste and tender vegetables!",
        ],
      },
    ],
    meat: [], 
    appetizer: [
      {
        title: "Lumpiang Shanghai",
        description: "Filipino spring rolls filled with ground meat and vegetables.",
        image: "https://d1uz88p17r663j.cloudfront.net/original/0072fbc844f118747614f66b0956c69b_Fish_Lumpiang_Shanghai_(5).jpg",
        video: "https://www.youtube.com/embed/BIarUjm4U-0",
        ingredients: [
          "500g ground pork (giniling na baboy)",
          "1 medium carrot (karot), finely chopped",
          "1 medium onion (sibuyas), finely chopped",
          "3 cloves garlic (bawang), minced",
          "1/4 cup green onions (sibuyas na mura), chopped",
          "1 egg (itlog)",
          "2 tbsp soy sauce (toyo)",
          "1 tsp ground black pepper (paminta)",
          "1 pack spring roll wrappers (lumpia wrapper)",
          "Oil for frying (mantika)",
          "Sweet chili sauce or ketchup for dipping",
        ],
        steps: [
          "Prepare the Filling: Sa isang bowl, i-combine ang ground pork, carrots, onion, garlic, green onions, egg, soy sauce, and black pepper. Mix well until all ingredients are evenly distributed.",
          "Wrap the Lumpia: Kumuha ng isang lumpia wrapper at maglagay ng 1-2 tablespoons ng filling sa lower part. Roll it tightly, folding in the sides as you go. Seal the edge with water or beaten egg.",
          "Fry the Lumpia: Heat oil in a pan. Once hot, fry the lumpia in batches until golden brown and crispy, about 3-5 minutes.",
          "Drain and Serve: Drain excess oil on paper towels. Slice each roll diagonally and serve with sweet chili sauce or ketchup.",
        ],
      },
      {
        title: "Tokwa't Baboy",
        description: "A Filipino appetizer made with tofu and pork.",
        image: "https://yummykitchentv.com/wp-content/uploads/2023/02/tokwat-baboy-recipe-01.jpg",
        video: "https://www.youtube.com/embed/Ws2p7o9E8Jw",
        ingredients: [
          "500g firm tofu (tokwa), cubed",
          "300g pork belly (liempo), boiled and sliced",
          "1/4 cup vinegar (suka)",
          "2 tbsp soy sauce (toyo)",
          "1 onion (sibuyas), sliced",
          "2 cloves garlic (bawang), minced",
          "2-3 pieces chili peppers (siling labuyo), chopped",
          "Salt and pepper to taste (asin at paminta)",
          "Oil for frying (mantika)",
        ],
        steps: [
          "Fry the Tofu: Heat oil in a pan and fry the tofu cubes until golden brown and crispy. Drain on paper towels and set aside.",
          "Prepare the Sauce: Sa isang bowl, i-combine ang vinegar, soy sauce, onions, garlic, and chili peppers. Mix well.",
          "Combine: In a serving bowl, combine the fried tofu and sliced pork belly. Pour the sauce over the mixture.",
          "Serve: Let it sit for a few minutes to absorb the flavors before serving. Perfect as pulutan or appetizer!",
        ],
      },
    ],
    salad: [
      {
        title: "Ensaladang Talong (Eggplant Salad)",
        description: "A simple Filipino salad made with grilled eggplant.",
        image: "https://cinnamonsnail.com/wp-content/uploads/2023/04/Ensaladang-Talong-Feature-1-of-1.jpg",
        video: "https://www.youtube.com/embed/njEiCkLyZHg",
        ingredients: [
          "4 medium eggplants (talong)",
          "1 large tomato (kamatis), chopped",
          "1 medium onion (sibuyas), chopped",
          "2-3 tbsp vinegar (suka)",
          "Salt and pepper to taste (asin at paminta)",
          "Optional: 1-2 pieces chili peppers (siling labuyo), chopped",
        ],
        steps: [
          "Grill the Eggplant: I-grill ang talong until the skin is charred and the flesh is soft. You can do this over direct flame or in an oven.",
          "Peel and Mash: Once cooled, peel off the charred skin and mash the eggplant flesh with a fork.",
          "Mix Ingredients: Combine the mashed eggplant with chopped tomatoes, onions, and chili peppers (if using).",
          "Season: Add vinegar, salt, and pepper to taste. Mix well.",
          "Serve: Best served as a side dish with grilled meat or fish!",
        ],
      },
      {
        title: "Ensaladang Mangga (Green Mango Salad)",
        description: "A refreshing Filipino salad made with unripe mangoes.",
        image: "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2015/09/Ensaladang-Mangga-Wide.jpg?ssl=1",
        video: "https://www.youtube.com/embed/3Gx-5AlZuQA",
        ingredients: [
          "2-3 green mangoes (hilaw na mangga), julienned",
          "1 medium tomato (kamatis), chopped",
          "1 medium onion (sibuyas), sliced thinly",
          "2-3 tbsp fish sauce (patis)",
          "1-2 pieces chili peppers (siling labuyo), chopped",
          "Optional: 1/4 cup grated salted egg (itlog na maalat)",
        ],
        steps: [
          "Prepare the Mangoes: Peel the green mangoes and julienne them into thin strips.",
          "Combine Ingredients: In a bowl, combine the julienned mangoes, chopped tomatoes, and sliced onions.",
          "Season: Add fish sauce and chopped chili peppers. Mix well to combine all flavors.",
          "Garnish: If using, top with grated salted egg for added flavor.",
          "Serve: Best served chilled as a side dish or appetizer!",
        ],
      },
    ],
    sandwich: [
      {
        title: "Filipino Chicken Sandwich",
        description: "A simple chicken sandwich with Filipino flavors.",
        image: "https://www.kawalingpinoy.com/wp-content/uploads/2019/03/creamy-chicken-sandwich-spread-5.jpg",
        video: "https://www.youtube.com/embed/XzIc2uoQWbc",
        ingredients: [
          "2 chicken breasts (dibdib ng manok), thinly sliced",
          "2 tbsp soy sauce (toyo)",
          "1 tbsp calamansi or lemon juice",
          "1 tsp garlic powder (pulbos na bawang)",
          "1/2 tsp ground black pepper (paminta)",
          "4 slices bread (tinapay)",
          "Mayonnaise (mayonesa)",
          "Lettuce leaves (letsugas)",
          "Tomato slices (hiwa ng kamatis)",
          "Cucumber slices (hiwa ng pipino)",
          "Salt to taste (asin)",
        ],
        steps: [
          "Marinate the Chicken: Sa isang bowl, i-combine ang chicken, soy sauce, calamansi juice, garlic powder, and black pepper. Let it marinate for at least 15 minutes.",
          "Cook the Chicken: Heat a pan and cook the marinated chicken until fully cooked and slightly browned.",
          "Prepare the Bread: Spread mayonnaise on each slice of bread.",
          "Assemble: Layer lettuce, tomato slices, cucumber slices, and the cooked chicken on one slice of bread. Top with the other slice.",
          "Serve: Cut the sandwich diagonally and serve with chips or fries if desired!",
        ],
      },
      {
        title: "Corned Beef Sandwich",
        description: "A quick and easy sandwich using canned corned beef.",
        image: "https://www.seriouseats.com/thmb/H4EToSvkPiMjXilHVBHmpTehM3s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220919-Reuben-Amanda-Suarez-25-Hero-a2d20d81e56641a098e6db49b6e30b41.jpg",
        video: "https://www.youtube.com/embed/mDSMxNw180g",
        ingredients: [
          "1 can corned beef",
          "1 small onion (sibuyas), chopped",
          "2 cloves garlic (bawang), minced",
          "4 slices bread (tinapay)",
          "Mayonnaise or butter (mayonesa o mantikilya)",
          "Lettuce leaves (letsugas)",
          "Tomato slices (hiwa ng kamatis)",
          "Salt and pepper to taste (asin at paminta)",
          "1 tbsp cooking oil (mantika)",
        ],
        steps: [
          "Cook the Corned Beef: Sa isang kawali, magpainit ng mantika. I-sauté ang bawang at sibuyas until fragrant. Add the corned beef and cook for 3-5 minutes. Season with salt and pepper if needed.",
          "Prepare the Bread: Spread mayonnaise or butter on each slice of bread.",
          "Assemble: Layer lettuce, tomato slices, and the cooked corned beef on one slice of bread. Top with the other slice.",
          "Serve: Cut the sandwich diagonally and enjoy as a quick meal or snack!",
        ],
      },
    ],
    pasta: [
      {
        title: "Filipino Style Spaghetti",
        description: "Sweet-style spaghetti popular in Filipino celebrations.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2015/05/Filipino-Spaghetti-Panlasang-Pinoy.jpg",
        video: "https://www.youtube.com/embed/UhXvPGdzO3M",
        ingredients: [
          "500g spaghetti noodles",
          "500g ground pork (giniling na baboy)",
          "250g hotdogs, sliced diagonally",
          "1 large onion (sibuyas), chopped",
          "4 cloves garlic (bawang), minced",
          "1 cup ketchup",
          "1/2 cup tomato sauce",
          "1/4 cup sugar (asukal)",
          "1/4 cup grated cheese (keso)",
          "Salt and pepper to taste (asin at paminta)",
          "2 tbsp cooking oil (mantika)",
        ],
        steps: [
          "Cook the Pasta: Boil the spaghetti noodles according to package instructions until al dente. Drain and set aside.",
          "Prepare the Sauce: Sa isang kawali, magpainit ng mantika. I-sauté ang bawang at sibuyas until fragrant. Add the ground pork and cook until browned.",
          "Add Hotdogs: Ilagay ang sliced hotdogs and cook for 2-3 minutes.",
          "Add Sauces: Pour in the ketchup and tomato sauce. Add sugar and stir well. Let it simmer for 5-7 minutes.",
          "Season: Add salt and pepper to taste. Adjust sweetness if needed.",
          "Combine: Mix the cooked spaghetti with the sauce or serve the sauce on top of the noodles.",
          "Garnish: Sprinkle grated cheese on top before serving.",
        ],
      },
      {
        title: "Pancit Canton",
        description: "Filipino stir-fried noodles with vegetables and meat.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2023/10/special-pancit-canton-500x500.jpg",
        video: "https://www.youtube.com/embed/6-b6h_LoJyg",
        ingredients: [
          "500g pancit canton noodles",
          "250g chicken breast (dibdib ng manok), sliced thinly",
          "100g pork (baboy), sliced thinly",
          "1 cup cabbage (repolyo), shredded",
          "1 cup carrots (karot), julienned",
          "1 cup snap peas or green beans (sitaw)",
          "1 medium onion (sibuyas), sliced",
          "4 cloves garlic (bawang), minced",
          "3 tbsp soy sauce (toyo)",
          "2 tbsp oyster sauce",
          "1 cup chicken broth (sabaw ng manok)",
          "Salt and pepper to taste (asin at paminta)",
          "2 tbsp cooking oil (mantika)",
          "Calamansi or lemon wedges for serving",
        ],
        steps: [
          "Prepare the Noodles: Soak the pancit canton noodles in warm water for about 10 minutes or until slightly softened. Drain and set aside.",
          "Cook the Meat: Sa isang kawali, magpainit ng mantika. I-sauté ang bawang at sibuyas until fragrant. Add the chicken and pork, and cook until browned.",
          "Add Vegetables: Add the carrots, snap peas, and cabbage. Stir-fry for 2-3 minutes until vegetables are slightly tender.",
          "Add Sauces and Broth: Pour in the soy sauce, oyster sauce, and chicken broth. Bring to a simmer.",
          "Add Noodles: Add the soaked noodles to the pan and toss everything together until the noodles absorb the sauce and are fully cooked.",
          "Season: Add salt and pepper to taste.",
          "Serve: Transfer to a serving plate and serve with calamansi or lemon wedges on the side.",
        ],
      },
    ],
    baking: [
      {
        title: "Bibingka (Rice Cake)",
        description: "Traditional Filipino rice cake usually eaten during Christmas season.",
        image: "https://static01.nyt.com/images/2016/11/11/dining/COOKING-BIBINGKA1/COOKING-FILIPINO1-superJumbo.jpg",
        video:  "https://www.youtube.com/embed/JxQ_CD67XTU",
        ingredients: [
          "2 cups rice flour (galapong)",
          "1/2 cup all-purpose flour",
          "1 1/2 cups sugar (asukal)",
          "2 tbsp baking powder",
          "1/2 tsp salt (asin)",
          "3 eggs (itlog), beaten",
          "1 1/2 cups coconut milk (gata)",
          "1/4 cup butter (mantikilya), melted",
          "1/2 cup grated cheese (keso)",
          "1/4 cup salted egg (itlog na maalat), sliced",
          "plantain leaves (Dahon ng Saging) for lining",
        ],
        steps: [
          "Prepare the Oven: Preheat your oven to 350°F (175°C).",
          "Prepare the Molds: Line your baking molds or pans with plantain leaves (Dahon ng Saging).",
          "Mix Dry Ingredients: In a bowl, combine rice flour, all-purpose flour, sugar, baking powder, and salt.",
          "Add Wet Ingredients: Add beaten eggs, coconut milk, and melted butter. Mix until well combined and smooth.",
          "Pour the Batter: Pour the batter into the prepared molds, filling them about 3/4 full.",
          "Add Toppings: Top with sliced salted egg and grated cheese.",
          "Bake: Bake for 20-25 minutes or until a toothpick inserted comes out clean.",
          "Serve: Brush with additional melted butter and serve warm!",
        ],
      },
      {
        title: "Ensaymada",
        description: "Filipino sweet pastry topped with butter, sugar, and cheese.",
        image: "https://www.foxyfolksy.com/wp-content/uploads/2015/10/ensaymada-3.jpg",
        video:  "https://www.youtube.com/embed/fcOFpX-X4fU",
        ingredients: [
          "4 cups all-purpose flour",
          "1/2 cup sugar (asukal)",
          "1 tsp salt (asin)",
          "2 1/4 tsp active dry yeast",
          "1/2 cup warm milk",
          "4 eggs (itlog), beaten",
          "1/2 cup butter (mantikilya), softened",
          "For topping: 1/4 cup butter, 1/4 cup sugar, 1/4 cup grated cheese (keso)",
        ],
        steps: [
          "Activate the Yeast: In a small bowl, combine warm milk and yeast. Let it sit for 5-10 minutes until foamy.",
          "Mix Dry Ingredients: In a large bowl, combine flour, sugar, and salt.",
          "Combine Ingredients: Add the yeast mixture and beaten eggs to the dry ingredients. Mix until a dough forms.",
          "Add Butter: Gradually add the softened butter and knead until the dough is smooth and elastic.",
          "First Rise: Cover the dough and let it rise in a warm place for 1-2 hours or until doubled in size.",
          "Shape the Dough: Divide the dough into portions, roll each into a rope, and coil it into a spiral shape. Place on a baking sheet.",
          "Second Rise: Cover and let rise again for 30-45 minutes.",
          "Bake: Preheat oven to 350°F (175°C) and bake for 15-20 minutes or until golden brown.",
          "Add Toppings: While still warm, brush with butter, sprinkle with sugar, and top with grated cheese.",
        ],
      },
    ],
    grilling: [
      {
        title: "Inihaw na Liempo (Grilled Pork Belly)",
        description: "Filipino-style grilled pork belly marinated in a sweet and savory sauce.",
        image: "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/red-meats-&-red-meat-dishes/pan-grilled-liempo/pan-grilled-liempo-main-header.jpg",
        video: "https://www.youtube.com/embed/4DVio9oYo2Q",
        ingredients: [
          "1 kg pork belly (liempo), sliced into 1/2 inch thick pieces",
          "1/2 cup soy sauce (toyo)",
          "1/4 cup calamansi or lemon juice",
          "1/4 cup ketchup",
          "1/4 cup brown sugar (asukal na pula)",
          "4 cloves garlic (bawang), minced",
          "1 tsp ground black pepper (paminta)",
          "Optional: 2-3 pieces chili peppers (siling labuyo), chopped",
        ],
        steps: [
          "Prepare the Marinade: Sa isang bowl, i-combine ang soy sauce, calamansi juice, ketchup, brown sugar, garlic, black pepper, and chili peppers (if using). Mix well until sugar is dissolved.",
          "Marinate the Pork: Place the pork belly slices in the marinade, making sure each piece is well-coated. Marinate for at least 2 hours, preferably overnight in the refrigerator.",
          "Preheat the Grill: Prepare your grill to medium-high heat.",
          "Grill the Pork: Grill the marinated pork belly for 3-5 minutes per side, or until nicely charred and fully cooked. Baste with the remaining marinade while grilling.",
          "Serve: Serve hot with a dipping sauce of vinegar, soy sauce, and chopped onions (toyomansi).",
        ],
      },
      {
        title: "Inihaw na Bangus (Grilled Milkfish)",
        description: "Filipino-style grilled milkfish stuffed with tomatoes and onions.",
        image: "https://panlasangpinoy.com/wp-content/uploads/2019/04/Inihaw-na-Bangus-Panlasang-Pinoy.jpg",
        video:  "https://www.youtube.com/embed/7sI8uAfsxlY",
        ingredients: [
          "1 whole milkfish (bangus), cleaned and butterflied",
          "2 tomatoes (kamatis), chopped",
          "1 onion (sibuyas), chopped",
          "2 cloves garlic (bawang), minced",
          "1/4 cup calamansi or lemon juice",
          "2 tbsp soy sauce (toyo)",
          "1 tsp ground black pepper (paminta)",
          "Salt to taste (asin)",
          "plantain leaves (Dahon ng Saging) for wrapping (optional)",
        ],
        steps: [
          "Prepare the Fish: Clean the milkfish and butterfly it (split it open from the belly without separating the halves).",
          "Prepare the Stuffing: In a bowl, combine chopped tomatoes, onions, garlic, calamansi juice, soy sauce, black pepper, and salt.",
          "Stuff the Fish: Spread the stuffing mixture inside the butterflied fish.",
          "Wrap (Optional): If using plantain leaves (Dahon ng Saging), wrap the stuffed fish in plantain leaves (Dahon ng Saging) to keep it moist during grilling.",
          "Grill the Fish: Grill the fish for 5-7 minutes per side, or until fully cooked and the skin is crispy.",
          "Serve: Serve hot with a dipping sauce of vinegar, soy sauce, and chopped onions (toyomansi).",
        ],
      },
    ],
    roasting: [
      {
        title: "Lechon Manok (Roasted Chicken)",
        description: "Filipino-style roasted chicken marinated in a flavorful sauce.",
        image: "https://assets.unileversolutions.com/recipes-v2/248623.png",
        video: "https://www.youtube.com/embed/NdhVJwbTs0k",
        ingredients: [
          "1 whole chicken (manok), about 1.5 kg",
          "1/4 cup soy sauce (toyo)",
          "1/4 cup calamansi or lemon juice",
          "1/4 cup brown sugar (asukal na pula)",
          "4 cloves garlic (bawang), minced",
          "1 tbsp ginger (luya), minced",
          "1 tsp ground black pepper (paminta)",
          "1 tsp salt (asin)",
          "2 tbsp cooking oil (mantika)",
          "1 lemongrass stalk (tanglad), bruised",
        ],
        steps: [
          "Prepare the Marinade: Sa isang bowl, i-combine ang soy sauce, calamansi juice, brown sugar, garlic, ginger, black pepper, salt, and cooking oil. Mix well until sugar is dissolved.",
          "Marinate the Chicken: Rub the marinade all over the chicken, including inside the cavity. Place the lemongrass stalk inside the cavity. Marinate for at least 2 hours, preferably overnight in the refrigerator.",
          "Preheat the Oven: Preheat your oven to 375°F (190°C).",
          "Roast the Chicken: Place the marinated chicken on a roasting rack in a baking pan. Roast for 1 hour to 1 hour and 15 minutes, or until the chicken is fully cooked and the skin is golden brown and crispy. Baste with the remaining marinade every 20 minutes.",
          "Rest and Serve: Let the chicken rest for 10-15 minutes before carving. Serve hot with a dipping sauce of vinegar, soy sauce, and chopped onions (toyomansi).",
        ],
      },
      {
        title: "Lechon Kawali (Roasted Pork Belly)",
        description: "Filipino-style roasted pork belly with crispy skin.",
        image: "https://www.recipetineats.com/tachyon/2021/04/Slow-Roasted-Pork-Belly-with-Jus-and-Apple-Sauce-SQ.jpg",
        video: "https://www.youtube.com/embed/f3SUL7pwdKI",
        ingredients: [
          "1 kg pork belly (liempo), whole slab",
          "2 tbsp salt (asin)",
          "1 tbsp ground black pepper (paminta)",
          "5 cloves garlic (bawang), crushed",
          "3 bay leaves (dahon ng laurel)",
          "1 tbsp peppercorns (pamintang buo)",
          "Water for boiling",
          "Cooking oil for frying",
        ],
        steps: [
          "Boil the Pork: In a large pot, combine pork belly, salt, black pepper, garlic, bay leaves, and peppercorns. Add enough water to cover the pork. Bring to a boil and simmer for 45-60 minutes or until tender.",
          "Dry and Cool: Remove the pork from the pot and let it cool completely. Pat dry with paper towels and refrigerate uncovered for at least 4 hours or overnight to dry out the skin.",
          "Preheat the Oven: Preheat your oven to 400°F (200°C).",
          "Roast the Pork: Place the dried pork belly on a roasting rack in a baking pan, skin side up. Roast for 30-40 minutes or until the skin is golden brown and crispy.",
          "Rest and Serve: Let the pork rest for 10-15 minutes before slicing. Serve hot with a dipping sauce of vinegar, soy sauce, and chopped onions (toyomansi) or liver sauce.",
        ],
      },
    ],
  }

  // new categories "sauces" category
  recipeData.sauces = [
    {
      title: "Basic Tomato Sauce",
      description: "A versatile tomato sauce that can be used for pasta, pizza, or as a base for other food that needs a tomato flavor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzUwN2pCXJ3ccWlEiTW_XMwFKK4xyXCvSIbA&s",
      video: "https://www.youtube.com/embed/tPfCZrk5mGY",
      ingredients: [
        "2 tablespoons olive oil (langis ng oliba)",
        "1 onion (sibuyas), finely chopped",
        "3 cloves garlic (bawang), minced",
        "1 can (400g) crushed tomatoes (kamatis)",
        "1 teaspoon dried oregano (oregano)",
        "1 teaspoon dried basil (basil)",
        "1 teaspoon sugar (asukal)",
        "Salt and pepper to taste (asin at paminta)",
        "Fresh basil leaves for garnish (optional)",
      ],
      steps: [
        "Heat Oil: Sa isang kawali, magpainit ng olive oil over medium heat.",
        "Sauté Aromatics: I-sauté ang sibuyas until translucent, about 3-4 minutes. Add the garlic and cook for another 30 seconds until fragrant.",
        "Add Tomatoes: Pour in the crushed tomatoes and stir well.",
        "Season: Add the dried oregano, dried basil, sugar, salt, and pepper. Stir to combine.",
        "Simmer: Lower the heat and let the sauce simmer for 15-20 minutes, stirring occasionally, until it thickens slightly.",
        "Finish: Taste and adjust seasoning if needed. If using fresh basil, tear and stir in just before serving.",
        "Store: This sauce can be stored in an airtight container in the refrigerator for up to 5 days or frozen for up to 3 months.",
      ],
    },
    {
      title: "Simple Adobo Sauce",
      description: "A classic Filipino adobo sauce that can be used for marinating meat or as a cooking sauce.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKTQjFRZkDjlAjl9BbFauMp5CjXzC8Su8zAQ&s",
      video: "https://www.youtube.com/embed/NeG7zn7oWBs",
      ingredients: [
        "1/2 cup soy sauce (toyo)",
        "1/2 cup vinegar (suka)",
        "1/4 cup water (tubig)",
        "5 cloves garlic (bawang), crushed",
        "1 tablespoon whole peppercorns (pamintang buo)",
        "3 bay leaves (dahon ng laurel)",
        "1 tablespoon brown sugar (asukal na pula, optional)",
      ],
      steps: [
        "Combine Ingredients: Sa isang bowl, i-combine lahat ng ingredients: soy sauce, vinegar, water, crushed garlic, peppercorns, bay leaves, and brown sugar (if using).",
        "Mix Well: Haluin ang lahat ng ingredients until the sugar dissolves (if using).",
        "Use as Marinade: This sauce can be used as a marinade for chicken, pork, or beef. Marinate for at least 30 minutes, preferably overnight in the refrigerator.",
        "Use as Cooking Sauce: You can also use this as a cooking sauce by simmering your choice of protein in it until tender.",
        "Store: If not using immediately, store in an airtight container in the refrigerator for up to 1 week.",
      ],
    },
  ]

  recipeData.soup = [
    {
      title: "Simple Chicken Soup",
      description: "A comforting chicken soup that's perfect for cold days or when you're feeling under the weather.",
      image: "https://www.allrecipes.com/thmb/KnH1J49RJXh1i206onEtgbiUvlY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/8804-simple-chicken-gravy-ddmfs-4484-4x3-beauty-e166a14a955c49ffb4501b1eff2dcfc9.jpg",
      video: "https://www.youtube.com/embed/zttuFl8HOOA",
      ingredients: [
        "500g chicken pieces (manok), with bones",
        "1 onion (sibuyas), chopped",
        "2 carrots (karot), sliced",
        "2 celery stalks (selery), sliced",
        "2 cloves garlic (bawang), minced",
        "1 tablespoon ginger (luya), minced",
        "8 cups water or chicken broth (tubig o sabaw ng manok)",
        "2 tablespoons fish sauce (patis)",
        "Salt and pepper to taste (asin at paminta)",
        "Green onions (sibuyas na mura), chopped for garnish",
      ],
      steps: [
        "Prepare Chicken: If using a whole chicken, cut it into pieces. You can also use chicken parts like thighs or drumsticks.",
        "Sauté Aromatics: Sa isang malaking pot, magpainit ng konting oil. I-sauté ang sibuyas, bawang, at luya until fragrant.",
        "Add Chicken: Add the chicken pieces and cook for a few minutes until slightly browned.",
        "Add Liquid: Pour in the water or chicken broth. Bring to a boil, then reduce heat and simmer for 30 minutes.",
        "Add Vegetables: Add the carrots and celery. Continue to simmer for another 15 minutes or until the vegetables are tender.",
        "Season: Add fish sauce, salt, and pepper to taste.",
        "Serve: Ladle into bowls and garnish with chopped green onions. Serve hot with rice or bread.",
      ],
    },
    {
      title: "Quick Vegetable Soup",
      description: "A nutritious vegetable soup that can be made with whatever vegetables you have on hand.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScSRmR__SEpr51oGiM-fN6FWXq2XbHcqQR6A&s",
      video: "https://www.youtube.com/embed/LrKhcvZYFdQ",
      ingredients: [
        "2 tablespoons cooking oil (mantika)",
        "1 onion (sibuyas), chopped",
        "2 cloves garlic (bawang), minced",
        "2 carrots (karot), diced",
        "2 potatoes (patatas), diced",
        "1 cup cabbage (repolyo), shredded",
        "1 cup green beans (sitaw), cut into 1-inch pieces",
        "6 cups vegetable or chicken broth (sabaw)",
        "1 teaspoon dried thyme or oregano",
        "Salt and pepper to taste (asin at paminta)",
        "1 tablespoon soy sauce (toyo, optional)",
      ],
      steps: [
        "Sauté Aromatics: Sa isang malaking pot, magpainit ng mantika. I-sauté ang sibuyas at bawang until fragrant.",
        "Add Hard Vegetables: Add the carrots and potatoes. Sauté for 3-5 minutes.",
        "Add Broth: Pour in the vegetable or chicken broth. Bring to a boil, then reduce heat and simmer for 15 minutes.",
        "Add Soft Vegetables: Add the cabbage and green beans. Simmer for another 5-7 minutes until all vegetables are tender.",
        "Season: Add dried herbs, salt, pepper, and soy sauce (if using). Adjust seasoning to taste.",
        "Serve: Serve hot with bread or rice.",
      ],
    },
  ]

  recipeData.grains = [
    {
      title: "Perfect Steamed Rice",
      description: "Learn how to cook perfect steamed rice every time - a staple in Filipino meals.",
      image: "https://ambersmenu.com.ph/wp-content/uploads/2024/07/Ambers-Steamed-White-Rice.webp",
      video: "https://www.youtube.com/embed/APXDVlNd10M",
      ingredients: ["2 cups white rice (bigas)", "2 1/2 cups water (tubig)", "1/2 teaspoon salt (asin, optional)"],
      steps: [
        "Rinse the Rice: Place the rice in a bowl and rinse with cold water 2-3 times until the water runs almost clear. This removes excess starch and helps prevent the rice from becoming too sticky.",
        "Drain Well: Drain the rice well using a fine-mesh strainer.",
        "Add Water: Transfer the rice to a pot and add the measured water. If you like, add salt for flavor.",
        "Bring to a Boil: Place the pot over high heat and bring to a boil, uncovered.",
        "Reduce Heat: Once boiling, reduce the heat to low, cover the pot with a tight-fitting lid, and let it simmer for 15-18 minutes. Do not lift the lid during cooking.",
        "Rest: After the cooking time, remove the pot from heat but keep it covered. Let it rest for 5-10 minutes to allow the steam to finish cooking the rice.",
        "Fluff and Serve: Use a fork to fluff the rice gently before serving.",
      ],
    },
    {
      title: "Basic Lugaw (Rice Porridge)",
      description: "A simple Filipino rice porridge that's comforting and easy to digest.",
      image: "https://images.yummy.ph/yummy/uploads/2019/04/lugawwitheggrecipe2-small-1.jpg",
      video: "https://www.youtube.com/embed/XrOgb59pJS8",
      ingredients: [
        "1 cup white rice (bigas)",
        "8 cups water or chicken broth (tubig o sabaw ng manok)",
        "1 thumb-sized ginger (luya), sliced thinly",
        "2 cloves garlic (bawang), minced",
        "1 onion (sibuyas), chopped",
        "2 tablespoons fish sauce (patis)",
        "Salt and pepper to taste (asin at paminta)",
        "Toppings: green onions, fried garlic, hard-boiled egg (optional)",
      ],
      steps: [
        "Rinse the Rice: Rinse the rice in cold water 2-3 times until the water runs almost clear.",
        "Sauté Aromatics: Sa isang malaking pot, magpainit ng konting oil. I-sauté ang bawang, sibuyas, at luya until fragrant.",
        "Add Rice: Add the rinsed rice and stir for 1-2 minutes to coat with oil.",
        "Add Liquid: Pour in the water or chicken broth. Bring to a boil, then reduce heat to low.",
        "Simmer: Let it simmer, partially covered, for 25-30 minutes, stirring occasionally to prevent the rice from sticking to the bottom. Add more liquid if needed.",
        "Season: Add fish sauce, salt, and pepper to taste.",
        "Serve: Ladle into bowls and add your choice of toppings. Serve hot.",
      ],
    },
  ]

  // meat category with chicken, beef, and pork recipes
  recipeData.meat = [...recipeData.chicken, ...recipeData.beef, ...recipeData.pork]

  // Tools and Guides data wag na galawin
  const toolsAndGuidesData = {
    cookingTools: {
      title: "Cooking Tools",
      description: "Essential cooking tools every student chef should know.",
      content: [
        {
          name: "Chef's Knife",
          description: "The most versatile knife in the kitchen. Used for chopping, slicing, and dicing.",
          image: "https://vader-prod.s3.amazonaws.com/1622560673-best-chefs-knives-classic-wusthof-1622560643.png",
          tips: "Keep it sharp for safety and efficiency. Hold the knife with your thumb and index finger gripping the blade for better control.",
        },
        {
          name: "Cutting Board",
          description: "Surface for cutting ingredients safely without damaging countertops.",
          image: "https://kitchenpro.com.ph/wp-content/uploads/2024/10/KN-BS-1.jpg",
          tips: "Use separate cutting boards for meat and vegetables to prevent cross-contamination. Wooden or plastic boards are recommended.",
        },
        {
          name: "Measuring Cups and Spoons",
          description: "Used for measuring precise amounts of ingredients.",
          image: "https://down-ph.img.susercontent.com/file/ph-11134207-7r98v-ltulhov07kog87",
          tips: "Level off dry ingredients with a straight edge for accuracy. For liquids, check measurements at eye level.",
        },
        {
          name: "Mixing Bowls",
          description: "Used for mixing ingredients, marinating, and preparing batters.",
          image: "https://ph-live-02.slatic.net/p/cd8587cbfdf441da3c7b6b39723d60e9.jpg",
          tips: "Having different sizes helps with various recipes. Stainless steel or glass bowls are durable and easy to clean.",
        },
        {
          name: "Frying Pan/Skillet",
          description: "Flat-bottomed pan used for frying, sautéing, and searing.",
          image: "https://www.lecreuset.ca/on/demandware.static/-/Sites-LeCreuset_CA-Library/default/dwa5253da9/images/541%20images/canada_images_541/TNS/TNS2200-26-Angle.jpg",
          tips: "Non-stick pans are easier for beginners. Preheat the pan before adding oil for better cooking results.",
        },
        {
          name: "Pot",
          description: "Deep cooking vessel used for boiling, simmering, and making soups or stews.",
          image: "https://www.ikea.com/ph/en/images/products/ikea-365-pot-with-lid-stainless-steel__1006173_pe825758_s5.jpg?f=s",
          tips: "Choose pots with thick bottoms for even heat distribution. Always use the lid to save energy when boiling water.",
        },
        {
          name: "Spatula",
          description: "Flat, flexible tool used for flipping, turning, and serving food.",
          image: "https://www.seriouseats.com/thmb/-usqPHeU55Yomy0QUbB5T0VgAyk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Titleimagenonstickspatulas-29828195cbde42d38c7e4318ad9adb87.jpg",
          tips: "Silicone spatulas are heat-resistant and won't scratch non-stick surfaces.",
        },
        {
          name: "Wooden Spoon",
          description: "Used for stirring and mixing ingredients while cooking.",
          image: "https://m.media-amazon.com/images/I/61W5ot-61GL._AC_SL1500_.jpg",
          tips: "Won't scratch cooking surfaces and doesn't conduct heat, making it comfortable to hold.",
        },
      ],
    },
    measurementGuide: {
      title: "Measurement Guide",
      description: "Common cooking measurements and conversions.",
      sections: [
        {
          title: "Volume Measurements",
          items: [
            { measure: "1 tablespoon (tbsp)", equals: "3 teaspoons (tsp)" },
            { measure: "1/4 cup", equals: "4 tablespoons" },
            { measure: "1/3 cup", equals: "5 tablespoons + 1 teaspoon" },
            { measure: "1/2 cup", equals: "8 tablespoons" },
            { measure: "2/3 cup", equals: "10 tablespoons + 2 teaspoons" },
            { measure: "3/4 cup", equals: "12 tablespoons" },
            { measure: "1 cup", equals: "16 tablespoons" },
            { measure: "1 cup", equals: "8 fluid ounces (fl oz)" },
            { measure: "2 cups", equals: "1 pint" },
            { measure: "4 cups", equals: "1 quart" },
            { measure: "4 quarts", equals: "1 gallon" },
          ],
        },
        {
          title: "Metric Conversions",
          items: [
            { measure: "1 teaspoon", equals: "5 milliliters (ml)" },
            { measure: "1 tablespoon", equals: "15 milliliters (ml)" },
            { measure: "1 fluid ounce", equals: "30 milliliters (ml)" },
            { measure: "1 cup", equals: "240 milliliters (ml)" },
            { measure: "1 pint", equals: "470 milliliters (ml)" },
            { measure: "1 quart", equals: "950 milliliters (ml)" },
            { measure: "1 gallon", equals: "3.8 liters (L)" },
            { measure: "1 ounce (weight)", equals: "28 grams (g)" },
            { measure: "1 pound", equals: "454 grams (g)" },
          ],
        },
        {
          title: "Common Filipino Measurements",
          items: [
            { measure: "1 salop", equals: "Approximately 1 liter or 4 cups of rice" },
            { measure: "1 gatang", equals: "Approximately 1/2 liter or 2 cups of rice" },
            { measure: "1 tasa", equals: "1 cup" },
            { measure: "1 kutsara", equals: "1 tablespoon" },
            { measure: "1 kutsarita", equals: "1 teaspoon" },
            { measure: "1 dakot", equals: "1 handful (approximate)" },
            { measure: "1 tali", equals: "1 bundle (for vegetables like kangkong)" },
          ],
        },
        {
          title: "Oven Temperature Conversions",
          items: [
            { measure: "Very Low", equals: "120°C / 250°F / Gas Mark 1/2" },
            { measure: "Low", equals: "150°C / 300°F / Gas Mark 2" },
            { measure: "Moderate", equals: "180°C / 350°F / Gas Mark 4" },
            { measure: "Moderately Hot", equals: "190°C / 375°F / Gas Mark 5" },
            { measure: "Hot", equals: "200°C / 400°F / Gas Mark 6" },
            { measure: "Very Hot", equals: "230°C / 450°F / Gas Mark 8" },
          ],
        },
      ],
    },
    cookingTerms: {
      title: "Cooking Terms",
      description: "Common cooking techniques and terminology.",
      terms: [
        {
          term: "Al Dente",
          definition:
            "Italian term meaning 'to the tooth,' used to describe pasta cooked until it offers a slight resistance when bitten into, but not soft or overdone.",
          example: "Cook the spaghetti until al dente, about 8-10 minutes.",
        },
        {
          term: "Bake",
          definition: "To cook food in an oven using dry heat.",
          example: "Bake the cake at 350°F for 30 minutes.",
        },
        {
          term: "Blanch",
          definition:
            "To briefly immerse food in boiling water and then quickly cool it in ice water to stop the cooking process.",
          example: "Blanch the vegetables before freezing them to preserve color and nutrients.",
        },
        {
          term: "Braise",
          definition:
            "A cooking method that uses both moist and dry heat: typically, the food is first seared at a high temperature, then finished in a covered pot with a small amount of liquid.",
          example: "Braise the tough meat cuts to make them tender and flavorful.",
        },
        {
          term: "Chop",
          definition: "To cut food into small, irregular pieces.",
          example: "Chop the onions finely for the sauce.",
        },
        {
          term: "Dice",
          definition: "To cut food into small, uniform cube-shaped pieces.",
          example: "Dice the potatoes into 1/4-inch cubes.",
        },
        {
          term: "Fold",
          definition:
            "To gently combine a light, airy mixture with a heavier mixture using a gentle over-and-under motion.",
          example: "Fold the whipped cream into the chocolate mixture to keep it light and fluffy.",
        },
        {
          term: "Grill",
          definition: "To cook food on a grill or under a broiler with direct heat.",
          example: "Grill the chicken until it has nice char marks and is cooked through.",
        },
        {
          term: "Julienne",
          definition: "To cut food into thin, matchstick-sized strips.",
          example: "Julienne the carrots for the salad.",
        },
        {
          term: "Knead",
          definition: "To work dough by pressing, folding, and stretching it to develop the gluten.",
          example: "Knead the bread dough for 10 minutes until smooth and elastic.",
        },
        {
          term: "Marinate",
          definition: "To soak food in a seasoned liquid to add flavor or tenderize.",
          example: "Marinate the beef in soy sauce and spices for at least 2 hours.",
        },
        {
          term: "Mince",
          definition: "To cut food into very small, fine pieces.",
          example: "Mince the garlic cloves before adding them to the oil.",
        },
        {
          term: "Poach",
          definition: "To cook food gently in liquid that is hot but not boiling.",
          example: "Poach the eggs in simmering water for 3-4 minutes.",
        },
        {
          term: "Reduce",
          definition: "To boil a liquid until its volume decreases through evaporation, concentrating its flavor.",
          example: "Reduce the sauce until it thickens and coats the back of a spoon.",
        },
        {
          term: "Sauté",
          definition: "To cook food quickly in a small amount of oil or fat over relatively high heat.",
          example: "Sauté the mushrooms until they're golden brown.",
        },
        {
          term: "Simmer",
          definition:
            "To cook in liquid at a temperature just below boiling, with small bubbles rising to the surface.",
          example: "Simmer the soup on low heat for 30 minutes to develop the flavors.",
        },
        {
          term: "Zest",
          definition: "The colored outer portion of citrus fruit skin, used as flavoring.",
          example: "Add lemon zest to the batter for a fresh citrus flavor.",
        },
        {
          term: "Adobo",
          definition:
            "In Filipino cooking, a method of marinating and stewing meat, seafood, or vegetables in a sauce of vinegar, soy sauce, garlic, and spices.",
          example: "Adobo the chicken with vinegar, soy sauce, and bay leaves.",
        },
        {
          term: "Sangkutsa",
          definition:
            "A Filipino cooking technique where meat is pre-cooked in garlic, onions, and sometimes ginger before adding other ingredients.",
          example: "Sangkutsa the pork before adding the coconut milk for ginataan.",
        },
        {
          term: "Sawsawan",
          definition: "Filipino dipping sauce or condiment typically served alongside main dishes.",
          example: "Prepare a sawsawan of vinegar, soy sauce, and chili for the grilled fish.",
        },
      ],
    },
  }

  // Function to display cooking tools
  function displayCookingTools() {
    const toolsData = toolsAndGuidesData.cookingTools

    featuredRecipesTitle.textContent = toolsData.title

    recipeGrid.innerHTML = `
      <div class="tools-guide-container">
        <p class="tools-guide-description">${toolsData.description}</p>
        <div class="tools-grid">
          ${toolsData.content
            .map(
              (tool) => `
            <div class="tool-card">
              <img src="${tool.image}" alt="${tool.name}">
              <div class="tool-content">
                <h3>${tool.name}</h3>
                <p>${tool.description}</p>
                <div class="tool-tips">
                  <h4>Tips:</h4>
                  <p>${tool.tips}</p>
                </div>
              </div>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `

    scrollToRecipes()
  }

  // Function to display measurement guide
  function displayMeasurementGuide() {
    const measurementData = toolsAndGuidesData.measurementGuide

    featuredRecipesTitle.textContent = measurementData.title

    recipeGrid.innerHTML = `
      <div class="tools-guide-container">
        <p class="tools-guide-description">${measurementData.description}</p>
        ${measurementData.sections
          .map(
            (section) => `
          <div class="measurement-section">
            <h3>${section.title}</h3>
            <table class="measurement-table">
              <thead>
                <tr>
                  <th>Measurement</th>
                  <th>Equals</th>
                </tr>
              </thead>
              <tbody>
                ${section.items
                  .map(
                    (item) => `
                  <tr>
                    <td>${item.measure}</td>
                    <td>${item.equals}</td>
                  </tr>
                `,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>
        `,
          )
          .join("")}
      </div>
    `

    scrollToRecipes()
  }

  // Function to display cooking terms
  function displayCookingTerms() {
    const termsData = toolsAndGuidesData.cookingTerms

    featuredRecipesTitle.textContent = termsData.title

    recipeGrid.innerHTML = `
      <div class="tools-guide-container">
        <p class="tools-guide-description">${termsData.description}</p>
        <div class="terms-container">
          ${termsData.terms
            .map(
              (term) => `
            <div class="term-card">
              <h3>${term.term}</h3>
              <p class="term-definition">${term.definition}</p>
              <p class="term-example"><strong>Example:</strong> <em>${term.example}</em></p>
            </div>
          `,
            )
            .join("")}
        </div>
      </div>
    `

    scrollToRecipes()
  }

  // Function to scroll to recipes section
  function scrollToRecipes() {
    const recipesSection = document.querySelector(".featured-recipes")
    if (recipesSection) {
      recipesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Function to display recipes by category
  function displayRecipes(category) {
    featuredRecipesTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1)

    if (recipeData[category]) {
      const recipes = recipeData[category]
      recipeGrid.innerHTML = recipes
        .map(
          (recipe) => `
      <div class="recipe-card" data-title="${recipe.title}">
        <img src="${recipe.image}" alt="${recipe.title}">
        <div class="recipe-content">
          <h3>${recipe.title}</h3>
          <p>${recipe.description}</p>
        </div>
      </div>
    `,
        )
        .join("")
    } else {
      recipeGrid.innerHTML = "<p>No recipes found for this category.</p>"
    }

    scrollToRecipes()
    addRecipeCardListeners()
  }

  // Function to display all recipes
  function displayDefaultRecipes() {
    const allRecipes = Object.values(recipeData)
      .flat()
      .filter((recipe, index, self) => index === self.findIndex((r) => r.title === recipe.title))

    featuredRecipesTitle.textContent = "All Recipes"

    recipeGrid.innerHTML = allRecipes
      .map(
        (recipe) => `
    <div class="recipe-card" data-title="${recipe.title}">
      <img src="${recipe.image}" alt="${recipe.title}">
      <div class="recipe-content">
        <h3>${recipe.title}</h3>
        <p>${recipe.description}</p>
      </div>
    </div>
  `,
      )
      .join("")

    scrollToRecipes()
    addRecipeCardListeners()
  }

  // Function to show search modal
  function showSearchModal() {
    searchModal.style.display = "flex"
    document.body.classList.add("modal-open")

    const closeModal = searchModal.querySelector(".close-modal")
    closeModal.addEventListener("click", () => {
      searchModal.style.display = "none"
      document.body.classList.remove("modal-open")
    })

    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) {
        searchModal.style.display = "none"
        document.body.classList.remove("modal-open")
      }
    })
  }

  // Function to search recipes
  function searchRecipes(query) {
    query = query.toLowerCase().trim()

    if (!query) {
      return []
    }

    // Get all recipes from all categories
    const allRecipes = Object.values(recipeData)
      .flat()
      .filter((recipe, index, self) => index === self.findIndex((r) => r.title === recipe.title))

    // Filter recipes based on search query
    return allRecipes.filter((recipe) => {
      // Search in title
      if (recipe.title.toLowerCase().includes(query)) {
        return true
      }

      // Search in description
      if (recipe.description.toLowerCase().includes(query)) {
        return true
      }

      // Search in ingredients
      if (recipe.ingredients.some((ingredient) => ingredient.toLowerCase().includes(query))) {
        return true
      }

      // Search in steps
      if (recipe.steps.some((step) => step.toLowerCase().includes(query))) {
        return true
      }

      return false
    })
  }

  // Update the showSearchModal function to include search functionality
  function showSearchModal() {
    searchModal.style.display = "flex"
    document.body.classList.add("modal-open")

    const closeModal = searchModal.querySelector(".close-modal")
    const searchInput = searchModal.querySelector("#search-input")
    const searchResults = searchModal.querySelector("#search-results")

    // Clear previous search results and input
    searchResults.innerHTML = "<p>Enter a search term above to find recipes.</p>"
    searchInput.value = ""

    // Focus on the search input
    setTimeout(() => searchInput.focus(), 100)

    // Add event listener for search input
    searchInput.addEventListener("input", function () {
      const query = this.value
      const results = searchRecipes(query)

      if (query.trim() === "") {
        searchResults.innerHTML = "<p>Enter a search term above to find recipes.</p>"
        return
      }

      if (results.length === 0) {
        searchResults.innerHTML = `<p>No recipes found matching "${query}".</p>`
        return
      }

      // Display search results
      searchResults.innerHTML = results
        .map(
          (recipe) => `
        <div class="recipe-card" data-title="${recipe.title}">
          <img src="${recipe.image}" alt="${recipe.title}">
          <div class="recipe-content">
            <h3>${recipe.title}</h3>
            <p>${recipe.description}</p>
          </div>
        </div>
      `,
        )
        .join("")

      // Add click listeners to search result cards
      const recipeCards = searchResults.querySelectorAll(".recipe-card")
      recipeCards.forEach((card) => {
        card.addEventListener("click", () => {
          const title = card.querySelector("h3").textContent
          const recipe = Object.values(recipeData)
            .flat()
            .find((r) => r.title === title)
          if (recipe) {
            openRecipeModal(recipe)
          }
        })
      })
    })

    // Add event listener for Enter key
    searchInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        e.preventDefault()
        const query = this.value
        const results = searchRecipes(query)

        if (results.length > 0) {
          // Display search results
          searchResults.innerHTML = results
            .map(
              (recipe) => `
            <div class="recipe-card" data-title="${recipe.title}">
              <img src="${recipe.image}" alt="${recipe.title}">
              <div class="recipe-content">
                <h3>${recipe.title}</h3>
                <p>${recipe.description}</p>
              </div>
            </div>
          `,
            )
            .join("")

          // Add click listeners to search result cards
          const recipeCards = searchResults.querySelectorAll(".recipe-card")
          recipeCards.forEach((card) => {
            card.addEventListener("click", () => {
              const title = card.querySelector("h3").textContent
              const recipe = Object.values(recipeData)
                .flat()
                .find((r) => r.title === title)
              if (recipe) {
                openRecipeModal(recipe)
              }
            })
          })
        }
      }
    })

    closeModal.addEventListener("click", () => {
      searchModal.style.display = "none"
      document.body.classList.remove("modal-open")
    })

    searchModal.addEventListener("click", (e) => {
      if (e.target === searchModal) {
        searchModal.style.display = "none"
        document.body.classList.remove("modal-open")
      }
    })
  }

  // function that handles the search modal, add this function to handle Grade 10 categories
  function setupGrade10EventListeners() {
    // Find all links in the Grade 10 nested dropdown
    const grade10Links = document.querySelectorAll(".nested-dropdown:nth-of-type(2) .nested-dropdown-content a")

    grade10Links.forEach((link) => {
      // Remove any existing event listeners
      const newLink = link.cloneNode(true)
      link.parentNode.replaceChild(newLink, link)

      // Add new event listener
      newLink.addEventListener("click", (e) => {
        e.preventDefault()
        const linkText = newLink.textContent.trim().toLowerCase()

        // Map the link text to the corresponding category in recipeData
        let category
        if (linkText === "sauces") category = "sauces"
        else if (linkText === "soup") category = "soup"
        else if (linkText === "pasta") category = "pasta"
        else if (linkText === "grains") category = "grains"
        else category = linkText

        displayRecipes(category)

        // Close mobile menu after selection
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("active")
          menuToggle.querySelectorAll("span").forEach((span) => {
            span.style.transform = "none"
            span.style.opacity = "1"
          })
        }
      })
    })
  }

  // Function to toggle mobile menu
  function toggleMobileMenu() {
    navLinks.classList.toggle("active")
    const spans = menuToggle.querySelectorAll("span")
    spans.forEach((span, index) => {
      if (navLinks.classList.contains("active")) {
        if (index === 0) span.style.transform = "translateY(9px) rotate(45deg)"
        if (index === 1) span.style.opacity = "0"
        if (index === 2) span.style.transform = "translateY(-9px) rotate(-45deg)"
      } else {
        span.style.transform = "none"
        span.style.opacity = "1"
      }
    })
  }

  // Function to add recipe card listeners
  function addRecipeCardListeners() {
    const recipeCards = document.querySelectorAll(".recipe-card")
    recipeCards.forEach((card) => {
      card.addEventListener("click", () => {
        const title = card.querySelector("h3").textContent
        const recipe = Object.values(recipeData)
          .flat()
          .find((r) => r.title === title)
        if (recipe) {
          openRecipeModal(recipe)
        }
      })
    })
  }

  // Function to open recipe modal
  function openRecipeModal(recipe) {
    modalContainer.innerHTML = `
<div class="recipe-modal">
  <div class="recipe-modal-content">
    <span class="close-modal">&times;</span>
    <div class="recipe-modal-body">
      ${
        recipe.video
          ? `
      <div class="recipe-video-container">
        <iframe height="315" src="${recipe.video}" frameborder="0" allowfullscreen></iframe>
      </div>`
          : ""
      }
      
      <div class="recipe-modal-header">
        <h2>${recipe.title}</h2>
        <p>${recipe.description}</p>
      </div>
      
      <div class="recipe-ingredients-steps">
        <div class="recipe-ingredients">
          <h3>Ingredients:</h3>
          <ul>
            ${recipe.ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("")}
          </ul>
        </div>
        
        <div class="recipe-steps">
          <h3>Steps:</h3>
          <ol>
            ${recipe.steps.map((step) => `<li>${step}</li>`).join("")}
          </ol>
        </div>
      </div>
    </div>
  </div>
</div>
`
    modalContainer.style.display = "flex"
    document.body.classList.add("modal-open")

    const closeModal = modalContainer.querySelector(".close-modal")
    closeModal.addEventListener("click", () => {
      modalContainer.style.display = "none"
      document.body.classList.remove("modal-open")
    })

    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        modalContainer.style.display = "none"
        document.body.classList.remove("modal-open")
      }
    })
  }

  // Setup mobile menu
  function setupMobileMenu() {
    // Handle main dropdowns
    dropdowns.forEach((dropdown) => {
      const dropdownToggle = dropdown.querySelector(".dropbtn")
      dropdownToggle.addEventListener("click", (e) => {
        e.preventDefault()
        // Close all other dropdowns first
        dropdowns.forEach((otherDropdown) => {
          if (otherDropdown !== dropdown && otherDropdown.classList.contains("active")) {
            otherDropdown.classList.remove("active")
          }
        })
        dropdown.classList.toggle("active")
      })
    })

    // Handle nested dropdowns (Grade 9 and Grade 10)
    nestedDropdowns.forEach((nestedDropdown) => {
      const nestedDropdownToggle = nestedDropdown.querySelector(".nested-dropbtn")
      nestedDropdownToggle.addEventListener("click", (e) => {
        e.preventDefault()
        e.stopPropagation() // Prevent triggering parent dropdown events

        // Close all other nested dropdowns in the same parent first
        const parentDropdown = nestedDropdown.closest(".dropdown")
        if (parentDropdown) {
          const siblingNestedDropdowns = parentDropdown.querySelectorAll(".nested-dropdown")
          siblingNestedDropdowns.forEach((siblingDropdown) => {
            if (siblingDropdown !== nestedDropdown && siblingDropdown.classList.contains("active")) {
              siblingDropdown.classList.remove("active")
            }
          })
        }

        nestedDropdown.classList.toggle("active")
      })
    })
  }

  // Check if mobile view and setup appropriate event listeners
  function handleResponsiveMenu() {
    if (window.innerWidth <= 768) {
      setupMobileMenu()
    } else {
      // Remove active classes when switching to desktop
      dropdowns.forEach((dropdown) => dropdown.classList.remove("active"))
      nestedDropdowns.forEach((nestedDropdown) => nestedDropdown.classList.remove("active"))
    }
  }

  // Event Listeners
  menuToggle.addEventListener("click", toggleMobileMenu)

  // Clear any existing event listeners
  document.querySelectorAll(".dropdown-content > a").forEach((link) => {
    const newLink = link.cloneNode(true)
    link.parentNode.replaceChild(newLink, link)
  })

  document.querySelectorAll(".nested-dropdown-content a").forEach((link) => {
    const newLink = link.cloneNode(true)
    link.parentNode.replaceChild(newLink, link)
  })

  // Add event listeners for Tools & Guides dropdown links
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const links = dropdown.querySelectorAll(".dropdown-content > a")
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault()
        const linkText = link.textContent.trim()

        if (linkText === "Cooking Tools") {
          displayCookingTools()
        } else if (linkText === "Measurement Guide") {
          displayMeasurementGuide()
        } else if (linkText === "Cooking Terms") {
          displayCookingTerms()
        } else {
          const category = link.getAttribute("data-category") || linkText.toLowerCase().replace(/\s+/g, "")
          displayRecipes(category)
        }

        // Close mobile menu after selection
        if (window.innerWidth <= 768) {
          navLinks.classList.remove("active")
          menuToggle.querySelectorAll("span").forEach((span) => {
            span.style.transform = "none"
            span.style.opacity = "1"
          })
        }
      })
    })
  })

  // Event listeners for nested dropdown links
  document.querySelectorAll(".nested-dropdown-content a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const category = link.getAttribute("data-category") || link.textContent.toLowerCase().replace(/\s+/g, "")
      displayRecipes(category)

      // Close mobile menu after selection
      if (window.innerWidth <= 768) {
        navLinks.classList.remove("active")
        menuToggle.querySelectorAll("span").forEach((span) => {
          span.style.transform = "none"
          span.style.opacity = "1"
        })
      }
    })
  })

  // All Recipes link
  allRecipesLink.addEventListener("click", (e) => {
    e.preventDefault()
    displayDefaultRecipes()
  })

  // Explore button
  exploreButton.addEventListener("click", (e) => {
    e.preventDefault()
    scrollToRecipes()
  })

  // Search icon
  searchIcon.addEventListener("click", showSearchModal)

  setupGrade10EventListeners()

  // Initial setup
  handleResponsiveMenu()

  // Update on window resize
  window.addEventListener("resize", handleResponsiveMenu)

  // Initialize the page with default recipes
  displayDefaultRecipes()
})
