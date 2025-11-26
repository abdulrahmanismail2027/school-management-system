package com.faithcentre.sms.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

@Setter
@Getter
@Entity
@IdClass(StudentPhoneId.class)
@Table(name = "student_phone")
public class StudentPhone {

    @Id
    @Column(length = 20)
    private String phoneNumber;

    @Id
    @ManyToOne
    @JoinColumn(name = "student_id")
    private Student student;

    // Getters & Setters


}

