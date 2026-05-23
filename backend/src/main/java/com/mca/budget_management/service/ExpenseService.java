package com.mca.budget_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mca.budget_management.entity.Expense;
import com.mca.budget_management.repository.ExpenseRepository;

@Service
public class ExpenseService {

    @Autowired
    ExpenseRepository expenseRepository;


    // Add Expense

    public Expense addExpense(
            Expense expense){

        return expenseRepository.save(expense);

    }


    // Get All Expenses

    public List<Expense> getAllExpenses(){

        return expenseRepository.findAll();

    }
    // Update Expense

    public Expense updateExpense(
            Long id,
            Expense expense){

        Expense oldExpense =
                expenseRepository.findById(id)
                .orElse(null);

        if(oldExpense != null){

            oldExpense.setExpenseName(
                    expense.getExpenseName());

            oldExpense.setCategory(
                    expense.getCategory());

            oldExpense.setAmount(
                    expense.getAmount());

            oldExpense.setDate(
                    expense.getDate());

            return expenseRepository.save(
                    oldExpense);
        }

        return null;
    }



    // Delete Expense

    public String deleteExpense(Long id){

        expenseRepository.deleteById(id);

        return "Expense Deleted";

    }

}