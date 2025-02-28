package org.example.service;

import org.example.model.Exspertise;
import org.example.model.Standard;
import org.example.repository.StandardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class StandardService {
    @Autowired
    private StandardRepository standardRepository;
    public Optional<Standard> getStandardById(long id) {

        return standardRepository.findById(id);
    }
    public Iterable<Exspertise> getExspertiseAll(long id) {
        if (standardRepository.findById(id).isPresent()){
            return standardRepository.findById(id).get().getExspertises();
        }
        else {
            return null;
        }
    }

    public void deleteStandardById(Long id) {

        standardRepository.deleteById(id);
    }
    public Standard addStandard (Standard standard) {

        return standardRepository.save(standard);
    }

    public Iterable<Standard> getAllStandard() {

        return standardRepository.findAll();
    }


    public Standard updateStandard(Long id, Standard standardDetails){
        Optional<Standard> optionalStandard = standardRepository.findById(id);
        if (optionalStandard.isPresent()){
            Standard standard = optionalStandard.get();
            standard.setTitle(standardDetails.getTitle());
            standard.setCipher(standardDetails.getCipher());
            standard.setDesignation(standardDetails.getDesignation());
            return standardRepository.save(standard);
        }
        else{
            throw new IllegalArgumentException("Стандарт не найден");
        }
    }
}
