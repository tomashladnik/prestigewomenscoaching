import FeatureCard from "./feature-card"

export default function Home() {
  return (
    <div className="  text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <FeatureCard
            title="Beth’s Transformation"
            subtitle=" Working Professional & Dog Mom|Sarasota"
            
              imageSrc="/videos/beth-im.png"
            featureId="Beth"
            content={{
                title: "Beth’s Transformation",
                description: `
                  <h3>Before:</h3>
                  <p>
                    Beth was spinning her wheels — bouncing between workout programs, trying to “clean eat,” and constantly starting over.
                    <br />
                    “I felt like I was doing everything right… but nothing was changing.”
                  </p>
                  <p>
                    Her routine lacked structure, and her motivation faded fast without accountability. She didn’t want a fitness trend — she wanted a real, lasting transformation.
                  </p>
              
                  <h3>The Shift:</h3>
                  <p>
                    Beth joined <strong>The Ultimate Women’s Transformation Experience</strong> by Prestige Women’s Coaching.
                  </p>
                  <ul>
                    <li>✔ A personalized plan that fit her lifestyle</li>
                    <li>✔ 1-on-1 coaching with real support and strategy</li>
                    <li>✔ Nutrition that felt freeing, not restrictive</li>
                  </ul>
                  <blockquote>
                    “I finally stopped guessing — and started seeing results.”
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Leaner, stronger, and more confident in her skin</li>
                    <li>🔥 Clearer mindset and less stress</li>
                    <li>🔥 No more starting over — this stuck</li>
                  </ul>
                  <blockquote>
                    “This isn’t a quick fix. It’s a lifestyle that works — and I actually enjoy it.”
                  </blockquote>
              
                  <h3>Your Turn?</h3>
                  <p>
                    If you're tired of spinning your wheels and ready to feel strong, confident, and in control — we’re here for you.
                  </p>
                  <p>
                    <strong>Train Where You Want. Transform How You Deserve.</strong>
                  </p>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
              
          />

          <FeatureCard
            title="Jamie’s Transformation"
            subtitle="Nurse, Mom of 3, & Former Athlete | Sarasota, FL"
            bgColor="bg-blue-800"
            imageSrc="/videos/jamie-im.png"
            featureId="cameras"
            content={{
                title: "Jamie’s Transformation",
                description: `
                  <h3>Jamie’s Transformation</h3>
                  <p><em>Nurse, Mom of 3, & Former Athlete | Sarasota, FL</em></p>
              
                  <h3>Before:</h3>
                  <p>
                    Jamie knew how to work hard. She was a nurse, a mom of three, and had been an athlete her whole life.
                    But after years of putting herself last, she didn’t recognize her body anymore.
                  </p>
                  <blockquote>
                    “I didn’t feel like me. I had lost my strength, my energy, and my confidence.”
                  </blockquote>
                  <p>
                    She wasn’t looking for a quick fix. She wanted to feel like herself again — strong, capable, and proud.
                  </p>
              
                  <h3>The Shift:</h3>
                  <p>
                    Jamie joined <strong>The Ultimate Women’s Transformation Experience</strong> by Prestige Women’s Coaching.
                  </p>
                  <ul>
                    <li>✅ Personalized workouts she could do from home</li>
                    <li>✅ Nutrition that didn’t mean cooking separate meals</li>
                    <li>✅ Real accountability from a coach who understood her life</li>
                  </ul>
                  <blockquote>
                    “This gave me structure without the pressure. I finally had a coach in my corner who got it.”
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Lost 15+ lbs of body fat over 6 months</li>
                    <li>🔥 Regained lean muscle and athletic tone</li>
                    <li>🔥 Felt more energetic, confident, and capable than she had in years</li>
                    <li>🧒 All while balancing a demanding job and raising three kids</li>
                  </ul>
                  <blockquote>
                    “I feel strong again — mentally and physically. I’m showing up better for myself and my family.”
                  </blockquote>
              
                  <h3>Is This You Too?</h3>
                  <p>
                    If you’ve been putting everyone else first — and losing yourself in the process — it’s time to change that.
                  </p>
                  <blockquote>
                    “This wasn’t just fitness. It was a full transformation — inside and out.”
                  </blockquote>
                  <p>
                    <strong>Apply now to Prestige Women’s Coaching.</strong><br />
                    Train where you want. Transform how you deserve.
                  </p>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
              
          />

          <FeatureCard
            title="Claire’s Transformation"
            subtitle="Commercial Real Estate Agent & Dog Mom | Sarasota, FL"
            bgColor="bg-black"
            featureId="chip"
            imageSrc="/videos/claire-im.png"
            content={{
                title: "Claire’s Transformation",
                description: `
                  <h3>Claire’s Transformation</h3>
                  <p><em>Commercial Real Estate Agent & Dog Mom | Sarasota, FL</em></p>
              
                  <h3>Before:</h3>
                  <p>
                    Claire’s career was booming — closing deals, managing clients, and constantly on the move.
                    But behind her sharp appearance and packed calendar, she felt exhausted, out of shape, and disconnected from her body.
                  </p>
                  <blockquote>
                    “I was great at taking care of business — but terrible at taking care of myself.”
                  </blockquote>
              
                  <h3>The Shift:</h3>
                  <p>
                    Claire joined <strong>The Ultimate Women’s Transformation Experience</strong> by Prestige Women’s Coaching.
                  </p>
                  <ul>
                    <li>✅ Personalized fitness coaching that traveled with her lifestyle</li>
                    <li>✅ Realistic nutrition — no meal prep marathons or food guilt</li>
                    <li>✅ Daily accountability that kept her on track, even during her busiest weeks</li>
                  </ul>
                  <blockquote>
                    “It gave me structure and support without being overwhelming. I needed that.”
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Lost 14 lbs of body fat in 6 months</li>
                    <li>🔥 Gained visible muscle tone and confidence</li>
                    <li>🔥 Felt mentally sharper, calmer, and more grounded</li>
                    <li>🔥 Kept crushing it at work — while finally feeling amazing in her skin</li>
                  </ul>
                  <blockquote>
                    “I used to fake confidence with clothes. Now I feel it — in and out of them.”
                  </blockquote>
              
                  <h3>Is This You Too?</h3>
                  <p>
                    If you’re successful on paper but secretly struggling with energy, confidence, or consistency…<br />
                    You don’t need a crash diet or another gym challenge.
                  </p>
                  <p><strong>You need a program built for women like you.</strong></p>
                  <blockquote>
                    “This didn’t just change my body. It gave me back control of my life.”
                  </blockquote>
              
                  <p>
                    <strong>Apply now to Prestige Women’s Coaching.</strong><br />
                    Train where you want. Transform how you deserve.
                  </p>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
              
          />

          <FeatureCard
            title="Crystal’s Transformation"
            subtitle="Tech Professional & Mom of Two | Sarasota, FL"
            bgColor="bg-white"
            textColor="text-white"
            featureId="design"
            imageSrc="/videos/crystal-im.png"
            content={{
                title: "Crystal’s Transformation",
                description: `
                  <h3>Crystal’s Transformation</h3>
                  <p><em>Tech Professional & Mom of Two | Sarasota, FL</em></p>
              
                  <h3>Before:</h3>
                  <p>
                    Crystal had a thriving career in tech, earning six figures and managing major projects — but behind the scenes, she felt off.
                    Her energy was low, her body didn’t feel like hers anymore, and her confidence had taken a hit.
                  </p>
                  <blockquote>
                    “I had the job, the income, the life on paper… but I felt completely disconnected from myself.”
                  </blockquote>
              
                  <h3>The Shift:</h3>
                  <p>
                    Crystal joined <strong>The Ultimate Women’s Transformation Experience</strong> by Prestige Women’s Coaching.
                  </p>
                  <ul>
                    <li>✅ Efficient, customized workouts that fit her work and mom schedule</li>
                    <li>✅ Flexible nutrition — no crash diets, no meal prep marathons</li>
                    <li>✅ Daily coaching and support that actually worked with her lifestyle</li>
                  </ul>
                  <blockquote>
                    “It wasn’t overwhelming — it was sustainable. And that’s why it finally worked.”
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Lost 16 lbs of body fat in 6 months</li>
                    <li>🔥 Gained lean muscle and definition</li>
                    <li>🔥 More focus, better sleep, higher energy</li>
                    <li>🔥 Thriving at work and confident in her body again</li>
                  </ul>
                  <blockquote>
                    “I feel like I’m finally living in alignment — strong, focused, and proud.”
                  </blockquote>
              
                  <h3>Is This You Too?</h3>
                  <p>
                    If you're succeeding in your career but silently struggling with your body and energy…
                    You don’t need another workout app.
                  </p>
                  <p><strong>You need a solution built for high-performing women — just like you.</strong></p>
                  <blockquote>
                    “This wasn’t just a glow-up. It was a reset for every part of my life.”
                  </blockquote>
              
                  <p>
                    <strong>Apply now to Prestige Women’s Coaching.</strong><br />
                    Train where you want. Transform how you deserve.
                  </p>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
              
          />
        </div>
      </div>
    </div>
  )
}

