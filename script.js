/**
 * ModernShop E-commerce Application
 * High-performance, cross-browser compatible e-commerce solution
 * Features: Lazy loading, localStorage cart, form validation, accessibility
 */

class ModernShop {
    constructor() {
        this.products = [];
        this.cart = [];
        this.filteredProducts = [];
        this.currentPage = 1;
        this.productsPerPage = 12;
        this.currentFilter = 'all';
        this.currentSearch = '';
        this.isLoading = false;
        
        // DOM Elements (cached for performance)
        this.elements = {
            loading: document.getElementById('loading'),
            productsGrid: document.getElementById('products-grid'),
            cartBtn: document.getElementById('cart-btn'),
            cartCount: document.getElementById('cart-count'),
            cartModal: document.getElementById('cart-modal'),
            cartItems: document.getElementById('cart-items'),
            cartTotal: document.getElementById('cart-total'),
            productModal: document.getElementById('product-modal'),
            searchInput: document.getElementById('search-input'),
            searchBtn: document.getElementById('search-btn'),
            loadMoreBtn: document.getElementById('load-more-btn'),
            backToTop: document.getElementById('back-to-top'),
            contactForm: document.getElementById('contact-form'),
            navbar: document.querySelector('.navbar'),
            navMenu: document.querySelector('.nav-menu'),
            mobileToggle: document.getElementById('mobile-toggle')
        };
        
        // Intersection Observer for lazy loading
        this.imageObserver = null;
        this.initImageObserver();
        
        this.init();
    }
    
    /**
     * Initialize the application
     */
    async init() {
        try {
            this.showLoading();
            
            // Load cart from localStorage
            this.loadCart();
            
            // Load products data
            await this.loadProducts();
            
            // Initialize event listeners
            this.initEventListeners();
            
            // Initial render
            this.renderProducts();
            
            // Initialize other features
            this.initScrollEffects();
            this.initMobileMenu();
            
            this.hideLoading();
            
            // Add fade-in animation to products
            this.animateProducts();
            
        } catch (error) {
            console.error('Error initializing app:', error);
            this.showError('Failed to load application. Please refresh the page.');
        }
    }
    
    /**
     * Initialize Intersection Observer for lazy loading images
     */
    initImageObserver() {
        if ('IntersectionObserver' in window) {
            this.imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        const src = img.dataset.src;
                        
                        if (src) {
                            img.src = src;
                            img.classList.add('lazy-image');
                            
                            img.onload = () => {
                                img.classList.add('loaded');
                                img.classList.remove('lazy-image');
                            };
                            
                            img.onerror = () => {
                                img.classList.add('error');
                                img.alt = 'Image failed to load';
                            };
                            
                            this.imageObserver.unobserve(img);
                        }
                    }
                });
            }, {
                rootMargin: '50px 0px',
                threshold: 0.1
            });
        }
    }
    
    /**
     * Load products from mock data (simulates API call)
     */
    async loadProducts() {
        return new Promise((resolve) => {
            // Simulate API delay
            setTimeout(() => {
                this.products = this.getMockProducts();
                this.filteredProducts = [...this.products];
                resolve();
            }, 500);
        });
    }
    
    /**
     * Get mock product data (simulates backend API)
     */
    getMockProducts() {
        return [
            {
                id: 1,
                title: "Wireless Bluetooth Headphones",
                description: "Premium quality wireless headphones with noise cancellation and 20-hour battery life. Perfect for music lovers and professionals.",
                price: 89.99,
                image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
                category: "electronics",
                rating: 4.5,
                inStock: true
            },
            {
                id: 2,
                title: "Organic Cotton T-Shirt",
                description: "Comfortable and sustainable organic cotton t-shirt available in multiple colors. Ethically sourced and environmentally friendly.",
                price: 24.99,
                image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop",
                category: "clothing",
                rating: 4.2,
                inStock: true
            },
            {
                id: 3,
                title: "JavaScript Programming Guide",
                description: "Comprehensive guide to modern JavaScript programming. Perfect for beginners and advanced developers looking to improve their skills.",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
                category: "books",
                rating: 4.8,
                inStock: true
            },
            {
                id: 4,
                title: "Smart Fitness Watch",
                description: "Advanced fitness tracking with heart rate monitoring, GPS, and smartphone connectivity. Water-resistant design for all activities.",
                price: 199.99,
                image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
                category: "electronics",
                rating: 4.6,
                inStock: true
            },
            {
                id: 5,
                title: "Premium Leather Jacket",
                description: "Handcrafted genuine leather jacket with classic design. Perfect for casual and formal occasions. Available in black and brown.",
                price: 159.99,
                image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=300&fit=crop",
                category: "clothing",
                rating: 4.4,
                inStock: true
            },
            {
                id: 6,
                title: "Web Development Cookbook",
                description: "Essential recipes for modern web development. Covers HTML, CSS, JavaScript, and popular frameworks with practical examples.",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
                category: "books",
                rating: 4.7,
                inStock: true
            },
            {
                id: 7,
                title: "Wireless Charging Pad",
                description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and overcharge protection.",
                price: 34.99,
                image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
                category: "electronics",
                rating: 4.3,
                inStock: true
            },
            {
                id: 8,
                title: "Casual Denim Jeans",
                description: "Classic fit denim jeans made from premium cotton blend. Comfortable for daily wear with timeless style that never goes out of fashion.",
                price: 79.99,
                image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=300&fit=crop",
                category: "clothing",
                rating: 4.1,
                inStock: true
            },
            {
                id: 9,
                title: "React Development Handbook",
                description: "Master React development with this comprehensive handbook. Covers hooks, context, state management, and best practices.",
                price: 54.99,
                image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop",
                category: "books",
                rating: 4.9,
                inStock: true
            },
            {
                id: 10,
                title: "Portable Bluetooth Speaker",
                description: "Compact wireless speaker with powerful sound and 12-hour battery life. Perfect for outdoor activities and travel.",
                price: 69.99,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
                category: "electronics",
                rating: 4.4,
                inStock: true
            },
            {
                id: 11,
                title: "Summer Dress Collection",
                description: "Elegant summer dress with floral patterns. Lightweight fabric perfect for warm weather. Available in multiple sizes and colors.",
                price: 64.99,
                image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=300&fit=crop",
                category: "clothing",
                rating: 4.5,
                inStock: true
            },
            {
                id: 12,
                title: "Data Science Fundamentals",
                description: "Introduction to data science with Python and R. Covers statistics, machine learning, and data visualization techniques.",
                price: 69.99,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
                category: "books",
                rating: 4.6,
                inStock: true
            }
        ];
    }
    
    /**
     * Initialize all event listeners
     */
    initEventListeners() {
        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.handleFilterClick(e.target);
            });
        });
        
        // Search functionality
        this.elements.searchInput.addEventListener('input', this.debounce((e) => {
            this.handleSearch(e.target.value);
        }, 300));
        
        this.elements.searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.handleSearch(this.elements.searchInput.value);
        });
        
        // Cart functionality
        this.elements.cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.openCartModal();
        });
        
        // Modal close buttons
        document.querySelectorAll('.close-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModals();
            });
        });
        
        // Modal backdrop click
        document.querySelectorAll('.modal').forEach(modal => {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    this.closeModals();
                }
            });
        });
        
        // Load more button
        this.elements.loadMoreBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.loadMoreProducts();
        });
        
        // Back to top button
        this.elements.backToTop.addEventListener('click', (e) => {
            e.preventDefault();
            this.scrollToTop();
        });
        
        // Contact form
        this.elements.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactForm(e);
        });
        
        // Cart actions
        document.getElementById('clear-cart').addEventListener('click', (e) => {
            e.preventDefault();
            this.clearCart();
        });
        
        document.getElementById('checkout-btn').addEventListener('click', (e) => {
            e.preventDefault();
            this.handleCheckout();
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });
        
        // Window events
        window.addEventListener('scroll', this.throttle(() => {
            this.handleScroll();
        }, 100));
        
        window.addEventListener('resize', this.debounce(() => {
            this.handleResize();
        }, 250));
    }
    
    /**
     * Initialize mobile menu functionality
     */
    initMobileMenu() {
        this.elements.mobileToggle.addEventListener('click', () => {
            this.elements.navMenu.classList.toggle('active');
            this.elements.mobileToggle.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on links
        this.elements.navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                this.elements.navMenu.classList.remove('active');
                this.elements.mobileToggle.classList.remove('active');
            });
        });
    }
    
    /**
     * Initialize scroll effects
     */
    initScrollEffects() {
        // Navbar scroll effect
        window.addEventListener('scroll', this.throttle(() => {
            if (window.scrollY > 100) {
                this.elements.navbar.classList.add('scrolled');
            } else {
                this.elements.navbar.classList.remove('scrolled');
            }
        }, 100));
        
        // Back to top button
        window.addEventListener('scroll', this.throttle(() => {
            if (window.scrollY > 300) {
                this.elements.backToTop.classList.add('show');
            } else {
                this.elements.backToTop.classList.remove('show');
            }
        }, 100));
    }
    
    /**
     * Handle filter button clicks
     */
    handleFilterClick(button) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        button.classList.add('active');
        
        // Filter products
        this.currentFilter = button.dataset.filter;
        this.currentPage = 1;
        this.filterProducts();
        this.renderProducts();
    }
    
    /**
     * Handle search input
     */
    handleSearch(query) {
        this.currentSearch = query.toLowerCase();
        this.currentPage = 1;
        this.filterProducts();
        this.renderProducts();
    }
    
    /**
     * Filter products based on current filter and search
     */
    filterProducts() {
        this.filteredProducts = this.products.filter(product => {
            const matchesFilter = this.currentFilter === 'all' || product.category === this.currentFilter;
            const matchesSearch = this.currentSearch === '' || 
                                product.title.toLowerCase().includes(this.currentSearch) ||
                                product.description.toLowerCase().includes(this.currentSearch);
            
            return matchesFilter && matchesSearch;
        });
    }
    
    /**
     * Render products to the grid
     */
    renderProducts(append = false) {
        const startIndex = (this.currentPage - 1) * this.productsPerPage;
        const endIndex = startIndex + this.productsPerPage;
        const productsToShow = this.filteredProducts.slice(startIndex, endIndex);
        
        if (!append) {
            this.elements.productsGrid.innerHTML = '';
        }
        
        if (productsToShow.length === 0) {
            this.elements.productsGrid.innerHTML = `
                <div class="no-products">
                    <h3>No products found</h3>
                    <p>Try adjusting your filters or search terms.</p>
                </div>
            `;
            this.elements.loadMoreBtn.style.display = 'none';
            return;
        }
        
        const fragment = document.createDocumentFragment();
        
        productsToShow.forEach(product => {
            const productElement = this.createProductElement(product);
            fragment.appendChild(productElement);
        });
        
        this.elements.productsGrid.appendChild(fragment);
        
        // Update load more button visibility
        if (endIndex >= this.filteredProducts.length) {
            this.elements.loadMoreBtn.style.display = 'none';
        } else {
            this.elements.loadMoreBtn.style.display = 'block';
        }
        
        // Initialize lazy loading for new images
        this.initLazyLoading();
    }
    
    /**
     * Create product element
     */
    createProductElement(product) {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.setAttribute('data-product-id', product.id);
        
        productCard.innerHTML = `
            <div class="product-image">
                <img 
                    data-src="${product.image}" 
                    alt="${product.title}"
                    loading="lazy"
                    class="lazy-image"
                />
            </div>
            <div class="product-info">
                <h3 class="product-title">${this.escapeHtml(product.title)}</h3>
                <p class="product-description">${this.escapeHtml(product.description)}</p>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-rating" aria-label="Rating: ${product.rating} out of 5 stars">
                    ${this.generateStars(product.rating)}
                </div>
                <div class="product-actions">
                    <button 
                        class="add-to-cart-btn btn btn-primary" 
                        data-product-id="${product.id}"
                        aria-label="Add ${product.title} to cart"
                    >
                        Add to Cart
                    </button>
                    <button 
                        class="view-details-btn btn btn-outline-primary" 
                        data-product-id="${product.id}"
                        aria-label="View details for ${product.title}"
                    >
                        Details
                    </button>
                </div>
            </div>
        `;
        
        // Add event listeners
        const addToCartBtn = productCard.querySelector('.add-to-cart-btn');
        const viewDetailsBtn = productCard.querySelector('.view-details-btn');
        
        addToCartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.addToCart(product.id);
        });
        
        viewDetailsBtn.addEventListener('click', (e) => {
            e.preventDefault();
            this.openProductModal(product);
        });
        
        return productCard;
    }
    
    /**
     * Generate star rating HTML
     */
    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        
        let stars = '';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="star filled" aria-hidden="true">★</span>';
        }
        
        if (hasHalfStar) {
            stars += '<span class="star half-filled" aria-hidden="true">☆</span>';
        }
        
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="star empty" aria-hidden="true">☆</span>';
        }
        
        return stars;
    }
    
    /**
     * Initialize lazy loading for images
     */
    initLazyLoading() {
        if (this.imageObserver) {
            const lazyImages = this.elements.productsGrid.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                this.imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            const lazyImages = this.elements.productsGrid.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }
    
    /**
     * Load more products
     */
    loadMoreProducts() {
        this.currentPage++;
        this.renderProducts(true);
        this.animateProducts();
    }
    
    /**
     * Add product to cart
     */
    addToCart(productId, quantity = 1) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        const existingItem = this.cart.find(item => item.id === productId);
        
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cart.push({
                ...product,
                quantity: quantity
            });
        }
        
        this.saveCart();
        this.updateCartUI();
        this.showNotification(`${product.title} added to cart!`);
    }
    
    /**
     * Remove item from cart
     */
    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartUI();
        this.renderCartItems();
    }
    
    /**
     * Update cart item quantity
     */
    updateCartQuantity(productId, quantity) {
        const item = this.cart.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.removeFromCart(productId);
            } else {
                item.quantity = quantity;
                this.saveCart();
                this.updateCartUI();
                this.renderCartItems();
            }
        }
    }
    
    /**
     * Clear entire cart
     */
    clearCart() {
        if (confirm('Are you sure you want to clear your cart?')) {
            this.cart = [];
            this.saveCart();
            this.updateCartUI();
            this.renderCartItems();
            this.showNotification('Cart cleared!');
        }
    }
    
    /**
     * Save cart to localStorage
     */
    saveCart() {
        try {
            localStorage.setItem('modernshop-cart', JSON.stringify(this.cart));
        } catch (error) {
            console.error('Error saving cart:', error);
        }
    }
    
    /**
     * Load cart from localStorage
     */
    loadCart() {
        try {
            const savedCart = localStorage.getItem('modernshop-cart');
            if (savedCart) {
                this.cart = JSON.parse(savedCart);
            }
        } catch (error) {
            console.error('Error loading cart:', error);
            this.cart = [];
        }
        this.updateCartUI();
    }
    
    /**
     * Update cart UI elements
     */
    updateCartUI() {
        const itemCount = this.cart.reduce((sum, item) => sum + item.quantity, 0);
        this.elements.cartCount.textContent = itemCount;
        
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        this.elements.cartTotal.textContent = total.toFixed(2);
    }
    
    /**
     * Open cart modal
     */
    openCartModal() {
        this.renderCartItems();
        this.elements.cartModal.classList.add('show');
        this.elements.cartModal.setAttribute('aria-hidden', 'false');
        
        // Focus management for accessibility
        const firstFocusable = this.elements.cartModal.querySelector('button');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }
    
    /**
     * Render cart items
     */
    renderCartItems() {
        if (this.cart.length === 0) {
            this.elements.cartItems.innerHTML = `
                <div class="empty-cart">
                    <h3>Your cart is empty</h3>
                    <p>Add some products to get started!</p>
                </div>
            `;
            return;
        }
        
        const fragment = document.createDocumentFragment();
        
        this.cart.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img 
                    src="${item.image}" 
                    alt="${item.title}"
                    class="cart-item-image"
                    loading="lazy"
                />
                <div class="cart-item-details">
                    <div class="cart-item-title">${this.escapeHtml(item.title)}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                    <div class="cart-item-quantity">
                        <button 
                            class="quantity-btn decrease" 
                            data-product-id="${item.id}"
                            aria-label="Decrease quantity"
                        >-</button>
                        <input 
                            type="number" 
                            class="quantity-input" 
                            value="${item.quantity}" 
                            min="1" 
                            max="99"
                            data-product-id="${item.id}"
                            aria-label="Quantity"
                        />
                        <button 
                            class="quantity-btn increase" 
                            data-product-id="${item.id}"
                            aria-label="Increase quantity"
                        >+</button>
                    </div>
                </div>
                <button 
                    class="remove-item-btn" 
                    data-product-id="${item.id}"
                    aria-label="Remove ${item.title} from cart"
                >
                    Remove
                </button>
            `;
            
            // Add event listeners
            const decreaseBtn = cartItem.querySelector('.decrease');
            const increaseBtn = cartItem.querySelector('.increase');
            const quantityInput = cartItem.querySelector('.quantity-input');
            const removeBtn = cartItem.querySelector('.remove-item-btn');
            
            decreaseBtn.addEventListener('click', () => {
                this.updateCartQuantity(item.id, item.quantity - 1);
            });
            
            increaseBtn.addEventListener('click', () => {
                this.updateCartQuantity(item.id, item.quantity + 1);
            });
            
            quantityInput.addEventListener('change', (e) => {
                const quantity = parseInt(e.target.value);
                if (quantity > 0 && quantity <= 99) {
                    this.updateCartQuantity(item.id, quantity);
                } else {
                    e.target.value = item.quantity;
                }
            });
            
            removeBtn.addEventListener('click', () => {
                this.removeFromCart(item.id);
            });
            
            fragment.appendChild(cartItem);
        });
        
        this.elements.cartItems.innerHTML = '';
        this.elements.cartItems.appendChild(fragment);
    }
    
    /**
     * Open product details modal
     */
    openProductModal(product) {
        const modal = this.elements.productModal;
        
        // Update modal content
        document.getElementById('product-title').textContent = product.title;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = product.price.toFixed(2);
        
        const productImage = document.getElementById('product-image');
        productImage.src = product.image;
        productImage.alt = product.title;
        
        // Set up add to cart button
        const addToCartBtn = document.getElementById('add-to-cart-modal');
        addToCartBtn.onclick = () => {
            const quantity = parseInt(document.getElementById('quantity').value);
            this.addToCart(product.id, quantity);
        };
        
        modal.classList.add('show');
        modal.setAttribute('aria-hidden', 'false');
        
        // Focus management
        const firstFocusable = modal.querySelector('button');
        if (firstFocusable) {
            firstFocusable.focus();
        }
    }
    
    /**
     * Close all modals
     */
    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.remove('show');
            modal.setAttribute('aria-hidden', 'true');
        });
    }
    
    /**
     * Handle checkout process
     */
    handleCheckout() {
        if (this.cart.length === 0) {
            this.showNotification('Your cart is empty!');
            return;
        }
        
        // Simple checkout simulation
        const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        if (confirm(`Proceed to checkout? Total: $${total.toFixed(2)}`)) {
            // Simulate checkout process
            this.showNotification('Checkout successful! Thank you for your purchase!');
            this.cart = [];
            this.saveCart();
            this.updateCartUI();
            this.closeModals();
        }
    }
    
    /**
     * Handle contact form submission
     */
    handleContactForm(event) {
        const form = event.target;
        const formData = new FormData(form);
        
        // Basic form validation
        const name = formData.get('name') || form.querySelector('input[type="text"]').value;
        const email = formData.get('email') || form.querySelector('input[type="email"]').value;
        const message = formData.get('message') || form.querySelector('textarea').value;
        
        if (!this.validateForm(name, email, message)) {
            return;
        }
        
        // Simulate form submission
        this.showNotification('Thank you for your message! We\'ll get back to you soon.');
        form.reset();
    }
    
    /**
     * Validate form inputs
     */
    validateForm(name, email, message) {
        const errors = [];
        
        if (!name || name.trim().length < 2) {
            errors.push('Name must be at least 2 characters long');
        }
        
        if (!email || !this.isValidEmail(email)) {
            errors.push('Please enter a valid email address');
        }
        
        if (!message || message.trim().length < 10) {
            errors.push('Message must be at least 10 characters long');
        }
        
        if (errors.length > 0) {
            this.showNotification(errors.join('\n'), 'error');
            return false;
        }
        
        return true;
    }
    
    /**
     * Validate email format
     */
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    /**
     * Handle scroll events
     */
    handleScroll() {
        // Add scroll-based animations or effects here
        const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        
        // Update progress bar if exists
        const progressBar = document.querySelector('.scroll-progress');
        if (progressBar) {
            progressBar.style.width = `${scrollPercent}%`;
        }
    }
    
    /**
     * Handle window resize
     */
    handleResize() {
        // Handle responsive behavior
        if (window.innerWidth > 768) {
            this.elements.navMenu.classList.remove('active');
            this.elements.mobileToggle.classList.remove('active');
        }
    }
    
    /**
     * Scroll to top smoothly
     */
    scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    /**
     * Animate products on load
     */
    animateProducts() {
        const products = this.elements.productsGrid.querySelectorAll('.product-card');
        products.forEach((product, index) => {
            setTimeout(() => {
                product.classList.add('fade-in');
            }, index * 100);
        });
    }
    
    /**
     * Show loading spinner
     */
    showLoading() {
        this.elements.loading.style.display = 'flex';
        this.isLoading = true;
    }
    
    /**
     * Hide loading spinner
     */
    hideLoading() {
        this.elements.loading.style.display = 'none';
        this.isLoading = false;
    }
    
    /**
     * Show notification
     */
    showNotification(message, type = 'success') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        notification.setAttribute('role', 'alert');
        notification.setAttribute('aria-live', 'polite');
        
        document.body.appendChild(notification);
        
        // Trigger animation
        setTimeout(() => {
            notification.classList.add('show');
        }, 10);
        
        // Remove notification after delay
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }
    
    /**
     * Show error message
     */
    showError(message) {
        this.showNotification(message, 'error');
    }
    
    /**
     * Escape HTML to prevent XSS
     */
    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, (m) => map[m]);
    }
    
    /**
     * Debounce function for performance optimization
     */
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    /**
     * Throttle function for performance optimization
     */
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// Notification styles (injected dynamically)
const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 16px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        z-index: 10000;
        max-width: 300px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
    
    .notification.success {
        background-color: #28a745;
    }
    
    .notification.error {
        background-color: #dc3545;
    }
    
    .notification.show {
        transform: translateX(0);
    }
    
    .no-products {
        grid-column: 1 / -1;
        text-align: center;
        padding: 60px 20px;
        color: #6c757d;
    }
    
    .no-products h3 {
        margin-bottom: 16px;
        color: #343a40;
    }
    
    .star {
        color: #ffc107;
        margin-right: 2px;
    }
    
    .star.empty {
        color: #e0e0e0;
    }
    
    .star.half-filled {
        color: #ffc107;
    }
`;

// Inject notification styles
const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// Initialize the application when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ModernShop();
    });
} else {
    new ModernShop();
}

// Service Worker registration for PWA capabilities (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ModernShop;
}