package com.example.demo.controller;

import com.example.demo.entity.City;
import com.example.demo.entity.Patient;
import com.example.demo.service.ICityService;

import com.example.demo.service.IPatientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.ServerEndpoint;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class MyController {

    @Autowired
    private ICityService cityService;
    @Autowired
    private IPatientService patientService;

    @GetMapping("/showCities")
    public List<City> findCities() {
        return cityService.findAll();
    }
    @GetMapping("/patients")
    public List<Patient> findPatients(){
        return patientService.findAll();
    }
    @GetMapping("/patients/{id}")
    public Optional<Patient> findPatientById(@PathVariable long id){
        System.out.println("find by ID");
        return patientService.get(id);
    }
    @DeleteMapping("/patients/{id}")
    public boolean deletePatientById(@PathVariable long id){
        return patientService.delete(id);
    }
    @PostMapping("/patients/new")
    public boolean addNewPatient(@RequestBody Patient patient){
        return patientService.add(patient);
    }
    @PutMapping ("/patients/{id}")
    public boolean updatePatient(@RequestBody Patient patient, @PathVariable long id){
        return patientService.update(patient, id);
    }
}
