# NBME-Normal-Lab-Values-Chrome-Extension-
NBME normal lab values displayed as a sidebar - Google Chrome Extension for Medicine/Pharmacy

# Lab Reference Values Chrome Extension
A lightweight, searchable Chrome Side Panel extension designed by medical students for medical students and healthcare professionals to quickly access standard lab reference values. The data is structured to align with common board exam standards, such as those from the **NBME** and **AMBOSS**.

## Features
* **Side Panel Integration**: Access lab values alongside your study materials or electronic health records without switching tabs.
* **Instant Search**: Real-time filtering across all categories (Serum, CSF, Blood, Urine) with highlighted results.
* **Comprehensive Data**: Organized into four primary categories:
    * **Serum**: Electrolytes, Hepatic enzymes, Lipids, Iron studies, Endocrine, and Arterial Blood Gas.
    * **Cerebrospinal Fluid (CSF)**: Cell counts, glucose, and protein.
    * **Blood (Hematologic)**: CBC, WBC differentials, Coagulation (PT/PTT), and Volume studies.
    * **Urine & BMI**: 24-hour collections and adult BMI ranges.
* **Dual Units**: Provides both standard US reference ranges and International System (SI) units.

## Installation
1.  **Download/Clone** this repository to your local machine.
2.  Open Chrome and navigate to `chrome://extensions/`.
3.  Enable **Developer mode** using the toggle in the top right corner.
4.  Click **Load unpacked** and select the folder containing the extension files.
5.  Pin the extension to your toolbar for easy access.

## Usage
* **Open**: Click the extension icon in your browser toolbar to open the Side Panel.
* **Navigate**: Use the top tabs to switch between different lab categories.
* **Search**: Type any lab name (e.g., "Sodium" or "A1c") into the search bar to find values instantly across the entire database.
* **Clear**: Click the **✕** in the search bar to return to the categorized tab view.

## Screenshots
<img width="1465" height="797" alt="image" src="https://github.com/user-attachments/assets/f49032f8-de15-4d47-8c22-b4f1a28622db" />
<img width="1464" height="802" alt="image" src="https://github.com/user-attachments/assets/24e3e6de-0610-4ef0-8210-964113b7c29d" />


## Project Structure
* `manifest.json`: Extension configuration **(Manifest V3)**.
* `sidepanel.html`: The structural layout of the reference tool.
* `sidepanel.js`: Handles UI logic, tab switching, and search functionality.
* `labdata.js`: The central data repository for all lab names and ranges.
* `background.js`: Manages the extension's service worker and side panel triggers.
* `icons/`: Contains the extension branding assets.

*Developed as a quick-reference tool for medical education; Always defer to trusted/known sources to confirm labratory values*
