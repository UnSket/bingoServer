package com.bingo.bingo.entity;

import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "users")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "user_id_sequence")
    @SequenceGenerator(name = "user_id_sequence",
            sequenceName = "SEQ_USERS", allocationSize = 1)
    private Long id;

    @Column(name = "login", length = 32, nullable = false, unique = true)
    private String login;

    @Column(name = "name")
    private String name;

    @Column(name = "email", length = 32)
    private String email;

    @Column(name = "hash", nullable = false)
    private String password;

    @ManyToMany(cascade = {CascadeType.DETACH}, fetch = FetchType.LAZY)
    @JoinTable(name = "user_authority",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "id")},
            inverseJoinColumns = {@JoinColumn(name = "authority_id", referencedColumnName = "id")}
    )
    private List<Authority> authorities;
}
