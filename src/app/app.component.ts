import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import { ModalCreateProjectComponent } from './modal-create-project/modal-create-project.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'umane_3.0';

  displayedColumns: string[] = ['usuario', 'permisos', 'botones'];
  dataSource = ELEMENT_DATA;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private _snackBar: MatSnackBar, public dialog: MatDialog) {}

  openSnackBar() {
    this._snackBar.open('SnackBar', 'X',{
      duration:2000, 
      panelClass:['snack-bar-warning'],
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    });
    
    
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalCreateProjectComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

//table
export interface ExampleTable {
  usuario: number;
  permisos: string;
  botones: string;
  
}

const ELEMENT_DATA: ExampleTable[] = [
  {usuario: 1, permisos: 'Hydrogen', botones:''},
  {usuario: 2, permisos: 'Helium',botones:''},
  {usuario: 3, permisos: 'Lithium', botones:''},
  {usuario: 4, permisos: 'Beryllium',botones:''},
  {usuario: 5, permisos: 'Boron', botones:''},
  {usuario: 6, permisos: 'Carbon',botones:''},
  {usuario: 7, permisos: 'Nitrogen',botones:''},
  {usuario: 8, permisos: 'Oxygen', botones:''},
  {usuario: 9, permisos: 'Fluorine',botones:''},
  {usuario: 10, permisos: 'Neon', botones:''},
];

//snack


