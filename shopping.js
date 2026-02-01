const products = [
  { name: "iPhone 14", price: 79999, rating: 4.5, category: "Electronics" },
  { name: "Samsung TV", price: 45999, rating: 4.2, category: "Electronics" },
  { name: "Laptop", price: 55999, rating: 4.4, category: "Electronics" },
  { name: "Wireless Earbuds", price: 2999, rating: 4.3, category: "Electronics" },
  { name: "Smart Watch", price: 6999, rating: 4.4, category: "Electronics" },

  { name: "Nike Shoes", price: 4999, rating: 4.6, category: "Fashion" },
  { name: "T-Shirt", price: 999, rating: 4.1, category: "Fashion" },
  { name: "Jeans", price: 1999, rating: 4.3, category: "Fashion" },
  { name: "Hoodie", price: 2499, rating: 4.2, category: "Fashion" },
  { name: "Sneakers", price: 3499, rating: 4.5, category: "Fashion" },

  { name: "Book A", price: 399, rating: 4.0, category: "Books" },
  { name: "Book B", price: 499, rating: 4.4, category: "Books" },
  { name: "Book C", price: 299, rating: 3.9, category: "Books" },
  { name: "Notebook Set", price: 599, rating: 4.1, category: "Books" },
  { name: "Story Book", price: 449, rating: 4.3, category: "Books" },

  { name: "Chair", price: 2999, rating: 4.2, category: "Home" },
  { name: "Table", price: 4999, rating: 4.5, category: "Home" },
  { name: "Lamp", price: 1499, rating: 4.1, category: "Home" },
  { name: "Wall Clock", price: 1999, rating: 4.2, category: "Home" },
  { name: "Bedsheet", price: 1599, rating: 4.4, category: "Home" }
];

function displayProducts(list) {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ₹${product.price}</p>
      <p>Rating: ⭐ ${product.rating}</p>
      <p>Category: ${product.category}</p>
    `;
    container.appendChild(div);
  });
}

displayProducts(products);

function handleSort() {
  const value = document.getElementById("sortSelect").value;
  let sorted = [...products];

  if (value === "price-asc") sorted.sort((a, b) => a.price - b.price);
  if (value === "price-desc") sorted.sort((a, b) => b.price - a.price);
  if (value === "name-asc") sorted.sort((a, b) => a.name.localeCompare(b.name));
  if (value === "name-desc") sorted.sort((a, b) => b.name.localeCompare(a.name));
  if (value === "rating-desc") sorted.sort((a, b) => b.rating - a.rating);

  displayProducts(sorted);
}

function handleFilter() {
  const category = document.getElementById("categorySelect").value;

  if (category === "all") {
    displayProducts(products);
  } else {
    const filtered = products.filter(p => p.category === category);
    displayProducts(filtered);
  }
}
