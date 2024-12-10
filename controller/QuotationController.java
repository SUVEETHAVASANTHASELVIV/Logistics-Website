// package com.lms.lms.controller;

// import com.lms.lms.model.Quot;
// import com.lms.lms.service.QuotService;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// @RestController
// @RequestMapping("/api")
// public class QuotController {

//     @Autowired
//     private QuotService quotService;

//     @PostMapping("/get-quote")
//     public ResponseEntity<String> getQuote(@RequestBody Quot quot) {
//         try {
//             quotService.saveQuote(quot);
//             return ResponseEntity.ok("Quotation request saved successfully");
//         } catch (Exception e) {
//             return ResponseEntity.status(500).body("An error occurred: " + e.getMessage());
//         }
//     }
// }
package com.lms.lms.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.lms.lms.model.Quotation;
import com.lms.lms.service.QuotationService;

@RestController
@RequestMapping("/quotations")
@CrossOrigin(origins = "http://localhost:3000")
public class QuotationController {

    @Autowired
    private QuotationService quotationService;

    @PostMapping
    public Quotation createQuotation(@RequestBody Quotation quotation) {
        return quotationService.saveQuotation(quotation);
    }

    @GetMapping
    public List<Quotation> getAllQuotations() {
        return quotationService.getAllQuotations();
    }
    
    @PutMapping("/{id}/process")
    public Quotation processQuotation(@PathVariable Long id, @RequestBody Quotation quotation) {
        Quotation existingQuotation = quotationService.findById(id);
        if (existingQuotation != null) {
            existingQuotation.setProcessed(quotation.isProcessed());
            return quotationService.saveQuotation(existingQuotation);
        }
        return null;
    }
}

