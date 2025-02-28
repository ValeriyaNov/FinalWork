package org.example.controllers;

import org.example.model.User;
import org.example.service.UserServise;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Controller
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserServise userServise;

    @GetMapping("/all")
    public ResponseEntity<Iterable<User>> getUserAll(){
        Iterable<User> list = userServise.getAllUsers();
        return list!=null
                ? ResponseEntity.ok(list)
                : ResponseEntity.notFound().build();
    }

    @PostMapping(value ="/user")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User newUser = userServise.addUser(user);
        return newUser != null
                ? new ResponseEntity<>(newUser, HttpStatus.CREATED)
                : ResponseEntity.badRequest().build();

    }
    @GetMapping("/{id}")
    public ResponseEntity<Optional<User>> getUserById(@PathVariable("id") Long id) {
        Optional<User> user = userServise.getUserdById(id);

        return user != null
                ? ResponseEntity.ok(user)
                : ResponseEntity.notFound().build();
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") Long id) {
        userServise.deleteUserdById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<User> updateUserById (@RequestBody User initUser, @PathVariable("id") Long id) {
        Optional<User> user = userServise.getUserdById(id);
        if (user.isPresent()) {

            return new ResponseEntity<>(userServise.updateUser(id, initUser), HttpStatus.OK);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
    }
}
