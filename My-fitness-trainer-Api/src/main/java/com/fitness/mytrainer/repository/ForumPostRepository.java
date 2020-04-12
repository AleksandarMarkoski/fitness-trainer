package com.fitness.mytrainer.repository;

import com.fitness.mytrainer.model.ForumPost;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface ForumPostRepository {
    ForumPost save(ForumPost e) throws Exception;
    List<ForumPost> getAllForumPost();
    Optional<ForumPost> findById(String id) throws Exception;
    void deleteById(String id);
}
