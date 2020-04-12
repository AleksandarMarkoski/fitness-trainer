package com.fitness.mytrainer.web.rest;

import com.fitness.mytrainer.model.Experience;
import com.fitness.mytrainer.service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.MimeTypeUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "/api/experiences", produces = MimeTypeUtils.APPLICATION_JSON_VALUE)
public class ExperienceApi {

    private final ExperienceService experienceService;

    @Autowired
    public ExperienceApi(ExperienceService experienceService) {
        this.experienceService = experienceService;
    }

    @GetMapping
    public List<Experience> getAllExperience() {
        return experienceService.getAllExperience();
    }

    @GetMapping("/{id}")
    public Optional<Experience> getExerciseDetails(@PathVariable String id){
        return experienceService.getExperienceDetails(id);
    }

    @PostMapping("/add-new")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity createExperience(@RequestBody Experience experience) throws Exception {
        experienceService.createExperience(experience);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity updateExperience(@RequestBody Experience experience) throws Exception {
        experienceService.updateExperience(experience);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/delete/{Id}")
    public void deleteSlot(@PathVariable String Id) {
        experienceService.deleteExperience(Id);
    }


}
