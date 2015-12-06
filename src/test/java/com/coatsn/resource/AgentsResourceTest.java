package com.coatsn.resource;

import static org.junit.Assert.assertTrue;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.net.URISyntaxException;
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
		
		String csv = new Scanner(this.getClass().getClassLoader().getResourceAsStream("cc-maps-data-set.csv"), "UTF-8").useDelimiter("\\A").next();
        System.out.println("csv: " + csv);
	}
}
