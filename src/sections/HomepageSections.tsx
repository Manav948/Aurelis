import { ArrowDownRight, ArrowRight, ArrowUpRight, Play, Plus } from 'lucide-react';

const products = [
  { name: 'Studio One', category: 'Wireless headphones', price: '$249', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=90', tone: 'warm' },
  { name: 'Air Buds Pro', category: 'True wireless audio', price: '$179', image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=900&q=90', tone: 'cool' },
  { name: 'Studio Max', category: 'Over-ear headphones', price: '$329', image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=90', tone: 'light' },
];

const journal = [
  { date: 'FIELD NOTES · 04.18.26', title: 'The art of hearing more', image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1000&q=85' },
  { date: 'DESIGN JOURNAL · 03.29.26', title: 'Made for the in-between', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=85' },
];

export function HomepageSections() {
  return (
    <>
      <section className="sound-story" id="features">
        <div className="sound-story__copy">
          <p className="section-kicker"><span /> THE DETAILS MAKE THE DIFFERENCE</p>
          <h2>Powerful sound.<br /><em>Anywhere.</em></h2>
          <p className="sound-story__description">From your first track of the morning to the last train home, hear every layer exactly as it was meant to be heard.</p>
          <ul className="sound-story__features">
            <li><span>01</span><div><strong>Adaptive noise control</strong><small>Your world, on your terms.</small></div><ArrowUpRight size={17} /></li>
            <li><span>02</span><div><strong>Balanced by design</strong><small>Rich detail. Natural clarity.</small></div><ArrowUpRight size={17} /></li>
            <li><span>03</span><div><strong>All-day listening</strong><small>Up to 40 hours of battery life.</small></div><ArrowUpRight size={17} /></li>
          </ul>
          <a className="editorial-link" href="#collections">Explore the technology <ArrowRight size={16} /></a>
        </div>
        <div className="sound-story__visual">
          <div className="sound-story__halo" />
          <img src="https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=1300&q=90" alt="Minimal wireless earbuds and charging case" loading="lazy" />
          <div className="sound-story__play"><Play size={16} fill="currentColor" /></div>
          <span className="sound-story__visual-caption">AURELIS AUDIO LAB · 001</span>
          <div className="sound-story__spec"><strong>24 bit</strong><span>HIGH-RESOLUTION AUDIO</span></div>
        </div>
      </section>

      <section className="collection-section" id="collections">
        <div className="section-heading">
          <div><p className="section-kicker"><span /> CURATED FOR YOUR EVERYDAY</p><h2>Elite tech <em>collection</em></h2></div>
          <a className="editorial-link" href="#shop">View all products <ArrowRight size={16} /></a>
        </div>
        <div className="product-grid" id="shop">
          {products.map((product, index) => (
            <article className={`product-card product-card--${product.tone}`} key={product.name}>
              <div className="product-card__image">
                <span className="product-card__index">0{index + 1} / AURELIS</span>
                <button className="product-card__add" type="button" aria-label={`Add ${product.name} to bag`}><Plus size={18} /></button>
                <img src={product.image} alt={product.name} loading="lazy" />
                <span className="product-card__quick">DISCOVER PRODUCT <ArrowUpRight size={13} /></span>
              </div>
              <div className="product-card__details"><div><h3>{product.name}</h3><p>{product.category}</p></div><span>{product.price}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="manifesto-section" id="about">
        <div className="manifesto-section__image" role="img" aria-label="Warm studio listening atmosphere" />
        <div className="manifesto-section__content">
          <p className="section-kicker"><span /> OUR PHILOSOPHY</p>
          <h2>Less noise.<br /><em>More meaning.</em></h2>
          <p>We believe the best technology doesn't ask for your attention. It gives it back. Thoughtful materials, considered form, and sound that lets you feel more of what matters.</p>
          <a className="editorial-link editorial-link--light" href="#journal">The Aurelis point of view <ArrowRight size={16} /></a>
          <span className="manifesto-section__signature">DESIGNED FOR THE WAY YOU LISTEN.</span>
        </div>
      </section>

      <section className="testimonial-section">
        <p className="section-kicker"><span /> LISTENERS, NOT JUST USERS</p>
        <div className="testimonial-section__quote-mark">“</div>
        <blockquote>It feels like hearing my favorite album <em>for the first time again.</em></blockquote>
        <div className="testimonial-section__person"><span className="testimonial-section__avatar">AM</span><div><strong>Alex Morgan</strong><span>Independent music producer</span></div><div className="testimonial-section__rating">★★★★★</div></div>
      </section>

      <section className="journal-section" id="journal">
        <div className="section-heading">
          <div><p className="section-kicker"><span /> STORIES FROM OUR WORLD</p><h2>In good <em>company.</em></h2></div>
          <a className="editorial-link" href="#journal">Visit the journal <ArrowRight size={16} /></a>
        </div>
        <div className="journal-grid">
          {journal.map((story, index) => (
            <a className="journal-card" href="#journal" key={story.title}>
              <div className="journal-card__image"><img src={story.image} alt="" loading="lazy" /><span>0{index + 1} <ArrowUpRight size={15} /></span></div>
              <p>{story.date}</p><h3>{story.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brand"><a href="#home" className="footer-wordmark">AURELIS<span>.</span></a><p>Sound that brings you closer.</p><form className="footer-signup" onSubmit={(event) => event.preventDefault()}><label htmlFor="footer-email">Notes from our world. Nothing more.</label><div><input id="footer-email" type="email" placeholder="Your email address" aria-label="Your email address" /><button type="submit" aria-label="Subscribe"><ArrowRight size={17} /></button></div></form></div>
          <div className="site-footer__links"><div><strong>EXPLORE</strong><a href="#shop">Shop all</a><a href="#collections">Collections</a><a href="#about">Our story</a><a href="#journal">Journal</a></div><div><strong>HERE TO HELP</strong><a href="#support">Support</a><a href="#shipping">Shipping & returns</a><a href="#warranty">Warranty</a><a href="#contact">Contact</a></div></div>
        </div>
        <div className="site-footer__bottom"><span>© 2026 AURELIS AUDIO</span><span>DESIGNED TO BE HEARD.</span><div><a href="#privacy">PRIVACY</a><a href="#terms">TERMS</a><a href="#instagram">INSTAGRAM ↗</a></div></div>
      </footer>
    </>
  );
}
