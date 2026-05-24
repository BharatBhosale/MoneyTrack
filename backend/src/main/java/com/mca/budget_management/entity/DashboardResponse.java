package com.mca.budget_management.entity;

public class DashboardResponse {

    private double totalSalary;

    private double totalExpense;

    private double remainingBalance;




    public double getTotalSalary() {
        return totalSalary;
    }

    public void setTotalSalary(
            double totalSalary) {

        this.totalSalary = totalSalary;
    }


    public double getTotalExpense() {
        return totalExpense;
    }

    public void setTotalExpense(
            double totalExpense) {

        this.totalExpense = totalExpense;
    }


    public double getRemainingBalance() {
        return remainingBalance;
    }

    public void setRemainingBalance(
            double remainingBalance) {

        this.remainingBalance = remainingBalance;
    }

}