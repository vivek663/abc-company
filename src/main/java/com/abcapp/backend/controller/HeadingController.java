package com.abcapp.backend.controller;

import com.abcapp.backend.model.Heading;
import com.abcapp.backend.service.HeadingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/heading")
public class HeadingController {

    @Autowired
    private HeadingService headingService;

    @GetMapping
    public ResponseEntity<Heading> getHeading() {
        return ResponseEntity.ok(headingService.getHeading());
    }

    @PostMapping
    public ResponseEntity<Map<String, Object>> updateHeading(@RequestBody Map<String, String> request) {
        String text = request.get("text");
        if (text == null || text.trim().isEmpty()) {
            Map<String, Object> response = new HashMap<>();
            response.put("success", false);
            response.put("message", "Heading text cannot be empty");
            return ResponseEntity.badRequest().body(response);
        }

        Heading heading = headingService.updateHeading(text);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("message", "Heading updated successfully");
        response.put("heading", heading);
        return ResponseEntity.ok(response);
    }
} 