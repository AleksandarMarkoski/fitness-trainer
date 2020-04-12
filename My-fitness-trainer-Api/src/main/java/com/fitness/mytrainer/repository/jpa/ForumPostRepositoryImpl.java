package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.ForumPost;
import com.fitness.mytrainer.repository.ForumPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ForumPostRepositoryImpl implements ForumPostRepository {
    private final JpaForumPostRepository repository;
    @Autowired
    public ForumPostRepositoryImpl(JpaForumPostRepository repository){
        this.repository = repository;
    }

    @Override
    public ForumPost save(ForumPost e) throws Exception {
        return this.repository.save(e);
    }

    @Override
    public List<ForumPost> getAllForumPost() {
        return this.repository.findAll();
    }

    @Override
    public Optional<ForumPost> findById(String id) throws Exception {
        return this.repository.findById(id);
    }

    @Override
    public void deleteById(String id) {
        this.repository.deleteById(id);
    }
}
