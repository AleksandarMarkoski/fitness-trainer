package com.fitness.mytrainer.service;
import com.fitness.mytrainer.model.ForumPost;

import java.util.List;
import java.util.Optional;

public interface ForumPostService {
    ForumPost createForumPost(ForumPost e)throws Exception;
    ForumPost getForumPostDetails(String id) throws Exception;
    ForumPost updateForumPost(ForumPost e) throws Exception;
    List<ForumPost> getAllForumPost();
    void deteleForumPost(String id);
}
