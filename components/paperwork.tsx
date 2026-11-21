// Paperwork illustrations: the contract packet in the hero, the Key Dates
// sheet for Launch5 and the client folder for Relationships. Built from
// plain HTML so the "typed" text stays crisp and reads like real forms.
// Every name, address and figure here is invented.

import { Dial } from "@/components/dial";

function Signature() {
  return (
    <svg className="sig" viewBox="0 0 220 60" aria-hidden>
      <path
        d="M6 42c10-22 18-30 22-24s-8 26-2 26 14-30 20-28-4 22 2 22 10-14 16-16 2 12 8 12 12-18 20-18-6 18 2 18 18-12 26-14 10 6 18 4 30-10 70-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ContractPacket() {
  return (
    <div className="packet" role="img" aria-label="A purchase contract with key terms highlighted, sign-here flags and the Better1440 dial as a seal">
      <div className="sheet sheet-back2" aria-hidden />
      <div className="sheet sheet-back1" aria-hidden />
      <div className="sheet sheet-top" aria-hidden>
        <p className="doc-title">Residential Contract of Sale</p>
        <p className="doc-sub">Page 1 of 14</p>

        <ol className="clauses">
          <li>
            <span className="cl-label">Property.</span> 14 Maple Court, Ellicott City
          </li>
          <li>
            <span className="cl-label">Purchase price.</span> <mark>$485,000</mark>
          </li>
          <li>
            <span className="cl-label">Deposit.</span> $10,000 within <mark>5 days</mark>
          </li>
          <li>
            <span className="cl-label">Financing.</span> Conventional, <mark>80% LTV</mark>
          </li>
          <li>
            <span className="cl-label">Home inspection.</span> <mark className="mark-warn">21 days</mark>
            <span className="margin-note">long</span>
          </li>
          <li>
            <span className="cl-label">Settlement.</span> on or before <mark>Nov 17</mark>
          </li>
        </ol>

        <div className="lines" />

        <div className="sign-row">
          <div className="sign-line">
            <Signature />
            <span>Buyer</span>
          </div>
          <div className="sign-line">
            <span className="sign-empty" />
            <span>Seller</span>
          </div>
        </div>

        <span className="flag flag-1">Sign here</span>
        <span className="flag flag-2">Initial</span>
      </div>
      <div className="seal">
        <Dial />
      </div>
    </div>
  );
}

const DATES: { what: string; when: string; done: boolean }[] = [
  { what: "Paperwork signed", when: "Oct 1", done: true },
  { what: "Contract ratified", when: "Oct 3", done: true },
  { what: "Earnest money deposit", when: "Oct 8", done: true },
  { what: "Home inspection", when: "Oct 13", done: true },
  { what: "Appraisal", when: "Oct 24", done: false },
  { what: "Financing commitment", when: "Nov 2", done: false },
  { what: "Settlement", when: "Nov 17", done: false },
];

export function KeyDatesSheet() {
  return (
    <figure className="art art-dates">
      <div className="clip" aria-hidden />
      <div className="paper dates-paper">
        <p className="paper-title">Key Dates</p>
        <p className="paper-sub">14 Maple Court</p>
        <ul className="dates">
          {DATES.map((d) => (
            <li key={d.what} className={d.done ? "is-done" : d.what === "Appraisal" ? "is-next" : undefined}>
              <span className="box" aria-hidden />
              <span className="dates-what">{d.what}</span>
              <span className="dates-when">{d.when}</span>
            </li>
          ))}
        </ul>
        <p className="paper-foot">Confirmation sent to lender and title</p>
      </div>
      <figcaption>Video coming soon</figcaption>
    </figure>
  );
}

export function ClientFolder() {
  return (
    <figure className="art art-folder">
      <div className="folder">
        <span className="folder-tab">Miller household</span>
        <div className="card">
          <p className="card-title">Reach out today</p>
          <ul className="card-list">
            <li>
              <strong>Home anniversary in 3 days.</strong> Bought 12 Oak Ridge Road, Nov 2021.
            </li>
            <li>
              <strong>Emma turns 18 in March.</strong> First apartment search?
            </li>
          </ul>
          <p className="card-draft">“Hi Dana, hard to believe it&rsquo;s been five years on Oak Ridge…”</p>
        </div>
      </div>
      <figcaption>Video coming soon</figcaption>
    </figure>
  );
}
