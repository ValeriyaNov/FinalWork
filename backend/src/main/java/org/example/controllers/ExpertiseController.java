package org.example.controllers;

import org.example.model.Exspertise;
import org.example.service.ExspertiseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
@RequestMapping("/api/exspertises")
public class ExpertiseController {

    @Autowired
    private ExspertiseService expertiseService;


    @GetMapping("/all")
    public ResponseEntity<Iterable<Exspertise>> getExpertiseAll(){
        Iterable<Exspertise> list = expertiseService.getAllExpertise();
        return list!=null
                ? ResponseEntity.ok(list)
                : ResponseEntity.notFound().build();
    }

    @PostMapping("/expertise/{id}")
    public ResponseEntity<Exspertise> createExpertise(@RequestBody Exspertise exspertise, @PathVariable("id") long id) {
        Exspertise newExpertise = expertiseService.addExpertise(exspertise, id);
        return newExpertise != null
                ? new ResponseEntity<>(newExpertise, HttpStatus.CREATED)
                : ResponseEntity.badRequest().build();

    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Exspertise>> getExpertiseById(@PathVariable("id") Long id) {
        Optional<Exspertise> exspertise = expertiseService.getExpertiseById(id);

        return exspertise != null
                ? ResponseEntity.ok(exspertise)
                : ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteExpertise(@PathVariable("id") Long id) {
        expertiseService.deleteExpertiseById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Exspertise> updateExpertiseById (@RequestBody Exspertise initExpertise, @PathVariable("id") Long id) {
        Optional<Exspertise> exspertise = expertiseService.getExpertiseById(id);
        if (exspertise.isPresent()) {

            return new ResponseEntity<>(expertiseService.updateExpertise(id, initExpertise), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
