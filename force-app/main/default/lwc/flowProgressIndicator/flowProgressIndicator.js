import { LightningElement, api } from "lwc";

export default class FlowProgressIndicator extends LightningElement {
    @api steps = [];
    
    @api
    get currentStep() {
        return this.selectedStep;
    }
    set currentStep(value) {
        this.selectedStep = value;
    }

    selectedStep = "";

    get formattedSteps() {
        return (
            this.steps &&
            [...this.steps].map((item) => ({ label: item, value: item }))
        );
    }
}
