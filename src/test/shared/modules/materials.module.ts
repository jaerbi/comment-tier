import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
    imports: [
        CommonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatCheckboxModule,
    ],
    exports: [
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatChipsModule,
        MatCheckboxModule,
    ]
})
export class MaterialModule {

}
