package com.gregorymp.crudbackend.repositorys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.gregorymp.crudbackend.models.Client;

@Repository
public interface ClientRepository extends JpaRepository<Client, Long>{

}
