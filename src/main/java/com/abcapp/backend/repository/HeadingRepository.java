package com.abcapp.backend.repository;

import com.abcapp.backend.model.Heading;
import org.springframework.data.jpa.repository.JpaRepository;

public interface HeadingRepository extends JpaRepository<Heading, Long> {
    Heading findFirstByOrderByIdAsc();
} 