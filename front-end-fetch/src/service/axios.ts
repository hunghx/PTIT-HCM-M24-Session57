import axios from "axios"
// lấy danh sách
export const getAllPosts = async() => {
    const res = await axios.get('http://localhost:9999/660/posts',{
        headers:{
            "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im9pZXJAbWFpbC5jb20iLCJpYXQiOjE3MjA2NjU4MTYsImV4cCI6MTcyMDY2OTQxNiwic3ViIjoiMTEifQ.fYEfl_Qo9mp-Wqtpxdjw2xtbsa6OTVQpUlRBHFjbh90"
        }
    })
    console.log(res);
    
    if(res.status == 200){
        // thành công và có dữ liệu trả về
        return res.data;
    }else{
        throw new Error("Failed to fetch posts");
    }
    
}
// thêm mới
export const createNewPosts = async(newPosts: {}) => {
   const res = await axios.post("http://localhost:9999/posts",newPosts,{
     headers:{
       'Content-Type': 'application/json'
     }
   }) 
   if(res.status == 201){
     return res.data;
   }else{
     throw new Error("Failed to create new post");  
   }
}

// áp dụng làm sửa và xóa , và lấy theo id

// lấy theo id
export const getPostById = async(id : number) => {
    const res = await axios.get('http://localhost:9999/posts/'+id)
    console.log(res);
    
    if(res.status == 200){
        // thành công và có dữ liệu trả về
        return res.data;
    }else{
        throw new Error("Failed to fetch posts");
    }
    
}
// lấy theo id
export const deletePostById = async(id : number) => {
    const res = await axios.delete('http://localhost:9999/posts/'+id)
    console.log(res);
    
    if(res.status == 200){
        // thành công và có dữ liệu trả về
        // lưu token vào cookies hoặc storage browser
        return res.data;
    }else{
        throw new Error("Failed to fetch posts");
    }
    
}

// cập nhật 
export const updatePost = async(updatePost: {}, id : number) => {
    const res = await axios.put('http://localhost:9999/posts'+id,updatePost,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    console.log(res);
    
    if(res.status == 200){
        // thành công và có dữ liệu trả về
        return res.data;
    }else{
        throw new Error("Failed to fetch posts");
    }
    
}


// đăng nhập 
export const login= async(email:string, password: string)=>{
    const res = await axios.post('http://localhost:9999/login',{email,password},{
        headers:{
            'Content-Type': 'application/json'
        }
    })
    if(res.status===200){
        return res.data
    }else{
        throw new Error('Failed to login')
    }

}
