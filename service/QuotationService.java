// package com.lms.lms.service;

// import com.lms.lms.model.Quot;
// import com.lms.lms.repository.QuotRepository;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// @Service
// public class QuotService {

//     @Autowired
//     private QuotRepository quotRepository;

//     public void saveQuote(Quot quot) {
//         quotRepository.save(quot);
//     }
// }
package com.lms.lms.service;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lms.lms.model.Quotation;
import com.lms.lms.repository.QuotationRepository;

@Service
public class QuotationService {

    @Autowired
    private QuotationRepository quotationRepository;

    public Quotation saveQuotation(Quotation quotation) {
        return quotationRepository.save(quotation);
    }

    public List<Quotation> getAllQuotations() {
        return quotationRepository.findAll();
    }

    public Quotation findById(Long id) {
        return quotationRepository.findById(id).orElse(null);
    }
}


