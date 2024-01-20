function About() {
  return (
    <section className='section'>
      <h2 className='title has-text-centered'>Meet Dr. Katie</h2>
      <hr />
      <div className=' columns'>
        <aside className='container column is-full-mobile is-one-quarter'>
          <br />
          <img
            src='src/assets/dr-katie-pic.jpg'
            alt='Dr. Katie Picture'
            height={325}
            width={245}
            className='image'></img>
          <h2 className='title is-4'>Dr. Katie Hulse, DC</h2>
        </aside>

        <div className='column content'>
          <p>
            I’m Dr. Katie and I started Stateline Family Chiropractic. I’m from
            a small town in Wisconsin and my family and I recently moved to Tega
            Cay to be closer to my brother and his wife. My little family
            includes my husband Eric, our daughter Blake, our son Chip and our
            rescue German Shepherd, Romeo. I practiced in Wisconsin until we
            decided to move here.
          </p>

          <p>
            After graduation, and especially once I became pregnant myself, I
            became very passionate about taking care of pregnant women and
            children. I’m a huge advocate for breastfeeding, home birth and
            informed consent so if you have any questions I’d love to chat! I
            was blessed to be able to have a home birth myself with Blake and I
            know people tend to have a lot of questions because it’s not super
            common. I planned on having another home birth with my son but COVID
            changed my plans and I had him with my midwives at their beautiful
            birth center instead.
          </p>

          <p>
            In my free time I love playing volleyball, hiking and trying new
            local restaurants!
          </p>

          <p>
            My favorite chiropractic story might have to be when a pregnant mom
            was having contractions about every hour and after I gave her a
            specific and gentle adjustment, they came about every 20 minutes and
            she safely had her beautiful baby boy shortly after! It’s amazing
            what chiropractic can do!
          </p>

          <p>
            I’m excited to be serving Fort Mill and the surrounding area! It’s
            so humbling when our patients refer their family and friends to us
            and trust us to take care of what’s most precious to them. Thanks
            for reading and I’ll see you at the office!
          </p>

          <section className='section'>
            <h1 className='title has-text-centered'>Education</h1>
            <hr />

            <ul>
              <li>
                <strong>Palmer College</strong>– Doctorate Graduated Summa Cum
                Laude
                <ul>
                  <li>Received Academic Excellence Award</li>
                </ul>
              </li>

              <li>
                <strong>University of Wisconsin</strong>– LaCrosse – B.S.Biology
                Biomedical
              </li>

              <li>
                <strong>ICPA</strong>– Webster Certified
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}

export default About;

