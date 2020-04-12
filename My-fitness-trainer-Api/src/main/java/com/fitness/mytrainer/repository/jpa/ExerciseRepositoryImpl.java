package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.Exercise;
import com.fitness.mytrainer.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ExerciseRepositoryImpl implements ExerciseRepository {

    private final JpaExerciseRepository repository;
    @Autowired
    public ExerciseRepositoryImpl(JpaExerciseRepository repository){
        this.repository = repository;
    }

    @Override
    public Exercise save(Exercise e) {
        return this.repository.save(e);
    }

    @Override
    public List<Exercise> getAllExercise() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Exercise> findById(String id) {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }
}
