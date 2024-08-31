import "./Avax.css";
const Merlin = () => {
  return (
    <>
      <div className="merlin-bg">
        <div className="container">
          <div className="merlin-wrapper">
            <div className="header">
              <img src="src\assets\img\logo-avax.png" alt="" />
              <button className="wallet-button">Wallet</button>
            </div>
            <div className="heading">
              <img
                className="merlin-text-logo"
                src="src\assets\img\avax-text-logo.png"
                alt=""
              />
            </div>
            <div className="text-wrapper">
              <p>
                Dive into the thrilling world of AVAX rewards – where daily
                gains rule, dev fees are practically non-existent, and you get
                to bask in an epic X% daily income! Check out the docs for the
                full crypto scoop <a href="">(Documentation)</a>
              </p>
              <p>
                <a href="">#1 - DEPOSIT AVAX:</a> Ignite your crypto journey!
                Deposit AVAX to unlock daily gains and secure your VIP pass for
                the upcoming PRINTERS air drop! 🚀💰 Let your AVAX steal the
                spotlight &ndash; the party&apos;s just getting started!
              </p>
              <p>
                <a href="">#2 - COMPOUND:</a> Amp up the excitement! Hit
                &apos;COMPOUND&apos; to watch your rewards grow magically.
                It&apos;s like leveling up your game with the click of a button
                – talk about maximizing gains in style!
              </p>
              <p>
                <a href="">#3 - CLAIM REWARDS:</a> Ready to celebrate those AVAX
                victories? Smash the &apos;CLAIM REWARDS&apos; button and behold
                the magic as your well-deserved AVAX rewards land straight into
                your wallet! 🎉💸
              </p>
              <p className="italic-text">
                Crack the code to mega rewards by amping up those AVAX deposits!
                The more you stash and the more you compound, the wilder the
                ride to even juicier rewards. Get ready to elevate your crypto
                game to the next level! 🚀💰
              </p>
            </div>
            <div className="reward-wrapper">
              <div className="reward-box">
                <div className="input-wrapper">
                  <div className="reward-list">
                    <span>TV</span>
                    <span>0.00 $</span>
                  </div>
                  <div className="reward-list">
                    <span>Contract</span>
                    <span>0 AVAX</span>
                  </div>
                  <div className="reward-list">
                    <span>Wallet</span>
                    <span>0 AVAX</span>
                  </div>
                  <div className="reward-list">
                    <span>Your Printers</span>
                    <span>0 Printers</span>
                  </div>
                </div>
                <div className="deposit-total">0 Avax</div>
                <button className="btn-2 deposit-btn">DEPOSIT AVAX</button>
                <div className="reward-total">
                  <p className="total-text">Your Rewards</p>
                  <p className="total-btc">0 AVAX</p>
                </div>
                <div className="btn-wrapper">
                  <button className="compound-btn">Compound</button>
                  <button className="claim-btn">Claim Rewards</button>
                </div>
              </div>
              <div className="metrics-box">
                <h2>Gains Galore</h2>
                <div className="metrics-wrap">
                  <div className="metric">Daily Return</div>
                  <div className="metric">APR</div>
                  <div className="metric">Dev Fee</div>
                </div>
              </div>
            </div>
            <div className="footer">
              <p></p>
              <span>Follow Us Here</span>
              <p></p>
            </div>
            <div className="footer-icons">
              <div className="icon-wrapper">
                <a href="">
                  <img src="src\assets\icons\ic_round-discord.png" alt="" />
                </a>
                <a href="">
                  <img
                    src="src\assets\icons\icon-park-twotone_big-x.png"
                    alt=""
                  />
                </a>
                <a href="">
                  <img src="src\assets\icons\ic_round-telegram.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Merlin;
