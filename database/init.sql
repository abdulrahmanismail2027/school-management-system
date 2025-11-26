-- School Management System Database Schema
CREATE DATABASE IF NOT EXISTS SMS;
USE SMS;

-- Drop tables if they exist
-- DROP TABLE IF EXISTS attendance;
-- DROP TABLE IF EXISTS class;
-- DROP TABLE IF EXISTS Schedule;
DROP TABLE IF EXISTS student_phone;
DROP TABLE IF EXISTS student;
DROP TABLE IF EXISTS teacher;
DROP TABLE IF EXISTS team;
-- DROP TABLE IF EXISTS Student_Summary;
-- DROP TABLE IF EXISTS Teacher_Summary;
-- DROP TABLE IF EXISTS permission;
DROP TABLE IF EXISTS admin;

-- -- Create Permission table
-- CREATE TABLE Permission (
--     PermId INT PRIMARY KEY AUTO_INCREMENT,
--     PermissionName VARCHAR(100) NOT NULL,
--     Checked BOOLEAN DEFAULT FALSE
-- );

-- Create Admin table
CREATE TABLE admin (
    admin_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
    UNIQUE(first_name,last_name),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    since DATE DEFAULT (CURRENT_DATE)
);

-- -- Create Teacher_Summary table
-- CREATE TABLE Teacher_Summary (
--     summaryId INT PRIMARY KEY AUTO_INCREMENT,
--     teacherId INT,
--     totalAssignedStudents INT DEFAULT 0,
--     totalHours DOUBLE DEFAULT 0.0,
--     totalEarnings DOUBLE DEFAULT 0.0,
--     greenFlags INT DEFAULT 0,
--     redFlags INT DEFAULT 0,
--     efficiencyScore DOUBLE DEFAULT 0.0,
--     lastUpdated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- Create Teacher table
CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
	first_name VARCHAR(100) NOT NULL,
	last_name VARCHAR(100) NOT NULL,
    UNIQUE(first_name,last_name),
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    since DATE DEFAULT (CURRENT_DATE),
	team_id INT,
    FOREIGN KEY (team_id) REFERENCES team(team_id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- -- Create Student_Summary table
-- CREATE TABLE Student_Summary (
--     summaryId INT PRIMARY KEY AUTO_INCREMENT,
--     studentId INT,
--     averageMark DOUBLE DEFAULT 0.0,
--     totalOnTime INT DEFAULT 0,
--     totalLate INT DEFAULT 0,
--     totalInterrupted INT DEFAULT 0,
--     totalAbsent INT DEFAULT 0,
--     totalLeave INT DEFAULT 0,
--     lastUpdated DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
-- );

-- Create Student table
CREATE TABLE student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    age INT,
    team_id INT,
    enrolled_date DATE DEFAULT (CURRENT_DATE),
    FOREIGN KEY (team_id) REFERENCES team(team_id) ON DELETE SET NULL ON UPDATE CASCADE
);

-- -- Create parent table
-- CREATE TABLE parent (
--     parent_id INT PRIMARY KEY AUTO_INCREMENT,
--     name VARCHAR(100) NOT NULL,
--     phone_number VARCHAR(20) DEFAULT NULL,
--     email VARCHAR(100) DEFAULT NULL
-- );

-- Create student_phone table
CREATE TABLE student_phone (
--     parent_id INT,
    student_id INT,
    phone_number VARCHAR(20) DEFAULT NULL,
--     FOREIGN KEY (parent_id) REFERENCES parent(parent_id) ON UPDATE CASCADE ON DELETE CASCADE,
	FOREIGN KEY (student_id) REFERENCES student(student_id) ON UPDATE CASCADE ON DELETE CASCADE,
    PRIMARY KEY (phone_number, student_id)
);

-- -- Create Schedule table
-- CREATE TABLE Schedule (
--     ScheduleId INT PRIMARY KEY AUTO_INCREMENT,
--     OccupiedClasses TEXT,
--     teacherId INT,
--     FOREIGN KEY (teacherId) REFERENCES Teacher(teacherId) ON DELETE CASCADE
-- );

-- -- Create Class table
-- CREATE TABLE Class (
--     ClassId INT PRIMARY KEY AUTO_INCREMENT,
--     teacherId INT,
--     StudentId INT,
--     startTime TIME NOT NULL,
--     date DATE NOT NULL,
--     ScheduleId INT,
--     FOREIGN KEY (teacherId) REFERENCES Teacher(teacherId) ON DELETE SET NULL,
--     FOREIGN KEY (StudentId) REFERENCES Student(StudentId) ON DELETE CASCADE,
--     FOREIGN KEY (ScheduleId) REFERENCES Schedule(ScheduleId) ON DELETE SET NULL
-- );

-- -- Create Attendance table with enumeration
-- CREATE TABLE Attendance (
--     attendanceID INT PRIMARY KEY AUTO_INCREMENT,
--     ClassId INT,
--     date DATE NOT NULL,
--     status ENUM('ON_TIME', 'LATE', 'ABSENT', 'INTERRUPTED', 'LEAVE') NOT NULL,
--     FOREIGN KEY (ClassId) REFERENCES Class(ClassId) ON DELETE CASCADE
-- );

-- Create Team table
CREATE TABLE team (
    team_id INT PRIMARY KEY AUTO_INCREMENT,
    team_name VARCHAR(100) NOT NULL UNIQUE
);

-- Insert sample data for Hardcoded Admin
INSERT INTO admin (first_name, last_name, email, password) 
VALUES ('System', 'Admin', 'admin@school.com', 'password');
