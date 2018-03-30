package com.bingo.bingo.services.Impl;

import com.bingo.bingo.entity.Authority;
import com.bingo.bingo.entity.User;
import com.bingo.bingo.repository.AuthorityRepository;
import com.bingo.bingo.services.AuthorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AuthorityServiceImpl implements AuthorityService {
    @Autowired
    AuthorityRepository authorityRepository;
    @Override
    public List<Authority> getAuthorityByUsers(User user) {
        return authorityRepository.getAllByUsers(user);
    }
}
