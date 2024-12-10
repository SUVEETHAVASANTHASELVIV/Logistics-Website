package com.lms.lms.controller;

import com.lms.lms.model.OrderManagement;
import com.lms.lms.service.OrderManagementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/ordermanagement")
@CrossOrigin(origins = "http://localhost:3000")
public class OrderManagementController {

    @Autowired
    private OrderManagementService orderManagementService;

    // Retrieve all orders
    @GetMapping("/get")
    public ResponseEntity<List<OrderManagement>> getAllOrders() {
        List<OrderManagement> orders = orderManagementService.getAllOrders();
        return ResponseEntity.ok(orders);
    }

    // Retrieve a specific order by ID
    @GetMapping("/{id}")
    public ResponseEntity<OrderManagement> getOrderById(@PathVariable Long id) {
        OrderManagement order = orderManagementService.getOrderById(id);
        return order != null ? ResponseEntity.ok(order) : ResponseEntity.notFound().build();
    }

    // Create a new order
    @PostMapping("/create")
    public ResponseEntity<OrderManagement> createOrder(@Valid @RequestBody OrderManagement order) {
        OrderManagement savedOrder = orderManagementService.saveOrder(order);
        return ResponseEntity.status(201).body(savedOrder);
    }

    // Update an existing order by ID
    @PutMapping("/{id}")
    public ResponseEntity<OrderManagement> updateOrder(@PathVariable Long id, @Valid @RequestBody OrderManagement updatedOrder) {
        OrderManagement existingOrder = orderManagementService.updateOrder(id, updatedOrder);
        return existingOrder != null ? ResponseEntity.ok(existingOrder) : ResponseEntity.notFound().build();
    }

    // Delete an order by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        boolean isRemoved = orderManagementService.deleteOrder(id);
        return isRemoved ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
