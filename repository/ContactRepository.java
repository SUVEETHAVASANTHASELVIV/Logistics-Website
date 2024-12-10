package com.lms.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lms.lms.model.Contact;

public interface ContactRepository extends JpaRepository<Contact, Long> {
}
