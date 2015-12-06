package com.coatsn.resource;

import java.util.Scanner;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgentsResource {

	@RequestMapping("/agents")
	public String agents() {
		String csv = "";
		csv = new Scanner(this.getClass().getClassLoader().getResourceAsStream("cc-maps-data-set.csv"), "UTF-8")
				.useDelimiter("\\A").next();
		return csv;
	}
}