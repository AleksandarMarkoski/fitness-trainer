package com.fitness.mytrainer.service;

import com.fitness.mytrainer.model.Recipe;

import java.util.List;

public interface RecipeService {
    Recipe createRecipe(Recipe e) throws Exception;
    Recipe geRecipeDetails(String id) throws Exception;
    Recipe updateRecipe(Recipe e) throws Exception;
    List<Recipe> getAllRecipe();
    List<Recipe> getRecipesByType(String type);
    void deteleRecipe(String id);
}
