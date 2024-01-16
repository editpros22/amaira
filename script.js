const correctpassword = 'amaira>>>';

function checkpassword  () {
    const enteredpassword = document.getElementById ('password').value;
    if (enteredpassword === correctpassword){
        window.location.href = 'nextindex.html'
    } else{
        alert('sorry, tu zayada close nhi h+_+');
    }

}
document.getElementById('form').style.display = 'block' ; 