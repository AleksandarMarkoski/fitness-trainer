package com.fitness.mytrainer.web.rest;

import com.fitness.mytrainer.model.Experience;
import com.fitness.mytrainer.model.ForumPost;
import com.fitness.mytrainer.service.ForumPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/forum-posts", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ForumApi {


    private final ForumPostService forumPostService;
    @Autowired
    public ForumApi(ForumPostService forumPostService){
        this.forumPostService = forumPostService;
    }

    @GetMapping
    public List<ForumPost> getAllForumPost() {
        return forumPostService.getAllForumPost();
    }

    @GetMapping("/{id}")
    public ForumPost getForumDetails(@PathVariable String id) throws Exception {
        return forumPostService.getForumPostDetails(id);
    }

    @PostMapping("/add-new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createForumPost(@RequestBody ForumPost forumPost) throws Exception {
        forumPostService.createForumPost(forumPost);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity updateForumPost(@RequestBody ForumPost forumPost) throws Exception {
        forumPostService.updateForumPost(forumPost);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{Id}")
    public void deleteSlot(@PathVariable String Id) {
        forumPostService.deteleForumPost(Id);
    }
}
