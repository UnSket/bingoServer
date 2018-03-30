package com.bingo.bingo.repository;

import com.bingo.bingo.entity.Authority;
import com.bingo.bingo.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AuthorityRepository extends JpaRepository<Authority, Long> {
    List<Authority> getAllByUsers(User users);
}
