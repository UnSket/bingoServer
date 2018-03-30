package com.bingo.bingo.services.Impl;

import com.bingo.bingo.entity.User;
import com.bingo.bingo.repository.UserRepository;
import com.bingo.bingo.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepository;

    @Override
    public User getByLogin(String login) {
        return userRepository.getOneByLogin(login);
    }

    @Override
    public User getByEmail(String email) {
        return userRepository.getOneByEmail(email);
    }

    @Override
    public User getById(Long id) {
        return userRepository.getOne(id);
    }

    @Override
    public boolean exist(Long id) {
        return userRepository.exists(id);
    }

    @Override
    @Transactional
    public void delete(Long id) {
        userRepository.delete(id);
    }

    @Override
    public User save(User user) {
        return userRepository.save(user);
    }
}
