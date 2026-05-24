package com.mca.budget_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mca.budget_management.entity.Expense;

public interface ExpenseRepository
extends JpaRepository<Expense,Long>{

    List<Expense>
    findByUserEmail(String userEmail);

}