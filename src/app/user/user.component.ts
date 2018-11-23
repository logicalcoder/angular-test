import { Component, Inject, OnInit } from '@angular/core';
import { UserApiService } from './user-api.service';
import { Observable } from 'rxjs';
import { DataSource } from '@angular/cdk/collections';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { User } from './user.model';
import { AddUserComponent } from './add-user/add-user.component';
import { Globals } from '../globals';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dataSource = new UserDataSource(this.userService);
  displayedColumns = ['name', 'address', 'roles', 'actions'];

  loggedIn: any;

  constructor(private router: Router, private userService: UserApiService, private dialog: MatDialog, private _global: Globals) {
    this.loggedIn = _global.loggedIn;
  }

  ngOnInit() {
    if (!this.loggedIn) {
      this.router.navigate(['login']);
    }
  }

  addNew(user: User) {
    const dialogRef = this.dialog.open(AddUserComponent, {
      width: '400px',
      data: user
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        this.loadData();
      }
    });
  }

  loadData() {
    this.dataSource = new UserDataSource(this.userService);
  }
}

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserApiService) {
    super();
  }
  connect(): Observable<User[]> {
    return this.userService.getUsers();
  }
  disconnect() {}
}
