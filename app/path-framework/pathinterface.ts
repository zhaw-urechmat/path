import {Http} from '@angular/http';

export interface IPathApp {
    setCurrentForm(formId:string, mode:string, handler:string);
    setCurrentPage(pageId:string, parentPageElement:IPageElement);
    navigateBack();
    yesNo(text:string, yesHandler : () => void, noHandler : () => void);
    closeForm();
}

export interface IPageElement {
}

export interface IFormField {
    getApp():IPathApp;
}

export interface IFormHandler {
    doLoad(form:IForm);
    doSave(form:IForm);
    doValidate(form:IForm);
}

export interface IList {
    getContent():IButton[];
}

export interface IListHandler {
    doLoad(list:IList , http:Http);
}

export interface IButtonHandler {
    doClick(button:IButton);
}

export interface IActionHandler {
    doClick(field:IFormField, action:IAction);
}

export interface IAction {
}

export interface IForm {
}



export interface IButton {
    setColor(color:string);
    getColor() : string;
    getName() : string;
    getApp():IPathApp;
}


