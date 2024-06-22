document.addEventListener('DOMContentLoaded', () => {
    // Function to initialize the food items on the home page
    function initializeFoodItems() {
        const foodContainer = document.querySelector('.food-container');

        const foodItems = [
            { name: 'Burger', image: 'https://makeyourmeals.com/wp-content/uploads/2019/06/featured-hamburger-735x490.jpg.webp', price: '$5' },
            { name: 'Pizza', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg', price: '$8' },
            { name: 'Qabuli Palaw', image: 'https://www.youlinmagazine.com/articles/1991.jpg', price: '$20' },
            { name: 'Fries', image: 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/cea6f207-907a-479e-95d1-8d8c61c4bcf1-c6e7eafd-dbb0-405b-9da7-bcf9380c8d57-new_mexico.jpg', price: '$2' },
            { name: 'Chicken Nuggets', image: 'https://5.imimg.com/data5/VK/BG/WT/SELLER-31439366/hot-crunchy-chicken-breast-nuggets-400g-500x500.jpg', price: '$4' },
            { name: 'Taco', image: 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/43360-sfs-weeknight-ground-beef-tacos-reshoot-26', price: '$3' },
            { name: 'Sandwich', image: 'https://www.jackedkitchen.com/wp-content/uploads/2017/04/600-x-400-4-smaller-600x400.jpg', price: '$4' },
            { name: 'Salad', image: 'https://recipes.net/wp-content/uploads/2021/03/special-salad-recipe.png', price: '$6' },
            { name: 'Afghani Mantoo', image: 'https://shahraranews.ir/files/fa/news/1399/7/24/209194_639.jpg', price: '$5' },
            { name: 'Nachos', image: 'https://coopercheese.com/cdn/shop/articles/20240315162137-nachos-perfectly-melty-2.webp?v=1713566273', price: '$7' },
            { name: 'Chicken Alfredo Pasta', image: 'https://www.allchickenrecipes.com/wp-content/uploads/2018/09/Chicken-Alfredo-720x540.jpg', price: '$8' },
            { name: 'Sushi', image: 'https://nypost.com/wp-content/uploads/sites/2/2015/10/sushi-main.jpg?quality=75&strip=all&w=1024', price: '$10' },
            { name: 'Ramen', image: 'https://www.spoonforkbacon.com/wp-content/uploads/2024/04/spicy-ramen-noodles-recipe-card.jpg', price: '$9' },
            { name: 'chicken karahi', image: 'https://satyamskitchen.com/wp-content/uploads/2021/03/chicken_karahi_background_1_60-e1615515187927-700x525.jpg', price: '$12' },
            { name: 'Afghani BBQ', image: 'https://tb-static.uber.com/prod/image-proc/processed_images/268ffe0dc256e8b0f5c1c6c6045e459f/9b3aae4cf90f897799a5ed357d60e09d.jpeg', price: '$15' },
            { name: 'Ice Cream', image: 'https://www.foodandwine.com/thmb/Dl7L5u2c7sbVp6vyxnqhcxz9M50=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Super-Scoops-FT-2-MAG0622-00568f6534a44e0c8a422b66b25d6cf6.jpg', price: '$3' },
            { name: 'Doughnut', image: 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/06/thumbs/800x531/119434.jpg?v=1622973254', price: '$2' },
            { name: 'Milkshake', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/milkshake-b0d6105.jpg', price: '$4' },
            { name: 'Mocktail', image: 'https://www.spoton.com/blog/content/images/size/w1200/2023/08/Mocktail--zero-proof-cocktails--and-different-non-alcoholic-drinks-1.jpeg', price: '$5' },
            { name: 'Ice Coffee', image: 'https://realfood.tesco.com/media/images/RFO-1400x919-IcedCoffee-76221116-2565-4103-9899-89571028018e-0-1400x919.jpg', price: '$3' },
        ];

        foodItems.forEach(food => {
            const foodBox = document.createElement('div');
            foodBox.classList.add('food-box');
            
            foodBox.innerHTML = `
                <img src="${food.image}" alt="${food.name}">
                <h3>${food.name}</h3>
                <div class="price">${food.price}</div>
                <button class="add-to-cart">Add to Cart</button>
            `;
            
            foodBox.addEventListener('click', () => {
                const priceElement = foodBox.querySelector('.price');
                priceElement.style.display = priceElement.style.display === 'none' ? 'block' : 'none';
            });

            foodContainer.appendChild(foodBox);
        });
    }

    // Function to handle the search functionality
    function handleSearch() {
        const searchInput = document.querySelector('.search-input');
        const foodBoxes = document.querySelectorAll('.food-box');

        searchInput.addEventListener('input', () => {
            const searchTerm = searchInput.value.toLowerCase();

            foodBoxes.forEach(box => {
                const foodName = box.querySelector('h3').textContent.toLowerCase();
                if (foodName.includes(searchTerm)) {
                    box.style.display = 'block';
                } else {
                    box.style.display = 'none';
                }
            });
        });
    }

    // Call the functions if the food container exists on the page
    if (document.querySelector('.food-container')) {
        initializeFoodItems();
        handleSearch();
    }

    // Handle form submission on the rate page
    const rateForm = document.getElementById('rate-form');
    if (rateForm) {
        rateForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const rating = document.getElementById('rating').value;
            const feedback = document.getElementById('feedback').value;
            const response = document.getElementById('response');
            
            response.innerHTML = `
                <p>Thank you for your feedback!</p>
                <p>Rating: ${rating}</p>
                <p>Feedback: ${feedback}</p>
            `;
        });
    }
});
