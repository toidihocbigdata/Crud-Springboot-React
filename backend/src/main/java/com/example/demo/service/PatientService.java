package com.example.demo.service;
import com.example.demo.entity.Patient;
import com.example.demo.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PatientService implements IPatientService {
    @Autowired
    private PatientRepository repository;

    @Override
    public List<Patient> findAll()
    {
        var patients = (List<Patient>) repository.findAll();
        return patients;
    }

    @Override
    public boolean add(Patient patient)
    {
        repository.save(patient);
        return true;
    }
    @Override
    public boolean delete(Long patient_id)
    {
        System.out.println("delete patient_id ");
        System.out.println(patient_id);
        repository.deleteById(patient_id);
        return true;
    }
    @Override
    public boolean update(Patient patient)
    {
        //TODO
        return true;
    }
    @Override
    public Optional<Patient> get(Long patient_id)
    {
        return repository.findById(patient_id);
    }

}
