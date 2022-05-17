import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';
import { ToastrService } from 'ngx-toastr';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  p: number = 1;
  searchBoxTxt: string = '';

  constructor(private service: EmployeeService,

    private toastr: ToastrService) { }

  ngOnInit() {
    this.service.refreshList();
  }


  populateForm(emp: Employee) {
    this.service.formData = Object.assign({}, emp);
  }

  onDelete(id: number) {


    this.service.deleteEmployee(id).subscribe(res => {
      this.service.refreshList();
      this.toastr.warning('Excluido com sucesso', 'EMP. Register');
    });

  }

}
