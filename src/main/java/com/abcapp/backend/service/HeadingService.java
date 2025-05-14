package com.abcapp.backend.service;

import com.abcapp.backend.model.Heading;
import com.abcapp.backend.repository.HeadingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HeadingService {

    @Autowired
    private HeadingRepository headingRepository;

    public Heading getHeading() {
        Heading heading = headingRepository.findFirstByOrderByIdAsc();
        if (heading == null) {
            heading = new Heading();
            heading.setText("Welcome to ABC Company");
            headingRepository.save(heading);
        }
        return heading;
    }

    public Heading updateHeading(String text) {
        Heading heading = headingRepository.findFirstByOrderByIdAsc();
        if (heading == null) {
            heading = new Heading();
        }
        heading.setText(text);
        return headingRepository.save(heading);
    }
} 