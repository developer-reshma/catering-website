
document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
       document.querySelector('.wrapper').classList.toggle('flip');
    });
 });


 /*-----------profile section----------*/

 
 // Example of form submission and edit profile functionality
document.getElementById('editProfileBtn').addEventListener('click', function() {
   let username = document.getElementById('username');
   let email = document.getElementById('useremail');
   let phone = document.getElementById('userphone');
 
   // Make fields editable
   username.contentEditable = true;
   email.contentEditable = true;
   phone.contentEditable = true;
   
   // Change button text to "Save Changes"
   this.textContent = "Save Changes";
   this.addEventListener('click', saveProfile);
 });
 
 function saveProfile() {
   let username = document.getElementById('username');
   let email = document.getElementById('useremail');
   let phone = document.getElementById('userphone');
 
   // Make fields non-editable again
   username.contentEditable = false;
   email.contentEditable = false;
   phone.contentEditable = false;
 
   // Change button text back to "Edit Profile"
   document.getElementById('editProfileBtn').textContent = "Edit Profile";
 
   // You can add functionality to save the data (e.g., to a server) here
   alert("Profile updated successfully!");
 }
 
 