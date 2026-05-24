package com.mca.budget_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mca.budget_management.entity.DashboardResponse;
import com.mca.budget_management.entity.Expense;
import com.mca.budget_management.entity.Salary;
import com.mca.budget_management.repository.ExpenseRepository;
import com.mca.budget_management.repository.SalaryRepository;

@Service
public class DashboardService {

    @Autowired
    SalaryRepository salaryRepository;

    @Autowired
    ExpenseRepository expenseRepository;


    public DashboardResponse
    getDashboardData(
    String userEmail){

        DashboardResponse response = new DashboardResponse();

        double totalSalary=0;

        double totalExpense=0;


        List<Salary>
        salaryList=

        salaryRepository.findByUserEmail(userEmail);


        for(
        Salary s:salaryList){

        totalSalary=totalSalary+s.getAmount();
        }



        List<Expense>
        expenseList=

        expenseRepository.findByUserEmail(userEmail);


        for(
        Expense e:expenseList){

        totalExpense=totalExpense+e.getAmount();
        }


        response.setTotalSalary(totalSalary);

        response.setTotalExpense(totalExpense);

        response.setRemainingBalance(totalSalary-totalExpense);
        return response;

    }

}