import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxContactListComponent } from './ngx-contact-list.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [NgxContactListComponent],
  declarations: [NgxContactListComponent, FilterPipe],
  providers: [FilterPipe],
})
export class NgxContactListModule {}
