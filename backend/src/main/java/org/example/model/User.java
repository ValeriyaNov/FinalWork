package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import javax.persistence.*;
import java.io.Serializable;


@Data
@Entity
@Table(name="users")
@AllArgsConstructor
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="name", nullable = false)
    private String name;
    @Column(name="password", nullable = false)
    private String password;

    @Column(name="role")
    private String role;

    public User(String name, String password, String role) {
        this.name = name;
        this.password=password;
        this.role=role;
    }
}
