import Image from 'next/image';
import Footer from './components/footer/Footer';
import { lang } from './components/lang/en';
import NavBar from './components/NavBar';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <section class="page-inner-width section-box">
        <div class="order">
          <div class="">
            <h2 class="order-body-title font1">Tropical cooldown</h2>
            <p class="order-body-text">
              Kick back with our vibrant new Frozen <br />
              Pineapple Passion fruit Lemonade Starbucks <br />
              Refreshers &reg; beverage.
            </p>
            <button class="custom-btn order-now">Order now</button>
          </div>
        </div>

        <div class="order">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84927.jpg "
            alt=""
          />
        </div>
      </section>

      <section class="page-inner-width section-box">
        <div class="order">
          <img
            src="	https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84954.jpg"
            alt=""
          />
        </div>

        <div class="order bg1">
          <div class="">
            <h2 class="order-body-title font1">Now 50% off cold drinks</h2>
            <p class="order-body-text">
              WinsDays just got even cooler for Starbucks® <br />
              Rewards members. Now enjoy 50% off a cold <br />
              drink on Wednesdays after 12 p.m.*
            </p>
            <button class="custom-btn order-now">Join for free</button>
          </div>
        </div>
      </section>

      <section class="page-inner-width section-box">
        <div class="order bg2">
          <div class="">
            <h2 class="order-body-title font1">Summer to the max</h2>
            <p class="order-body-text">
              Go for a Mocha Cookie Crumble or Caramel <br />
              Ribbon Crunch Frappuccino® blended <br />
              beverage.
            </p>
            <button class="custom-btn order-now">Join for free </button>
          </div>
        </div>
        <div class="order">
          <img
            src="	https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84930.jpg"
            alt=""
          />
        </div>
      </section>

      <section class="page-inner-width section-box">
        <div class="order">
          <img
            src="	https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84933.jpg"
            alt=""
          />
        </div>
        <div class="order bg1">
          <div class="">
            <h2 class="order-body-title font1">Follow the buzz</h2>
            <p class="order-body-text">
              This adorable Bumblebee Cake Pop dipped in <br />
              chocolatey icing has landed.
            </p>
            <button class="custom-btn order-now">Order now</button>
          </div>
        </div>
      </section>

      <section class="section-box page-inner-width">
        <div class="order  bg3">
          <div>
            <h2 class="order-body-title be-kind">Be kind to your mind</h2>
            <p class="order-body-text">
              We teamed up with Head space to bring you four free <br />{' '}
              meditations on kindness, plus a special offer for <br />{' '}
              Starbucks® Rewards members—discover more
              <br /> mindfulness with a two-month free membership.**
            </p>
            <button class="custom-btn order-now">Listen now</button>
          </div>
        </div>
        <div class="order">
          <img
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-84617.jpg"
            alt=""
          />
        </div>
      </section>
      <section class="pre-footer">
        <p>{lang.preFooterText1}</p>
        <p>{lang.preFooterText2}</p>
      </section>
      <Footer />
    </main>
  );
}
