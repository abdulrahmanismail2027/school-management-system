package com.faithcentre.sms.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer teamId;

    @Column(nullable = false, unique = true, length = 100)
    private String teamName;

     @OneToMany(mappedBy = "team")
     private List<Teacher> teachers;

     @OneToMany(mappedBy = "team")
     private List<Student> students;

}
