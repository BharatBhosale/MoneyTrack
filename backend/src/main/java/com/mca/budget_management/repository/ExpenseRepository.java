package com.mca.budget_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mca.budget_management.entity.Expense;

public interface ExpenseRepository extends JpaRepository<Expense,Long>{

}