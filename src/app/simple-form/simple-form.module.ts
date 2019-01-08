import { NgModule } from '@angular/core';
import { SimpleFormComponent } from './simple-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [SimpleFormComponent],
    imports: [ReactiveFormsModule],
    exports: [SimpleFormComponent],
    providers: [],
})
export class SimpleFormModule { }
