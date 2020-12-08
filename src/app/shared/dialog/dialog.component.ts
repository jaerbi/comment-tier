import { Component, EventEmitter, HostBinding, Inject, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TierComment } from 'src/app/tier-comment/tier-comment.model';

@Component({
    selector: 'app-dialog',
    templateUrl: './dialog.component.html',
})
export class DialogComponent {

    @HostBinding('class.dialog') class = true;

    @Output() dataChange: EventEmitter<TierComment> = new EventEmitter<TierComment>();

    constructor(
        public dialogRef: MatDialogRef<DialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: TierComment,
    ) { }


    public onCancel(): void {
        this.dialogRef.close();
    }
}
