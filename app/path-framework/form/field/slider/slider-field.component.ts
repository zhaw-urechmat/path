import {Component, Input, Output} from "@angular/core";
import {ValueField} from "../value-field";

@Component({
    selector: "path-slider",
    templateUrl: "slider-field.component.html"
})
export class SliderFieldComponent {
    @Input("field")
    @Output("field")
    field: SliderField;
}

export class SliderField extends ValueField<number[]> {
    private _min: number;
    private _max: number;
    private _myValue: number;

    get min(): number {
        return this._min;
    }

    set min(value: number) {
        this._min = value;
    }

    get max(): number {
        return this._max;
    }

    set max(value: number) {
        this._max = value;
    }

    get myValue(): number {
        return this._myValue;
    }

    set myValue(value: number) {
        this._myValue = value;
    }

    public fromJson(modelFormField) {
        super.fromJson(modelFormField);
        if (modelFormField["min"] != null) {
            this.min = modelFormField["min"];
        }
        if (modelFormField["max"] != null) {
            this.max = modelFormField["max"];
        }
        if (modelFormField["value"] != null) {
            this.myValue = modelFormField["value"];
        }
    }

}



