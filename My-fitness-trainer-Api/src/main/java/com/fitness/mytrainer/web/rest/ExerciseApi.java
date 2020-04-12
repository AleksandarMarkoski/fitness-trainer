package com.fitness.mytrainer.web.rest;

import com.fitness.mytrainer.model.Exercise;
import com.fitness.mytrainer.model.Experience;
import com.fitness.mytrainer.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/exercises", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ExerciseApi {

    private final ExerciseService exerciseService;

    @Autowired
    public ExerciseApi(ExerciseService exerciseService){
        this.exerciseService = exerciseService;
    }

    @GetMapping
    public List<Exercise> getAllExercises() {
        return exerciseService.getAllExercise();
    }

    @GetMapping("/{id}")
    public Optional<Exercise> getExerciseDetails(@PathVariable String id) throws Exception {
        return exerciseService.getExerciseDetails(id);
    }

    @PostMapping("/add-new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createExercise(@RequestBody Exercise exercise) throws Exception {
        exerciseService.createExercise(exercise);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity updateExperience(@RequestBody Exercise exercise) throws Exception {
        exerciseService.updateExercise(exercise);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{Id}")
    public void deleteSlot(@PathVariable String Id) {
        exerciseService.deleteExercise(Id);
    }

}
