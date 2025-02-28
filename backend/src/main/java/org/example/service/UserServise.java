package org.example.service;

import org.example.model.User;
import org.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserServise {

    @Autowired
    private UserRepository userRepository;

    public Optional<User> getUserdById(long id) {

        return userRepository.findById(id);
    }


    public void deleteUserdById(Long id) {

        userRepository.deleteById(id);
    }
    public User addUser (User user) {

        return userRepository.save(user);
    }


    public Iterable<User> getAllUsers() {

        return userRepository.findAll();
    }

    public User updateUser(Long id, User userDetails){
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()){
            User user = optionalUser.get();
            user.setName(userDetails.getName());
            user.setPassword(userDetails.getPassword());
            user.setRole(userDetails.getRole());
            return userRepository.save(user);
        }
        else{
            throw new IllegalArgumentException("Пользователь не найден");
        }
    }

}
