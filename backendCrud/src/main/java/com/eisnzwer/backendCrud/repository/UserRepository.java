package com.eisnzwer.backendCrud.repository;

import com.eisnzwer.backendCrud.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
