package com.lms.lms.controller;
import com.lms.lms.model.ServiceManagement;
import com.lms.lms.service.ServiceManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/services")
@CrossOrigin(origins = "http://localhost:3000") // Adjust according to your frontend URL
public class ServiceManagementController {

    @Autowired
    private ServiceManagementService serviceManagementService;

    @GetMapping
    public List<ServiceManagement> getAllServices() {
        return serviceManagementService.getAllServices();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceManagement> getServiceById(@PathVariable("id") Long id) {
        Optional<ServiceManagement> service = serviceManagementService.getServiceById(id);
        return service.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/single")
    public ResponseEntity<ServiceManagement> addService(@RequestBody ServiceManagement serviceManagement) {
        ServiceManagement savedService = serviceManagementService.addService(serviceManagement);
        return new ResponseEntity<>(savedService, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceManagement> updateService(@PathVariable("id") Long id, @RequestBody ServiceManagement serviceManagement) {
        if (!serviceManagementService.getServiceById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        serviceManagement.setId(id);
        ServiceManagement updatedService = serviceManagementService.updateService(serviceManagement);
        return ResponseEntity.ok(updatedService);
    }

    @PostMapping("/bulk")
    public ResponseEntity<List<ServiceManagement>> addServices(@RequestBody List<ServiceManagement> serviceManagements) {
        List<ServiceManagement> savedServices = serviceManagementService.addServices(serviceManagements);
        return new ResponseEntity<>(savedServices, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteService(@PathVariable("id") Long id) {
        if (!serviceManagementService.getServiceById(id).isPresent()) {
            return ResponseEntity.notFound().build();
        }
        serviceManagementService.deleteService(id);
        return ResponseEntity.noContent().build();
    }
}
