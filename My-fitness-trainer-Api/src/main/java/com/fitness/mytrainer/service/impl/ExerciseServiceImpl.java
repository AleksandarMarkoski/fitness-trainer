package com.fitness.mytrainer.service.impl;

import com.fitness.mytrainer.model.Exercise;
import com.fitness.mytrainer.repository.ExerciseRepository;
import com.fitness.mytrainer.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.InvalidObjectException;
import java.util.List;
import java.util.Optional;

@Service
public class ExerciseServiceImpl implements ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public ExerciseServiceImpl(ExerciseRepository exerciseRepository){
        this.exerciseRepository = exerciseRepository;
    }

    @Override
    public Exercise createExercise(Exercise e) throws Exception {
        if (e == null ){
            throw new Exception();
        }

        return this.exerciseRepository.save(e);
    }

    @Override
    public Optional<Exercise> getExerciseDetails(String id) throws Exception {
        if(id == null){
            throw new Exception();
        }
        return this.exerciseRepository.findById(id);
    }

    @Override
    public Exercise updateExercise(Exercise e) throws Exception {
        if (e == null ){
            throw new Exception();
        }

        return this.exerciseRepository.save(e);
    }

    @Override
    public List<Exercise> getAllExercise() {
        return this.exerciseRepository.getAllExercise();
    }

    @Override
    public void deleteExercise(String id) {
        this.exerciseRepository.deleteById(id);
    }

}
