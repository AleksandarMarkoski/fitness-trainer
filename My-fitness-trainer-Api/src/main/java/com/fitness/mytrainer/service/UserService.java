package com.fitness.mytrainer.service;

import com.fitness.mytrainer.model.Recipe;
import com.fitness.mytrainer.model.User;

import java.util.List;

public interface UserService {
    User createUser(User e) throws Exception;
    User getUserDetails(String id) throws Exception;
    List<User> getAllUsers();
}
