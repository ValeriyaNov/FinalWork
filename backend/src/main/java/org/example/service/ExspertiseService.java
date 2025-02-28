package org.example.service;

import org.example.model.Exspertise;
import org.example.model.Standard;
import org.example.repository.ExspertiseRepository;
import org.example.repository.StandardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.NoSuchElementException;
import java.util.Optional;

@Service
public class ExspertiseService {
    @Autowired
    private ExspertiseRepository exspertiseRepository;
    @Autowired
    private StandardRepository standardRepository;
    public Optional<Exspertise> getExpertiseById(long id) {
        return exspertiseRepository.findById(id);
    }
    public Standard getStandard(Exspertise exspertise) {

        return exspertise.getStandard();
    }

    public Exspertise addExpertise (Exspertise exspertise, long idStandard) throws NoSuchElementException {
        Optional<Standard> standard = standardRepository.findById(idStandard);
        if (standard == null) {
            throw new NoSuchElementException("Стандарт с идентификатором \"" + idStandard + "\" не найден");
        }
        Exspertise newExspertise = new Exspertise(exspertise.getTk(), exspertise.getFinalTime(), exspertise.getType());
        newExspertise.setStandard(standard.get());
        newExspertise.setTitle(standard.get().getTitle());
        newExspertise.setCipher(standard.get().getCipher());
        newExspertise.setDesignation(standard.get().getDesignation());
        return exspertiseRepository.save(newExspertise);
    }

    public void deleteExpertiseById(Long id) {
        exspertiseRepository.deleteById(id);
    }

    public Iterable<Exspertise> getAllExpertise() {
        return exspertiseRepository.findAll();
    }

    public Exspertise updateExpertise(Long id, Exspertise exspertiseDetails){
        Optional<Exspertise> optionalExspertise = exspertiseRepository.findById(id);
        if (optionalExspertise.isPresent()){
            Exspertise exspertise = optionalExspertise.get();
            exspertise.setTk(exspertiseDetails.getTk());
            exspertise.setStartTime(exspertiseDetails.getStartTime());
            exspertise.setFinalTime(exspertiseDetails.getFinalTime());
            exspertise.setType(exspertiseDetails.getType());
            exspertise.setStatus(exspertiseDetails.getStatus());
            return exspertiseRepository.save(exspertise);
        }
        else{
            throw new IllegalArgumentException("Стандарт не найден");
        }
    }
}
