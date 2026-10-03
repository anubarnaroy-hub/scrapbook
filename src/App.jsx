import { useState } from "react";

function Photo({ src, alt, className = "", caption = "" }) {
  return (
    <div className={`scrap-photo ${className}`}>
      <div className="photo-paper">
        <img src={src} alt={alt} />
      </div>

      {caption && (
        <p className="photo-caption">
          {caption}
        </p>
      )}
    </div>
  );
}

function App() {
  const [page, setPage] = useState(0);
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);

  const correctPassword = "satyam";

  const unlockMagazine = () => {
    if (password === correctPassword) {
      setUnlocked(true);
      setWrongPassword(false);
    } else {
      setWrongPassword(true);
    }
  };

  /* =========================
     PASSWORD PAGE
  ========================= */

  if (!unlocked) {
    return (
      <div className="password-page">

        <div className="password-decoration decoration-one">
          ✦
        </div>

        <div className="password-decoration decoration-two">
          ♡
        </div>

        <div className="password-decoration decoration-three">
          ✿
        </div>

        <div className="password-card">

          <p className="issue-number">
            4th Oct
          </p>

          <div className="password-heart">
            ♡
          </div>

          <h1>
            This is
            <br />
            for youuu
          </h1>

          <p className="password-subtitle">
            A tiny scrap
            <br />
            especially for you...
          </p>

          <div className="password-line"></div>

          <p className="password-hint">
            This little corner is private...
            <br />
            enter the code
          </p>

          <input
            type="password"
            placeholder="secret code"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setWrongPassword(false);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                unlockMagazine();
              }
            }}
          />

          <button
            className="unlock-button"
            onClick={unlockMagazine}
          >
            Open ♡
          </button>

          {wrongPassword && (
            <p className="wrong-password">
              Hmm... that's not the secret code 🥹
            </p>
          )}

          <p className="password-footer">
            issue no. 01 · just us
          </p>

        </div>
      </div>
    );
  }

  /* =========================
     PAGE 1 — COVER
  ========================= */

  if (page === 0) {
    return (
      <div className="magazine-page cover-page">
        <div className="page-inner cover-inner">

          <div className="cover-top">
            <span>
              TO MY LOVEEE
            </span>

            <span>
              04 · 2026
            </span>
          </div>

          <div className="cover-title-area">

            <p className="tiny-label">
              A COLLECTION OF
            </p>

            <h1>
              A LITTLE 
              <br />
              SCRAP
              <br />
              FOR YOUUU...
            </h1>

            <p className="cover-subtitle">
              memories · chaos · love · us
            </p>

          </div>

         

          <div className="cover-note">
            <span>♡</span>
            Did I 
            <br />
            propose you
            <br />
            on 4th October?? Heheheee...
          </div>

          <div className="cover-doodle doodle-flower">
            ✿
          </div>

          <div className="cover-doodle doodle-star">
            ✦
          </div>

          <div className="cover-doodle doodle-star-two">
            ✧
          </div>

          <button
            className="next-button cover-next"
            onClick={() => setPage(1)}
          >
            START READING →
          </button>

        </div>
      </div>
    );
  }

  /* =========================
     PAGE 2 — BEGINNING
  ========================= */

  if (page === 1) {
    return (
      <div className="magazine-page beginning-page">

        <div className="page-inner collage-page">

          <div className="page-header">
            <span>02</span>
            <span>04. 2026</span>
          </div>

          <div className="chapter-title beginning-heading">

            <p>
              October 2025
            </p>

            <h1>
              IS THIS REAL??
            </h1>

            <h2>
              ARE YOU MY BOYFRIEND? Hehehe... 👉🏻👈🏻
            </h2>

          </div>

          <div className="beginning-canvas">

            <Photo
              src="/images/Beginning1.jpeg"
              alt="photo"
              className="begin-photo-one"
              caption="28 Oct Nehru Park ♡"
            />

            <Photo
              src="/images/Beginning2.jpeg"
              alt="photo"
              className="begin-photo-two"
              caption="Cute lag rha hai idhar..."
            />

            <Photo
              src="/images/Beggining3.jpeg"
              alt="Early memory"
              className="begin-photo-three"
              caption="and then there were more..."
            />

            <div className="beginning-paper">

              <span className="paper-number">
                01
              </span>

              <h3>
                Jab tune mujhe pehli baar
                <br />
                tere baare me describe krne bola tha, I remember I wrote thizzz for you...
              </h3>

              <p>
                You’re honestly a wholesome… I genuinely enjoy listening to your endless bak bak... You carry maturity,, yet there’s a sweet childish side of you... Kindness literally runs in your veins... Football isn’t really my thing, but one thing I surely know is that you’re one of the biggest Ronaldo fans out there... And of course,,, the bond you share with Leo is something that reminds me of my Sheru... I always thought I was the ultimate tmkoc fan,,, but you turned out to be an even bigger one... You have this soft corner for poetic things... and the best part is you know how to present yourself perfectly... And ladkiyo ke liye gifts me itna bhi kharcha mt karo😂... Your suggestions mean a lot... I know I can't stop myself from eating outside food, but I'm telling you to try to cut down on eating too many chaats at Radhika😂... 
I was a text person until I started talking with you...
              </p>


              <div className="paper-line"></div>

              <p className="handwritten">
                Then tera mujhse der raat tak call pe "as a friend" baat krna,
                <br />
                tere hints drop krna and all the memos 
                <br/>
                bohottt yaad aate hai... ♡
              </p>

            </div>

            <div className="washi beginning-washi"></div>

            <div className="tiny-doodle beginning-doodle">
              ✦
            </div>

          </div>

          <div className="page-footer-label">
            THE START OF SOMETHING SPECIAL
            <span>✦</span>
            CHAPTER 01
          </div>

          <Navigation
            page={2}
            back={() => setPage(0)}
            next={() => setPage(2)}
          />

        </div>
      </div>
    );
  }

  /* =========================
     PAGE 3 — MEMORY WALL
  ========================= */

  if (page === 2) {
    return (
      <div className="magazine-page memories-page">

        <div className="page-inner collage-page">

          <div className="page-header">
            <span>03</span>
            <span>OUR MEMORIES</span>
          </div>

          <div className="chapter-title memories-heading">

            <p>
              04 . 10 . 26
            </p>

            <h1>
              How many memories
              <br />
             did we make??
            </h1>

            <span>
              the chaos, the laughter & everything in between ♡
            </span>

          </div>

          <div className="memory-canvas">

            <Photo
              src="/images/Memory.jpeg"
              alt="Memory 1"
              className="memory-one"
              caption="Both Cutieeees..."
            />

            <Photo
              src="/images/Memory2.jpeg"
              alt="Memory 2"
              className="memory-two"
              caption="Sorry for that day 😭..."
            />

            <Photo
              src="/images/Memory3.jpeg"
              alt="Memory 3"
              className="memory-three"
              caption="Hihii..."
            />

            <Photo
              src="/images/Memory4.jpeg"
              alt="Memory 4"
              className="memory-four"
              caption = "One of my favs..."
            />

            <Photo
              src="/images/Memory5.jpeg"
              alt="Memory 5"
              className="memory-five"
              caption = "I miss meeting you in the Boys' Mess... "
            />

            <div className="memory-note">

              <div className="note-pin">
                ✦
              </div>

              <h3>
                DEAR LOVE,
              </h3>

              <p>
                I never ever thought ki mujhe itna acchaaa ladka apni life me milega...
              </p>

              <p>
                Aisa lgta hai jaise tere jaisa care krne wala, pyaar krne wala exist hi nahi krta duniya me...
               Haan iss baat pe I'm so sooo blessed to have you in my life... 
              </p>

              <p className="note-last">
                Every moment
                <br />
                with you feels special
              </p>

            </div>

            <div className="memory-star">
              ✦
            </div>

          </div>

          <Navigation
            page={3}
            back={() => setPage(1)}
            next={() => setPage(3)}
          />

        </div>
      </div>
    );
  }

  /* =========================
     PAGE 4 — LETTER
  ========================= */

  if (page === 3) {
    return (
      <div className="magazine-page letter-page-main">

        <div className="page-inner collage-page">

          <div className="page-header">
            <span>04</span>
            <span>A LETTER</span>
          </div>

          <div className="letter-canvas">

            <div className="letter-title">

              <p>
                SOMETHING I WANTED
                <br />
                YOU TO KNOW
              </p>

              <h1>
                To my
                <br />
                favourite
                <br />
                person.
              </h1>

              <div className="letter-flower">
                ✿
              </div>

            </div>

            <div className="letter-sheet">

              <p className="dear">
                Baby babyyyy,
              </p>

              <p>
                I don't think I say this enough, but I'm really
                grateful that life somehow brought us together...
              </p>

              <p>
                We've had so many random conversations,
                ridiculous moments, laughs that made absolutely
                no sense and memories that I know I'll remember
                for a very long time... Tune jitna khyaal rakha utna aajtak mera khyaal kisine nhi rkha...
              </p>

              <p>
                Tu pehle mujhse class ke notes maangta tha,,, abhi dekhte hi dekhte tune mera poora haath hi maang liya... hehehe...
              </p>

              <p className="big-quote">
                You are the
                <br />
                Bestttt...
              </p>

              <p>
                Tujhe kuch bhi btane me ya share krne me mujhe mujhe accha lgta hai...
              </p>

              <p>
                Thank you so muchhh babyyyy...
              </p>

              <p className="love-line">
                I Lovee youuuu... ♡
              </p>

              <div className="signature">
                So
                <br />
                <strong>Sooo muchhh.... ♡</strong>
              </div>

            </div>

            <Photo
              src="/images/letter1.jpeg"
              alt="Us"
              className="letter-photo-one"
              caption= "That was the besttt Saraswati Puja for meeee..."
            />

            <Photo
              src="/images/letter2.jpeg"
              alt="Us"
              className="letter-photo-two"
              caption =" The internship day I can never forget... Walking with you at GU makes it more precious"
            />

            <Photo
              src="/images/letter3.jpeg"
              alt="Us"
              className="letter-photo-three"
              caption="The Sunset and Youu...❤️"
            />

            <div className="letter-tape"></div>

          </div>

          <Navigation
            page={4}
            back={() => setPage(2)}
            next={() => setPage(4)}
          />

        </div>
      </div>
    );
  }

  /* =========================
     PAGE 5 — END
  ========================= */

  return (
    <div className="magazine-page ending-page">

      <div className="page-inner collage-page">

        <div className="ending-content">

          <p className="ending-small">
            THE END... FOR NOW
          </p>

          <h1>
            Will
            <br />
            Continue later... hehehe
          </h1>

          <p className="ending-subtitle">
            Mera cutuuu...
          </p>

          <div className="ending-canvas">

  <Photo
    src="/images/final1.jpeg"
    alt="Final memory"
    className="ending-photo-one"
    caption = "Favv"
  />

  <Photo
    src="/images/final2.jpeg"
    alt="Final memory"
    className="ending-photo-two"
    caption = "qalaa firse chale?? hihihi..."
  />

  <Photo
    src="/images/final3.jpeg"
    alt="Our favourite memory"
    className="ending-main-photo"
  />

  <Photo
    src="/images/final4.jpeg"
    alt="Final memory"
    className="ending-photo-three"
    caption = "dekho toh smileee..."
  />

  <Photo
    src="/images/final5.jpeg"
    alt="One more favourite memory"
    className="ending-photo-four"
    
  />

  <div className="ending-tape"></div>

</div>

          <div className="ending-message">

            <p>
              Thank you for being part of so many
              of my favourite memories.
            </p>

            <div className="hearts">
              ♡ ✦ ♡
            </div>

          </div>

          <p className="final-line">
            until the next chapter...
          </p>

        </div>

        <Navigation
          page={5}
          back={() => setPage(3)}
          next={() => setPage(0)}
          last
        />

      </div>
    </div>
  );
}


/* =========================
   NAVIGATION
========================= */

function Navigation({ page, back, next, last = false }) {
  return (
    <div className="page-navigation">

      <button onClick={back}>
        ← BACK
      </button>

      <span>
        {String(page).padStart(2, "0")} / 05
      </span>

      <button onClick={next}>
        {last ? "COVER ↻" : "NEXT →"}
      </button>

    </div>
  );
}

export default App;