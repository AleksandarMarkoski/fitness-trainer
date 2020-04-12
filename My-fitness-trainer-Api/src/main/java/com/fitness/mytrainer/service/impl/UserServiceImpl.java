package com.fitness.mytrainer.service.impl;

import com.fitness.mytrainer.model.User;
import com.fitness.mytrainer.repository.UserRepository;
import com.fitness.mytrainer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    public UserServiceImpl(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @Override
    public User createUser(User e) throws Exception {
        if(e == null){
            throw new Exception();
        }
        return userRepository.save(e);
    }

    @Override
    public User getUserDetails(String id) throws Exception {
        if(id == null){
            throw new Exception();
        }
        return userRepository.findById(id).orElseThrow(Exception::new);
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.getAllUsers();
    }
}
