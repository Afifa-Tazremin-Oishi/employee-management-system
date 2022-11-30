import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DepartmentService } from '../department-entry/department.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.css']
})
export class EditDepartmentComponent implements OnInit {
  data: any = null;

  constructor(private fb: FormBuilder, private action: DepartmentService, private router: Router) { }
  editDepartmentForm: FormGroup = this.fb.group({
    dept: ['', [Validators.required]],
  });

  ngOnInit(): void {
  }

  updateMenu() {
    this.data.dept = this.editDepartmentForm?.value?.dept;
    if (this.editDepartmentForm.valid) {
      this.action.updateDept(this.data)
        .subscribe(
          res => {
            console.log(res);
            Swal.fire('Success', 'Successfully Updated', 'success');
            this.router.navigate(['./1'])
          },
          (err: any) => {
            Swal.fire('Error', err?.error?.message ?? 'Menu update Failed. Something went wrong. Please try again later.', 'error');
          }
        )
    } else {
      Swal.fire('Error', 'Plase Submit Valid Data', 'error');
    }
  }

}
