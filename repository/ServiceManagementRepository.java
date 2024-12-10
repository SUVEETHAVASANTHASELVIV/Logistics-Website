package com.lms.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lms.lms.model.ServiceManagement;

@Repository
public interface ServiceManagementRepository extends JpaRepository<ServiceManagement, Long> {
}
