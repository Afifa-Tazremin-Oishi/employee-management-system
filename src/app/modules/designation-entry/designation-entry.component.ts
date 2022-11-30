import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DesignationService } from './designation.service';

@Component({
  selector: 'app-department-entry',
  templateUrl: './designation-entry.component.html',
  styleUrls: ['./designation-entry.component.css']
})
export class DesignationEntryComponent implements OnInit {

  displayStyle = "none";
  desigList: any;
  data: any = null;
  lists: any;
  
  openPopup(item: any) {
    this.displayStyle = "block";
    this.data = item;
    this.editDesignation.patchValue({
      designation: this.data?.designation,
      sdesignation: this.data?.sdesignation
    });
  }
  closePopup() {
    this.displayStyle = "none";
    this.data = null;
  }

  constructor(
    private fb: FormBuilder, 
    private desigService: DesignationService) { }

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
    this.getAll();
    this.geMax();
  }

  submitAction(){
    if(this.addDesignation.valid){
      this.desigService.addDesignation(this.addDesignation.value).subscribe(res => {
        console.log(res);
        Swal.fire('Success', 'Successfully Saved', 'success');
        this.addDesignation.reset();
        window.location.reload();
        this.getAll();
      },
      (err: any) => {
        Swal.fire('Error', err?.error?.message ?? 'Menu creation Failed. Something went wrong. Please try again later.', 'error');
      }
      )
    }else{
      Swal.fire('Error', 'Please Input Valid Data', 'error');
    }
  }

  getAll(){
    this.desigService.getAlldesignation().subscribe((res: any) => {
      console.log(res)
      this.desigList = res.payload.output;
    })
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
           this.desigService.delete(requestBody)
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

  updateMenu() {
    this.data.designation = this.editDesignation?.value?.designation;
    this.data.sdesignation = this.editDesignation?.value?.sdesignation;
    if (this.editDesignation.valid) {
      this.desigService.updateDesignation(this.data)
        .subscribe(
          res => {
            console.log(res);
            Swal.fire('Success', 'Successfully Updated', 'success');
            this.closePopup();
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
  print(){
    window.print();
  }
  geMax() {
    this.desigService.getMaxNo().subscribe((res: any) => {
      this.lists = res?.payload;
      this.addDesignation.patchValue({ code: res?.payload?.code });

    });
    return true;
  }
  
}