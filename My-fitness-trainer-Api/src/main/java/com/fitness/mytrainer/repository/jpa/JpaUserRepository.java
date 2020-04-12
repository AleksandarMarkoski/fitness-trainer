package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaUserRepository extends JpaRepository<User, String> {
}
