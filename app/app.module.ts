import {NgModule, ModuleWithProviders} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FormComponent} from './path-framework/form/form.component';
import {ChartComponent} from './path-framework/page/element/chart/chart.component';
import {AutoCompleteComponent} from "./path-framework/form/field/auto-complete/auto-complete-field.component";
import {TextFieldComponent} from "./path-framework/form/field/text/text-field.component";
import {DateFieldComponent} from "./path-framework/form/field/date/date-field.component";
import {RadioGroupComponent} from "./path-framework/form/field/radio/radio-group.component";
import {CheckboxGroupComponent} from "./path-framework/form/field/checkbox/checkbox-group.component";
import {FormFieldLabelComponent} from "./path-framework/form/field/form-field-label.component";
import {ProgressBarComponent} from "./path-framework/form/field/progress-bar/progress-bar.component";
import {LabelFieldComponent} from "./path-framework/form/field/label/label-field.component";
import {FieldListFieldComponent} from "./path-framework/form/field/fieldList/field-list-field.component";
import {NumberFieldComponent} from "./path-framework/form/field/number/number-field.component";
import {TranslationFieldComponent} from "./path-framework/form/field/translation/translation-field.component";
import {Ng2BootstrapModule} from "ngx-bootstrap";
import {DraggableDirective} from "./path-framework/form/draggable.directive";
import {BackButtonComponent} from "./path-framework/page/element/button/back-button.component";
import {LinkButtonComponent} from "./path-framework/page/element/button/link-button.component";
import {PageDeleteButtonComponent} from "./path-framework/page/element/button/page-delete-button.component";
import {ButtonComponent} from "./path-framework/page/element/button/button.component";
import { AlertModule } from 'ngx-bootstrap';

@NgModule({
    imports:      [BrowserModule, HttpModule, FormsModule, CommonModule, Ng2BootstrapModule.forRoot(), AlertModule.forRoot()],
    declarations: [DraggableDirective, LabelFieldComponent, FieldListFieldComponent, FormComponent, ChartComponent, AutoCompleteComponent, ProgressBarComponent, TextFieldComponent, TranslationFieldComponent, NumberFieldComponent, DateFieldComponent, RadioGroupComponent, CheckboxGroupComponent, FormFieldLabelComponent, BackButtonComponent, LinkButtonComponent, PageDeleteButtonComponent, ButtonComponent],
    exports:      [DraggableDirective, BrowserModule, HttpModule, FormsModule, CommonModule, Ng2BootstrapModule, LabelFieldComponent, FieldListFieldComponent, FormComponent, ChartComponent, AutoCompleteComponent, ProgressBarComponent, TextFieldComponent, TranslationFieldComponent, NumberFieldComponent, DateFieldComponent, RadioGroupComponent, CheckboxGroupComponent, FormFieldLabelComponent, BackButtonComponent, LinkButtonComponent, PageDeleteButtonComponent, ButtonComponent]
})
export class AppModule {
    static forRoot(): ModuleWithProviders {
        return {ngModule: AppModule, providers: []};
    }
}