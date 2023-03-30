package com.khai.blogapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.khai.blogapi.payload.ApiResponse;
import com.khai.blogapi.payload.CommentRequest;
import com.khai.blogapi.payload.CommentResponse;
import com.khai.blogapi.security.CurrentUser;
import com.khai.blogapi.security.UserPrincipal;
import com.khai.blogapi.service.CommentService;

@RestController
@RequestMapping("api/v1/comments")
public class CommentController {

	@Autowired
	CommentService commentService;
	
	@GetMapping
	public ResponseEntity<List<CommentResponse>> getAllComments(){
		List<CommentResponse> commentResponses = 
				commentService.getAllComments();
		return new ResponseEntity<>(commentResponses,HttpStatus.OK);
	}
	
	@GetMapping("/{comment_id}")
	public ResponseEntity<CommentResponse> getCommentById(
			@PathVariable("comment_id") Long commentId){
		CommentResponse commentResponses = commentService.getCommentById(commentId);
		return new ResponseEntity<>(commentResponses,HttpStatus.OK);
	}
	
	@DeleteMapping("/{comment_id}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
	public ResponseEntity<ApiResponse> deleteCommentById(
			@PathVariable("comment_id") Long commentId,
			@CurrentUser UserPrincipal userPrincipal){
		ApiResponse response = commentService.deleteById(commentId,userPrincipal);
		return new ResponseEntity<>(response,HttpStatus.OK);
	}
	
	@PutMapping("/{comment_id}")
	@PreAuthorize("hasRole('ADMIN') or hasRole('USER')")
	public ResponseEntity<CommentResponse> updateCommentById(
			@PathVariable("comment_id") Long commentId,
			@RequestBody CommentRequest commentRequest,
			@CurrentUser UserPrincipal userPrincipal){
		CommentResponse commentResponses = commentService.updateCommentById(commentId,commentRequest,userPrincipal);
		return new ResponseEntity<>(commentResponses,HttpStatus.OK);
	}
	
	
	
	
}
