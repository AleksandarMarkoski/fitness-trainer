package com.fitness.mytrainer.service;

import com.fitness.mytrainer.model.Exercise;

import java.util.List;
import java.util.Optional;

public interface ExerciseService {
    Exercise createExercise(Exercise e) throws Exception;
    Optional<Exercise> getExerciseDetails(String id) throws Exception;
    Exercise updateExercise(Exercise e) throws Exception;
    List<Exercise> getAllExercise();
    void deleteExercise(String id);
}
