-- Drop the table if it already exists (useful for resetting the database)
DROP TABLE IF EXISTS foods;
CREATE USER postgres WITH PASSWORD 'iammunak12';
CREATE DATABASE dinner_is_ready;
GRANT ALL PRIVILEGES ON DATABASE dinner_is_ready TO postgres;

-- Create the foods table
CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    image VARCHAR(255),
    price VARCHAR(10)
);

-- Insert some initial data
INSERT INTO foods (name, image, price) VALUES
('Burger', 'https://makeyourmeals.com/wp-content/uploads/2019/06/featured-hamburger-735x490.jpg.webp', '$5'),
('Pizza', 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Supreme_pizza.jpg/1200px-Supreme_pizza.jpg', '$8'),
('Qabuli Palaw', 'https://www.youlinmagazine.com/articles/1991.jpg', '$20'),
('Fries', 'https://loveincorporated.blob.core.windows.net/contentimages/gallery/cea6f207-907a-479e-95d1-8d8c61c4bcf1-c6e7eafd-dbb0-405b-9da7-bcf9380c8d57-new_mexico.jpg', '$2'),
('Chicken Nuggets', 'https://5.imimg.com/data5/VK/BG/WT/SELLER-31439366/hot-crunchy-chicken-breast-nuggets-400g-500x500.jpg', '$4'),
('Taco', 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/43360-sfs-weeknight-ground-beef-tacos-reshoot-26', '$3'),
('Sandwich', 'https://www.jackedkitchen.com/wp-content/uploads/2017/04/600-x-400-4-smaller-600x400.jpg', '$4'),
('Salad', 'https://recipes.net/wp-content/uploads/2021/03/special-salad-recipe.png', '$6'),
('Afghani Mantoo', 'https://shahraranews.ir/files/fa/news/1399/7/24/209194_639.jpg', '$5'),
('Nachos', 'https://coopercheese.com/cdn/shop/articles/20240315162137-nachos-perfectly-melty-2.webp?v=1713566273', '$7'),
('Chicken Alfredo Pasta', 'https://www.allchickenrecipes.com/wp-content/uploads/2018/09/Chicken-Alfredo-720x540.jpg', '$8'),
('Sushi', 'https://nypost.com/wp-content/uploads/sites/2/2015/10/sushi-main.jpg?quality=75&strip=all&w=1024', '$10'),
('Ramen', 'https://www.spoonforkbacon.com/wp-content/uploads/2024/04/spicy-ramen-noodles-recipe-card.jpg', '$9'),
('Chicken Karahi', 'https://satyamskitchen.com/wp-content/uploads/2021/03/chicken_karahi_background_1_60-e1615515187927-700x525.jpg', '$12'),
('Afghani BBQ', 'https://tb-static.uber.com/prod/image-proc/processed_images/268ffe0dc256e8b0f5c1c6c6045e459f/9b3aae4cf90f897799a5ed357d60e09d.jpeg', '$15'),
('Ice Cream', 'https://www.foodandwine.com/thmb/Dl7L5u2c7sbVp6vyxnqhcxz9M50=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Super-Scoops-FT-2-MAG0622-00568f6534a44e0c8a422b66b25d6cf6.jpg', '$3'),
('Doughnut', 'https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/06/thumbs/800x531/119434.jpg?v=1622973254', '$2'),
('Milkshake', 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/milkshake-b0d6105.jpg', '$4'),
('Mocktail', 'https://www.spoton.com/blog/content/images/size/w1200/2023/08/Mocktail--zero-proof-cocktails--and-different-non-alcoholic-drinks-1.jpeg', '$5'),
('Ice Coffee', 'https://realfood.tesco.com/media/images/RFO-1400x919-IcedCoffee-76221116-2565-4103-9899-89571028018e-0-1400x919.jpg', '$3');
