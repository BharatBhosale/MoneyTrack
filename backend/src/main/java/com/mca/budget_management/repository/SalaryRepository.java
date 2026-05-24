package com.mca.budget_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mca.budget_management.entity.Salary;

public interface SalaryRepository
extends JpaRepository<Salary,Long>{

    List<Salary>
    findByUserEmail(String userEmail);

}