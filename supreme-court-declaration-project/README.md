# Supreme Court Declaration Project

## Overview
This project contains a professionally formatted Supreme Court Declaration document with embedded PDF viewer functionality. The document is designed to display legal certifications and professional qualifications in an official format.

## Files Included
- `supreme-court-declaration.html` - The main HTML document with embedded styling
- `ICO-certificate.pdf` - The Data Protection Registration Certificate displayed in the document

## Features
- Professional legal document formatting
- Embedded PDF viewer with clean interface (no toolbars or navigation panels)
- Responsive design for various screen sizes
- Proper page break control for printing
- A4-sized container for the PDF certificate

## Usage
1. Simply open the `supreme-court-declaration.html` file in any modern web browser
2. The document will display with the embedded ICO certificate in a clean viewer
3. The document can be printed with proper page breaks

## PDF Viewer Implementation
The PDF viewer is implemented using an HTML embed tag with specific parameters to create a clean, simple viewing experience:
```html
<embed src="ICO-certificate.pdf#toolbar=0&navpanes=0&scrollbar=1&statusbar=0&messages=0" type="application/pdf" width="21cm" height="29.7cm">
```

## Customization
The document can be easily customized by editing the HTML file:
- Change content in the appropriate sections
- Modify styling in the CSS section at the top of the file
- Replace the PDF with another document by updating the embed tag's src attribute

## Git Repository
This project is ready to be uploaded to a Git repository. Simply push all files to your repository of choice.
