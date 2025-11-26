package com.faithcentre.sms.repository;
import com.faithcentre.sms.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeamRepository extends JpaRepository<Team, Integer> {
}
