import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../shared/dialog/dialog.component';
import { TierComment, TierDialogOption } from './tier-comment.model';


@Component({
    selector: 'app-tier-comment',
    templateUrl: './tier-comment.component.html',
})
export class TierCommentComponent {

    @Input() tiers: TierComment[];

    constructor(
        private appDialog: MatDialog,
    ) { }

    public createNew(index: number): void {
        const dialogRef = this.appDialog.open(DialogComponent, new TierDialogOption());

        dialogRef.afterClosed()
            .subscribe((result: TierComment) => {
                if (!result) { return; }

                this._onCreate(result, index);

            });
    }

    public onCancel(index: number): void {
        this.tiers[index].isCreate = false;
    }

    public onDelete(index: number): void {
        this.tiers.splice(index, 1);
    }

    public editTier(index: number): void {
        const tier = Object.assign({}, this.tiers[index]);
        const option = new TierDialogOption(tier);
        const dialogRef = this.appDialog.open(DialogComponent, option);

        dialogRef.afterClosed()
            .subscribe((result: TierComment) => {
            console.log('result: ', result);
                if (!result) { return; }

                this.tiers[index] = result;
            });
    }

    private _onCreate(tier: TierComment, index: number): void {
        const { title, isCreate, abstract, highValue } = tier;
        this.tiers[index].tiers.unshift(
            new TierComment(
                this._hasAction(),
                title, [], this._getLevel(),
                isCreate, abstract, highValue
            )
        );
    }

    private _getLevel(): number {
        return this.tiers[0].level + 1;
    }

    private _hasAction(): boolean {
        return this.tiers[0].level >= 2 ? false : true;
    }
}
