package com.mca.budget_management.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.mca.budget_management.entity.User;
import com.mca.budget_management.service.UserService;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserService userService;


    // Registration API

    @PostMapping("/register")
    public User registerUser(
            @RequestBody User user){

        return userService.saveUser(user);

    }


    // Get All Users API

    @GetMapping("/all")
    public List<User> getUsers(){

        return userService.getAllUsers();

    }
    @PostMapping("/login")
    public String loginUser(
            @RequestBody User user){

        User checkUser =
                userService.loginUser(
                        user.getEmail(),
                        user.getPassword());

        if(checkUser != null){

            return "Login Successful";

        }

        return "Invalid Email or Password";

    }

}