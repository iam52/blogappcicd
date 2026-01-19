package me.superoi.springbootdeveloper.controller;

import lombok.RequiredArgsConstructor;
import me.superoi.springbootdeveloper.dto.AddUserRequest;
import me.superoi.springbootdeveloper.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
@Controller
public class UserApiController {

    private final UserService userService;

    @PostMapping("/user")
    public String signup(AddUserRequest request, Model model) {
        try {
            userService.save(request);
            return "redirect:/";
        } catch (IllegalArgumentException e) {
            model.addAttribute("emailError", e.getMessage());
            return "signup";
        }
    }
}
