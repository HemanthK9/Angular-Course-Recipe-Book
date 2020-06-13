import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';


@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'Biryani',
            'Heck yeah',
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2019/9/9/0/FNK_the-best-biryani_H.JPG.rend.hgtvcom.826.620.suffix/1568143107638.jpeg',
            [
                new Ingredient('Chicken', 1),
                new Ingredient('Rice', 1)
            ]
            ),
        new Recipe(
            'Chocolate Sundae', 
            'WooHoo', 
            'https://www.readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_9127_71974.jpg',
            [
                new Ingredient('Milk', 3),
                new Ingredient('ChocoChips', 20)
            ]
            )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}