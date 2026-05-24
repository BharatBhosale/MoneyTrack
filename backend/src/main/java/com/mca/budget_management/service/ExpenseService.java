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

    public Expense addExpense(
            Expense expense){

        return expenseRepository.save(expense);

    }

    public List<Expense>getAllExpenses(String userEmail){

        return expenseRepository.findByUserEmail(userEmail);

    }

    public Expense updateExpense(Long id,Expense expense){

        Expense oldExpense = expenseRepository.findById(id).orElse(null);

        if(oldExpense != null){

            oldExpense.setExpenseName(expense.getExpenseName());

            oldExpense.setCategory(expense.getCategory());

            oldExpense.setAmount(expense.getAmount());

            oldExpense.setDate(expense.getDate());

            return expenseRepository.save(oldExpense);
        }
        return null;
    }

    public String deleteExpense(Long id){

        expenseRepository.deleteById(id);

        return "Expense Deleted";

    }

}