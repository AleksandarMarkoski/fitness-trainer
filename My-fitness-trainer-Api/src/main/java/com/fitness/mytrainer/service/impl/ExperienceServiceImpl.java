package com.fitness.mytrainer.service.impl;

import com.fitness.mytrainer.model.Experience;
import com.fitness.mytrainer.model.Recipe;
import com.fitness.mytrainer.repository.ExperienceRepository;
import com.fitness.mytrainer.repository.RecipeRepository;
import com.fitness.mytrainer.repository.UserRepository;
import com.fitness.mytrainer.service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    @Autowired
    private final ExperienceRepository experienceRepository;

    @Autowired
    private final UserRepository userRepository;

    @Autowired
    private  final RecipeRepository recipeRepository;

    public ExperienceServiceImpl(ExperienceRepository experienceRepository,
                                 UserRepository userRepository,
                                 RecipeRepository recipeRepository) {
        this.experienceRepository = experienceRepository;
        this.userRepository = userRepository;
        this.recipeRepository = recipeRepository;
    }

    @Override
    public Experience createExperience(Experience e) throws Exception {
        if(e == null){
            throw new Exception();
        }

//        for (Recipe rec: e.recipes) {
//            recipeRepository.findById(rec.getId()).orElseThrow(Exception::new);
//        }

        //userRepository.findById(e.user.email).orElseThrow(Exception::new);

        return experienceRepository.save(e);

    }

    @Override
    public Optional<Experience> getExperienceDetails(String id){
        return experienceRepository.findById(id);
    }

    @Override
    public Experience updateExperience(Experience e) throws Exception {
        if (e == null ){
            throw new Exception();
        }

        return this.experienceRepository.save(e);
    }

    @Override
    public List<Experience> getAllExperience() {
        return experienceRepository.getAllExercise();
    }

    @Override
    public void deleteExperience(String id) {
        this.experienceRepository.deleteById(id);
    }

    @Override
    public List<Experience> getExperienceByType(String type) {
        return null;
    }
}
