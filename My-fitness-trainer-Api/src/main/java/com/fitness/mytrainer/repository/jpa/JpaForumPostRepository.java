package com.fitness.mytrainer.repository.jpa;

import com.fitness.mytrainer.model.ForumPost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface JpaForumPostRepository extends JpaRepository<ForumPost, String> {
}
