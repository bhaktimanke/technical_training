
      function validate(){
    var name=graphics.name.value;
    var desg=graphics.designation.value;
    if(name=="" && desg!=""){
        alert("Name is required");
        return false;
    }
    else if(desg=="" && name!=""){
        alert("Desingation is required");
        return false;
    }
    else if(name=="" && desg==""){
        alert("Both name and desingation are required");
        return false;
    }
    else{
        return true;
    }

    alert()
} 

function validateForm() {
    let name = reg.firstname.value;
    let mail = reg.email.value;
    let gender = reg.gender.value;
    let course = reg.courses.value;
    let otherReq = reg.subject.value;
    // console.log(gender + " " +course + " " + otherReq);
    if(name == "" && mail == ""){
        document.getElementById("alert").innerText="Please enter your name and email!";
        document.getElementById("alert-div").style.visibility = "visible";
        return false;
        
    }
    else if(name == ""){
        document.getElementById("alert").innerText="Please enter your name!";
        document.getElementById("alert-div").style.visibility = "visible";
        return false;
    }
    else if(mail == ""){
        document.getElementById("alert").innerText="Please enter your email!";
        document.getElementById("alert-div").style.visibility = "visible";
        return false;
    }else{

        document.getElementById("alert").innerText="You have entered!\nName: " + name +"\nGender: " + gender +"\nEmail: " + mail +"\nCourse Required: "+ course +"\nOther Req: "+ otherReq;
        document.getElementById("alert-div").style.visibility = "visible";
        document.getElementById("alert-success").innerHTML = "Form has been submitted!"
        return false;
        // alert("You have entered!\nName: " + name +"\nGender: " + gender +"\nEmail: " + mail +"\nCourse Required: "+ course +"\nOther Req: "+ otherReq);
        // document.getElementById("alert").innerText="Form Submitted!";
    }
}