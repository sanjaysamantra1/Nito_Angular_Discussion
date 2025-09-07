import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import tableData from './table_data';

@Component({
  selector: 'smartAssist-angular-material-demo',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatTableModule
  ],
  templateUrl: './angular-material-demo.html',
  styleUrl: './angular-material-demo.css'
})
export class AngularMaterialDemo {
  dataSource = tableData;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];

  testFun1() {
    alert('This is Test Function...')
  }
  private snackBar = inject(MatSnackBar);
  durationInSeconds = 5;
  openSnackBar() {
    this.snackBar.open('Helloo hiiiiiiiiiii', 'Close', {
      duration: 6000
    });
  }
}
