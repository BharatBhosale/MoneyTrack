package com.mca.budget_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mca.budget_management.entity.User;
import com.mca.budget_management.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;


    // Save User
    public User saveUser(User user){

        return userRepository.save(user);

    }


    // Get All Users
    public List<User> getAllUsers(){

        return userRepository.findAll();

    }
    // Login User

    public User loginUser(String email,String password){

        User user = userRepository.findByEmail(email);

        if(user != null &&
        user.getPassword().equals(password)){

            return user;

        }

        return null;

    }

}