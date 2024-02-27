import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="logo__section">
        <img src="./logo.png" />
      </div>
      <div className="achivement__section">
        <div className="achivement__section__left">
          <img src="./1.png" />
        </div>
        <div className="achivement__section__right">
          <h2>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h2>
          <div>
            <ul>
              <li style={{ fontSize: 14}}>
                C.R.I.'s energy efficient products are well recognized by
                various Government Institutions, as trustworthy products for
                various projects across the globe to save energy.
              </li>
              <li style={{ fontSize: 14}}>
                C.R.I. is the highest contributor in the country for the
                projects of EESL (Energy Efficiency Services Limited) to replace
                the old inefficient pumps with 5 Star rated energy efficient
                smart pumps with IoT enabled control panel.
              </li>
            </ul>
          </div>
          <div>
            <img src="./2.png" />
          </div>
          <div>
            <p style={{ fontSize: 14}}>
              Government of India has awarded the <b>"National Energy Conservation
              Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I.
              Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
              Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
            </p>
          </div>
        </div>
      </div>

      {/* machines */}
      <div className="milestones">
        <h5>
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </h5>
        <img src="./3.png" />
        <p style={{ textAlign: "center", padding: 10 }}>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <hr style={{color: "red"}} />
      </div>

      {/* product segments */}
      <div className="product__section">
        <h5>
          C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
        </h5>
        <p>
          CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE
          WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span>{" "}
          SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span>{" "}
          MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD &
          BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span>{" "}
          SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE
          FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL
        </p>
      </div>

      {/* footer */}
      <div className="footer">
        <ul>
          <li>
            <div className="telephone">
              <i class="fa-solid fa-phone"></i>
              <p>Toll Free</p>
              <a href="tel:18002001234" style={{color: "white"}}> <b>1800 200 1234</b></a>
            </div>
          </li>
          <li>
            <div className="telephone">
            <i class="fa-brands fa-facebook-f"></i>
              <a href="www.facebook.com/cripumps" style={{color: "white"}}>www.facebook.com/cripumps</a>
            </div>
          </li>
          <li>
            <div className="telephone">
            <i class="fa-solid fa-globe"></i>
              <a href="www.crigroups.com" style={{color: "white"}}>www.crigroups.com</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
