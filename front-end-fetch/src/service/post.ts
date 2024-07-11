import axios from "axios"

export const getPostWithPaginate= async(page :number, perPage: number)=>{

    const response = await axios.get(`http://localhost:9999/posts?_page=${page}&_limit=${perPage}`)
    if (response.status === 200){
        console.log(response);
        
        return response.data;
    }else{
        throw new Error(`API request failed with status ${response.status}`);
    }
}