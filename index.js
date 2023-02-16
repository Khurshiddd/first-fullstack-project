function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };


const serviceId="service_b09mzdu";
const templetId="template_53mg3nn";

    emailjs
        .send(serviceId,templetId,params)
        .then(res =>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully");
    } 
)
.catch((err) => console.log(err));
}