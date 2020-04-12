package com.fitness.mytrainer.service.impl;

import com.fitness.mytrainer.model.Recipe;
import com.fitness.mytrainer.repository.RecipeRepository;
import com.fitness.mytrainer.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class RecipeServiceImpl implements RecipeService {

    @Autowired
    private final RecipeRepository recipeRepository;

    public RecipeServiceImpl(RecipeRepository recipeRepository){
        this.recipeRepository = recipeRepository;
    }

    @Override
    public Recipe createRecipe(Recipe e) throws Exception {
        if(e == null){
            throw new Exception();
        }
        return recipeRepository.save(e);
    }

    @Override
    public Recipe geRecipeDetails(String id) throws Exception {
        if(id == null){
            throw new Exception();
        }

        return recipeRepository.findById(id).orElseThrow(Exception::new);
    }

    @Override
    public Recipe updateRecipe(Recipe e) throws Exception {
        if(e == null){
            throw new Exception();
        }

        return recipeRepository.save(e);
    }

    @Override
    public List<Recipe> getAllRecipe() {
        return recipeRepository.getAllExercise();
    }

    @Override
    public List<Recipe> getRecipesByType(String type) {
        return null;
    }

    @Override
    public void deteleRecipe(String id) {
        recipeRepository.deleteById(id);
    }
}
