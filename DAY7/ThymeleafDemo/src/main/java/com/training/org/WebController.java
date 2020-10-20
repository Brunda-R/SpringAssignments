package com.training.org;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class WebController {
	private List<String> col = Arrays.asList("a","b");
	
	@RequestMapping("/index")
	public String getValue(Model model) {
		model.addAttribute("col",col);
		model.addAttribute("name","Brunda");
		return "index";
	}
	
	@RequestMapping("/hello")
	public String getDetails(@RequestParam(name="name",required=false,defaultValue="Anonymous") String name,Model model) {
		model.addAttribute("name",name);
		return "welcome";
	}

}
