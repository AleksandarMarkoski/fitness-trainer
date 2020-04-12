package com.fitness.mytrainer.repository;

import com.fitness.mytrainer.model.User;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface UserRepository {
    User save(User e);
    List<User>  getAllUsers();
    Optional<User> findById(String id);
}
