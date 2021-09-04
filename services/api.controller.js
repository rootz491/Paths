const BlogModel = require("../Models/blog.model");

module.exports = {
    getBlogs: async () => {
        try {
            const blogs = await BlogModel.find({ isPublic: true });
            return blogs;
        } catch (error) {
            console.log(error)
            return false;
        }
    },
    getOneBlog: async () => {
        try {
            const blog = await BlogModel.findOne({ isPublic: true });
            return blog;
        } catch (error) {
            console.log(error)
            return false;
        }
    },
    getBlogById: async id => {
        try {
            const blog = await BlogModel.findById(id);
            return blog;
        } catch (error) {
            console.log(error)
            return false;
        }
    },
    pushBlog: async (title, description, content, isPublic, userId, thumbnail) => {
        try {
            const data = await BlogModel.insertMany({title, description, content, isPublic, userId, thumbnail});
            return data;
        } catch (error) {
            console.log(error)
            return false;
        }
    },
    deleteBlog: async id => {
        try {
            const data = await BlogModel.findByIdAndDelete(id);
            return data;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    editBlog: async (id, title, description, content, isPublic, userId, thumbnail) => {
        try {
            const blog = await BlogModel.findByIdAndUpdate(id, { title, description, content, isPublic, userId, thumbnail });
            return blog;
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    checkBlogOwner: async (blogId, userId) => {
        try {
            const blog = await BlogModel.findById(blogId);
            if (!blog) throw "blog not found"
            return (blog.userId === userId) ? true : false;
        } catch (error) {
            console.log(error)
            return false;
        }
    },
    getBlogsByUser: async (userId) => {
        try {
            const blogs = await BlogModel.find({userId});
            return blogs;
        } catch (error) {
            console.log(error)
            return false;
        }
    }
}