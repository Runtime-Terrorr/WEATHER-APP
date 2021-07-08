var button = document.querySelector('.search')

var cityy = document.querySelector('.cityy')
var temp = document.querySelector('.temp')
var desc = document.querySelector('.desc')
var srdata = document.querySelector('.srdata')
var weatherdetail= document.querySelector('.weatherdetail')
var ssdata = document.querySelector('.ssdata')
var datedata = document.querySelector('.datedata')
var wsdata = document.querySelector('.wsdata')
var humiddata = document.querySelector('.humiddata')
var pressdata = document.querySelector('.pressdata')
var mttemp = document.querySelector('.mttemp')
var ettemp = document.querySelector('.ettemp')
var nttemp = document.querySelector('.nttemp')
var page = document.querySelector('.page')
var s1 = 'https:\\api.openweathermap.org/data/2.5/forecast?q='
var s2 = '&appid='
var city=document.getElementById('input')
var key = '91e8bf1f5cc55ce1f4ccd447f3e7bc25'
var unit='°C'
var pressunit=' HPA'
 				var humidunit=' %'
 				var wsunit=' KMPH'
var am= ' AM'
var pm= ' PM'
var formt='.pnnnng'
							
var link1='https:\\api.openweathermap.org/data/2.5/onecall?lat='
var link2 = '&lon='
var link3 = '&exclude={part}&appid='
 				
 				
 				
 				
 				
 				
 				
 				function fade() {
 				
							var bgg=
document.getElementById('bgg')
bgg.style.display ="none";
setTimeout(showPage,4500);
					 
							 
				}
				
				function appear() {
							 var loader = document.getElementById('loader')
							 loader.style.display="block";
							 loader =setTimeout(mainn,4500);
			
				}

				function mainn(){
document.getElementById("weatherdetail").style.display = "block";


} 
				
				function showPage() {
				document.getElementById('bgg').style.display ="none";
  				document.getElementById("loader").style.display = "none";
  				
  				
					mainn();
					fetchh();
					
					
}
      function rep(){
      				
      }document.getElementById('page').style.display='none'
				function fetchh(){
								var x =document.getElementById('input').value;
								document.getElementById('cityy').innerHTML=x;
								document.getElementById('temp').style.display='none'
								document.getElementById('ssdata').style.display='none'
								document.getElementById('srdata').style.display='none'
								document.getElementById('desc').style.display='none'
								document.getElementById('datedata').style.display='none'
								
								document.getElementById('wsdata').style.display='none'
								document.getElementById('pressdata').style.display='none'
								document.getElementById('humiddata').style.display='none'
								fetch(s1+city.value+s2+key)

				.then(response => response.json())
				.then(data => {
								var tempValue = data['list'][0]['main']['temp'];
								degreetemp=tempValue-273.15
								degr=Math.round(degreetemp);
								
								temp.innerHTML=degr+unit;
								document.getElementById('temp').style.display="block";
								var pressValue = data['list'][0]['main']['pressure'];
								pressdata.innerHTML=pressValue+pressunit
								document.getElementById('pressdata').style.display='block';
								var humidValue = data['list'][0]['main']['humidity'];
								
								humiddata.innerHTML=humidValue+humidunit
								document.getElementById('humiddata').style.display='block'
								var wsValue = data['list'][0]['wind']['speed'];
								
								wsdata.innerHTML=wsValue+wsunit
								document.getElementById('wsdata').style.display='block'
								var descValue = data['list'][0]['weather'][0]['description'];
								
								desc.innerHTML=descValue
								
								document.getElementById('desc').style.display='block'
								var srValue = data['city']['sunrise'];
								var date = new Date(srValue * 1000)
								var hours = date.getHours()
								var minutes = "0" + date.getMinutes()
								var formattedTime = hours + ':' + minutes.substr(-2)
								srdata.innerHTML=formattedTime+am
							document.getElementById('srdata').style.display='block'
								var ssValue = data['city']['sunset'];
								var date = new Date(ssValue * 1000)
								var hourss = date.getHours()
								var minutess = "0" + date.getMinutes()
								var formatteddTime = hourss + ':' + minutess.substr(-2)
								ssdata.innerHTML=formatteddTime+pm
								document.getElementById('ssdata').style.display='block'
								


var d=new Date().toLocaleTimeString();
							/*	var d = new Date();
								var houur=d.getHours();
								var minutees=d.getMinutes();
								var formaa=houur + ':' + minutees*/
								datedata.innerHTML=d
								document.getElementById('datedata').style.display='block'
								
								 window.lon= data['city']['coord']['lon']
								
								 window.lat= data['city']['coord']['lat']
								 
								 
				})
				.catch(err => alert('Check the Description or enter yours Api'))
				
				
}

				function reportt(){
								document.getElementById("page").style.display = "none";
				}
			function gayab(){
		
								
								document.getElementById('weatherdetail').style.display='none'	
				fetch(link1+window.lat+link2+window.lon+link3+key)
				.then(response => response.json())
				.then(data => {
								var report = data['alerts'][0]['description']
						
							 page.innerHTML=report
							 document.getElementById('page').style.display='block'
							 })
				.catch(err => alert('UMM....SORRRY \nNO REPORT AVAILABLE FOR THIS CITY ')) 
				{window.location.reload();
				return false;}
				
				
}

function IsEmpty() { if (document.getElementById('input').value === "") 
 if(!alert('PLEASE ENTER THE CITY NAME !')){window.location.reload();}
} 
