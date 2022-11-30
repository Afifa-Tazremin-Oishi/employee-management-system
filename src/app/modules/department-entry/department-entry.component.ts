import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from './department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.css']
})
export class DepartmentEntryComponent implements OnInit {

  empList: any;
  selectedDay: any;
  data: any = null;
  lists: any

  constructor(
    private fb: FormBuilder, 
    private action: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.geAll();
  }

  addDepartmentForm: FormGroup = this.fb.group({
    code: [null, [Validators.required]],
    dept: [null, [Validators.required]]
  });

  submitAction() {
    console.log(this.addDepartmentForm.value);
    if (this.addDepartmentForm.valid) {
      this.action.addDepart(this.addDepartmentForm.value)
        .subscribe(
          res => {
            console.log(res)
            Swal.fire('Success', 'Successfully Saved', 'success');
            this.addDepartmentForm.reset();
            this.router.navigate(['/1'])
          },
          (err: any) => {
            Swal.fire('Error', err?.error?.message ?? 'department creation Failed. Something went wrong. Please try again later.', 'error');
          }
        )
    } else {
      Swal.fire('Error', 'Please Input Valid Data', 'error');
    }
  }
  selectChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(event.target.value);
  }

  geAll(){
    this.action.getMaxNo().subscribe((res: any) => {
      console.log(res.payload);
      this.lists = res.payload;
    });
  }

  
}
