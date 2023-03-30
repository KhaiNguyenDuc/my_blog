package com.khai.blogapi.payload;

import lombok.Data;

@Data
public class CategoryDescriptionResponse {
	private Long id;
	
	private String name;

	private String description;

	private String title;
}
