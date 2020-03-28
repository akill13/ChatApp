package com.abdulhalimi.chat.security;
import com.abdulhalimi.chat.model.User;
import com.abdulhalimi.chat.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


@Service
public class CustomUserDetailsService implements UserDetailsService {
    @Autowired
    UserRepository userRepository;

    @Transactional
    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(s).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        return UserPrincipal.create(user);
    }

    @Transactional
    public UserDetails loadUserbyId(Long id) {
        User user = userRepository.findById(id).orElseThrow(
                ()->new UsernameNotFoundException("User not found with id" + id)
        );
        return UserPrincipal.create(user);
    }
}
