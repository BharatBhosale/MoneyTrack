package com.mca.budget_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mca.budget_management.entity.User;

public interface UserRepository extends JpaRepository<User,Long>{

    User findByEmail(String email);

}