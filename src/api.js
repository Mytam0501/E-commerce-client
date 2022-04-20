import axios from 'axios';
const url = 'api/product';
const urlBlog = 'api/blog';
const urlOurTeam = 'api/our-team';


export default class API {
    //to get all the Products from the server
    static async getAllProducts(){
        const res = await axios.get(url);
        return res.data;
    }

    //to get single Product by ID
    static async getProductByID(id){
        const res = await axios.get(url);
        for (const i in res.data){
            if (res.data[i].slug == id){
                return res.data[i]
            }
        }
    }

    //to insert Product into database
    static async addProduct(product){
        const res = await axios.Product(url, product);
        return res.data;
    }

    //to update Product into database
    static async updateProduct(id, product){
        const res = await axios.patch(`/${url}/${id}`, product);
        return res.data;
    }

    //to delete a Product
    static async deleteProduct(id){
        const res = await axios.delete(`/${url}/${id}`);
        return res.data;
    }






    //to get all the Blogs from the server
    static async getAllBlogs(){
        const res = await axios.get(urlBlog);
        return res.data;
    }

    //to get single Blog by ID
    static async getBlogByID(id){
        const res = await axios.get(`/${urlBlog}/${id}`);
        return res.data;
    }

    //to insert Blog into database
    static async addBlog(Blog){
        const res = await axios.Blog(urlBlog, Blog);
        return res.data;
    }

    //to update Blog into database
    static async updateBlog(id, Blog){
        const res = await axios.patch(`/${urlBlog}/${id}`, Blog);
        return res.data;
    }

    //to delete a Blog
    static async deleteBlog(id){
        const res = await axios.delete(`/${urlBlog}/${id}`);
        return res.data;
    }



    
    //to get all the OurTeams from the server
    static async getAllOurTeams(){
        try {
            const res = await axios.get(urlOurTeam);
            return res.data;
        } catch (error) {
            console.log(error)
        }
    }

    //to insert OurTeams into database
    static async addOurTeam(ourTeams){
        const res = await axios.OurTeam(urlOurTeam, ourTeams);
        return res.data;
    }

    //to update OurTeams into database
    static async updateOurTeam(id, ourTeams){
        const res = await axios.patch(`/${urlOurTeam}/${id}`, ourTeams);
        return res.data;
    }

    //to delete a OurTeams
    static async deleteOurTeam(id){
        const res = await axios.delete(`/${urlOurTeam}/${id}`);
        return res.data;
    }








}