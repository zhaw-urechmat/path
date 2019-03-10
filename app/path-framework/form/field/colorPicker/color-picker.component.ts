import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";
import {ColorUtility} from "../../../utility/color-utility";

@Component({
    selector: "path-color-picker",
    templateUrl: "color-picker.component.html"
})
export class ColorPickerComponent {
    @Input("field")
    @Output("field")
    field: ColorPicker;
}

export class ColorPicker extends ValueField<string[]> {
    private _color = "#222990";

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["color"] != null) {
            this.color = modelFormField["color"];
        }
    }

}



