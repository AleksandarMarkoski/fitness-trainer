package com.fitness.mytrainer.service;

import com.fitness.mytrainer.model.Experience;

import java.util.List;
import java.util.Optional;

public interface ExperienceService {
    Experience createExperience(Experience e) throws Exception;
    Optional<Experience> getExperienceDetails(String id);
    Experience updateExperience(Experience e) throws Exception;
    List<Experience> getAllExperience();
    void deleteExperience(String id);
    List<Experience> getExperienceByType(String type);
}
