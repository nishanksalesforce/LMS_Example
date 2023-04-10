import { LightningElement } from 'lwc';
import { publish,createMessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/firstMessageChannel__c";

export default class CompA extends LightningElement {
    textValue;
    context = createMessageContext();

    handleChange(event){
        this.textValue = event.target.value;
        this.publishMC();
    }

     publishMC() {
        const message = {
            messageToSend: this.textValue,
            sourceSystem: "From CompA"
        };
        publish(this.context, SAMPLEMC, message);
    }
}