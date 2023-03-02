import { Component } from '@angular/core';
import { UserDataService } from 'src/services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudApp';
  userObj={
    name: "",
    email: "",
    id: ''
  }
  usersData: any;
  constructor(private userData: UserDataService){}
  ngOnInit(){
    this.displayUser();
  }
  getDetails(users:any){
    console.log(users);
    this.userData.createUser(users).subscribe(()=>{
      this.displayUser();
    });
  }
  displayUser(){
    this.userData.getUsers().subscribe((res)=>{
      this.usersData = res;
    });
  }

  deleteData(user:any){
    this.userData.deletUsers(user).subscribe(()=>{
      this.displayUser();
    });
  }
  editData(user:any){
    this.userObj = user;
  }

  updateUser(){
    this.userData.updateUsers(this.userObj).subscribe(()=>{
      this.displayUser();
    });
  }
}
