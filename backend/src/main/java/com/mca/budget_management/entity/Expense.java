package com.mca.budget_management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Expense {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private String expenseName;

    private String category;

    private double amount;

    private String date;

    private String userEmail;


    public Long getId() {

        return id;

    }

    public void setId(Long id) {

        this.id=id;

    }


    public String getExpenseName() {

        return expenseName;

    }

    public void setExpenseName(
            String expenseName) {

        this.expenseName=expenseName;

    }


    public String getCategory() {

        return category;

    }

    public void setCategory(
            String category) {

        this.category=category;

    }


    public double getAmount() {

        return amount;

    }

    public void setAmount(
            double amount) {

        this.amount=amount;

    }


    public String getDate() {

        return date;

    }

    public void setDate(
            String date) {

        this.date=date;

    }


    public String getUserEmail() {

        return userEmail;

    }

    public void setUserEmail(
            String userEmail) {

        this.userEmail=userEmail;

    }

}