import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }

  getAlldept(){
    return this.http.get('http://localhost:8000/getallemployee');
  }
 addDepart(requestBody: any){
  return this.http.post('http://localhost:8000/add', requestBody);
 }
 updateDept(requestBody: any) {
  return this.http.patch('http://localhost:8000/updateemployee', requestBody);
}
getMaxNo(){
  return this.http.get('http://localhost:8000/maxdeptcode');
}
// deleteDept(requestBody: any){
//   return this.http.delete('http://localhost:8000/deleteemployee', requestBody);
// }



// delete(requestBody: any){
//   let httpheaders=new HttpHeaders()
//   .set('Content-type','application/Json');
//   let options={
//     headers:httpheaders,
//     body: requestBody
//   };
//   return this.http.delete<number>('http://localhost:8000/deleteemployee', options);
// }

delete(requestBody: any) {
  const headerOption2 = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json'
      }
    ),
    body: requestBody
  };
  return this.http.delete('http://localhost:8000/deleteemployee', headerOption2);
}

}
