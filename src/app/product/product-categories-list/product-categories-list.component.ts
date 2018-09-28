import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ProductCategory} from '../productCategory.model';
import {Product} from '../product.model';
import { ProductCategoryService } from '../product-category.service';


@Component({
  selector: 'app-product-categories-list',
  templateUrl: './product-categories-list.component.html',
  styleUrls: ['./product-categories-list.component.css']
})
export class ProductCategoriesListComponent implements OnInit {

  @Output() categorySelectedFromList=new EventEmitter<ProductCategory>();
  productCategoriesList: ProductCategory[]
  // productCategories: ProductCategory[]=[
  //   new ProductCategory('shoes','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
  //   new ProductCategory('jackets','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
  //   new ProductCategory('socks','http://www.personal.psu.edu/oeo5025/jpg.jpg' ),
  //   new ProductCategory('t-shirts', 'http://www.personal.psu.edu/oeo5025/jpg.jpg'),
  // ];

  constructor(private productCategoryService :ProductCategoryService) { }

  ngOnInit() {
    this.productCategoriesList=this.productCategoryService.productCategoriesList;
  }


  selectedCategory(productCategory: ProductCategory){
    this.categorySelectedFromList.emit(productCategory);
  }
}
