import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject} from '@angular/core';
import { UserApiService } from '../user-api.service';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})

export class AddUserComponent {

  rolesArr: string[] = ['ROLE_ADMIN', 'ROLE_TEST_ARCHITECT', 'ROLE_TESTER', 'ROLE_AUDITOR'];

  constructor(public dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User,
    public userService: UserApiService) { }

    formControl = new FormControl('', [
      Validators.required
    ]);
  
    getErrorMessage() {
      return this.formControl.hasError('required') ? 'Required field' : '';
    }
  
    submit() {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
  
    public confirmAdd(): void {
      this.userService.addUser(this.data);
    }

}
