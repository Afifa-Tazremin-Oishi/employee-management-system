import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {
    constructor(private http: HttpClient){ }

   getAlldesignation(){
      return this.http.get('http://localhost:8000/getalldesignation');
    }
   addDesignation(requestBody: any){
    return this.http.post('http://localhost:8000/adddasignation', requestBody);
   }
   updateDesignation(requestBody: any) {
    return this.http.patch('http://localhost:8000/updatedesigntion', requestBody);
  }
  
  delete(requestBody: any) {
    const headerOption2 = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json'
        }
      ),
      body: requestBody
    };
    return this.http.delete('http://localhost:8000/deletedesigntion', headerOption2);
  }

  getMaxNo(){
    return this.http.get('http://localhost:8000/maxdesigcode');
  }

}
