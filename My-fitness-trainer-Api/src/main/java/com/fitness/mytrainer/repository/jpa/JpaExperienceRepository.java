package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaExperienceRepository extends JpaRepository<Experience, String> {
}
