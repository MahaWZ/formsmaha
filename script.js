//validtion for phone number input
function validate()
{
	var phone=document.getElementById("no").value;
	var reg=/^\d{3}-\d{3}-\d{4}$/;
	if(reg.test(phone))
	{
		document.getElementById("noprompt").style.color= "green";
		document.getElementById("noprompt").innerHTML = "<strong> valid </strong>";
		return (true);
	}
	else
	{
		document.getElementById("noprompt").style.color = "red";
		document.getElementById("noprompt").innerHTML = "<strong> invalid </strong>";
		return (false);
	}
		
}
//validation on submitting the form
function fvalidate()
{
	alert("proceed");
	return (true);
}
