package com.mca.budget_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mca.budget_management.entity.Expense;
import com.mca.budget_management.service.ExpenseService;

@RestController
@CrossOrigin("*")
@RequestMapping("/expense")
public class ExpenseController {

    @Autowired
    ExpenseService expenseService;


    // Add Expense

    @PostMapping("/add")
    public Expense addExpense(
            @RequestBody Expense expense){

        return expenseService.addExpense(expense);

    }


    // View All Expenses

    @GetMapping("/all")
    public List<Expense> getAllExpenses(){

        return expenseService.getAllExpenses();

    }

    // Update Expense

    @PutMapping("/update/{id}")

    public Expense updateExpense(

            @PathVariable Long id,
            @RequestBody Expense expense){

        return expenseService.updateExpense(
                id,
                expense);

    }



    // Delete Expense

    @DeleteMapping("/delete/{id}")

    public String deleteExpense(
            @PathVariable Long id){

        return expenseService.deleteExpense(id);

    }

}