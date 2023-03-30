package com.khai.blogapi.service;

import java.util.List;

import com.khai.blogapi.payload.ApiResponse;
import com.khai.blogapi.payload.TagRequest;
import com.khai.blogapi.payload.TagResponse;
import com.khai.blogapi.security.UserPrincipal;

public interface TagService {

	TagResponse getTagById(Long tagId);

	List<TagResponse> getTagsByBlog(Long blogId);

	List<TagResponse> getAllTags();

	TagResponse addTag(TagRequest tagRequest);

	ApiResponse deleteTagById(Long tagId);

	ApiResponse deleteAllTag();

	ApiResponse removeTagsByBlog(Long blogId, UserPrincipal userPrincipal);

	TagResponse updateTagById(Long tagId, TagRequest tagRequest);

}
