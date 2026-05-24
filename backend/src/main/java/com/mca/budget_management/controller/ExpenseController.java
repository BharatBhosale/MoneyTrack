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

    @PostMapping("/add")
    public Expense addExpense(@RequestBody Expense expense){
        return expenseService.addExpense(expense);
    }
    
    @GetMapping("/all/{email}")
    public List<Expense>
    getAllExpenses(@PathVariable String email){
    return expenseService.getAllExpenses(email);
    }

    @PutMapping("/update/{id}")

    public Expense updateExpense(@PathVariable Long id,@RequestBody Expense expense){
        return expenseService.updateExpense(id,expense);
    }

    @DeleteMapping("/delete/{id}")

    public String deleteExpense(@PathVariable Long id){
        return expenseService.deleteExpense(id);
    }

}