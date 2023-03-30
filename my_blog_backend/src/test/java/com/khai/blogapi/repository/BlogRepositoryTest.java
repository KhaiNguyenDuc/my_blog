package com.khai.blogapi.repository;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.Arrays;
import java.util.Date;
import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.annotation.Rollback;

import com.khai.blogapi.model.Blog;
import com.khai.blogapi.model.Category;
import com.khai.blogapi.model.Comment;
import com.khai.blogapi.model.Role;
import com.khai.blogapi.model.RoleName;
import com.khai.blogapi.model.Tag;
import com.khai.blogapi.model.User;
import com.khai.blogapi.payload.BlogRequest;
import com.khai.blogapi.payload.CategoryRequest;
import com.khai.blogapi.payload.CommentRequest;
import com.khai.blogapi.payload.TagRequest;

@SpringBootTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@TestMethodOrder(OrderAnnotation.class)
@Rollback(false)
class BlogRepositoryTest {

	@Autowired
	BlogRepository blogRepository;

	@Autowired
	CategoryRepository categoryRepository;

	@Autowired
	TagRepository tagRepository;

	@Autowired
	CommentRepository commentRepository;

	@Autowired
	UserRepository userRepository;

	@Autowired
	RoleRepository roleRepository;
	
	@Autowired
	ModelMapper modelMapper;
	
	@Autowired
	PasswordEncoder passwordEncoder;

	@Test
	@Order(1)
	void testCreateUser() {
		User user = new User();
		user.setAddress("address");
		user.setBirthday(null);
		user.setEmail("email@gmail.com");
		user.setComments(null);
		user.setBlogs(null);
		user.setCategories(null);
		user.setEnabled(true);
		user.setFirstName("First name");
		user.setLastName("Last name");
		user.setImage("Image");
		user.setPhoneNumber("Phone number");
		user.setPassword(passwordEncoder.encode("123"));
		user.setUsername("khai");

		Role role = new Role();
		role.setName(RoleName.ADMIN);
		roleRepository.save(role);
		user.setRoles(Arrays.asList(role));

		userRepository.save(user);

		// add user 2
		User userSub = new User();
		userSub.setAddress("address sub");
		userSub.setBirthday(null);
		userSub.setEmail("emailSub@gmail.com");
		userSub.setComments(null);
		userSub.setBlogs(null);
		userSub.setCategories(null);
		userSub.setEnabled(true);
		userSub.setFirstName("First name sub");
		userSub.setLastName("Last name sub");
		userSub.setImage("Image sub");
		userSub.setPhoneNumber("Phone number sub");
		userSub.setPassword(passwordEncoder.encode("123"));
		userSub.setUsername("kiet");

		Role roleSub = new Role();
		roleSub.setName(RoleName.USER);
		roleRepository.save(roleSub);
		userSub.setRoles(Arrays.asList(roleSub));

		userRepository.save(userSub);

		// add user 3
		User userSub1 = new User();
		userSub1.setAddress("address sub1");
		userSub1.setBirthday(null);
		userSub1.setEmail("emailSub1@gmail.com");
		userSub1.setComments(null);
		userSub1.setBlogs(null);
		userSub1.setCategories(null);
		userSub1.setEnabled(true);
		userSub1.setFirstName("First name sub1");
		userSub1.setLastName("Last name sub1");
		userSub1.setImage("Image sub1");
		userSub1.setPhoneNumber("Phone number sub1");
		userSub1.setPassword(passwordEncoder.encode("123"));
		userSub1.setUsername("khang");

		Role roleSub1 = new Role();
		roleSub1.setName(RoleName.STUDENT);
		roleRepository.save(roleSub1);
		userSub1.setRoles(Arrays.asList(roleSub1));

		userRepository.save(userSub1);
	}

	
	@SuppressWarnings("unlikely-arg-type")
	@Test
	@Order(2)
	void testCreateTag() {
		// create a tag
		TagRequest tagRequest = new TagRequest();
		tagRequest.setName("IT");
		tagRequest.setDescription("This is tag");
		tagRequest.setBlogs(null);

		Tag tag = modelMapper.map(tagRequest, Tag.class);
		tagRepository.save(tag);

		// 2nd tag
		TagRequest tagRequest2 = new TagRequest();
		tagRequest2.setName("MKT");
		tagRequest2.setDescription("This is MKT Tag");
		tagRequest2.setBlogs(null);

		Tag tag2 = modelMapper.map(tagRequest2, Tag.class);
		tagRepository.save(tag2);

		assertThat(tagRequest.equals(tag));
	}

	@SuppressWarnings("unlikely-arg-type")
	@Test
	@Order(3)
	void testCreateCategory() {

		User user = userRepository.findById(1L).get();
		
		// create category 1
		Category category1 = new Category();
		category1.setName("Đời sống");
		category1.setTitle("Cuộc sống thật yên bình");
		category1.setDescription("Văn hay chữ đẹp về cuộc sống");
		category1.setSlug("doi-song");
		category1.setUser(user);
		categoryRepository.save(category1);
		
		// create category 1
		Category category2 = new Category();
		category2.setName("Machine learning");
		category2.setTitle("Cuộc sống thật yên bình");
		category2.setDescription("Văn hay chữ đẹp về cuộc sống");
		category2.setSlug("machine-learning");
		category2.setUser(user);
		categoryRepository.save(category2);
				
		// create category 1
		Category category3 = new Category();
		category3.setName("Thủ thuật");
		category3.setTitle("Thủ thuật hay về máy tính");
		category3.setDescription("Tập hợp các thủ thuật hay về máy tính");
		category3.setSlug("thu-thuat");
		category3.setUser(user);
		categoryRepository.save(category3);

	}

	@Test
	@Order(4)
	void testCreateBlog() {
		modelMapper.getConfiguration().setAmbiguityIgnored(true);
		List<Tag> tags = tagRepository.findAll();
		
		User user = userRepository.findById(1L).get();
		
		Category category1 = categoryRepository.findById(1L).get();
		Category category2 = categoryRepository.findById(2L).get();
		Category category3 = categoryRepository.findById(3L).get();
		
		Blog blog1 = new Blog();
		blog1.setImage("Image link");
		blog1.setBody("Body");
		blog1.setPublished(true);
		blog1.setDescription("This is description");
		blog1.setTitle("This is title");
		blog1.setViews(1L);
		blog1.setCategory(category1);
		blog1.setUser(user);
		blog1.setTags(tags);
		blogRepository.save(blog1);
		
		// Create and save blog 2
		Blog blog2 = new Blog();
		blog2.setImage("Image link 2");
		blog2.setBody("Body 2");
		blog2.setPublished(true);
		blog2.setDescription("This is description 2");
		blog2.setTitle("This is title 2");
		blog2.setViews(2L);
		blog2.setCategory(category2);
		blog2.setUser(user);
		blog2.setTags(tags);
		blogRepository.save(blog2);

		// Create and save blog 3
		Blog blog3 = new Blog();
		blog3.setImage("Image link 3");
		blog3.setBody("Body 3");
		blog3.setPublished(true);
		blog3.setDescription("This is description 3");
		blog3.setTitle("This is title 3");
		blog3.setViews(3L);
		blog3.setCategory(category3);
		blog3.setUser(user);
		blog3.setTags(tags);
		blogRepository.save(blog3);

		// Create and save blog 4
		Blog blog4 = new Blog();
		blog4.setImage("Image link 4");
		blog4.setBody("Body 4");
		blog4.setPublished(true);
		blog4.setDescription("This is description 4");
		blog4.setTitle("This is title 4");
		blog4.setViews(4L);
		blog4.setCategory(category1);
		blog4.setUser(user);
		blog4.setTags(tags);
		blogRepository.save(blog4);

		// Create and save blog 5
		Blog blog5 = new Blog();
		blog5.setImage("Image link 5");
		blog5.setBody("Body 5");
		blog5.setPublished(true);
		blog5.setDescription("This is description 5");
		blog5.setTitle("This is title 5");
		blog5.setViews(5L);
		blog5.setCategory(category2);
		blog5.setUser(user);
		blog5.setTags(tags);
		blogRepository.save(blog5);

		Blog blog6 = new Blog();
		blog6.setImage("Image link");
		blog6.setBody("Body");
		blog6.setPublished(true);
		blog6.setDescription("This is description");
		blog6.setTitle("This is title");
		blog6.setViews(1L);
		blog6.setCategory(category2);
		blog6.setUser(user);
		blog6.setTags(tags);
		blogRepository.save(blog6);

		Blog blog7 = new Blog();
		blog7.setImage("Image link");
		blog7.setBody("Body");
		blog7.setPublished(true);
		blog7.setDescription("This is description");
		blog7.setTitle("This is title");
		blog7.setViews(1L);
		blog7.setCategory(category1);
		blog7.setUser(user);
		blog7.setTags(tags);
		blogRepository.save(blog7);
	}

	@SuppressWarnings("unlikely-arg-type")
	@Test
	@Order(5)
	void testCreateComment() {

		// get blog with id 1
		Blog blog = blogRepository.findById(1L).get();
		User user = userRepository.findById(1L).get();
		// create comment and add blog
		CommentRequest commentRequest = new CommentRequest();
		
		commentRequest.setTitle("This is title");
		commentRequest.setBody("This is body");

		Comment comment = modelMapper.map(commentRequest, Comment.class);
		comment.setBlog(blog);
		comment.setUser(user);
		
		commentRepository.save(comment);

		// get blog with id 1

		// create comment and add blog
		CommentRequest commentRequest2 = new CommentRequest();
		
		commentRequest2.setTitle("This is title 2");
		commentRequest2.setBody("This is body 2");


		Comment comment2 = modelMapper.map(commentRequest2, Comment.class);
		comment2.setBlog(blog);
		comment2.setUser(user);
		commentRepository.save(comment2);

		assertThat(comment.equals(commentRequest));

	}

}
