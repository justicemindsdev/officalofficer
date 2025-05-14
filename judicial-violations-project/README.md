# Judicial Violations Matrix Project

## Overview
This project contains a comprehensive analysis of 20 documented instances of judicial legal misapplication. It includes a web-based interactive matrix that allows users to view, search, and analyze these violations in both tabular and detailed formats.

## Files Included
- `judicial-violations-matrix.html` - The main HTML document with the interactive matrix
- `/audio` - Directory containing audio segments of the court proceedings
- `/transcripts` - Directory containing transcript segments of the court proceedings

## Features
- Interactive tabular view of all 20 violations
- Detailed analysis view with comprehensive information about each violation
- Search functionality to filter violations by keyword
- Video playback capability for specific segments of court proceedings
- Statistical analysis summary of the violations

## Usage
1. Open the `judicial-violations-matrix.html` file in any modern web browser
2. Use the toggle buttons to switch between Tabular View and Detailed Analysis
3. Use the search box to filter violations by keyword
4. Click on the play buttons next to judge statements or responses to view video segments

## Video Implementation
The video playback is implemented using iframe embeds from Grain.com with specific parameters to start at the relevant timestamps:
```html
<iframe 
  src="https://grain.com/_/embed/recording/[VIDEO_ID]/[TOKEN]?autoplay=true&start=[TIMESTAMP]" 
  height="500" 
  width="100%" 
  allow="fullscreen" 
  allowFullScreen={true} 
  frameBorder="0"
></iframe>
```

## Audio and Transcript Segments
The `/audio` directory contains audio recordings of the court proceedings, organized by violation ID. The `/transcripts` directory contains corresponding transcript segments for each violation.

## Customization
The matrix can be customized by editing the HTML file:
- Add or modify violations in the `judicialViolations` array
- Update styling in the CSS section
- Modify the React component structure and functionality
