package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.User;
import com.fitness.mytrainer.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserRepositoriImpl implements UserRepository {
    private final JpaUserRepository repository;
    @Autowired
    public UserRepositoriImpl(JpaUserRepository repository){
        this.repository = repository;
    }
    @Override
    public User save(User e) {
        return repository.save(e);
    }

    @Override
    public List<User> getAllUsers() {
        return repository.findAll();
    }

    @Override
    public Optional<User> findById(String id) {
        return repository.findById(id);
    }
}
