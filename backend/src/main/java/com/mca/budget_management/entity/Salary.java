package com.mca.budget_management.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Salary {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private Long id;

    private double amount;

    private String month;


    // Getter Setter

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id=id;
    }


    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount=amount;
    }


    public String getMonth() {
        return month;
    }

    public void setMonth(String month) {
        this.month=month;
    }

}