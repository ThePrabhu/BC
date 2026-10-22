import "./Collaborators.css"

const collaborators = [
  {
    name: "AURA Global Business School",
    logo: "https://aurabschool.com/wp-content/uploads/2026/08/cropped-Aura-Degree-College-Logo-1.png",
  },
  {
    name: "GPREC, Kurnool",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHlamVUjCThnZmDmOsA-SfDtWU7HsZBHaypy1pdVmmO_-Wqhrbf4E3IPE&s=10",
  },
  {
    name: "RGM, Kurnool",
    logo: "https://images.openai.com/static-rsc-4/U-1pNKU3YCkJxN3GbapX5qmmD_1rABO7McscNVX0mAhEzIDWAIjOKa27ao64IYgOmiSwV8Tl6LHhMZWRldJ9Vy12b-Z65R0XzZ05PXZV51Gwkek2DF1tNRo-rJOpBURTB2_Mq9rPZL_onmVHnZTUGSgc2KHurXL8CtWkojI_nxBwmikkXjzxFQfDq6Ih7OFW?purpose=fullsize",
  },
  {
    name: "IIIT RGUKT RK Valley",
    logo: "https://images.openai.com/static-rsc-4/R-Yxl3aJOxRqDEmFwckUIcCauk_hhz1qMHIylikoOwzIy1bPm9K9LNhR2Cilo-FZPn6a7wUwLR825umqkNIEmpU6bdsMJ3cR0ukATAOcqQaSGFMvLlgHe16h1BmXAD2uED5Y9qwqtXY_e-ojivqv_fArST4xGUgNjoFbiqmSXax-6yIwvMMemU2y3pUuA8jW?purpose=fullsize",
  },
  {
    name: "True Black Cafe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzVSpXAMDLR2Jei36EDAUtHLso3F6AerPl6qhG2ot9D1P_bLYzbAchw&s=10",
  },
  {
    name: "Fast Track Car Care",
    logo: "https://images.openai.com/static-rsc-4/zaPyTNdY1Ddw-1mqQdFmnOqB1iJjtgqrmjDhQUQ5h79QzgoeWDbrqja72tx4u28mNqMaztI9CCa1hy3Ubiy38-bRK3iOSw0-10cUKLVeMI0T7o2hmLN8WnW8Z5KjppJP-x9KVbjpm66Yg16bHwSe_GJZLaRmQ-UeXP-KwXA_u8b2J7URIAIwPFs9BfRKtMcx?purpose=fullsize",
  },
  {
    name: "Devnovate",
    logo: "https://images.openai.com/static-rsc-4/XjH4NOUpwOJa6wZmB6eUYpvhDjdvBYJ2A3_ia3YZXbIUmymgiQD6rBfQPKvKcLEicTmb9fgPWg9fFRBgXiEgnskMKFXLUqw3TDIo5GFb90d_4Adtk24K_xYhQPU76Q6ctc4GfHdTwEz8bQ8PfkPNe4p6tzNUG7cFxpVUGjzmftBT4hTLEAkdd--EpIG4ABUc?purpose=fullsize",
  },
]

function Collaborators() {
  return (
    <section className="collaborators" aria-labelledby="collaborators-title">
      <header className="collaborators-heading">
        <p className="collaborators-eyebrow">OUR NETWORK</p>
        <h2 id="collaborators-title">Our <span>Collaborators</span></h2>
        <p className="collaborators-subtitle">Bringing campuses, industry and ideas together.</p>
      </header>

      <div className="collaborators-marquee" aria-label="Our collaborators">
        <div className="collaborators-track">
          {[...collaborators, ...collaborators].map((collaborator, index) => (
            <article className="collaborator" key={`${collaborator.name}-${index}`} aria-hidden={index >= collaborators.length}>
              <div className="collaborator-logo">
                <img src={collaborator.logo} alt={index < collaborators.length ? `${collaborator.name} logo` : ""} loading="lazy" />
              </div>
              <p>{collaborator.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collaborators
