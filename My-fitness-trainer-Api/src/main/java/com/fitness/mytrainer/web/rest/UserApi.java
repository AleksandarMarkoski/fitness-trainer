package com.fitness.mytrainer.web.rest;

import com.fitness.mytrainer.model.Recipe;
import com.fitness.mytrainer.model.User;
import com.fitness.mytrainer.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/users", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class UserApi {

    private final UserService userService;
    @Autowired
    public UserApi(UserService userService){
        this.userService = userService;
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserDetails(@PathVariable String id) throws Exception {
        return userService.getUserDetails(id);
    }

    @PostMapping("/add-new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createUser(@RequestBody User user)throws Exception {
        userService.createUser(user);
        return ResponseEntity.ok(HttpStatus.OK);
    }
}
