// Fashion Recommendation Website JavaScript

// Outfit database with clear, specific images
const outfitDatabase = {
    female: {
        wedding: [
            {
                name: "Royal Bride",
                description: "A stunning traditional bridal ensemble perfect for your special day",
                outfit: "Heavy Silk Lehenga with Zari Work",
                accessories: "Kundan Necklace Set, Matha Patti, Bangles, Nose Ring",
                footwear: "Golden Embroidered Juttis",
                hairstyle: "Traditional Bridal Bun with Gajra",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Elegance",
                description: "Contemporary bridal look with a touch of sophistication",
                outfit: "Embroidered Anarkali with Palazzo Pants",
                accessories: "Pearl Necklace, Diamond Studs, Gold Bangles",
                footwear: "Silver Heeled Sandals",
                hairstyle: "Side Swept Curls with Hair Accessories",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Glamour",
                description: "Fusion bridal look combining traditional and modern elements",
                outfit: "Crop Top with Lehenga Skirt and Dupatta",
                accessories: "Choker Necklace, Statement Earrings, Arm Band",
                footwear: "Embellished Heels",
                hairstyle: "Messy Bun with Fresh Flowers",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Minimalist Bride",
                description: "Simple yet elegant bridal look for the modern bride",
                outfit: "Cream Silk Saree with Gold Border",
                accessories: "Minimal Gold Chain, Pearl Earrings, Simple Bangles",
                footwear: "Gold Kolhapuri Chappals",
                hairstyle: "Sleek Low Bun with Jasmine Flowers",
                image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Bohemian Beauty",
                description: "Free-spirited bridal look with artistic elements",
                outfit: "Embroidered Maxi Dress with Cape",
                accessories: "Layered Necklaces, Hoop Earrings, Anklet",
                footwear: "Embellished Flat Sandals",
                hairstyle: "Loose Waves with Flower Crown",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Classic Grace",
                description: "Timeless bridal elegance that never goes out of style",
                outfit: "Red Banarasi Silk Saree",
                accessories: "Traditional Gold Necklace, Jhumka Earrings, Bangles",
                footwear: "Red Embroidered Juttis",
                hairstyle: "Traditional Braid with Gajra",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Contemporary Princess",
                description: "Modern royal look with luxurious details",
                outfit: "Embellished Gown with Cape",
                accessories: "Crystal Necklace, Drop Earrings, Bracelet Set",
                footwear: "Crystal Embellished Heels",
                hairstyle: "Half Up Half Down with Tiara",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            }
        ],
        office: [
            {
                name: "Power Professional",
                description: "Confident and sophisticated office look",
                outfit: "Navy Blue Blazer with White Shirt and Black Pants",
                accessories: "Pearl Necklace, Stud Earrings, Watch",
                footwear: "Black Pointed Heels",
                hairstyle: "Sleek Low Ponytail",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Executive",
                description: "Contemporary professional style with a twist",
                outfit: "Embroidered Kurta with Cigarette Pants",
                accessories: "Minimal Gold Chain, Small Hoops, Watch",
                footwear: "Tan Loafers",
                hairstyle: "Messy Bun with Bobby Pins",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Creative Professional",
                description: "Artistic yet professional look for creative industries",
                outfit: "Midi Dress with Cardigan",
                accessories: "Statement Necklace, Hoop Earrings, Bracelet",
                footwear: "Ankle Boots",
                hairstyle: "Side Braid with Loose Strands",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Minimalist Manager",
                description: "Clean and simple professional look",
                outfit: "White Shirt with Black Pencil Skirt",
                accessories: "Simple Watch, Pearl Studs",
                footwear: "Black Ballet Flats",
                hairstyle: "Sleek Bun",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Professional",
                description: "Fusion look perfect for modern Indian workplaces",
                outfit: "Embroidered Top with Palazzo Pants",
                accessories: "Gold Chain, Small Earrings, Watch",
                footwear: "Embellished Flats",
                hairstyle: "Low Bun with Side Parting",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Casual Friday",
                description: "Smart casual look for relaxed office days",
                outfit: "Blouse with High-Waisted Jeans",
                accessories: "Layered Necklaces, Hoop Earrings",
                footwear: "White Sneakers",
                hairstyle: "Loose Waves",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Elegant Executive",
                description: "Sophisticated look for important meetings",
                outfit: "Silk Blouse with A-Line Skirt",
                accessories: "Pearl Necklace, Diamond Studs, Watch",
                footwear: "Nude Heels",
                hairstyle: "Side Swept Curls",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            }
        ],
        date: [
            {
                name: "Romantic Evening",
                description: "Perfect for a romantic dinner date",
                outfit: "Little Black Dress with Statement Necklace",
                accessories: "Gold Chain, Hoop Earrings, Bracelet",
                footwear: "Red Heels",
                hairstyle: "Loose Curls with Side Parting",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Casual Cute",
                description: "Adorable and comfortable date look",
                outfit: "Floral Dress with Denim Jacket",
                accessories: "Dainty Necklace, Small Earrings",
                footwear: "White Sneakers",
                hairstyle: "Messy Bun with Face-Framing Strands",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Date",
                description: "Fusion look for a cultural date experience",
                outfit: "Embroidered Kurta with Jeans",
                accessories: "Gold Chain, Jhumka Earrings, Bangles",
                footwear: "Embellished Juttis",
                hairstyle: "Side Braid with Flowers",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Elegant Evening",
                description: "Sophisticated look for upscale dates",
                outfit: "Silk Saree with Blouse",
                accessories: "Pearl Necklace, Stud Earrings, Bangles",
                footwear: "Heeled Sandals",
                hairstyle: "Sleek Bun with Gajra",
                image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Bohemian Date",
                description: "Free-spirited and artistic date look",
                outfit: "Maxi Dress with Fringe Details",
                accessories: "Layered Necklaces, Hoop Earrings, Anklet",
                footwear: "Embellished Sandals",
                hairstyle: "Loose Waves with Flower Crown",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Minimalist",
                description: "Clean and contemporary date look",
                outfit: "Midi Dress with Slit",
                accessories: "Minimal Chain, Small Earrings",
                footwear: "Nude Heels",
                hairstyle: "Sleek Ponytail",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Playful Princess",
                description: "Fun and flirty look for a fun date",
                outfit: "Colorful Dress with Ruffles",
                accessories: "Statement Earrings, Colorful Bracelets",
                footwear: "Colored Heels",
                hairstyle: "High Ponytail with Ribbon",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            }
        ],
        party: [
            {
                name: "Glamorous Diva",
                description: "Show-stopping party look that commands attention",
                outfit: "Sequined Dress with High Slit",
                accessories: "Statement Necklace, Drop Earrings, Bracelets",
                footwear: "Metallic Heels",
                hairstyle: "Voluminous Curls with Hair Accessories",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Party",
                description: "Fusion party look with traditional elements",
                outfit: "Embroidered Crop Top with Lehenga Skirt",
                accessories: "Choker Necklace, Jhumka Earrings, Arm Band",
                footwear: "Embellished Heels",
                hairstyle: "Messy Bun with Gajra",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Boho Party",
                description: "Free-spirited party look with artistic flair",
                outfit: "Embroidered Maxi Dress with Fringe",
                accessories: "Layered Necklaces, Hoop Earrings, Anklet",
                footwear: "Embellished Sandals",
                hairstyle: "Loose Waves with Flower Crown",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Chic",
                description: "Contemporary party look with edge",
                outfit: "Asymmetric Dress with Cutouts",
                accessories: "Minimal Chain, Statement Earrings",
                footwear: "Ankle Boots",
                hairstyle: "Sleek High Ponytail",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Traditional Elegance",
                description: "Classic party look with traditional charm",
                outfit: "Embroidered Anarkali with Dupatta",
                accessories: "Kundan Necklace, Jhumka Earrings, Bangles",
                footwear: "Embellished Juttis",
                hairstyle: "Traditional Bun with Gajra",
                image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Colorful Celebration",
                description: "Vibrant and energetic party look",
                outfit: "Colorful Dress with Ruffles and Sequins",
                accessories: "Colorful Necklace, Statement Earrings, Bangles",
                footwear: "Colored Heels",
                hairstyle: "High Bun with Colorful Accessories",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Sophisticated Soiree",
                description: "Elegant party look for upscale events",
                outfit: "Silk Dress with Embellishments",
                accessories: "Pearl Necklace, Diamond Studs, Watch",
                footwear: "Nude Heels",
                hairstyle: "Side Swept Curls",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            }
        ],
        interview: [
            {
                name: "Confident Professional",
                description: "Powerful interview look that exudes confidence",
                outfit: "Navy Blue Suit with White Blouse",
                accessories: "Pearl Necklace, Stud Earrings, Watch",
                footwear: "Black Pointed Heels",
                hairstyle: "Sleek Low Bun",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Professional",
                description: "Contemporary interview look with style",
                outfit: "Embroidered Kurta with Black Pants",
                accessories: "Minimal Gold Chain, Small Earrings, Watch",
                footwear: "Black Loafers",
                hairstyle: "Neat Ponytail",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Classic Elegance",
                description: "Timeless interview look that never fails",
                outfit: "White Shirt with Black Pencil Skirt",
                accessories: "Simple Watch, Pearl Studs",
                footwear: "Black Ballet Flats",
                hairstyle: "Sleek Bun",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Creative Professional",
                description: "Artistic interview look for creative industries",
                outfit: "Blouse with High-Waisted Pants",
                accessories: "Statement Necklace, Hoop Earrings",
                footwear: "Ankle Boots",
                hairstyle: "Side Braid",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Interview",
                description: "Fusion look perfect for modern Indian companies",
                outfit: "Embroidered Top with Palazzo Pants",
                accessories: "Gold Chain, Small Earrings, Watch",
                footwear: "Embellished Flats",
                hairstyle: "Low Bun",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Minimalist Approach",
                description: "Clean and simple interview look",
                outfit: "Midi Dress with Blazer",
                accessories: "Simple Watch, Small Earrings",
                footwear: "Nude Heels",
                hairstyle: "Sleek Ponytail",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Executive Ready",
                description: "Senior-level interview look with authority",
                outfit: "Silk Blouse with A-Line Skirt",
                accessories: "Pearl Necklace, Diamond Studs, Watch",
                footwear: "Black Heels",
                hairstyle: "Side Swept Curls",
                image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=300&fit=crop&crop=center"
            }
        ],
        festive: [
            {
                name: "Festive Glow",
                description: "Radiant look perfect for any celebration",
                outfit: "Yellow Silk Kurta with Palazzos",
                accessories: "Gold Chandbalis, Bangles, Chain",
                footwear: "Golden Juttis",
                hairstyle: "Side Braid with Loose Curls",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Traditional Charm",
                description: "Classic festive look with traditional elements",
                outfit: "Red Silk Saree with Gold Border",
                accessories: "Gold Necklace, Jhumka Earrings, Bangles",
                footwear: "Red Embroidered Juttis",
                hairstyle: "Traditional Bun with Gajra",
                image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Festive",
                description: "Modern festive look with fusion elements",
                outfit: "Embroidered Crop Top with Lehenga Skirt",
                accessories: "Choker Necklace, Statement Earrings, Arm Band",
                footwear: "Embellished Heels",
                hairstyle: "Messy Bun with Hair Accessories",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Bohemian Festive",
                description: "Free-spirited festive look with artistic details",
                outfit: "Embroidered Maxi Dress with Mirror Work",
                accessories: "Layered Necklaces, Hoop Earrings, Anklet",
                footwear: "Embellished Sandals",
                hairstyle: "Loose Waves with Flower Crown",
                image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Festive",
                description: "Contemporary festive look with elegance",
                outfit: "Embroidered Anarkali with Dupatta",
                accessories: "Kundan Necklace, Jhumka Earrings, Bangles",
                footwear: "Embellished Heels",
                hairstyle: "Side Swept Curls",
                image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Colorful Celebration",
                description: "Vibrant festive look full of joy",
                outfit: "Colorful Lehenga with Embellishments",
                accessories: "Colorful Necklace, Statement Earrings, Bangles",
                footwear: "Colored Juttis",
                hairstyle: "High Bun with Gajra",
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Elegant Festive",
                description: "Sophisticated festive look with grace",
                outfit: "Silk Kurta with Cigarette Pants",
                accessories: "Pearl Necklace, Stud Earrings, Bangles",
                footwear: "Embellished Flats",
                hairstyle: "Sleek Bun with Hair Accessories",
                image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=400&h=300&fit=crop&crop=center"
            }
        ]
    },
    male: {
        wedding: [
            {
                name: "Royal Groom",
                description: "Traditional groom look with royal elegance",
                outfit: "Sherwani with Churidar and Dupatta",
                accessories: "Gold Chain, Watch, Brooch",
                footwear: "Golden Juttis",
                hairstyle: "Sleek Side Parting with Grooming",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Groom",
                description: "Contemporary groom look with sophistication",
                outfit: "Embroidered Kurta with Churidar",
                accessories: "Silver Chain, Watch, Brooch",
                footwear: "Embellished Loafers",
                hairstyle: "Modern Quiff with Styling",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Groom",
                description: "Fusion groom look combining styles",
                outfit: "Embroidered Jacket with Kurta and Pants",
                accessories: "Gold Chain, Watch, Pocket Square",
                footwear: "Embellished Oxfords",
                hairstyle: "Sleek Back with Pomade",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Classic Groom",
                description: "Timeless groom look that never goes out of style",
                outfit: "White Kurta with Churidar",
                accessories: "Pearl Chain, Watch, Brooch",
                footwear: "White Juttis",
                hairstyle: "Traditional Side Parting",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Contemporary Groom",
                description: "Modern groom look with edge",
                outfit: "Embroidered Kurta with Palazzo Pants",
                accessories: "Silver Chain, Watch, Brooch",
                footwear: "Embellished Loafers",
                hairstyle: "Textured Quiff",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Elegant Groom",
                description: "Sophisticated groom look with grace",
                outfit: "Silk Sherwani with Churidar",
                accessories: "Gold Chain, Watch, Brooch",
                footwear: "Golden Juttis",
                hairstyle: "Sleek Back with Grooming",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Dapper Groom",
                description: "Sharp and stylish groom look",
                outfit: "Embroidered Kurta with Cigarette Pants",
                accessories: "Silver Chain, Watch, Brooch",
                footwear: "Embellished Oxfords",
                hairstyle: "Modern Side Parting",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            }
        ],
        office: [
            {
                name: "Power Executive",
                description: "Confident and authoritative office look",
                outfit: "Navy Blue Suit with White Shirt",
                accessories: "Silver Watch, Tie Clip",
                footwear: "Black Oxford Shoes",
                hairstyle: "Sleek Side Parting",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Modern Professional",
                description: "Contemporary office look with style",
                outfit: "Embroidered Kurta with Churidar",
                accessories: "Gold Chain, Watch",
                footwear: "Brown Loafers",
                hairstyle: "Modern Quiff",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Casual Friday",
                description: "Smart casual look for relaxed office days",
                outfit: "Polo Shirt with Chinos",
                accessories: "Watch, Bracelet",
                footwear: "Brown Loafers",
                hairstyle: "Textured Quiff",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Creative Professional",
                description: "Artistic office look for creative industries",
                outfit: "Embroidered Kurta with Jeans",
                accessories: "Silver Chain, Watch",
                footwear: "Ankle Boots",
                hairstyle: "Messy Quiff",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Minimalist Manager",
                description: "Clean and simple professional look",
                outfit: "White Shirt with Black Pants",
                accessories: "Simple Watch",
                footwear: "Black Loafers",
                hairstyle: "Sleek Back",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Indo-Western Executive",
                description: "Fusion look for modern Indian workplaces",
                outfit: "Embroidered Kurta with Palazzo Pants",
                accessories: "Gold Chain, Watch",
                footwear: "Embellished Loafers",
                hairstyle: "Side Parting",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=center"
            },
            {
                name: "Senior Executive",
                description: "Sophisticated look for senior positions",
                outfit: "Charcoal Suit with Blue Shirt",
                accessories: "Gold Watch, Tie Clip",
                footwear: "Black Oxford Shoes",
                hairstyle: "Sleek Side Parting",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=300&fit=crop&crop=center"
            }
        ]
    }
};

// DOM Elements
const styleForm = document.getElementById('style-form');
const formSection = document.getElementById('form-section');
const resultsSection = document.getElementById('results-section');
const outfitsGrid = document.getElementById('outfits-grid');
const newSearchBtn = document.getElementById('new-search-btn');
const backToTopBtn = document.getElementById('back-to-top');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    styleForm.addEventListener('submit', handleFormSubmit);
    newSearchBtn.addEventListener('click', showFormSection);
    
    // Back to top functionality
    window.addEventListener('scroll', toggleBackToTop);
    backToTopBtn.addEventListener('click', scrollToTop);
});

// Form Submission Handler
function handleFormSubmit(e) {
    e.preventDefault();
    
    const formData = new FormData(styleForm);
    const userPreferences = {
        gender: formData.get('gender'),
        height: formData.get('height'),
        bodyType: formData.get('bodyType'),
        skinTone: formData.get('skinTone'),
        preferredStyle: formData.get('preferredStyle'),
        occasion: formData.get('occasion')
    };
    
    // Generate outfits based on preferences
    const outfits = generateOutfits(userPreferences);
    
    // Display results
    displayOutfits(outfits);
    
    // Show results section
    showResultsSection();
}

// Generate Outfits Function
function generateOutfits(preferences) {
    const { gender, occasion } = preferences;
    
    // Get outfits for the specific gender and occasion
    let availableOutfits = outfitDatabase[gender]?.[occasion] || [];
    
    // If no specific outfits found, use fallback
    if (availableOutfits.length === 0) {
        availableOutfits = outfitDatabase.female?.casual || [];
    }
    
    // Shuffle and select 7 outfits
    const shuffledOutfits = shuffleArray([...availableOutfits]);
    return shuffledOutfits.slice(0, 7);
}

// Shuffle Array Function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Display Outfits Function
function displayOutfits(outfits) {
    outfitsGrid.innerHTML = '';
    
    outfits.forEach((outfit, index) => {
        const outfitCard = createOutfitCard(outfit, index + 1);
        outfitsGrid.appendChild(outfitCard);
    });
}

// Create Outfit Card Function
function createOutfitCard(outfit, number) {
    const card = document.createElement('div');
    card.className = 'outfit-card';
    
    card.innerHTML = `
        <div class="outfit-image">
            <img src="${outfit.image}" alt="${outfit.name}" loading="lazy" onerror="this.style.display='none'">
        </div>
        <div class="outfit-content">
            <h3 class="outfit-title">Look ${number}: "${outfit.name}"</h3>
            <p class="outfit-description">${outfit.description}</p>
            <div class="outfit-details">
                <div class="outfit-detail">
                    <span class="outfit-detail-icon">👗</span>
                    <div class="outfit-detail-content">
                        <div class="outfit-detail-label">Outfit</div>
                        <div class="outfit-detail-value">${outfit.outfit}</div>
                    </div>
                </div>
                <div class="outfit-detail">
                    <span class="outfit-detail-icon">💍</span>
                    <div class="outfit-detail-content">
                        <div class="outfit-detail-label">Accessories</div>
                        <div class="outfit-detail-value">${outfit.accessories}</div>
                    </div>
                </div>
                <div class="outfit-detail">
                    <span class="outfit-detail-icon">👠</span>
                    <div class="outfit-detail-content">
                        <div class="outfit-detail-label">Footwear</div>
                        <div class="outfit-detail-value">${outfit.footwear}</div>
                    </div>
                </div>
                <div class="outfit-detail">
                    <span class="outfit-detail-icon">💇‍♀️</span>
                    <div class="outfit-detail-content">
                        <div class="outfit-detail-label">Hairstyle</div>
                        <div class="outfit-detail-value">${outfit.hairstyle}</div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// Show Results Section
function showResultsSection() {
    formSection.style.display = 'none';
    resultsSection.style.display = 'block';
    
    // Smooth scroll to results
    resultsSection.scrollIntoView({ behavior: 'smooth' });
}

// Show Form Section
function showFormSection() {
    resultsSection.style.display = 'none';
    formSection.style.display = 'block';
    
    // Reset form
    styleForm.reset();
    
    // Smooth scroll to form
    formSection.scrollIntoView({ behavior: 'smooth' });
}

// Back to Top Functionality
function toggleBackToTop() {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Global scroll to top function for footer links
window.scrollToTop = scrollToTop;

// Image error handling
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.style.display = 'none';
        const parent = e.target.parentElement;
        if (parent.classList.contains('outfit-image')) {
            parent.style.background = 'linear-gradient(45deg, #f0f0f0, #e0e0e0)';
            parent.innerHTML = '<div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 3rem; opacity: 0.3;">👗</div>';
        }
    }
}, true);

// Add loading state to form submission
function addLoadingState() {
    const submitBtn = document.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<div class="spinner"></div> Generating Outfits...';
    submitBtn.disabled = true;
    
    return () => {
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    };
}

// Enhanced form submission with loading
const originalHandleFormSubmit = handleFormSubmit;
function handleFormSubmit(e) {
    e.preventDefault();
    
    const removeLoading = addLoadingState();
    
    setTimeout(() => {
        originalHandleFormSubmit.call(this, e);
        removeLoading();
    }, 1000);
}

// Add smooth animations for better UX
function addSmoothAnimations() {
    const cards = document.querySelectorAll('.outfit-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Enhanced display outfits with animations
const originalDisplayOutfits = displayOutfits;
function displayOutfits(outfits) {
    originalDisplayOutfits(outfits);
    setTimeout(addSmoothAnimations, 100);
}