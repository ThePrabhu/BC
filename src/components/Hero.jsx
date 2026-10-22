function Hero() {

  return (

    <section
      id="home"

      className="
        relative

        h-screen
        w-full

        overflow-hidden
      "
    >

      {/* BACKGROUND IMAGE */}

      <img

        src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3Dhttps://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3Dearch.brave.com/kjU0pAZvE14ojjOyCD4Zyd9mXfKiCOPXyQ5-FETj0bQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvNjk0/NzI1NDEwL3Bob3Rv/L3VuaXZlcnNpdHkt/c3R1ZGVudHMtc3R1/ZHlpbmctaW4tYS1n/cm91cC5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VTU5Tm5r/ajdQUnZ2ZlphM3c3/UE9obmd0dHl5a0tn/dldwZDFKeVZ5RjBm/TT0https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"

        alt="Students"

        className="
          absolute
          inset-0

          h-full
          w-full

          object-cover
        "
      />

      {/* DARK OVERLAY */}

      <div
        className="
          absolute
          inset-0

          bg-black/60
          dark:bg-black/65
        "
      />

      {/* DEHAZE / CINEMATIC GLOW */}

      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b

          from-black/50
          via-black/30
          to-black/70
        "
      />

      {/* MAROON ACCENT */}

      <div
        className="
          absolute

          inset-0

          bg-[radial-gradient(circle_at_top,rgba(128,0,0,0.18),transparent_45%)]
        "
      />

      {/* CONTENT */}

      <div
        className="
          relative
          z-10

          h-full

          flex
          items-center
          justify-center

          text-center

          px-6
        "
      >

        <div className="max-w-5xl">

          {/* SMALL LABEL */}

          <p
            className="
              mb-6

              uppercase

              tracking-[0.35em]

              text-white/70

              text-xs
              md:text-sm

              font-semibold
            "
          >
            Beyond Classrooms
          </p>

          {/* MAIN HEADING */}

          <h1
            className="
              text-white

              text-5xl
              md:text-7xl
              lg:text-[88px]

              leading-[1.05]

              font-bold
            "
          >

            A new generation
            <br />

            of students

            <span className="text-[#800000]">
              {" "}starts here.
            </span>

          </h1>

          {/* SUBTEXT */}

          <p
            className="
              mt-8

              max-w-2xl
              mx-auto

              text-white/65

              text-sm
              md:text-lg

              leading-relaxed
            "
          >

            ByondCampuz connects ambitious students with
            real-world experiences through hackathons,
            AI workshops, startup culture, networking,
            and industry-driven events.

          </p>

        </div>

      </div>

    </section>
  )
}

export default Hero