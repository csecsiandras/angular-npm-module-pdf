# NpmPackage
npm install jspdf --save
npm install @types/jspdf --save

Add following in angular-cli.json:

"scripts": [ "../node_modules/jspdf/dist/jspdf.min.js" ]

call this function from html:
<button (click)="generatePdf()">download </button>