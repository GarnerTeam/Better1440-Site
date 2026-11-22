import { APPS, LEGAL, MORE, STATUS_LABEL, type App } from "@/lib";
import { ClientFolder, ContractPacket, KeyDatesSheet } from "@/components/paperwork";
import { VideoSlot } from "@/components/video-slot";
import { WaitlistForm } from "@/components/waitlist-form";

export default function Home() {
  return (
    <>
      <a className="skip" href="#apps">Skip to the apps</a>
      <header className="hero">
        <nav className="nav wrap">
          <a className="logo" href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/icon-1440-192.png" alt="" width={32} height={32} />
            Better1440
          </a>
          <details className="signin-menu">
            <summary className="nav-link">Sign in</summary>
            <div className="signin-panel" role="menu" aria-label="Sign in to">
              <a role="menuitem" href={LEGAL.signIn}>
                <strong>Analyze</strong>
                <span>Sign in or start free</span>
              </a>
              <a role="menuitem" href="https://launch5.better1440.com">
                <strong>Launch5</strong>
                <span>Beta testers sign in</span>
              </a>
              <a role="menuitem" href="#relationships">
                <strong>Relationships</strong>
                <span>Not open yet. Join the waiting list</span>
              </a>
            </div>
          </details>
        </nav>
        <div className="hero-body wrap">
          <div className="hero-copy">
            <h1>There are 1,440 minutes in every day.</h1>
            <p className="lede">
              Better1440 makes apps for real estate agents that hand some of them back: read offers in minutes, manage every
              transaction from the first signature to closing day, and keep up with the people who send you business.
            </p>
            <a className="btn btn-mint" href="#apps">See the apps</a>
          </div>
          <div className="hero-art">
            <ContractPacket />
          </div>
        </div>
      </header>

      <main id="apps" className="apps">
        <nav className="lineup wrap" aria-label="The three apps">
          {APPS.map((app) => (
            <a key={app.id} href={`#${app.id}`} className={`lineup-card lineup-${app.status}`}>
              <span className="lineup-name">{app.name}</span>
              <span className={`status status-${app.status}`}>{STATUS_LABEL[app.status]}</span>
              <span className="lineup-short">{app.short}</span>
              <span className="lineup-go">See {app.name}</span>
            </a>
          ))}
        </nav>

        {APPS.map((app, i) => (
          <AppRow key={app.id} app={app} flip={i % 2 === 1} shade={i % 2 === 0 ? "paper" : "fog"} />
        ))}

        <section className="more wrap" aria-labelledby="more-title">
          <div className="more-inner">
            <h2 id="more-title">Also in the works</h2>
            <ul>
              {MORE.map((m) => (
                <li key={m.name}>
                  <strong>{m.name}</strong> {m.body}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-row">
          <span>© {new Date().getFullYear()} Better1440</span>
          <nav aria-label="Legal">
            <a href={LEGAL.terms}>Terms</a>
            <a href={LEGAL.privacy}>Privacy</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

function AppRow({ app, flip, shade }: { app: App; flip: boolean; shade: "paper" | "fog" }) {
  return (
    <section id={app.id} className={`band band-${shade}`} aria-labelledby={`${app.id}-name`}>
      <div className="wrap band-head" aria-hidden>
        <span className="band-tab">{app.name}</span>
      </div>
      <div className={`app wrap${flip ? " app-flip" : ""}`}>
      <div className="app-media">
        {app.video ? (
          <VideoSlot video={app.video} appName={app.name} />
        ) : app.id === "launch5" ? (
          <KeyDatesSheet />
        ) : app.id === "relationships" ? (
          <ClientFolder />
        ) : (
          <VideoSlot video={null} appName={app.name} />
        )}
      </div>
      <div className="app-copy">
        <div className="app-title">
          <h2 id={`${app.id}-name`}>{app.name}</h2>
          <span className={`status status-${app.status}`}>{STATUS_LABEL[app.status]}</span>
        </div>
        <p className="app-headline">{app.headline}</p>
        <p className="app-body">{app.body}</p>
        <ul className="points">
          {app.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
        {app.price && <p className="price">{app.price}</p>}
        {app.waitlist && <WaitlistForm appName={app.name} {...app.waitlist} />}
        {(app.primary || app.secondary) && (
          <div className="actions">
            {app.primary && <a className="btn btn-primary" href={app.primary.href}>{app.primary.label}</a>}
            {app.secondary && <a className="text-link" href={app.secondary.href}>{app.secondary.label}</a>}
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
