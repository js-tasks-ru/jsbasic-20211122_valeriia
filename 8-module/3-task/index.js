export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    if (product && this.cartItems) {
      if(this.cartItems.length > 0 && product){
        for (const cardItem of this.cartItems) {
          if (cardItem.product.id === product.id) {
            cardItem.count++;
            this.onProductUpdate(cardItem);
            return;
          }
        }
      }
      const newItem = {
        product,
        count: 1,
      };
      this.cartItems.push(newItem);
      this.onProductUpdate(newItem);
    }
  }

  updateProductCount(productId, amount) {
    let elem = this.cartItems?.findIndex(item => item.product.id === productId);
    let cartItem = this.cartItems[elem]
    cartItem.count += amount;

    if (this.cartItems.length == 1 && cartItem.count < 1) {
      this.cartItems = [];
    }
    this.onProductUpdate(cartItem);
  }

  isEmpty() {
    return this.cartItems.length === 0;
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    let price = 0;
    if (this.cartItems.length > 0) {
      for (const cartItem of this.cartItems) {
        price += cartItem.count * cartItem.product.price;
      }
    }
    return price;
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

