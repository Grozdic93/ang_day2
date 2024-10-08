import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  productForm = new FormGroup({
    productName: new FormControl('', Validators.required),
    productPrice: new FormControl('', [Validators.required, Validators.min(3)]),
  });
  priceControl = this.productForm.controls.productPrice;
  nameControl = this.productForm.controls.productName;
  num = 0;
  products: {
    name: string;
    price: number;
  }[] = [
    { name: 'iphone', price: 500 },
    { name: 'laptop', price: 900 },
    { name: 'monitor', price: 300 },
  ];

  onIncreaseCount() {
    this.num++;
  }

  onSubmit() {
    console.log(this.productForm.valid);
    if (this.productForm.valid) {
      let name = this.productForm.value.productName;
      let price = this.productForm.value.productPrice;
      if (name && price) {
        this.products.push({ name: name, price: Number(price) });
        console.log(this.products);
        this.productForm.reset();
      }
    }
  }
}
