import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from './department.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-department-entry',
  templateUrl: './department-entry.component.html',
  styleUrls: ['./department-entry.component.css']
})
export class DepartmentEntryComponent implements OnInit {

  empList: any;
  selectedDay: any;
  data: any = null;
  displayStyle = "none";
  p: number = 1;

  openPopup(item: any) {
    this.displayStyle = "block";
    this.data = item;
    this.editDepartmentForm.patchValue({
      dept: this.data?.dept,
      name: this.data?.name
    });
  }
  closePopup() {
    this.displayStyle = "none";
    this.data = null;
  }

  constructor(
    private fb: FormBuilder, 
    private deptService: DepartmentService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.getAll();
  }

  addDepartmentForm: FormGroup = this.fb.group({
    code: [null, [Validators.required]],
    dept: [null, [Validators.required]],
    name: [null, [Validators.required]],
  });

  editDepartmentForm: FormGroup = this.fb.group({
    dept: [null, [Validators.required]],
    name: [null, [Validators.required]],
  });

  submitAction() {
    if (this.addDepartmentForm.valid) {
      this.deptService.addDepart(this.addDepartmentForm.value)
        .subscribe(
          res => {
            console.log(res)
            Swal.fire('Success', 'Successfully Saved', 'success');
            this.addDepartmentForm.reset();
            this.getAll();
          },
          (err: any) => {
            Swal.fire('Error', err?.error?.message ?? 'Menu creation Failed. Something went wrong. Please try again later.', 'error');
          }
        )
    } else {
      Swal.fire('Error', 'Please Input Valid Data', 'error');
    }
  }
  updateMenu() {
    this.data.dept = this.editDepartmentForm?.value?.dept;
    this.data.name = this.editDepartmentForm?.value?.name;
    if (this.editDepartmentForm.valid) {
      this.deptService.updateDept(this.data)
        .subscribe(
          res => {
            console.log(res);
            Swal.fire('Success', 'Successfully Updated', 'success');
            this.getAll();
          },
          (err: any) => {
            Swal.fire('Error', err?.error?.message ?? 'Menu update Failed. Something went wrong. Please try again later.', 'error');
            this.getAll();
          }
        )
    } else {
      Swal.fire('Error', 'Plase Submit Valid Data', 'error');
      this.getAll();
    }
  }

  selectChangeHandler(event: any) {
    //update the ui
    this.selectedDay = event.target.value;
    console.log(event.target.value);
  }

  getAll() {
    this.deptService.getAlldept().subscribe((res: any) => {

      console.log('hi',res);
      this.empList = res.payload.output;
    })
  }
  print(){
    window.print();
  }
  deleteAction(code:any){
    console.log('sss'+ code)
    Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            let requestBody = {
              code: code
            }
           this.deptService.delete(requestBody)
              .subscribe(
                (res: any) => {
                  Swal.fire('Deleted!', 'Record has been deleted.', 'success');
                  this.getAll();
                },
              );
          }else {
            Swal.fire('ERROR', 'Id did not valid', 'error');
          }
        })
  }
}
