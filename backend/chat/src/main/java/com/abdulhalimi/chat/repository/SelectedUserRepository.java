package com.abdulhalimi.chat.repository;

import com.abdulhalimi.chat.model.SelectedUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SelectedUserRepository extends JpaRepository<SelectedUser, Long> {

}
