package com.bingo.bingo.repository;

import com.bingo.bingo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User getOneByLogin(String login);

    User getOneByEmail(String email);

    boolean exists(Long id);
}
