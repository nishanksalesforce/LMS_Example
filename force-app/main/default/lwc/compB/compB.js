import { LightningElement,track } from 'lwc';
import { subscribe,createMessageContext } from 'lightning/messageService';
import SAMPLEMC from "@salesforce/messageChannel/firstMessageChannel__c";


export default class CompB extends LightningElement {

    @track receivedMessage = '';
    subscription = null;
    context = createMessageContext();

    connectedCallback() {
        this.subscribeMC();
    }
    
    subscribeMC() {
        if (this.subscription) {
            return;
        }
        this.subscription = subscribe(this.context, SAMPLEMC, (message) => {
            this.displayMessage(message);
        });
     }

     displayMessage(message) {
         this.receivedMessage = message ? JSON.stringify(message, null, '\t') : 'no message payload';
     }
}