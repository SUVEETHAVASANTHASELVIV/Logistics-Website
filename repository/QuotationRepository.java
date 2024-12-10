// package com.lms.lms.repository;


// import org.springframework.data.jpa.repository.JpaRepository;

// import com.lms.lms.model.Quot;

// public interface QuotRepository extends JpaRepository<Quot, Long> {
// }
package com.lms.lms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lms.lms.model.Quotation;

public interface QuotationRepository extends JpaRepository<Quotation, Long> {
}
