package com.abdulhalimi.chat.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long messageId;

    @ManyToOne
    @JoinColumn(name = "id")
    private User user;

    private String message;

    @Temporal(TemporalType.DATE)
    private Date date;

}
