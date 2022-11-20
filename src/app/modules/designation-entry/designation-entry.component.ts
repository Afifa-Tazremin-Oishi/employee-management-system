
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { HttpClient } from '@angular/common/http';
import { DesignationService } from './designation.service';

@Component({
  selector: 'app-department-entry',
  templateUrl: './designation-entry.component.html',
  styleUrls: ['./designation-entry.component.css']
})
export class DesignationEntryComponent implements OnInit {

  displayStyle = "none";
  
  openPopup() {
    this.displayStyle = "block";
  }
  closePopup() {
    this.displayStyle = "none";
  }

  constructor(
    private fb: FormBuilder, 
    private desigService: DesignationService,
    private http: HttpClient) { }

    addDesignation: FormGroup = this.fb.group({
      code: [null, [Validators.required]],
      designation: [null, [Validators.required]],
      sdesignation: [null, [Validators.required]],
    });

    editDesignation: FormGroup = this.fb.group({
      designation: [null, [Validators.required]],
      sdesignation: [null, [Validators.required]],
    });

  ngOnInit(): void {
    //this.getAll();
  }

  submitAction(){
    if(this.addDesignation.valid){
      console.log(this.addDesignation);
      Swal.fire('Success', 'Successfully Saved', 'success');
      this.addDesignation.reset;
    }else{
      Swal.fire('Error', 'Input Data is not Valid', 'error');
    }
  }


}
