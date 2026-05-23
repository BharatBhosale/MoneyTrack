package com.mca.budget_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mca.budget_management.entity.Salary;
import com.mca.budget_management.service.SalaryService;

@RestController
@CrossOrigin("*")
@RequestMapping("/salary")
public class SalaryController {

    @Autowired
    SalaryService salaryService;


    // Add Salary

    @PostMapping("/add")
    public Salary addSalary(
            @RequestBody Salary salary){

        return salaryService.addSalary(
                salary);

    }


    // Get All Salary

    @GetMapping("/all")
    public List<Salary> getAllSalary(){

        return salaryService.getAllSalary();

    }

}