package com.faithcentre.sms.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Setter
@Getter
@Entity
@Table(name = "student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer studentId;

    @Column(nullable = false, length = 100)
    private String name;

    private Integer age;

    @ManyToOne
    @JoinColumn(name = "team_id")
    private Team team; // nullable because ON DELETE SET NULL

    private LocalDate enrolledDate = LocalDate.now();

    // Getters & Setters

}
