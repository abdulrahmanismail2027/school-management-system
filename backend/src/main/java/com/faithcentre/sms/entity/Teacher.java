package com.faithcentre.sms.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.time.LocalDate;





@Entity
@Table(name = "teacher", uniqueConstraints = {@UniqueConstraint(columnNames = {"first_name", "last_name"})})
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Teacher {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "teacher_id")
    private Integer teacherId;

    @Column(name = "first_name", nullable = false, length = 100)
    private String firstName;

    @Column(name = "last_name", nullable = false, length = 100)
    private String lastName;

    @Column(name = "email", unique = true, nullable = false, length = 100)
    private String email;

    @Column(name = "password", nullable = false, length = 225)
    private String password;

    @Column(name = "since")
    private LocalDate since;

    //? relation with team should be added
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "team_id")
    private Team team;

    @PrePersist
    protected void onCreate(){
        if (since == null)
            since = LocalDate.now();
    }

}
