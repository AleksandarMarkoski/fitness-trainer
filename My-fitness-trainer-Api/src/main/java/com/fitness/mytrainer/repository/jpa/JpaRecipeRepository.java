package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaRecipeRepository extends JpaRepository<Recipe, String> {
}
