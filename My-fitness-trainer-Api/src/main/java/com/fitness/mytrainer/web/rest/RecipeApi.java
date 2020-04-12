package com.fitness.mytrainer.web.rest;

import com.fitness.mytrainer.model.ForumPost;
import com.fitness.mytrainer.model.Recipe;
import com.fitness.mytrainer.service.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/recipes", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)

public class RecipeApi {


    private final RecipeService recipeService;
    @Autowired
    public RecipeApi(RecipeService recipeService){
        this.recipeService = recipeService;
    }

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeService.getAllRecipe();
    }

    @GetMapping("/{id}")
    public Recipe getRecipeDetails(@PathVariable String id) throws Exception {
        return recipeService.geRecipeDetails(id);
    }

    @PostMapping("/add-new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createRecipe(@RequestBody Recipe recipe)throws Exception {
        recipeService.createRecipe(recipe);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity updateRecipe(@RequestBody Recipe recipe) throws Exception {
        recipeService.updateRecipe(recipe);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{Id}")
    public void deleteRecipe(@PathVariable String Id) {
        recipeService.deteleRecipe(Id);
    }
}
