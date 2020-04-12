package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.Recipe;
import com.fitness.mytrainer.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class RecipeRepositoryImpl implements RecipeRepository {
    private final JpaRecipeRepository repository;
    @Autowired
    public RecipeRepositoryImpl( JpaRecipeRepository repository ){
        this.repository = repository;
    }

    @Override
    public Recipe save(Recipe e) {
        return this.repository.save(e);
    }

    @Override
    public List<Recipe> getAllExercise() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Recipe> findById(String id) {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }
}
