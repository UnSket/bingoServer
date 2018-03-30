package com.bingo.bingo.services;

import com.bingo.bingo.entity.Authority;
import com.bingo.bingo.entity.User;

import java.util.List;

public interface AuthorityService {
    List<Authority> getAuthorityByUsers(User user);
}
