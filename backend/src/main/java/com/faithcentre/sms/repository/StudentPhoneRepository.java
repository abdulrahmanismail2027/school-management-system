package com.faithcentre.sms.repository;

import com.faithcentre.sms.entity.StudentPhone;
import com.faithcentre.sms.entity.StudentPhoneId;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentPhoneRepository extends JpaRepository<StudentPhone, StudentPhoneId> {
}
