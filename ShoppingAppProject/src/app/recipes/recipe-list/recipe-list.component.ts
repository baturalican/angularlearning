import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Hamburger", "This is a delicious hamburger recipe", "https://live.staticflickr.com/2044/2323760575_2c242bba91_b.jpg"),
    new Recipe("Pancake", "This is a delicious pancake recipe", "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
