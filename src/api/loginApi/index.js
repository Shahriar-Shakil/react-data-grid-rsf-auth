const login = async ({payload:{userId,password}}) =>{
  
    const data = new FormData();
    
    data.set('username',userId);
     data.set('password',password);
		
    return await fetch("https://nothibs.tappware.com/api/login",{
        headers:new Headers({
             		"device-id":1234567890,
             		"device-type":"android",
             		"api-version":"1"
             	}),
       method:'post',
       body:data
     }).then(response=> response.json())
     
   
   
  }
  export default login;