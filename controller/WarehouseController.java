package com.lms.lms.controller;

import com.lms.lms.model.Warehouse;
import com.lms.lms.service.WarehouseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/warehouses")
public class WarehouseController {

    @Autowired
    private WarehouseService service;

    @GetMapping
    public List<Warehouse> getAllWarehouses() {
        return service.findAll();
    }

    @GetMapping("/{id}")
    public Warehouse getWarehouseById(@PathVariable Long id) {
        return service.findById(id);
    }

    @GetMapping("/name/{name}")
    public List<Warehouse> getWarehousesByName(@PathVariable String name) {
        return service.findByName(name);
    }

    @GetMapping("/max-items/{maxItems}")
    public List<Warehouse> getWarehousesByMaxItemsGreaterThan(@PathVariable int maxItems) {
        return service.findByMaxItemsGreaterThan(maxItems);
    }

    @GetMapping("/items/{item}")
    public List<Warehouse> getWarehousesByItemsContaining(@PathVariable String item) {
        return service.findByItemsContaining(item);
    }

    @PostMapping
    public Warehouse createWarehouse(@RequestBody Warehouse warehouse) {
        return service.save(warehouse);
    }

    @PutMapping("/{id}")
    public Warehouse updateWarehouse(@PathVariable Long id, @RequestBody Warehouse warehouse) {
        warehouse.setId(id);
        return service.save(warehouse);
    }

    @DeleteMapping("/{id}")
    public void deleteWarehouse(@PathVariable Long id) {
        service.deleteById(id);
    }
}