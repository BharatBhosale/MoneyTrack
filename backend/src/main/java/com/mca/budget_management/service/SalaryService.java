package com.mca.budget_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mca.budget_management.entity.Salary;
import com.mca.budget_management.repository.SalaryRepository;

@Service
public class SalaryService {

    @Autowired
    SalaryRepository salaryRepository;

    public Salary addSalary(Salary salary){

        return salaryRepository.save(salary);

    }

    public List<Salary> getAllSalary(){

        return salaryRepository.findAll();

    }

}