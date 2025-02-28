package org.example.repository;

import org.example.model.Standard;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StandardRepository extends CrudRepository<Standard, Long> {
}
