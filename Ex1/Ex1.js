
function myFunc()
{
    var firstInput = document.getElementById("ps1").value;
    var secondInput = document.getElementById("ps2").value;

    if (firstInput != secondInput) 
    {
       document.getElementById("output1").innerHTML = "Passwords do not match!";
    }
    else 
    {
        document.getElementById("output1").innerHTML = "";
    }

    if (firstInput.length < 8)
    {
        document.getElementById("output2").innerHTML = "Password not long enough. Must be at least 8 characters";
    }
    else 
    {
        document.getElementById("output2").innerHTML = "";
    }
   
}
