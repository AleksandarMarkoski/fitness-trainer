package com.fitness.mytrainer.repository;

import com.fitness.mytrainer.model.Experience;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface ExperienceRepository {
    Experience save(Experience e);
    List<Experience> getAllExercise();
    Optional<Experience> findById(String id);
    void deleteById(String id);
}
