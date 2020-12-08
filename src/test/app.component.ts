import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './shared/dialog/dialog.component';
import { TiersService } from './shared/service/tiers.service';
import { TierComment, TierDialogOption } from './tier-comment/tier-comment.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

    tiers: TierComment[];

    constructor(
        private appDialog: MatDialog,
        private appTiersService: TiersService,
    ) { }

    ngOnInit(): void {
        this.tiers = this.appTiersService.getTiers();
    }

    public createNew(): void {
        const dialogRef = this.appDialog.open(DialogComponent, new TierDialogOption());
        dialogRef.afterClosed()
            .subscribe((result: TierComment) => {
                if (!result) { return; }

                const { title, isCreate, abstract, highValue } = result;
                const tier = new TierComment(
                    true, title, [], 1,
                    isCreate, abstract, highValue
                );
                this.tiers.unshift(tier);
            });
    }
}
