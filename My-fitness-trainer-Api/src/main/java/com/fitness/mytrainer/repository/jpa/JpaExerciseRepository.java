package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.Exercise;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaExerciseRepository extends JpaRepository<Exercise, String> {
}
