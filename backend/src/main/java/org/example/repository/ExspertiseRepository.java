package org.example.repository;

import java.util.List;

import org.example.model.Exspertise;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExspertiseRepository extends CrudRepository<Exspertise, Long> {
}
