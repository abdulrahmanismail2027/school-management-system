package com.faithcentre.sms.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

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
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    // Getters & Setters


}

