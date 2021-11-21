import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assnmt';

  inumber=100;
  strName="string test"

  userobj={uid:"Navnathkumbhar",pwd:"admin123"}

  // imgURL="./assets/images/test.jpeg"

  benablebutton=false;
  enablebutton(){
    this.benablebutton=false;
  }
  disablebutton()
  {
    this.benablebutton=true;
  }
  verifyemail(email :string){
    alert('Please check your email, we have send verification email -'+email + ' please click on given link to verify your email')
}
// verifyphone(phone :number){
//   alert("enter 10 digit number")
// }
  
//  verifyphone()
// {
//   var phoneno = /^\d{10}$/;
//   if((verifyphone=(phoneno)))
//         {
//           return true;
//         }
//       else
//         {
//         alert("enter valid phone");
//         return false;
//         }
// }
  strNametwowaydatabinding="Navnath kumbhar";

insuranceobj={PolicyNo:"123",PolicyHolderName:"NavnathKumbhar",AmountonMaturity:"120000",NomineeName:"abcd",MonthlyEMItobePaid:"10000",durationofpolicy:"1 Year"}

imgURL="./assets/images/insurance.jpeg"

strNameparent="Navnath";
obj={UID:"navnath",pwd:"123344"}
// usersobj={uid:"admin",pwd:"pass"}

log()
{
  var usersid;
  var pwds;
  if(usersid=="admin" && pwds=="123")
    alert("login successful")
  else
    alert("login failed")
}


//09/11

Buttonclick(){
  alert("button clicked")
}

strColor="green";
strFontsize="20"
strCustomer="YES"

bcustomer=true;
  changetocustomer()
  {
     this.bcustomer=true;
  }
  changetoemployee(){
    this.bcustomer=false;
  }
  userlist=[
    {uid:101,name:'Navnath',pwd:"123"},
    {uid:102,name:'raj',pwd:"123"},
    
  ]
  employeelist=[
    {eid:"01",name:"Navnath",dt:"IT",des:"none",loc:"Pune"},
    {eid:"02",name:"raj",dt:"EN",des:"none",loc:"Hydrabad"},
    {eid:"03",name:"sanket",dt:"IT",des:"none",loc:"jaipur"},
  ]
  
  username="Navnath";
  password="admin"
  

}
