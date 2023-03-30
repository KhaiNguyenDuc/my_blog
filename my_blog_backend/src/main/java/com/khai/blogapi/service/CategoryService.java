package com.khai.blogapi.service;

import java.util.List;

import com.khai.blogapi.payload.ApiResponse;
import com.khai.blogapi.payload.CategoryDescriptionResponse;
import com.khai.blogapi.payload.CategoryRequest;
import com.khai.blogapi.payload.CategoryResponse;
import com.khai.blogapi.payload.PageResponse;
import com.khai.blogapi.security.UserPrincipal;

public interface CategoryService {

	List<CategoryResponse> getAllCategories();

	CategoryResponse getCategoryById(Long categoryId);

	CategoryResponse createCategory(CategoryRequest categoryRequest, UserPrincipal userPrincipal);

	ApiResponse deleteCategoryById(Long categoryId, UserPrincipal userPrincipal);

	ApiResponse deleteAll();

	CategoryResponse updateCategoryById(Long categoryId, CategoryRequest categoryRequest, UserPrincipal userPrincipal);

	PageResponse<CategoryResponse> getCategoriesByUsername(String username, Integer page, Integer size);

	CategoryDescriptionResponse getDescriptionByCategoryId(Long categoryId);

	

}
