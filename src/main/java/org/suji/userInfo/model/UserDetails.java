package org.suji.userInfo.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UserDetails {

	private long id;
    private String name;  
    private String contactInfo;
    private String occupation;
    private String InterestIn;
    private String language;
    private String outfit;
    
    
    
	public UserDetails(long id, String name, String contactInfo, String occupation, String interestIn, String language,
			String outfit) {
		
		this.id = id;
		this.name = name;
		this.contactInfo = contactInfo;
		this.occupation = occupation;
		this.InterestIn = interestIn;
		this.language = language;
		this.outfit = outfit;
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getContactInfo() {
		return contactInfo;
	}
	public void setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
	}
	public String getOccupation() {
		return occupation;
	}
	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}
	public String getInterestIn() {
		return InterestIn;
	}
	public void setInterestIn(String interestIn) {
		InterestIn = interestIn;
	}
	public String getLanguage() {
		return language;
	}
	public void setLanguage(String language) {
		this.language = language;
	}
	public String getOutfit() {
		return outfit;
	}
	public void setOutfit(String outfit) {
		this.outfit = outfit;
	}

	
}
