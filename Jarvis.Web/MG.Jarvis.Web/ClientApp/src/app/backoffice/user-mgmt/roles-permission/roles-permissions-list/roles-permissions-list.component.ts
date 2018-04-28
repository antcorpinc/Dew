import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { CONSTANTS } from '../../../../common/constants';
import { Router, ActivatedRoute } from '@angular/router';
import { DateAdapter, NativeDateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatTableDataSource, MatPaginator, MatSort, PageEvent , MatSnackBar, Sort} from '@angular/material';
import { RolesPermissionsListViewModel } from '../../../viewmodel/usersviewmodel/rolespermissionslistviewmodel';
import { UserDataService } from '../../../common/backoffice-shared/services/user-data.service';

const DATE_FORMATS = {
  parse: {
    dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
    dateInput: 'input',
    monthYearLabel: { year: 'numeric', month: 'short' },
    dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
    monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};

export class DatePickerDateAdapter extends NativeDateAdapter {
  format(date: Date, displayFormat: Object): string {
    date.setMinutes((date.getTimezoneOffset() * -1));
    if (displayFormat === 'input') {
      const day = date.getDate();
      const month = date.toLocaleString('en-us', { month: 'long' });
      const year = date.getFullYear();
      return this._to2digit(day) + '-' + month.substring(0, 3) + '-' + year % 100;
    } else {
      return date.toDateString();
    }
  }

  private _to2digit(n: number) {
    return ('00' + n).slice(-2);
  }
}
@Component({
  selector: 'app-roles-permissions-list',
  templateUrl: './roles-permissions-list.component.html',
  styleUrls: ['./roles-permissions-list.component.css']
})
export class RolesPermissionsListComponent implements OnInit {
  edit = CONSTANTS.operation.edit;
  create = CONSTANTS.operation.create;
  read = CONSTANTS.operation.read;
  operation: string;
  dataSource: MatTableDataSource<RolesPermissionsListViewModel>;
  displayedColumns = ['applicationName', 'roleName', 'createdBy', 'createdOn', 'actions'];
  appRoleList: RolesPermissionsListViewModel[];
  actions: string;
  totalRecords: number;
  noDataAvailable: boolean;
  pageEvent: PageEvent;
  Math: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input()
  _dateValue;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private userDataService: UserDataService) {
                this.Math = Math; }

  ngOnInit() {
    this.getAppRoleList();
  }

  getAppRoleList() {
    this.userDataService.getAppRoles().subscribe((roleList) => {
      this.appRoleList = roleList;
      this.dataSource = new MatTableDataSource<RolesPermissionsListViewModel>(this.appRoleList);
      this.totalRecords = this.appRoleList.length;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      if (roleList.length === 0) {
        this.noDataAvailable = true;
      }else {
        this.noDataAvailable = false;
      }
    });
  }

  sortData(sort: Sort) {
    const data = this.appRoleList.slice();
    if (!sort.active || sort.direction === '') {
      this.dataSource.data =  data.sort((a, b) => {
        const isAsc = sort.direction === 'desc';
           return compare(a.createdOn, b.createdOn, isAsc);
      });
      return;
    }else {
      this.dataSource.data = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'applicationName': return compare(a.applicationName.toLowerCase(), b.applicationName.toLowerCase(), isAsc);
          case 'roleName': return compare(a.roleName.toLowerCase(), b.roleName.toLowerCase(), isAsc);
          case 'createdBy': return compare(a.createdBy.toLowerCase(), b.createdBy.toLowerCase(), isAsc);
          case 'createdOn': return compare(a.createdOn.toLowerCase(), b.createdOn.toLowerCase(), isAsc);
          default: return 0;
        }
      });
      this.dataSource.paginator = this.paginator;
    }
  }

  goUpdate(value) {
    const val = value.split(':');
    const roleId = val[0];
    const applicationId = val[1];
    this.operation = val[2];
    this.router.navigate(['../rolespermissions', roleId, applicationId, this.operation.trim().toLowerCase()],
    { relativeTo: this.activatedRoute });
   }

  goDelete(value) {  }

  setNewPermissions() {
    this.router.navigate(['../rolespermissions', 0, 0, this.create], { relativeTo: this.activatedRoute });
  }

}
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
