package com.lms.lms.service;

import com.lms.lms.model.OrderManagement;
import com.lms.lms.repository.OrderManagementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.validation.Valid;
import java.time.LocalDate;
import java.util.List;

@Service
public class OrderManagementService {

    @Autowired
    private OrderManagementRepository orderManagementRepository;

    public List<OrderManagement> getAllOrders() {
        return orderManagementRepository.findAll();
    }

    public OrderManagement getOrderById(Long id) {
        return orderManagementRepository.findById(id).orElse(null);
    }

    public OrderManagement saveOrder(@Valid OrderManagement order) {
        if (order.getDate() == null) {
            order.setDate(LocalDate.now());
        }
        return orderManagementRepository.save(order);
    }

    public OrderManagement updateOrder(Long id, @Valid OrderManagement updatedOrder) {
        return orderManagementRepository.findById(id)
                .map(order -> {
                    order.setProductName(updatedOrder.getProductName());
                    order.setDimension(updatedOrder.getDimension());
                    order.setMainService(updatedOrder.getMainService());
                    order.setInnerService(updatedOrder.getInnerService());
                    order.setAmount(updatedOrder.getAmount());
                    order.setName(updatedOrder.getName());
                    order.setDate(LocalDate.now());
                    return orderManagementRepository.save(order);
                })
                .orElse(null);
    }

    public boolean deleteOrder(Long id) {
        if (orderManagementRepository.existsById(id)) {
            orderManagementRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
