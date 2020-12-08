import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TiersService } from '../app/shared/service/tiers.service';
import { AppComponent } from './app.component';
import { DialogComponent } from './shared/dialog/dialog.component';
import { MaterialModule } from './shared/modules/materials.module';
import { TierCommentComponent } from './tier-comment/tier-comment.component';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        CommonModule,
        MaterialModule,
    ],
    declarations: [
        AppComponent,
        TierCommentComponent,
        DialogComponent,
    ],
    providers: [TiersService],
    bootstrap: [AppComponent]
})
export class AppModule { }
