package com.bingo.bingo.security;

import com.bingo.bingo.entity.Authority;
import com.bingo.bingo.entity.User;
import com.bingo.bingo.exception.UserNotFoundException;
import com.bingo.bingo.services.AuthorityService;
import com.bingo.bingo.services.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthDescUserDetailService implements UserDetailsService {
    Logger logger = LoggerFactory.getLogger(UserDetailsService.class);

    @Autowired
    private UserService userService;
    @Autowired
    private AuthorityService authorityService;

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userService.getByLogin(s);
        if(user == null) throw new UserNotFoundException("User " + s + " not found");
        List<Authority> authorities = authorityService.getAuthorityByUsers(user);
        AuthUser authAuthUser = new AuthUser(user.getId(), user.getLogin(), user.getPassword(),
                authorities.stream().map(Authority::getName).map(SimpleGrantedAuthority::new).collect(Collectors.toList()));

        return authAuthUser;
    }
}
