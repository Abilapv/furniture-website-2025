class loading{
    // properties
    database={
        "Nilan":{username:"Nilan",password:"nilan123"},
        "Nila":{username:"Nila",password:"nila123"},
        "Nil":{username:"Nil",password:"nil123"}
}
// method
saveData(){
    if(this.database){
        localStorage.setItem("database",JSON.stringify(this.database))
    }
}
getData(){
    this.database =JSON.parse( localStorage.getItem("database"))
    
    

}
register(){
    this.getData()
    console.log(reguser.value);
    console.log(regpwd.value)
    if(reguser.value==""||regpwd.value==""){
        alert('fill form completely')
    }
    else
    {
        if(reguser in this.database)
        {
            alert('account exit')
        }
        else{this.database[reguser]={username:reguser,password:regpwd}
        console.log(this.database)
        this.saveData()
         
        alert('Registered successfull')
        window.location='login.html'    
        }
    }
}
login(){
    this.getData()
    if(loginuser.value==""||loginpwd==""){
        alert('please fill form')
       }
        else{
            if(loginuser.value in this.database){
                if(this.database[loginuser.value].password==loginpwd.value){
                        alert('succesfully loged in')
                        window.location=""
                    }
                    else{alert('incorrect password')

                    }
                }

            
            else{
                alert('account doesnot exist please register')
            }
        }
    }
    
}

const obj=new loading()
obj.saveData()
obj.getData()