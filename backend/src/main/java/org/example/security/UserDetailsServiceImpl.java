package org.example.security;

import org.example.model.User;
import org.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {
    @Autowired
    UserRepository usersRepository;
    @Autowired
    PasswordEncoder passwordEncoder;

    public UserDetailsServiceImpl(UserRepository userRepository) {

        this.usersRepository = userRepository;}

        @Override
        public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

            Optional<User> user = usersRepository.findByName(username);
            if (user == null) {
                throw new UsernameNotFoundException("User not found");
            }
            return new UserDetailsImpl(user);
        }
    }



