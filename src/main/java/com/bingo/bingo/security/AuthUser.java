package com.bingo.bingo.security;

import com.bingo.bingo.entity.Authority;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import java.io.Serializable;
import java.util.Collection;
import java.util.stream.Collectors;

@Getter
@Setter
public class AuthUser extends User implements Serializable {
    private Long id;
    private String email;

    public AuthUser(Long id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        super(username, password, authorities);
        this.id = id;
    }

    public Long getUserId() {
        return this.id;
    }
}
