import axios from "axios";


// lấy dũ liệu bài đăng
export const getAllPosts = async ()=>{
    const response  = await fetch("http://localhost:9999/posts") // mặc định fetch có method là GET
    if(!response.ok){
        // nếu ko thành công ném ra ngoại lệ Error
        throw new Error(response.statusText)
    }else{
        // nếu thành công
        return await response.json();
    }
}

// thêm mới : 
// method : POST
// endpoint : http://localhost:9999/posts
export const createNewPost = async (data: {})=>{
    const response = await fetch("http://localhost:9999/posts",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    })
    return response.json();
}

// xóa bài đăng
export const deletePost = async (id:number)=>{
    const response = await fetch("http://localhost:9999/posts/"+id,{
        method:"DELETE"
    })
    return response.json();
}
// sửa bài đăng
export const updatePartPost = async (dataUp: {}, id : number)=>{
    const response = await fetch("http://localhost:9999/posts/"+id,{
        method:"PATCH",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataUp)
    })
    return response.json();
}
export const updateFullPost = async (dataUp: {}, id : number)=>{
    const response = await fetch("http://localhost:9999/posts/"+id,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify(dataUp)
    })
    return response.json();
}


export const login = async()=>{
    let username = "hunghx";
    let password = "123456";
    const res = await axios.post("http://localhost:9090/api.com/v1/auth/sign-in",
        {username,password},{
            headers: {
                'Content-Type': 'application/json'     
            }
        })
        return res;
}