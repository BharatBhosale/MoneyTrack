package com.mca.budget_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mca.budget_management.entity.DashboardResponse;
import com.mca.budget_management.service.DashboardService;

@RestController
@CrossOrigin("*")
@RequestMapping("/dashboard")
public class DashboardController {

    @Autowired
    DashboardService dashboardService;


    @GetMapping("/summary")
    public DashboardResponse getSummary(){

        return dashboardService
                .getDashboardData();

    }

}