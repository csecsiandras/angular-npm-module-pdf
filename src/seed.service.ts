import { Injectable } from '@angular/core';
import * as JSPdf from 'jspdf'; 

@Injectable()
export class SeedService {

	constructor() { }

	sayHello() {
		return "Hello!";
	}

	generatePdf() {
		let doc = new JSPdf();
		doc.text("Hello", 20, 20);
		doc.save('test.pdf');
	}

}
