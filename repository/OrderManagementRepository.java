package com.lms.lms.repository;

import com.lms.lms.model.OrderManagement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderManagementRepository extends JpaRepository<OrderManagement, Long> {
}
