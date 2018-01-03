package org.suji.userInfo.main;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.suji.userInfo.model.UserDetails;

@RestController
public class UserInfo {
	List<UserDetails> data =null;

	
	public UserInfo() {
		data = new ArrayList<>();
		UserDetails user1 = new UserDetails(1, "S.Nayak","571-333-4190", "Software Engineer.","Movies","English","Western");
		UserDetails user2 = new UserDetails(2, "J.Puli","571-333-4390", "Software Engineer.","Cricket","Spanish","Traditional");
		UserDetails user3 = new UserDetails(3, "P.Riaan","571-435-6754", "Doctor.","Cooking","French","Western");
		UserDetails user4 = new UserDetails(4, "S.Dash","571-222-4180", "Teacher.","Teaching","Hindi","Indian");
		
		data.add(user1);
		data.add(user2);
		data.add(user3);
		data.add(user4);
		
	}
	
		
	@GetMapping(value="/userInfo")
	public List<UserDetails> getAllUserInfo() {		
		return data;
}
}