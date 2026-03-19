const LAB_DATA = {
  serum: [
    {
      type: "header",
      name: "General Chemistry – Electrolytes"
    },
    { name: "Sodium (Na⁺)", ref: "136–146 mEq/L", si: "136–146 mmol/L" },
    { name: "Potassium (K⁺)", ref: "3.5–5.0 mEq/L", si: "3.5–5.0 mmol/L" },
    { name: "Chloride (Cl⁻)", ref: "95–105 mEq/L", si: "95–105 mmol/L" },
    { name: "Bicarbonate (HCO₃⁻)", ref: "22–28 mEq/L", si: "22–28 mmol/L" },
    { name: "Magnesium (Mg²⁺)", ref: "1.5–2.0 mg/dL", si: "0.75–1.0 mmol/L" },
    { name: "Phosphorus (inorganic)", ref: "3.0–4.5 mg/dL", si: "1.0–1.5 mmol/L" },
    { name: "Calcium", ref: "8.4–10.2 mg/dL", si: "2.1–2.6 mmol/L" },
    { name: "Urea nitrogen", ref: "7–18 mg/dL", si: "2.5–6.4 mmol/L" },
    { name: "Creatinine", ref: "0.6–1.2 mg/dL", si: "53–106 µmol/L" },
    { name: "Glucose (fasting)", ref: "70–100 mg/dL", si: "3.8–5.6 mmol/L" },
    { name: "Glucose (random, non-fasting)", ref: "<140 mg/dL", si: "<7.77 mmol/L" },
    { name: "Osmolality", ref: "275–295 mOsmol/kg H₂O", si: "275–295 mOsmol/kg H₂O" },
    {
      type: "header",
      name: "Hepatic"
    },
    { name: "Alanine aminotransferase (ALT)", ref: "10–40 U/L", si: "10–40 U/L" },
    { name: "Aspartate aminotransferase (AST)", ref: "12–38 U/L", si: "12–38 U/L" },
    { name: "Alkaline phosphatase", ref: "25–100 U/L", si: "25–100 U/L" },
    { name: "Bilirubin, Total // Direct", ref: "0.1–1.0 mg/dL // 0.0–0.3 mg/dL", si: "2–17 µmol/L // 0–5 µmol/L" },
    { name: "Proteins, total", ref: "6.0–7.8 g/dL", si: "60–78 g/L" },
    { name: "  Albumin", ref: "3.5–5.5 g/dL", si: "35–55 g/L", indent: true },
    { name: "  Globulin", ref: "2.3–3.5 g/dL", si: "23–35 g/L", indent: true },
    {
      type: "header",
      name: "Lipids"
    },
    { name: "Cholesterol", ref: "", si: "" },
    { name: "  Total (Normal)", ref: "<200 mg/dL", si: "<5.2 mmol/L", indent: true },
    { name: "  Total (High)", ref: ">240 mg/dL", si: ">6.2 mmol/L", indent: true },
    { name: "  HDL", ref: "40–60 mg/dL", si: "1.0–1.6 mmol/L", indent: true },
    { name: "  LDL", ref: "<160 mg/dL", si: "<4.2 mmol/L", indent: true },
    { name: "Triglycerides (Normal)", ref: "<150 mg/dL", si: "<1.70 mmol/L" },
    { name: "Triglycerides (Borderline)", ref: "151–199 mg/dL", si: "1.71–2.25 mmol/L" },
    {
      type: "header",
      name: "Iron Studies"
    },
    { name: "Ferritin (Male)", ref: "20–250 ng/mL", si: "20–250 µg/L" },
    { name: "Ferritin (Female)", ref: "10–120 ng/mL", si: "10–120 µg/L" },
    { name: "Iron (Male)", ref: "65–175 µg/dL", si: "11.6–31.3 µmol/L" },
    { name: "Iron (Female)", ref: "50–170 µg/dL", si: "9.0–30.4 µmol/L" },
    { name: "Total iron-binding capacity", ref: "250–400 µg/dL", si: "44.8–71.6 µmol/L" },
    { name: "Transferrin", ref: "200–360 mg/dL", si: "2.0–3.6 g/L" },
    {
      type: "header",
      name: "Other Serum"
    },
    { name: "Amylase", ref: "25–125 U/L", si: "25–125 U/L" },
    { name: "Lipase", ref: "13–60 U/L", si: "13–60 U/L" },
    { name: "Lactate dehydrogenase", ref: "45–200 U/L", si: "45–200 U/L" },
    { name: "Creatine kinase (Male)", ref: "25–90 U/L", si: "25–90 U/L" },
    { name: "Creatine kinase (Female)", ref: "10–70 U/L", si: "10–70 U/L" },
    { name: "Creatinine clearance (Male)", ref: "97–137 mL/min", si: "97–137 mL/min" },
    { name: "Creatinine clearance (Female)", ref: "88–128 mL/min", si: "88–128 mL/min" },
    { name: "Troponin I", ref: "≤0.04 ng/mL", si: "≤0.04 µg/L" },
    { name: "Uric acid", ref: "3.0–8.2 mg/dL", si: "0.18–0.48 mmol/L" },
    {
      type: "header",
      name: "Endocrine"
    },
    { name: "Cortisol (0800 h)", ref: "5–23 µg/dL", si: "138–635 nmol/L" },
    { name: "Cortisol (1600 h)", ref: "3–15 µg/dL", si: "82–413 nmol/L" },
    { name: "Cortisol (2000 h)", ref: "<50% of 0800 h", si: "Fraction of 0800 h: <0.50" },
    { name: "TSH", ref: "0.4–4.0 µU/mL", si: "0.4–4.0 mIU/L" },
    { name: "Thyroxine (T4)", ref: "5–12 µg/dL", si: "64–155 nmol/L" },
    { name: "Free T4", ref: "0.9–1.7 ng/dL", si: "12.0–21.9 pmol/L" },
    { name: "Triiodothyronine (T3) (RIA)", ref: "100–200 ng/dL", si: "1.5–3.1 nmol/L" },
    { name: "Triiodothyronine (T3) resin uptake", ref: "25%–35%", si: "0.25–0.35" },
    { name: "Thyroidal iodine (¹²³I) uptake", ref: "8%–30%/24 h", si: "0.08–0.30/24 h" },
    { name: "Intact PTH", ref: "10–60 pg/mL", si: "10–60 ng/L" },
    { name: "Prolactin (Male)", ref: "<17 ng/mL", si: "<17 µg/L" },
    { name: "Prolactin (Female)", ref: "<25 ng/mL", si: "<25 µg/L" },
    { name: "FSH (Male)", ref: "4–25 mIU/mL", si: "4–25 IU/L" },
    { name: "FSH (Female, premenopause)", ref: "4–30 mIU/mL", si: "4–30 IU/L" },
    { name: "FSH (Female, midcycle peak)", ref: "10–90 mIU/mL", si: "10–90 IU/L" },
    { name: "FSH (Female, postmenopause)", ref: "40–250 mIU/mL", si: "40–250 IU/L" },
    { name: "LH (Male)", ref: "6–23 mIU/mL", si: "6–23 IU/L" },
    { name: "LH (Female, follicular)", ref: "5–30 mIU/mL", si: "5–30 IU/L" },
    { name: "LH (Female, midcycle)", ref: "75–150 mIU/mL", si: "75–150 IU/L" },
    { name: "LH (Female, postmenopause)", ref: "30–200 mIU/mL", si: "30–200 IU/L" },
    { name: "Growth hormone (fasting)", ref: "<5 ng/mL", si: "<5 µg/L" },
    { name: "Growth hormone (provocative)", ref: ">7 ng/mL", si: ">7 µg/L" },
    { name: "17-Hydroxycorticosteroids (Male)", ref: "3.0–10.0 mg/24 h", si: "8.2–27.6 µmol/24 h" },
    { name: "17-Hydroxycorticosteroids (Female)", ref: "2.0–8.0 mg/24 h", si: "5.5–22.0 µmol/24 h" },
    { name: "17-Ketosteroids, total (Male)", ref: "8–20 mg/24 h", si: "28–70 µmol/24 h" },
    { name: "17-Ketosteroids, total (Female)", ref: "6–15 mg/24 h", si: "21–52 µmol/24 h" },
    {
      type: "header",
      name: "Immunoglobulins"
    },
    { name: "  IgA", ref: "76–390 mg/dL", si: "0.76–3.90 g/L", indent: true },
    { name: "  IgE", ref: "0–380 IU/mL", si: "0–380 kIU/L", indent: true },
    { name: "  IgG", ref: "650–1500 mg/dL", si: "6.5–15.0 g/L", indent: true },
    { name: "  IgM", ref: "50–300 mg/dL", si: "0.5–3.0 g/L", indent: true },
    {
      type: "header",
      name: "Arterial Blood Gas (Room Air)"
    },
    { name: "  pH", ref: "7.35–7.45", si: "[H⁺] 36–44 nmol/L", indent: true },
    { name: "  PCO₂", ref: "33–45 mm Hg", si: "4.4–5.9 kPa", indent: true },
    { name: "  PO₂", ref: "75–105 mm Hg", si: "10.0–14.0 kPa", indent: true }
  ],

  csf: [
    { name: "Cell count", ref: "0–5/mm³", si: "0–5 × 10⁶/L" },
    { name: "Chloride", ref: "118–132 mEq/L", si: "118–132 mmol/L" },
    { name: "Gamma globulin", ref: "3%–12% total proteins", si: "0.03–0.12" },
    { name: "Glucose", ref: "40–70 mg/dL", si: "2.2–3.9 mmol/L" },
    { name: "Pressure", ref: "70–180 mm H₂O", si: "70–180 mm H₂O" },
    { name: "Proteins, total", ref: "<40 mg/dL", si: "<0.40 g/L" }
  ],

  blood: [
    {
      type: "header",
      name: "Complete Blood Count"
    },
    { name: "Erythrocyte count (Male)", ref: "4.3–5.9 million/mm³", si: "4.3–5.9 × 10¹²/L" },
    { name: "Erythrocyte count (Female)", ref: "3.5–5.5 million/mm³", si: "3.5–5.5 × 10¹²/L" },
    { name: "Hematocrit (Male)", ref: "41%–53%", si: "0.41–0.53" },
    { name: "Hematocrit (Female)", ref: "36%–46%", si: "0.36–0.46" },
    { name: "Hemoglobin (Male)", ref: "13.5–17.5 g/dL", si: "135–175 g/L" },
    { name: "Hemoglobin (Female)", ref: "12.0–16.0 g/dL", si: "120–160 g/L" },
    { name: "Mean corpuscular hemoglobin (MCH)", ref: "25–35 pg/cell", si: "0.39–0.54 fmol/cell" },
    { name: "Mean corpuscular hemoglobin conc. (MCHC)", ref: "31%–36% Hb/cell", si: "4.8–5.6 mmol Hb/L" },
    { name: "Mean corpuscular volume (MCV)", ref: "80–100 µm³", si: "80–100 fL" },
    { name: "Leukocyte count (WBC)", ref: "4,500–11,000/mm³", si: "4.5–11.0 × 10⁹/L" },
    { name: "  Neutrophils, segmented", ref: "54%–62%", si: "0.54–0.62", indent: true },
    { name: "  Neutrophils, bands", ref: "3%–5%", si: "0.03–0.05", indent: true },
    { name: "  Lymphocytes", ref: "25%–33%", si: "0.25–0.33", indent: true },
    { name: "  Monocytes", ref: "3%–7%", si: "0.03–0.07", indent: true },
    { name: "  Eosinophils", ref: "1%–3%", si: "0.01–0.03", indent: true },
    { name: "  Basophils", ref: "0%–0.75%", si: "0.00–0.0075", indent: true },
    { name: "Platelet count", ref: "150,000–400,000/mm³", si: "150–400 × 10⁹/L" },
    { name: "Reticulocyte count", ref: "0.5%–1.5%", si: "0.005–0.015" },
    { name: "CD4+ T-lymphocyte count", ref: "≥500/mm³", si: "≥0.5 × 10⁹/L" },
    {
      type: "header",
      name: "Erythrocyte Studies"
    },
    { name: "ESR, Westergren (Male)", ref: "0–15 mm/h", si: "0–15 mm/h" },
    { name: "ESR, Westergren (Female)", ref: "0–20 mm/h", si: "0–20 mm/h" },
    { name: "Hemoglobin A1c", ref: "≤6%", si: "≤42 mmol/mol" },
    { name: "Hemoglobin, plasma", ref: "<4 mg/dL", si: "<0.62 mmol/L" },
    {
      type: "header",
      name: "Volume"
    },
    { name: "Plasma (Male)", ref: "25–43 mL/kg", si: "0.025–0.043 L/kg" },
    { name: "Plasma (Female)", ref: "28–45 mL/kg", si: "0.028–0.045 L/kg" },
    { name: "Red cell (Male)", ref: "20–36 mL/kg", si: "0.020–0.036 L/kg" },
    { name: "Red cell (Female)", ref: "19–31 mL/kg", si: "0.019–0.031 L/kg" },
    {
      type: "header",
      name: "Coagulation"
    },
    { name: "Partial thromboplastin time (PTT/aPTT)", ref: "25–40 seconds", si: "25–40 seconds" },
    { name: "Prothrombin time (PT)", ref: "11–15 seconds", si: "11–15 seconds" },
    { name: "D-Dimer", ref: "≤250 ng/mL", si: "≤1.4 nmol/L" }
  ],

  urine: [
    {
      type: "header",
      name: "Urine"
    },
    { name: "Calcium", ref: "100–300 mg/24 h", si: "2.5–7.5 mmol/24 h" },
    { name: "Creatinine clearance (Male)", ref: "97–137 mL/min", si: "97–137 mL/min" },
    { name: "Creatinine clearance (Female)", ref: "88–128 mL/min", si: "88–128 mL/min" },
    { name: "Osmolality", ref: "50–1200 mOsmol/kg H₂O", si: "50–1200 mOsmol/kg H₂O" },
    { name: "Oxalate", ref: "8–40 µg/mL", si: "90–445 µmol/L" },
    { name: "Proteins, total", ref: "<150 mg/24 h", si: "<0.15 g/24 h" },
    { name: "17-Hydroxycorticosteroids (Male)", ref: "3.0–10.0 mg/24 h", si: "8.2–27.6 µmol/24 h" },
    { name: "17-Hydroxycorticosteroids (Female)", ref: "2.0–8.0 mg/24 h", si: "5.5–22.0 µmol/24 h" },
    { name: "17-Ketosteroids, total (Male)", ref: "8–20 mg/24 h", si: "28–70 µmol/24 h" },
    { name: "17-Ketosteroids, total (Female)", ref: "6–15 mg/24 h", si: "21–52 µmol/24 h" },
    {
      type: "header",
      name: "Body Mass Index (BMI)"
    },
    { name: "BMI (Adult)", ref: "19–25 kg/m²", si: "19–25 kg/m²" }
  ]
};
