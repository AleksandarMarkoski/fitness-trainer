package com.fitness.mytrainer.repository;

import com.fitness.mytrainer.model.Recipe;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface RecipeRepository {
    Recipe save(Recipe e);
    List<Recipe> getAllExercise();
    Optional<Recipe> findById(String id);
    void deleteById(String id);
}
