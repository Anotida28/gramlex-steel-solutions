// Three sample documents that ship with every Gramlex delivery, drawn in HTML so they
// stay crisp at any size. All figures are illustrative and every sheet is stamped SAMPLE.
// Swap in photos or scans of real (redacted) paperwork when the client supplies them.

const MillCertificate = () => (
  <div className="proof-doc" aria-hidden="true">
    <div className="proof-doc-head">
      <span>Mill test certificate</span>
      <span>EN 10204 · 3.1</span>
    </div>
    <dl className="proof-doc-meta">
      <div><dt>Grade</dt><dd>B500B</dd></div>
      <div><dt>Cert no.</dt><dd>MTC-24-0917</dd></div>
    </dl>
    <table className="proof-doc-table">
      <thead>
        <tr><th>Heat</th><th>Ø</th><th>Re MPa</th><th>Rm MPa</th><th>A %</th></tr>
      </thead>
      <tbody>
        <tr><td>H41207</td><td>16</td><td>548</td><td>652</td><td>14.1</td></tr>
        <tr><td>H41209</td><td>20</td><td>541</td><td>648</td><td>13.6</td></tr>
        <tr><td>H41215</td><td>25</td><td>537</td><td>641</td><td>13.9</td></tr>
      </tbody>
    </table>
    <span className="proof-doc-stamp">Sample</span>
  </div>
);

const QaPack = () => (
  <div className="proof-doc" aria-hidden="true">
    <div className="proof-doc-head">
      <span>QA pack</span>
      <span>GWH-01 · Pour 14</span>
    </div>
    <ul className="proof-doc-checks">
      <li>Bar schedule rev C checked</li>
      <li>Mill certificates attached (3)</li>
      <li>Cover and spacing inspected</li>
      <li>Laps and anchorage verified</li>
      <li>Engineer sign-off</li>
    </ul>
    <div className="proof-doc-sign">
      <span>Inspected</span>
      <span className="proof-doc-signature">T. Moyo</span>
    </div>
    <span className="proof-doc-stamp">Sample</span>
  </div>
);

const DeliveryNote = () => (
  <div className="proof-doc" aria-hidden="true">
    <div className="proof-doc-head">
      <span>Delivery note</span>
      <span>DN-2481</span>
    </div>
    <table className="proof-doc-table">
      <thead>
        <tr><th>Mark</th><th>Ø</th><th>Qty</th><th>kg</th></tr>
      </thead>
      <tbody>
        <tr><td>B03</td><td>16</td><td>240</td><td>1,516</td></tr>
        <tr><td>B07</td><td>20</td><td>96</td><td>2,841</td></tr>
        <tr><td>C12</td><td>12</td><td>410</td><td>1,093</td></tr>
      </tbody>
      <tfoot>
        <tr><td colSpan={3}>Total</td><td>5,450</td></tr>
      </tfoot>
    </table>
    <div className="proof-doc-sign">
      <span>Received</span>
      <span className="proof-doc-line" />
    </div>
    <span className="proof-doc-stamp">Sample</span>
  </div>
);

const documents = [
  {
    id: "mill-certificate",
    Doc: MillCertificate,
    title: "Mill certificate",
    caption: "Every bar traces back to the heat it was rolled from. The certificates travel with the steel.",
  },
  {
    id: "qa-pack",
    Doc: QaPack,
    title: "QA pack",
    caption: "Schedule checked, cover inspected and signed off before the pour, ready for your engineer.",
  },
  {
    id: "delivery-note",
    Doc: DeliveryNote,
    title: "Delivery note",
    caption: "Bundles are tagged by mark, so the delivery note matches what's on the truck.",
  },
];

export function ProofDocs() {
  return (
    <div className="proof-docs">
      {documents.map(({ id, Doc, title, caption }) => (
        <figure key={id} className="proof-docs-item">
          <Doc />
          <figcaption>
            <span className="proof-docs-title">{title}</span>
            {caption}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
