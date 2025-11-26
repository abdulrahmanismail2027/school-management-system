package com.faithcentre.sms.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.provisioning.JdbcUserDetailsManager;
import org.springframework.security.provisioning.UserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.sql.DataSource;

@Configuration
public class EndPointsSecurityConfiguration {

    private final JwtFilter jwtFilter;

    public EndPointsSecurityConfiguration(JwtFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }


    // hard code for now
    @Bean
    public UserDetailsManager userDetailsManager() {
        UserDetails admin = User.builder()
                .username("admin@example.com")
                .password("{bcrypt}$2a$12$ExFHTtJvsb5T9YiFQPPjN.E4s3Z2x95BAOLkRORE/5dbk3RAlVsnq")
                .roles("ADMIN")
                .build();

        return new InMemoryUserDetailsManager(admin);
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.authorizeHttpRequests(
                c ->
                        c
                                // Auth endpoints - public
                                .requestMatchers(HttpMethod.POST, "/api/auth/login").permitAll()
                                .requestMatchers(HttpMethod.GET, "/api/swagger").permitAll()
                                .requestMatchers(HttpMethod.GET, "/api/auth/me").authenticated()

                                // Admin endpoints - admin only
                                .requestMatchers(HttpMethod.POST, "/api/admins").hasRole("ADMIN")

                                // Teacher endpoints
                                .requestMatchers(HttpMethod.POST, "/api/teachers/add").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/api/teachers").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/api/teachers/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.PUT, "/api/teachers/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/api/teachers/**").hasRole("ADMIN")

                                // Student endpoints
                                .requestMatchers(HttpMethod.POST, "/api/students/add").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.GET, "/api/students").authenticated()
                                .requestMatchers(HttpMethod.GET, "/api/students/**").authenticated()
                                .requestMatchers(HttpMethod.PUT, "/api/students/**").hasRole("ADMIN")
                                .requestMatchers(HttpMethod.DELETE, "/api/students/**").hasRole("ADMIN")

                                // Schedule endpoints - authenticated users
                                .requestMatchers(HttpMethod.GET, "/api/students/*/schedule").authenticated()
                                .requestMatchers(HttpMethod.GET, "/api/teachers/*/schedule").authenticated()

                                // All other requests require authentication
                                .anyRequest().authenticated()
        );

        http.httpBasic(Customizer.withDefaults());
        http.csrf(AbstractHttpConfigurer::disable);

        // Add JWT filter before UsernamePasswordAuthenticationFilter
        http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }
}
