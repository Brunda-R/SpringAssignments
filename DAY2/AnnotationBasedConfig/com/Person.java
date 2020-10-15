package com;
import org.springframework.beans.factory.annotation.*;

public class Person {
	private String personName;
	private int personAge;
	
	
	private SpellChecker spellChecker;
	
	public Person() {
		System.out.println("Person constructor");
	}
	
	public String getPersonName() {
		return personName;
	}
	
	@Required
	public void setPersonName(String personName) {
		System.out.println("Setter personName");
		this.personName = personName;
	}
	public SpellChecker getSpellChecker() {
		return spellChecker;
	}
	
	@Autowired
	public void setSpellChecker(SpellChecker spellChecker) {
		System.out.println("Setter spellChecker");
		this.spellChecker = spellChecker;
	}

	public int getPersonAge() {
		return personAge;
	}
	
	@Required
	public void setPersonAge(int personAge) {
		System.out.println("Setter personAge");
		this.personAge = personAge;
	}
	
	public void printChecker() {
		spellChecker.checkSpelling();
	}

}
