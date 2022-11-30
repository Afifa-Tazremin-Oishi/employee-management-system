import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DesignationService } from '../designation-entry/designation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {
  data: any = null;

  constructor(private fb: FormBuilder, private action: DesignationService, private router: Router) { }
  editDesignation: FormGroup = this.fb.group({
    designation: [null, [Validators.required]],
    sdesignation: [null, [Validators.required]],
  });

  ngOnInit(): void {
    this.editDesignation.patchValue({
      designation: this.data?.designation,
      sdesignation: this.data?.sdesignation
    });
  }

  updateMenu() {
    this.data.designation = this.editDesignation?.value?.designation;
    this.data.sdesignation = this.editDesignation?.value?.sdesignation;
    if (this.editDesignation.valid) {
      this.action.updateDesignation(this.data)
        .subscribe(
          res => {
            console.log(res);
            Swal.fire('Success', 'Successfully Updated', 'success');
            this.router.navigate(['../2']);
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
