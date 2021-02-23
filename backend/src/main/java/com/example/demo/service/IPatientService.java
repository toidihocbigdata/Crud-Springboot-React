package com.example.demo.service;

import com.example.demo.entity.Patient;

import java.util.List;
import java.util.Optional;

public interface IPatientService {
    List<Patient> findAll();
    boolean add(Patient patient);
    boolean delete(Long patient_id);
    boolean update(Patient patient);
    Optional<Patient> get(Long id);
}
