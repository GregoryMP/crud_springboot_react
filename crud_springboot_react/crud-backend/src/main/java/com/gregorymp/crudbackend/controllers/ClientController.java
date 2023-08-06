package com.gregorymp.crudbackend.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gregorymp.crudbackend.exceptions.ResourceNotFoundException;
import com.gregorymp.crudbackend.models.Client;
import com.gregorymp.crudbackend.repositorys.ClientRepository;

@CrossOrigin(origins="http://localhost:5173")
@RestController
@RequestMapping("/api/v1")

public class ClientController {
	
	@Autowired
	private ClientRepository clientRepository;
	
	@GetMapping("/clients")
	public List<Client> listClients(){
		return clientRepository.findAll();
	}
	
	@PostMapping("/clients")
	public Client saveClients(@RequestBody Client client) {
		return clientRepository.save(client);
	}
	
	@GetMapping("/clients/{id}")
	public ResponseEntity<Client> listClientById(@PathVariable Long id){
		Client client = clientRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("El id no existe : " + id));
		
		return ResponseEntity.ok(client);
	}
	
	@PutMapping("/clients/{id}")
	public ResponseEntity<Client> updateClient(@PathVariable Long id , @RequestBody Client clientRequest){
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El id no existe : " + id));
	
		client.setName(clientRequest.getName());
		client.setLastName(clientRequest.getLastName());
		client.setEmail(clientRequest.getEmail());

		Client clientUpdate = clientRepository.save(client);
		return ResponseEntity.ok(clientUpdate);
	
	}
	
	@DeleteMapping("/clients/{id}")
	public ResponseEntity<Map<String,Boolean>> clientDelete(@PathVariable Long id) {
		Client client = clientRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("El id no existe : " + id));
	
		clientRepository.delete(client);
		
		Map<String,Boolean> response = new HashMap<>();
		response.put("delete",Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
	
	
	
	
}
