// Stock and fabrication table on the home page.
// Mass per metre is the nominal figure for steel at 7,850 kg/m³ (suppliers may round
// the third decimal differently, e.g. Y16 1.579 or 1.580). Shape codes follow
// SANS 282 (20 straight, 37 single 90° bend, 60 closed link; 99 = any other shape,
// scheduled with a sketch). Lengths and lead times are DEMO values: confirm them
// with the sales team before launch.
export const barStock = [
  { dia: "Y10", massPerM: "0.617", lengths: "6 · 12 m", shapes: "20 · 37 · 60", leadTime: "24 h" },
  { dia: "Y12", massPerM: "0.888", lengths: "6 · 12 m", shapes: "20 · 37 · 60", leadTime: "24 h" },
  { dia: "Y16", massPerM: "1.579", lengths: "6 · 12 m", shapes: "20 · 37 · 60", leadTime: "48 h" },
  { dia: "Y20", massPerM: "2.466", lengths: "12 m", shapes: "20 · 37", leadTime: "48 h" },
  { dia: "Y25", massPerM: "3.854", lengths: "12 m", shapes: "20 · 37", leadTime: "72 h" },
  { dia: "Y32", massPerM: "6.313", lengths: "12 m", shapes: "20 · 37", leadTime: "72 h" },
];

export const meshStock = "Mesh: Ref 193, 245, 311 and 395 sheets, 2.4 × 6.0 m.";
