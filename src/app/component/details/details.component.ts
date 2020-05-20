import { Component, OnInit } from '@angular/core';
import { Data } from '../../interface/data';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DummyDataService } from 'src/app/providers/data/dummy-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  datasaved: boolean = false;
  dataForm: FormGroup;
  AllData: Observable<Data[]>;
  users: any;
  userIdToUpdate = null;
  deleteuser:Data;
  


  constructor(private formBuilder: FormBuilder, private dataService: DummyDataService) {
    this.dataForm = formBuilder.group(
      {
        // id: [],
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
      }
    );

  }

  ngOnInit(): void {
    this.getData();

  }
  modelUser(user){
    this.deleteuser = user;
  }

  onFormSubmit(data: any) {
    this.datasaved = false;
    console.log('data', data.value);
    this.postData(data.value);
    this.dataForm.reset();
  }


  postData(data: Data) {
    if (this.userIdToUpdate == null) {
      this.dataService.postData(data).subscribe
        (data => {
          console.log('postdata', data);
          this.datasaved = true;
          this.getData();
          this.userIdToUpdate = null; 
        });
    } else{
        data.id=this.userIdToUpdate;
        this.dataService.updateData(data).subscribe
        (data=>
          {
            console.log('updateData', data);
            this.datasaved = true;
            this.getData();
            this.userIdToUpdate = null;
          })
    }

  }

  userEditData(userId) {
    console.log('userId', userId);
    this.dataService.getDataByID(userId).subscribe(data => {
      console.log('dataForEDIT', data);
      this.userIdToUpdate = userId;
      // this.dataForm.controls['id'].setValue(data.id);
      this.dataForm.controls['name'].setValue(data.name);
      this.dataForm.controls['email'].setValue(data.email);
    });
  }

  deleteUser(userId){
    console.log('userId', userId);
    this.dataService.deleteData(userId)
    .subscribe(data=>{
      console.log('deleteUser', data);
      this.getData();
    })

  }

  getData() {
    this.users = this.dataService.getData();
  }

}
