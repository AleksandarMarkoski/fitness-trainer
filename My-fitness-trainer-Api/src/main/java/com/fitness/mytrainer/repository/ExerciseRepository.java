package com.fitness.mytrainer.repository;

import com.fitness.mytrainer.model.Exercise;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


public interface ExerciseRepository {
    Exercise save(Exercise e);
    List<Exercise> getAllExercise();
    Optional<Exercise> findById(String id);
    void deleteById(String id);
}
