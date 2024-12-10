package com.lms.lms.service;
import com.lms.lms.model.Warehouse;
import com.lms.lms.repository.WarehouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WarehouseService {

    @Autowired
    private WarehouseRepository repository;

    public List<Warehouse> findAll() {
        return repository.findAll();
    }

    public Warehouse findById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public List<Warehouse> findByName(String name) {
        return repository.findByName(name);
    }

    public List<Warehouse> findByMaxItemsGreaterThan(int maxItems) {
        return repository.findByMaxItemsGreaterThan(maxItems);
    }

    public List<Warehouse> findByItemsContaining(String item) {
        return repository.findByItemsContaining(item);
    }

    public Warehouse save(Warehouse warehouse) {
        return repository.save(warehouse);
    }

    public void deleteById(Long id) {
        repository.deleteById(id);
    }
}