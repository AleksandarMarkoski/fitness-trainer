package com.fitness.mytrainer.service.impl;

import com.fitness.mytrainer.model.ForumPost;
import com.fitness.mytrainer.repository.ForumPostRepository;
import com.fitness.mytrainer.repository.UserRepository;
import com.fitness.mytrainer.service.ForumPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import java.util.Optional;
@Service
public class ForumPostServiceImpl implements ForumPostService {
    @Autowired
    private final ForumPostRepository forumPostRepository;

    @Autowired
    private final UserRepository userRepository;

    public ForumPostServiceImpl(ForumPostRepository forumPostRepository,
                               UserRepository userRepository){
        this.forumPostRepository = forumPostRepository;
        this.userRepository = userRepository;
    }


    @Override
    public ForumPost createForumPost(ForumPost e) throws Exception {
        if(e == null){
            throw new Exception();
        }

        //userRepository.findById(e.email).orElseThrow(Exception::new);

        return forumPostRepository.save(e);
    }

    @Override
    public ForumPost getForumPostDetails(String id) throws Exception {

        return forumPostRepository.findById(id).orElseThrow(Exception::new);
    }

    @Override
    public ForumPost updateForumPost(ForumPost e) throws Exception {
        if(e == null){
            throw  new Exception();
        }

        //userRepository.findById(e.user.email).orElseThrow(Exception::new);

        return forumPostRepository.save(e);

    }

    @Override
    public List<ForumPost> getAllForumPost() {
        return forumPostRepository.getAllForumPost();
    }

    @Override
    public void deteleForumPost(String id) {
        this.forumPostRepository.deleteById(id);
    }
}
