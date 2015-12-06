package com.coatsn.resource;

import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.junit.Before;
import org.junit.Test;

public class AgentsResourceTest {

	private AgentsResource agentsResource;

	@Before
	public void setup() {
		agentsResource = new AgentsResource();
	}

	@Test
	public void canary() {
		assertTrue(true);
	}

	@Test
	public void itShouldReadTheCSV() throws UnsupportedEncodingException, IOException, URISyntaxException {
//		String path = this.getClass().getClassLoader().getResource("cc-maps-data-set.csv").getPath();
//        String csv = new String(Files.readAllBytes(Paths.get(path)), "UTF8");
		
		String csv = new Scanner(this.getClass().getClassLoader().getResourceAsStream("cc-maps-data-set-converted.csv"), "UTF-8").useDelimiter("\\A").next();
		
		
		List<Agent> agents = new ArrayList<Agent>();
		for(String rowString : csv.split("\n")){			
			System.out.println("rowString: " + rowString);
			
			String[] row = rowString.split(",");

			Agent agent = new Agent();
			agent.setName(row[0]);
			agent.setLat(Double.parseDouble(row[1]));
			agent.setLng(Double.parseDouble(row[2]));
			agent.setAge(Integer.parseInt(row[3]));
			agent.setGender(row[4]);
			agents.add(agent);
		}
		
		System.out.println("agents: " + agents);
	}
	
//	@Test
//	public void itShouldCreateAFormatICanUse(){
//		List<Agent> agents = agentsResource.agents();
//		System.out.println("agents: \n" + agents);
//	}
}
