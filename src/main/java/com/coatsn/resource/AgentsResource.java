package com.coatsn.resource;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AgentsResource {

	@RequestMapping("/agents")
	public List<Agent> agents() {
		String csv = new Scanner(this.getClass().getClassLoader().getResourceAsStream("cc-maps-data-set-converted.csv"),
				"UTF-8").useDelimiter("\\A").next();
		List<Agent> agents = buildAgents(csv);
		return agents;
	}

	private List<Agent> buildAgents(String csv) {
		List<Agent> agents = new ArrayList<Agent>();
		for (String rowString : csv.split("\n")) {

			String[] row = rowString.split(",");

			Agent agent = new Agent();
			agent.setName(row[0]);
			agent.setLat(Double.parseDouble(row[1]));
			agent.setLng(Double.parseDouble(row[2]));
			agent.setAge(Integer.parseInt(row[3]));
			agent.setGender(row[4]);
			agent.setMessage(agent.getName() + ", " + agent.getAge() + " " + agent.getGender().charAt(0));
			agent.setDraggable(false);
			agent.setCompileMessage(false);
			agents.add(agent);
			
			agents.get(0).setFocus(true);
		}
		return agents;
	}
}