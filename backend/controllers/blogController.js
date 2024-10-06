import Blog from "../models/Blog.js";

const createBlog = async (req, res) => {
  const { title, introduction, content, bulletPoints, refrenceLinks } =
    req.body;

  console.log(
    "here blog contor",
    title,
    introduction,
    content,
    bulletPoints,
    refrenceLinks
  );

  try {
    const blog = new Blog({
      title,
      introduction,
      content,
      bulletPoints,
      refrenceLinks,
    });

    console.log(blog);

    await blog.save();

    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isApproved: true }).sort({ createdAt: -1 });

    res.status(200).json(blogs);
  } catch (error) {
    console.log(error);
  }
};

const getBlogById = async (req, res) => {
  console.log("here blog contor", req.params.id);

  try {
    const blog = await Blog.findById(req.params.id);

    res.status(200).json(blog);
  } catch (error) {
    console.log(error);
  }
};

export { createBlog, getBlogs, getBlogById };


// /******************************************************************************

//                               Online C++ Compiler.
//                Code, Compile, Run and Debug C++ program online.
// Write your code in this editor and press "Run" button to compile and execute it.

// *******************************************************************************/

// #include <iostream>

// using namespace std;

// int main()
// {
//     cout<<"please enter your lucky number";
//     int n;
//     cin>> n;
    
    

//     for(int i =1; i<= n; i++ ){
//         char A = 'A';
//            if(i % n == 1){
//                for(int j=1 ; j < 2*i ; j = j+2){
//                cout<< j;
//            }
//            }else {
//                 for(int j =1 ; j < 2*i ; j = j+2){
//                     cout<<j;
//                 }
//                 for(int j =1; j < i ; j++){
//                     cout<<A++;
//                 }
//            }
           
           
        
//         cout<< endl;
//     } 
//     for(int i =n-1; i > 0; i-- ){
//         char A = 'A';
//            if(i % n == 1){
//                for(int j=1 ; j < 2*i ; j = j+2){
//                cout<< j;
//            }
//            }else {
//                 for(int j =1 ; j < 2*i ; j = j+2){
//                     cout<<j;
//                 }
//                 for(int j =1; j < i ; j++){
//                     cout<<A++;
//                 }
//            }
           
           
        
//         cout<< endl;
//     } 
    

//     return 0;
// }



