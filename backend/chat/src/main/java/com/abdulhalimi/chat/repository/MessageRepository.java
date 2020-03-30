package com.abdulhalimi.chat.repository;

import com.abdulhalimi.chat.model.Message;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MessageRepository extends JpaRepository<Message, Long> {

}
