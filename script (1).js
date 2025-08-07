
function showCategoryItems(category) {
  const data = {
    'Groceries': [
      { emoji: '🍅', name: 'Tomato' },
      { emoji: '🥦', name: 'Broccoli' },
      { emoji: '🥕', name: 'Carrot' },
      { emoji: '🥛', name: 'Milk' },
      { emoji: '🧅', name: 'Onion' }
    ],
    'Electronics': [
      { emoji: '💻', name: 'Laptop' },
      { emoji: '📱', name: 'Smartphone' },
      { emoji: '🎧', name: 'Headphones' },
      { emoji: '🔋', name: 'Power Bank' }
    ],
    'Clothes': [
      { emoji: '👗', name: 'Dress' },
      { emoji: '👕', name: 'T-Shirt' },
      { emoji: '🧥', name: 'Jacket' }
    ],
    'Documents': [
      { emoji: '📄', name: 'Certificates' },
      { emoji: '📑', name: 'Legal Papers' },
      { emoji: '📬', name: 'Courier Docs' }
    ],
    'Medicines': [
      { emoji: '💊', name: 'Pills' },
      { emoji: '🧴', name: 'Syrup' },
      { emoji: '🩺', name: 'Kit' }
    ],
    'Gifts': [
      { emoji: '🎁', name: 'Boxed Gift' },
      { emoji: '🎂', name: 'Cake' },
      { emoji: '💐', name: 'Flowers' }
    ]
  };

  const items = data[category] || [];
  const container = document.getElementById('categoryItems');
  document.getElementById('categoryTitle').textContent = category + ' Items';
  container.innerHTML = '';

  items.forEach((item, index) => {
    const row = document.createElement('div');
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.alignItems = 'center';
    row.style.marginBottom = '15px';
    row.innerHTML = `
      <span style="font-size: 1.8rem;">${item.emoji}</span>
      <span style="flex:1; margin-left: 10px;">${item.name}</span>
      <button onclick="updateQuantity(${index}, -1)" style="padding: 5px 10px;">-</button>
      <span id="qty-${index}" style="margin: 0 10px;">0</span>
      <button onclick="updateQuantity(${index}, 1)" style="padding: 5px 10px;">+</button>
    `;
    container.appendChild(row);
  });

  document.getElementById('categoryModal').style.display = 'flex';
}

function updateQuantity(index, delta) {
  const span = document.getElementById('qty-' + index);
  let current = parseInt(span.textContent);
  current = Math.max(0, current + delta);
  span.textContent = current;
}

function closeCategoryModal() {
  document.getElementById('categoryModal').style.display = 'none';
}

function submitOrder() {
  alert('Order submitted! (Functionality can be extended to save data.)');
  closeCategoryModal();
}
