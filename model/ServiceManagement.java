package com.lms.lms.model;

import jakarta.persistence.*;

@Entity
public class ServiceManagement {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String category; // e.g., Air Freight, Ground Freight, Sea Freight
    private String title;
    private String description;
    private String idealFor;
    private String features;
    private int amount; // price in INR
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDescription() {
        return description;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public String getIdealFor() {
        return idealFor;
    }
    public void setIdealFor(String idealFor) {
        this.idealFor = idealFor;
    }
    public String getFeatures() {
        return features;
    }
    public void setFeatures(String features) {
        this.features = features;
    }
    public int getAmount() {
        return amount;
    }
    public void setAmount(int amount) {
        this.amount = amount;
    }

    // Getters and setters
    
}