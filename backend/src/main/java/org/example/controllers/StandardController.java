package org.example.controllers;

import org.example.model.Standard;
import org.example.service.StandardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.Optional;

@Controller
@RequestMapping("/api/standards")
public class StandardController {

    @Autowired
    private StandardService standardService;

    @GetMapping("/all")
    public ResponseEntity<Iterable<Standard>> getStandardAll(){
        Iterable<Standard> list = standardService.getAllStandard();
        return list!=null
                ? ResponseEntity.ok(list)
                : ResponseEntity.notFound().build();
    }

    @PostMapping(value ="/standard")
    public ResponseEntity<Standard> createStandard(@RequestBody Standard standard) {
        Standard newStandard = standardService.addStandard(standard);
        return newStandard != null
                ? new ResponseEntity<>(newStandard, HttpStatus.CREATED)
                : ResponseEntity.badRequest().build();

    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<Standard>> getStandardById(@PathVariable("id") Long id) {
        Optional<Standard> standard = standardService.getStandardById(id);

        return standard != null
                ? ResponseEntity.ok(standard)
                : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteStandard(@PathVariable("id") Long id) {
        standardService.deleteStandardById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Standard> updateStandardById (@RequestBody Standard initStandard, @PathVariable("id") Long id) {
        Optional<Standard> standard = standardService.getStandardById(id);
        if (standard.isPresent()) {
            return new ResponseEntity<>(standardService.updateStandard(id, initStandard), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
