package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.Experience;
import com.fitness.mytrainer.repository.ExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.query.JpaEntityGraph;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ExperienceRepositoryImpl implements ExperienceRepository {
   private final JpaExperienceRepository repository;
    @Autowired
   public ExperienceRepositoryImpl(JpaExperienceRepository repository){
       this.repository = repository;
   }

    @Override
    public Experience save(Experience e) {
        return this.repository.save(e);
    }

    @Override
    public List<Experience> getAllExercise() {
        return this.repository.findAll();
    }

    @Override
    public Optional<Experience> findById(String id) {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
       this.repository.deleteById(id);
    }
}
