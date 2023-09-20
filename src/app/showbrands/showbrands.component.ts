import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

import { product } from '../data-type';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-showbrands',
  templateUrl: './showbrands.component.html',
  styleUrls: ['./showbrands.component.css']
})
export class ShowbrandsComponent implements OnInit {
  brandsProduct: undefined | product[];
  category: string = '';
  constructor(private productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'] || 'defaultCategory'; 
      this.productService.getBrandsProducts(this.category).subscribe(data => {
        this.brandsProduct = data;
      });
    });
  }

  }


