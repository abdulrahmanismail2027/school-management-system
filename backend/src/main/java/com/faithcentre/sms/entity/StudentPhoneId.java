package com.faithcentre.sms.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentPhoneId implements Serializable {
    private String phoneNumber;
    private Integer student;
}
