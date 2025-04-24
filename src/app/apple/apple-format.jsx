"use client"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import FeatureCard from "./feature-card"
export default function Home() {
  // const [activeCard, setActiveCard] = useState(null)
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3, // You can tweak this for responsiveness
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024, // tablet
  //       settings: {
  //         slidesToShow: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 640, // mobile
  //       settings: {
  //         slidesToShow: 1,
  //       }
  //     }
  //   ]
  // }
//   const cards = [
//     {
//       title: "Beth's Transformation",
//       subtitle: "Working Professional & Dog Mom|Sarasota",
//       imageSrc: "/videos/beth-im.png",
//       featureId: "Beth",
//       content: {
//         title: "Beth's Transformation",
//         description: `<h3>Before:</h3>
//                   <p>
//                     Beth was spinning her wheels — bouncing between workout programs, trying to "clean eat," and constantly starting over.
//                     <br />
//                     "I felt like I was doing everything right... but nothing was changing."
//                   </p>
//                   <p>
//                     Her routine lacked structure, and her motivation faded fast without accountability. She didn't want a fitness trend — she wanted a real, lasting transformation.
//                   </p>
              
//                   <h3>The Shift:</h3>
//                   <p>
//                     Beth joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
//                   </p>
//                   <ul>
//                     <li>✔ A personalized plan that fit her lifestyle</li>
//                     <li>✔ 1-on-1 coaching with real support and strategy</li>
//                     <li>✔ Nutrition that felt freeing, not restrictive</li>
//                   </ul>
//                   <blockquote>
//                     "I finally stopped guessing — and started seeing results."
//                   </blockquote>
              
//                   <h3>The Results:</h3>
//                   <ul>
//                     <li>🔥 Leaner, stronger, and more confident in her skin</li>
//                     <li>🔥 Clearer mindset and less stress</li>
//                     <li>🔥 No more starting over — this stuck</li>
//                   </ul>
//                   <blockquote>
//                     "This isn't a quick fix. It's a lifestyle that works — and I actually enjoy it."
//                   </blockquote>
              
//                   <h3>Your Turn?</h3>
//                   <p>
//                     If you're tired of spinning your wheels and ready to feel strong, confident, and in control — we're here for you.
//                   </p>
//                   <p>
//                     <strong>Train Where You Want. Transform How You Deserve.</strong>
//                   </p>`
         
//         }
//     },
//     {
//       title: "Jamie's Transformation",
//       subtitle: "Nurse, Mom of 3, & Former Athlete | Sarasota, FL",
//       imageSrc: "/videos/jamie-im.png",
//       featureId: "Jamie",
//       content: {
//         title: "Jamie's Transformation",
//         description: `
//           <h3>Jamie's Transformation</h3>
//                   <p><em>Nurse, Mom of 3, & Former Athlete | Sarasota, FL</em></p>
              
//                   <h3>Before:</h3>
//                   <p>
//                     Jamie knew how to work hard. She was a nurse, a mom of three, and had been an athlete her whole life.
//                     But after years of putting herself last, she didn't recognize her body anymore.
//                   </p>
//                   <blockquote>
//                     "I didn't feel like me. I had lost my strength, my energy, and my confidence."
//                   </blockquote>
//                   <p>
//                     She wasn't looking for a quick fix. She wanted to feel like herself again — strong, capable, and proud.
//                   </p>
              
//                   <h3>The Shift:</h3>
//                   <p>
//                     Jamie joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
//                   </p>
//                   <ul>
//                     <li>✅ Personalized workouts she could do from home</li>
//                     <li>✅ Nutrition that didn't mean cooking separate meals</li>
//                     <li>✅ Real accountability from a coach who understood her life</li>
//                   </ul>
//                   <blockquote>
//                     "This gave me structure without the pressure. I finally had a coach in my corner who got it."
//                   </blockquote>
              
//                   <h3>The Results:</h3>
//                   <ul>
//                     <li>🔥 Lost 15+ lbs of body fat over 6 months</li>
//                     <li>🔥 Regained lean muscle and athletic tone</li>
//                     <li>🔥 Felt more energetic, confident, and capable than she had in years</li>
//                     <li>🧒 All while balancing a demanding job and raising three kids</li>
//                   </ul>
//                   <blockquote>
//                     "I feel strong again — mentally and physically. I'm showing up better for myself and my family."
//                   </blockquote>
              
//                   <h3>Is This You Too?</h3>
//                   <p>
//                     If you've been putting everyone else first — and losing yourself in the process — it's time to change that.
//                   </p>
//                   <blockquote>
//                     "This wasn't just fitness. It was a full transformation — inside and out."
//                   </blockquote>
//                   <p>
//                     <strong>Apply now to Prestige Women's Coaching.</strong><br />
//                     Train where you want. Transform how you deserve.
//                   </p>
//           `
//       }
//     },
//     {
//       title: "Claire's Transformation",
//       subtitle: "Commercial Real Estate Agent & Dog Mom | Sarasota, FL",
//       imageSrc: "/videos/claire-im.png",
//       featureId: "Claire",
//       content: {
//         title: "Claire's Transformation",
//         description: `
//          <h3>Claire's Transformation</h3>
//                   <p><em>Commercial Real Estate Agent & Dog Mom | Sarasota, FL</em></p>
              
//                   <h3>Before:</h3>
//                   <p>
//                     Claire's career was booming — closing deals, managing clients, and constantly on the move.
//                     But behind her sharp appearance and packed calendar, she felt exhausted, out of shape, and disconnected from her body.
//                   </p>
//                   <blockquote>
//                     "I was great at taking care of business — but terrible at taking care of myself."
//                   </blockquote>
              
//                   <h3>The Shift:</h3>
//                   <p>
//                     Claire joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
//                   </p>
//                   <ul>
//                     <li>✅ Personalized fitness coaching that traveled with her lifestyle</li>
//                     <li>✅ Realistic nutrition — no meal prep marathons or food guilt</li>
//                     <li>✅ Daily accountability that kept her on track, even during her busiest weeks</li>
//                   </ul>
//                   <blockquote>
//                     "It gave me structure and support without being overwhelming. I needed that."
//                   </blockquote>
              
//                   <h3>The Results:</h3>
//                   <ul>
//                     <li>🔥 Lost 14 lbs of body fat in 6 months</li>
//                     <li>🔥 Gained visible muscle tone and confidence</li>
//                     <li>🔥 Felt mentally sharper, calmer, and more grounded</li>
//                     <li>🔥 Kept crushing it at work — while finally feeling amazing in her skin</li>
//                   </ul>
//                   <blockquote>
//                     "I used to fake confidence with clothes. Now I feel it — in and out of them."
//                   </blockquote>
              
//                   <h3>Is This You Too?</h3>
//                   <p>
//                     If you're successful on paper but secretly struggling with energy, confidence, or consistency...<br />
//                     You don't need a crash diet or another gym challenge.
//                   </p>
//                   <p><strong>You need a program built for women like you.</strong></p>
//                   <blockquote>
//                     "This didn't just change my body. It gave me back control of my life."
//                   </blockquote>
              
//                   <p>
//                     <strong>Apply now to Prestige Women's Coaching.</strong><br />
//                     Train where you want. Transform how you deserve.
//                   </p>
//         `
//       }
//     },
//     {
//       title: "Crystal's Transformation",
//       subtitle: "Tech Professional & Mom of Two | Sarasota, FL",
//       imageSrc: "/videos/crystal-im.png",
//       featureId: "Crystal",
//       content: {
//         title: "Crystal's Transformation",
//         description: `
//           <h3>Crystal's Transformation</h3>
//                   <p><em>Tech Professional & Mom of Two | Sarasota, FL</em></p>
              
//                   <h3>Before:</h3>
//                   <p>
//                     Crystal had a thriving career in tech, earning six figures and managing major projects — but behind the scenes, she felt off.
//                     Her energy was low, her body didn't feel like hers anymore, and her confidence had taken a hit.
//                   </p>
//                   <blockquote>
//                     "I had the job, the income, the life on paper... but I felt completely disconnected from myself."
//                   </blockquote>
              
//                   <h3>The Shift:</h3>
//                   <p>
//                     Crystal joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
//                   </p>
//                   <ul>
//                     <li>✅ Efficient, customized workouts that fit her work and mom schedule</li>
//                     <li>✅ Flexible nutrition — no crash diets, no meal prep marathons</li>
//                     <li>✅ Daily coaching and support that actually worked with her lifestyle</li>
//                   </ul>
//                   <blockquote>
//                     "It wasn't overwhelming — it was sustainable. And that's why it finally worked."
//                   </blockquote>
              
//                   <h3>The Results:</h3>
//                   <ul>
//                     <li>🔥 Lost 16 lbs of body fat in 6 months</li>
//                     <li>🔥 Gained lean muscle and definition</li>
//                     <li>🔥 More focus, better sleep, higher energy</li>
//                     <li>🔥 Thriving at work and confident in her body again</li>
//                   </ul>
//                   <blockquote>
//                     "I feel like I'm finally living in alignment — strong, focused, and proud."
//                   </blockquote>
              
//                   <h3>Is This You Too?</h3>
//                   <p>
//                     If you're succeeding in your career but silently struggling with your body and energy...
//                     You don't need another workout app.
//                   </p>
//                   <p><strong>You need a solution built for high-performing women — just like you.</strong></p>
//                   <blockquote>
//                     "This wasn't just a glow-up. It was a reset for every part of my life."
//                   </blockquote>
              
//                   <p>
//                     <strong>Apply now to Prestige Women's Coaching.</strong><br />
//                     Train where you want. Transform how you deserve.
//                   </p>
//         `
//       }
//     },
//     {
//       title: "Alexis's Transformation",
//       subtitle: "T Busy Healthcare Professional | Sarasota, FL",
//       imageSrc: "/videos/alexis-im.png",
//       featureId: "Alexis",
//       content: {
//         title: "Alexis's Transformation",
//         description: `
//           <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     Between long shifts, stress, and taking care of others, <strong>Alexis</strong> had almost no time or energy to focus on herself.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I felt stuck in a cycle — always tired, low confidence, no structure."
//   </p>
//   <p class="mb-4">
//     She tried to make fitness work on her own but was overwhelmed and inconsistent.
//     She didn't need another intense program — she needed something <strong>sustainable</strong>.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Alexis joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✔ Custom workouts delivered to her schedule</li>
//     <li>✔ Nutrition built around her busy life (no strict diets)</li>
//     <li>✔ 1:1 coaching + real accountability that kept her on track</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "It wasn't about being perfect — it was about being consistent and supported."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Lost body fat + gained visible strength</li>
//     <li>💪 Felt stronger, leaner, and proud of her progress</li>
//     <li>🌟 Rebuilt her confidence and clarity</li>
//     <li>🕒 Found a routine that fits — and sticks</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "This gave me back control. I didn't just transform physically — it changed my mindset."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">If This Sounds Like You...</h2>
//   <p class="mb-4">
//     If you're busy, burnt out, or feel like you've tried everything — this program was built for women like Alexis.
//   </p>
//   <p class="mb-4">
//     You don't need to do more. You need a plan that works for <strong>you</strong>.
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train Where You Want. Transform How You Deserve.</p>
//   </div>
// </section>
//         `
//       }
//     },
//     {
//       title: "Freya's Transformation",
//       subtitle: "Creative Entrepreneur & Mom | Sarasota, FL",
//       imageSrc: "/videos/freya-im.png",
//       featureId: "Freya",
//       content: {
//         title: "Freya's Transformation",
//         description: `
//           <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Freya</strong> was juggling a business, motherhood, and a million daily responsibilities — and her health kept falling to the bottom of the list.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I felt burnt out, uncomfortable in my body, and honestly, just disconnected from myself."
//   </p>
//   <p class="mb-4">
//     She didn't want a bootcamp. She wanted <strong>balance</strong>.
//     She wanted to feel strong, focused, and in control again.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Freya joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✅ Training on her time — at home or at the gym</li>
//     <li>✅ Nutrition that supported her lifestyle (and still included wine nights 🍷)</li>
//     <li>✅ Ongoing coaching and daily check-ins that kept her consistent</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "This wasn't overwhelming — it was sustainable. And that's why it worked."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Dropped 14 lbs of body fat over 6 months</li>
//     <li>💪 Gained muscle definition and energy</li>
//     <li>🧠 Felt clear-headed, motivated, and back in charge</li>
//     <li>🧒 Stayed present for her family — no strict diets or hours in the gym</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I feel grounded, strong, and finally proud of the way I'm taking care of myself."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
//   <p class="mb-4">
//     If you're busy, burnt out, and tired of starting over — this is for you.
//   </p>
//   <p class="mb-4">
//     You don't need another program. You need one that works for <strong>your life</strong>.
//   </p>
//   <p class="italic text-gray-600 mb-6">
//     "I didn't lose myself to get fit — I found myself again."
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>
//         `
//       } 
//     },
//     {
//       title: "Madison's Transformation",
//       subtitle: "Corporate Consultant & Wellness Seeker | Sarasota, FL",
//       imageSrc: "/videos/madison-im.png",
//       featureId: "Madison",
//       content: {
//         title: "Madison's Transformation",
//         description: `
//         <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Madison</strong> had tried different programs, routines, and "reset Mondays" — but nothing stuck.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I was doing all the right things, but I wasn't seeing results. I didn't feel confident or in control."
//   </p>
//   <p class="mb-4">
//     She didn't want extremes — she wanted <strong>education</strong>, <strong>structure</strong>, and a <strong>system that worked</strong>.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Madison joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✔ Personalized workouts — home or gym</li>
//     <li>✔ Flexible nutrition with real guidance</li>
//     <li>✔ 1-on-1 support and mindset coaching that made the difference</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "This wasn't just a plan — it taught me how to take care of myself."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Lost inches and gained definition</li>
//     <li>💪 Felt stronger, energized, and more empowered</li>
//     <li>🥗 Developed a healthier relationship with food and her body</li>
//     <li>✅ Built habits she's now confident maintaining for life</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I finally feel like I know what I'm doing — and I love how I feel."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Sound Familiar?</h2>
//   <p class="mb-4">
//     If you're tired of guessing, starting over, or doing it all without results — this is the difference.
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train Where You Want. Transform How You Deserve.</p>
//   </div>
// </section>
//         `
//       } 
//     },
//     {
//       title: "Larissa's Transformation",
//       subtitle: "Busy Mom & Entrepreneur | Sarasota, FL",
//       imageSrc: "/videos/larissa-im.png",
//       featureId: "Larissa",
//       content: {
//         title: "Larissa's Transformation",
//         description: `
//         <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Larissa</strong> had tried countless programs — but nothing ever stuck. <br />
//     She was tired of the yo-yo cycle and feeling frustrated in her own skin.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I was tired of starting over every Monday... I just couldn't stay consistent."
//   </p>
//   <p class="mb-4">
//     She didn't need more motivation. <br />
//     She needed <strong>structure</strong>, <strong>support</strong>, and a <strong>system that fit her life</strong>.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Larissa joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✅ Customized workouts in her home or gym</li>
//     <li>✅ Real-time accountability from a coach who actually cared</li>
//     <li>✅ Nutrition that worked with her family and schedule</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I finally had a plan that wasn't overwhelming. It was doable — and it worked."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Lost over 18 lbs of body fat in 6 months</li>
//     <li>🔥 Gained lean muscle and visible tone</li>
//     <li>⚡ More energy, less stress, and renewed confidence</li>
//     <li>👨‍👩‍👧 Present for her family — no crazy schedules or restrictions</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I look in the mirror now and feel proud of who I see."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
//   <p class="mb-2">You're not lazy. <br /> You're not broken.</p>
//   <p class="mb-4">You just need a program designed for <strong>you</strong> — one that actually works.</p>
//   <p class="italic text-gray-600 mb-4">
//     "This wasn't just a fitness program. It changed my lifestyle — and my mindset."
//   </p>

//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>
//         `
//       } 
//     },
//     {
//       title: "Jenna's Transformation",
//       subtitle: "Entrepreneur & High-Achiever | Sarasota, FL",
//       imageSrc: "/videos/beth-im.png",
//       featureId: "Beth",
//       content: {
//         title: "Jenna's Transformation",
//         description: `
//         <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Jenna</strong> was driven and successful in business — but when it came to her health, she felt stuck.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I was constantly all-in or all-out. I knew how to hustle, but not how to take care of myself consistently."
//   </p>
//   <p class="mb-4">
//     She didn't need more discipline — she needed a <strong>sustainable strategy</strong>.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Jenna joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✅ Custom workouts that fit her intense schedule</li>
//     <li>✅ Nutrition that felt doable and flexible</li>
//     <li>✅ Real-time coaching and daily accountability</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "It felt tailored to me — not just physically, but mentally too."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Lean muscle and visible definition</li>
//     <li>⚡ Improved energy and focus for both business and life</li>
//     <li>💫 No more burnout — just balance</li>
//     <li>📆 Habits she can sustain for the long term</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I didn't lose myself trying to get fit — I became the strongest version of me."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Ready for Your Transformation?</h2>
//   <p class="mb-4">
//     If you're successful everywhere except your health — it's time for a program designed for women like you.
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>
//         `
//       } 
//     },
//     {
//       title: "Jenna's Transformation",
//       subtitle: "Entrepreneur & High-Achiever | Sarasota, FL",
//       imageSrc: "/videos/jamie-im.png",
//       featureId: "cameras",
//       content: {
//         title: "Jenna's Transformation",
//         description: `
//         <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Jenna</strong> was driven and successful in business — but when it came to her health, she felt stuck.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I was constantly all-in or all-out. I knew how to hustle, but not how to take care of myself consistently."
//   </p>
//   <p class="mb-4">
//     She didn't need more discipline — she needed a <strong>sustainable strategy</strong>.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Jenna joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✅ Custom workouts that fit her intense schedule</li>
//     <li>✅ Nutrition that felt doable and flexible</li>
//     <li>✅ Real-time coaching and daily accountability</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "It felt tailored to me — not just physically, but mentally too."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Lean muscle and visible definition</li>
//     <li>⚡ Improved energy and focus for both business and life</li>
//     <li>💫 No more burnout — just balance</li>
//     <li>📆 Habits she can sustain for the long term</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I didn't lose myself trying to get fit — I became the strongest version of me."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Ready for Your Transformation?</h2>
//   <p class="mb-4">
//     If you're successful everywhere except your health — it's time for a program designed for women like you.
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>
//         `
//       } 
//     },
//     {
//       title: "Sandra's Transformation",
//       subtitle: "Busy Professional | Sarasota, FL",
//       imageSrc: "/videos/claire-im.png",
//       featureId: "chip",
//       content: {
//         title: "Sandra's Transformation",
//         description: `
//           <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Sandra</strong> was working out regularly — but nothing was changing.<br />
//     No definition. No progress. No plan.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I was doing what I thought I should... but I wasn't seeing results."
//   </p>
//   <p class="mb-4">
//     She didn't need to try harder — she needed a smarter, more personalized approach.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Sandra joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✅ Custom training — in her home or gym</li>
//     <li>✅ Real-time coaching & accountability</li>
//     <li>✅ No extremes, just real results</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I actually started working out less — but smarter."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Leaner, stronger, more defined</li>
//     <li>💪 Less stress, more confidence</li>
//     <li>✨ No more starting over — it stuck</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "This fits into my life so easily. I'm not just working out — I'm finally changing."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Want Results Like This?</h2>
//   <p class="mb-4">
//     If you're tired of doing everything "right" and still getting nowhere — you don't need to hustle harder.<br />
//     You need a system built for you.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "This changed everything — not just my body, but my mindset."
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at PrestigeWomen'sCoaching.com
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>

//         `
//       } 
//     },
//     {
//       title: "Hannah's Transformation",
//       subtitle: "Working Professional & Dog Mom|Sarasota",
//       imageSrc: "/videos/beth-im.png",
//       featureId: "Beth",
//       content: {
//         title: "Hannah's Transformation",
//         description: `<section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Hannah</strong> was always on the go — traveling, working, living a fast-paced life — but her health and fitness were stuck on pause.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I felt frustrated with my body, disconnected from my routine, and tired of starting over."
//   </p>
//   <p class="mb-4">
//     She didn't need a rigid plan. She needed flexibility, structure, and support that actually fit her life.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Hannah joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✔ Flexible training — at home or on the road</li>
//     <li>✔ Smart, sustainable nutrition</li>
//     <li>✔ Personalized coaching & real accountability</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I didn't have to change my lifestyle — I just needed a plan that worked with it."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Leaner, more toned physique</li>
//     <li>💪 Strength and consistency that stuck</li>
//     <li>⚡ Better energy, less stress, more clarity</li>
//     <li>🌍 Able to travel without falling off track</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "This gave me confidence and structure without feeling restricted."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
//   <p class="mb-4">
//     If you're always on the go and feel like you "don't have time" to prioritize your body — this was made for you.
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at Prestige Women's Coaching
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>`
//       } 
//     },
//     {
//       title: "Rachel's Transformation",
//       subtitle: "Nurse, Mom of 3, & Former Athlete | Sarasota, FL",
//       imageSrc: "/videos/jamie-im.png",
//       featureId: "cameras",
//       content: {
//         title: "Rachel's Transformation",
//         description: `<section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Rachel</strong> had tried everything — gym memberships, fad diets, fitness challenges — but nothing ever stuck.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I'd always fall off. It felt like I was constantly starting over."
//   </p>
//   <p class="mb-4">
//     She didn't need another temporary plan. She needed a system that finally worked for her.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Rachel joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✅ At-home or gym training — on her time</li>
//     <li>✅ Daily accountability & expert guidance</li>
//     <li>✅ Real food, real flexibility, real results</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "It's not just about the workouts. It's the mindset shift. The consistency. That's what changed everything."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 18 lbs of fat lost</li>
//     <li>💪 Lean muscle gained</li>
//     <li>💃 Confidence through the roof</li>
//     <li>👩‍👧 Still present for her family — no sacrifices</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "I feel strong, I feel proud, and I'm not giving up time with my kids to get there."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
//   <p class="mb-4">
//     Tired of the cycle? Overwhelmed by fitness "noise"? Want a plan that fits your life and actually delivers?
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "This wasn't another program. This became part of who I am."
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at Prestige Women's Coaching
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>`
//     }
//     },
//     {
//       title: "Emily's Transformation",
//       subtitle: "Busy Executive & Mom | Sarasota, FL",
//       imageSrc: "/videos/emily-im.png",
//       featureId: "Emily",
//       content: {
//         title: "Emily's Transformation",
//         description: `
//         <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
//   <!-- Before -->
//   <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
//   <p class="mb-4">
//     <strong>Emily</strong> was managing a demanding job, travel, and the mental load of everyday life — and her own health kept slipping to the bottom of the list.
//   </p>
//   <p class="italic text-gray-600 mb-4">
//     "I just didn't feel like myself. I was tired, unmotivated, and nothing was working."
//   </p>
//   <p class="mb-4">
//     She didn't want a quick fix. She wanted a personalized, proven approach that fit her schedule — and her goals.
//   </p>

//   <!-- The Shift -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
//   <p class="mb-4">
//     Emily joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
//   </p>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>✔ Customized fitness on her terms — at home or on the go</li>
//     <li>✔ Nutrition she could actually stick to</li>
//     <li>✔ High-touch accountability and expert coaching every step of the way</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "The structure and support were exactly what I needed — and it actually fit into my life."
//   </p>

//   <!-- The Results -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
//   <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
//     <li>🔥 Leaner, more defined physique</li>
//     <li>⚡ Boosted energy, strength, and confidence</li>
//     <li>🧠 Clearer focus and better stress management</li>
//     <li>✅ Sustainable habits that finally stuck</li>
//   </ul>
//   <p class="italic text-gray-600 mb-4">
//     "This changed how I show up — in my body, at work, and for myself."
//   </p>

//   <!-- Call to Action -->
//   <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Want Results Like Emily's?</h2>
//   <p class="mb-4">
//     If you're done with burnout, crash plans, and inconsistent results — it's time to do it differently.
//   </p>
//   <div class="text-center mt-6">
//     <a
//       href="https://prestigewomenscoaching.com"
//       class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
//       target="_blank"
//     >
//       Apply Now at Prestige Women's Coaching
//     </a>
//     <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
//   </div>
// </section>
//         `
//     }
//   }
//   ]
  return(
     <div className="  text-white p-4 md:p-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        
            <FeatureCard
              title="Beth's Transformation"
              subtitle="Working Professional & Dog Mom|Sarasota"
              imageSrc="/videos/beth-im.png"
              featureId="Beth"
              content={{
                title: "Beth's Transformation",
                description: `
                  <h3>Before:</h3>
                  <p>
                    Beth was spinning her wheels — bouncing between workout programs, trying to "clean eat," and constantly starting over.
                    <br />
                    "I felt like I was doing everything right... but nothing was changing."
                  </p>
                  <p>
                    Her routine lacked structure, and her motivation faded fast without accountability. She didn't want a fitness trend — she wanted a real, lasting transformation.
                  </p>
              
                  <h3>The Shift:</h3>
                  <p>
                    Beth joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
                  </p>
                  <ul>
                    <li>✔ A personalized plan that fit her lifestyle</li>
                    <li>✔ 1-on-1 coaching with real support and strategy</li>
                    <li>✔ Nutrition that felt freeing, not restrictive</li>
                  </ul>
                  <blockquote>
                    "I finally stopped guessing — and started seeing results."
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Leaner, stronger, and more confident in her skin</li>
                    <li>🔥 Clearer mindset and less stress</li>
                    <li>🔥 No more starting over — this stuck</li>
                  </ul>
                  <blockquote>
                    "This isn't a quick fix. It's a lifestyle that works — and I actually enjoy it."
                  </blockquote>
              
                  <h3>Your Turn?</h3>
                  <p>
                    If you're tired of spinning your wheels and ready to feel strong, confident, and in control — we're here for you.
                  </p>
                  <p>
                    <strong>Train Where You Want. Transform How You Deserve.</strong>
                  </p>
                   <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
            <FeatureCard
              title="Jamie's Transformation"
              subtitle="Nurse, Mom of 3| Sarasota, FL"
              bgColor="bg-white"
              imageSrc="/videos/jamie-im.png"
              featureId="cameras"
              content={{
                title: "Jamie's Transformation",
                description: `
                  <h3>Jamie's Transformation</h3>
                  <p><em>Nurse, Mom of 3| Sarasota, FL</em></p>
              
                  <h3>Before:</h3>
                  <p>
                    Jamie knew how to work hard. She was a nurse, a mom of three, and had been an athlete her whole life.
                    But after years of putting herself last, she didn't recognize her body anymore.
                  </p>
                  <blockquote>
                    "I didn't feel like me. I had lost my strength, my energy, and my confidence."
                  </blockquote>
                  <p>
                    She wasn't looking for a quick fix. She wanted to feel like herself again — strong, capable, and proud.
                  </p>
              
                  <h3>The Shift:</h3>
                  <p>
                    Jamie joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
                  </p>
                  <ul>
                    <li>✅ Personalized workouts she could do from home</li>
                    <li>✅ Nutrition that didn't mean cooking separate meals</li>
                    <li>✅ Real accountability from a coach who understood her life</li>
                  </ul>
                  <blockquote>
                    "This gave me structure without the pressure. I finally had a coach in my corner who got it."
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Lost 15+ lbs of body fat over 6 months</li>
                    <li>🔥 Regained lean muscle and athletic tone</li>
                    <li>🔥 Felt more energetic, confident, and capable than she had in years</li>
                    <li>🧒 All while balancing a demanding job and raising three kids</li>
                  </ul>
                  <blockquote>
                    "I feel strong again — mentally and physically. I'm showing up better for myself and my family."
                  </blockquote>
              
                  <h3>Is This You Too?</h3>
                  <p>
                    If you've been putting everyone else first — and losing yourself in the process — it's time to change that.
                  </p>
                  <blockquote>
                    "This wasn't just fitness. It was a full transformation — inside and out."
                  </blockquote>
                  <p>
                    <strong>Apply now to Prestige Women's Coaching.</strong><br />
                    Train where you want. Transform how you deserve.
                  </p>
                   <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
          
          
            <FeatureCard
              title="Claire's Transformation"
              subtitle="Commercial Real Estate Agent & Dog Mom | Sarasota, FL"
              bgColor="bg-black"
              featureId="chip"
              imageSrc="/videos/claire-im.png"
              content={{
                title: "Claire's Transformation",
                description: `
                  <h3>Claire's Transformation</h3>
                  <p><em>Commercial Real Estate Agent & Dog Mom | Sarasota, FL</em></p>
              
                  <h3>Before:</h3>
                  <p>
                    Claire's career was booming — closing deals, managing clients, and constantly on the move.
                    But behind her sharp appearance and packed calendar, she felt exhausted, out of shape, and disconnected from her body.
                  </p>
                  <blockquote>
                    "I was great at taking care of business — but terrible at taking care of myself."
                  </blockquote>
              
                  <h3>The Shift:</h3>
                  <p>
                    Claire joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
                  </p>
                  <ul>
                    <li>✅ Personalized fitness coaching that traveled with her lifestyle</li>
                    <li>✅ Realistic nutrition — no meal prep marathons or food guilt</li>
                    <li>✅ Daily accountability that kept her on track, even during her busiest weeks</li>
                  </ul>
                  <blockquote>
                    "It gave me structure and support without being overwhelming. I needed that."
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Lost 14 lbs of body fat in 6 months</li>
                    <li>🔥 Gained visible muscle tone and confidence</li>
                    <li>🔥 Felt mentally sharper, calmer, and more grounded</li>
                    <li>🔥 Kept crushing it at work — while finally feeling amazing in her skin</li>
                  </ul>
                  <blockquote>
                    "I used to fake confidence with clothes. Now I feel it — in and out of them."
                  </blockquote>
              
                  <h3>Is This You Too?</h3>
                  <p>
                    If you're successful on paper but secretly struggling with energy, confidence, or consistency...<br />
                    You don't need a crash diet or another gym challenge.
                  </p>
                  <p><strong>You need a program built for women like you.</strong></p>
                  <blockquote>
                    "This didn't just change my body. It gave me back control of my life."
                  </blockquote>
              
                  <p>
                    <strong>Apply now to Prestige Women's Coaching.</strong><br />
                    Train where you want. Transform how you deserve.
                  </p>
                     <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
            <FeatureCard
              title="Crystal's Transformation"
              subtitle="Tech Professional & Mom of Two | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/crystal-im.png"
              content={{
                title: "Crystal's Transformation",
                description: `
                  <h3>Crystal's Transformation</h3>
                  <p><em>Tech Professional & Mom of Two | Sarasota, FL</em></p>
              
                  <h3>Before:</h3>
                  <p>
                    Crystal had a thriving career in tech, earning six figures and managing major projects — but behind the scenes, she felt off.
                    Her energy was low, her body didn't feel like hers anymore, and her confidence had taken a hit.
                  </p>
                  <blockquote>
                    "I had the job, the income, the life on paper... but I felt completely disconnected from myself."
                  </blockquote>
              
                  <h3>The Shift:</h3>
                  <p>
                    Crystal joined <strong>The Ultimate Women's Transformation Experience</strong> by Prestige Women's Coaching.
                  </p>
                  <ul>
                    <li>✅ Efficient, customized workouts that fit her work and mom schedule</li>
                    <li>✅ Flexible nutrition — no crash diets, no meal prep marathons</li>
                    <li>✅ Daily coaching and support that actually worked with her lifestyle</li>
                  </ul>
                  <blockquote>
                    "It wasn't overwhelming — it was sustainable. And that's why it finally worked."
                  </blockquote>
              
                  <h3>The Results:</h3>
                  <ul>
                    <li>🔥 Lost 16 lbs of body fat in 6 months</li>
                    <li>🔥 Gained lean muscle and definition</li>
                    <li>🔥 More focus, better sleep, higher energy</li>
                    <li>🔥 Thriving at work and confident in her body again</li>
                  </ul>
                  <blockquote>
                    "I feel like I'm finally living in alignment — strong, focused, and proud."
                  </blockquote>
              
                  <h3>Is This You Too?</h3>
                  <p>
                    If you're succeeding in your career but silently struggling with your body and energy...
                    You don't need another workout app.
                  </p>
                  <p><strong>You need a solution built for high-performing women — just like you.</strong></p>
                  <blockquote>
                    "This wasn't just a glow-up. It was a reset for every part of my life."
                  </blockquote>
              
                  <p>
                    <strong>Apply now to Prestige Women's Coaching.</strong><br />
                    Train where you want. Transform how you deserve.
                  </p>
                   <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
          
          
          
            <FeatureCard
              title="Alexis's Transformation"
              subtitle="Busy Healthcare Professional | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/alexis-im.png"
              content={{
                title: "Alexis's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    Between long shifts, stress, and taking care of others, <strong>Alexis</strong> had almost no time or energy to focus on herself.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I felt stuck in a cycle — always tired, low confidence, no structure."
  </p>
  <p class="mb-4">
    She tried to make fitness work on her own but was overwhelmed and inconsistent.
    She didn't need another intense program — she needed something <strong>sustainable</strong>.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Alexis joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✔ Custom workouts delivered to her schedule</li>
    <li>✔ Nutrition built around her busy life (no strict diets)</li>
    <li>✔ 1:1 coaching + real accountability that kept her on track</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "It wasn't about being perfect — it was about being consistent and supported."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Lost body fat + gained visible strength</li>
    <li>💪 Felt stronger, leaner, and proud of her progress</li>
    <li>🌟 Rebuilt her confidence and clarity</li>
    <li>🕒 Found a routine that fits — and sticks</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This gave me back control. I didn't just transform physically — it changed my mindset."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">If This Sounds Like You...</h2>
  <p class="mb-4">
    If you're busy, burnt out, or feel like you've tried everything — this program was built for women like Alexis.
  </p>
  <p class="mb-4">
    You don't need to do more. You need a plan that works for <strong>you</strong>.
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train Where You Want. Transform How You Deserve.</p>
  </div>
</section>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
          
          
          
            <FeatureCard
              title="Freya's Transformation"
              subtitle="Creative Entrepreneur & Mom | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/freya-im.png"
              content={{
                title: "Freya's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Freya</strong> was juggling a business, motherhood, and a million daily responsibilities — and her health kept falling to the bottom of the list.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I felt burnt out, uncomfortable in my body, and honestly, just disconnected from myself."
  </p>
  <p class="mb-4">
    She didn't want a bootcamp. She wanted <strong>balance</strong>.
    She wanted to feel strong, focused, and in control again.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Freya joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✅ Training on her time — at home or at the gym</li>
    <li>✅ Nutrition that supported her lifestyle (and still included wine nights 🍷)</li>
    <li>✅ Ongoing coaching and daily check-ins that kept her consistent</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This wasn't overwhelming — it was sustainable. And that's why it worked."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Dropped 14 lbs of body fat over 6 months</li>
    <li>💪 Gained muscle definition and energy</li>
    <li>🧠 Felt clear-headed, motivated, and back in charge</li>
    <li>🧒 Stayed present for her family — no strict diets or hours in the gym</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I feel grounded, strong, and finally proud of the way I'm taking care of myself."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
  <p class="mb-4">
    If you're busy, burnt out, and tired of starting over — this is for you.
  </p>
  <p class="mb-4">
    You don't need another program. You need one that works for <strong>your life</strong>.
  </p>
  <p class="italic text-gray-600 mb-6">
    "I didn't lose myself to get fit — I found myself again."
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
          
          
          
            <FeatureCard
              title="Madison's Transformation"
              subtitle="Corporate Consultant & Wellness Seeker | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/madison.png"
              content={{
                title: "Madison's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Madison</strong> had tried different programs, routines, and "reset Mondays" — but nothing stuck.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I was doing all the right things, but I wasn't seeing results. I didn't feel confident or in control."
  </p>
  <p class="mb-4">
    She didn't want extremes — she wanted <strong>education</strong>, <strong>structure</strong>, and a <strong>system that worked</strong>.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Madison joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✔ Personalized workouts — home or gym</li>
    <li>✔ Flexible nutrition with real guidance</li>
    <li>✔ 1-on-1 support and mindset coaching that made the difference</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This wasn't just a plan — it taught me how to take care of myself."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Lost inches and gained definition</li>
    <li>💪 Felt stronger, energized, and more empowered</li>
    <li>🥗 Developed a healthier relationship with food and her body</li>
    <li>✅ Built habits she's now confident maintaining for life</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I finally feel like I know what I'm doing — and I love how I feel."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Sound Familiar?</h2>
  <p class="mb-4">
    If you're tired of guessing, starting over, or doing it all without results — this is the difference.
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train Where You Want. Transform How You Deserve.</p>
  </div>
</section>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
          
          
          
            <FeatureCard
              title="Larissa's Transformation"
              subtitle="Entrepreneur | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/larissa-im.png"
              content={{
                title: "Larissa's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Larissa</strong> had tried countless programs — but nothing ever stuck. <br />
    She was tired of the yo-yo cycle and feeling frustrated in her own skin.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I was tired of starting over every Monday... I just couldn't stay consistent."
  </p>
  <p class="mb-4">
    She didn't need more motivation. <br />
    She needed <strong>structure</strong>, <strong>support</strong>, and a <strong>system that fit her life</strong>.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Larissa joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✅ Customized workouts in her home or gym</li>
    <li>✅ Real-time accountability from a coach who actually cared</li>
    <li>✅ Nutrition that worked with her family and schedule</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I finally had a plan that wasn't overwhelming. It was doable — and it worked."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Lost over 18 lbs of body fat in 6 months</li>
    <li>🔥 Gained lean muscle and visible tone</li>
    <li>⚡ More energy, less stress, and renewed confidence</li>
    <li>👨‍👩‍👧 Present for her family — no crazy schedules or restrictions</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I look in the mirror now and feel proud of who I see."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
  <p class="mb-2">You're not lazy. <br /> You're not broken.</p>
  <p class="mb-4">You just need a program designed for <strong>you</strong> — one that actually works.</p>
  <p class="italic text-gray-600 mb-4">
    "This wasn't just a fitness program. It changed my lifestyle — and my mindset."
  </p>

  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }}
            />
          
          
          
            <FeatureCard
              title="Jenna's Transformation"
              subtitle="Entrepreneur & High-Achiever | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/jenna-im.png"
              content={{  
                title: "Jenna's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Jenna</strong> was driven and successful in business — but when it came to her health, she felt stuck.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I was constantly all-in or all-out. I knew how to hustle, but not how to take care of myself consistently."
  </p>
  <p class="mb-4">
    She didn't need more discipline — she needed a <strong>sustainable strategy</strong>.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Jenna joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✅ Custom workouts that fit her intense schedule</li>
    <li>✅ Nutrition that felt doable and flexible</li>
    <li>✅ Real-time coaching and daily accountability</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "It felt tailored to me — not just physically, but mentally too."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Lean muscle and visible definition</li>
    <li>⚡ Improved energy and focus for both business and life</li>
    <li>💫 No more burnout — just balance</li>
    <li>📆 Habits she can sustain for the long term</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I didn't lose myself trying to get fit — I became the strongest version of me."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Ready for Your Transformation?</h2>
  <p class="mb-4">
    If you're successful everywhere except your health — it's time for a program designed for women like you.
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }} 
            />
          
          
          
            <FeatureCard
              title="Sandra's Transformation"
              subtitle="Busy Professional | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/sandra-im.png"
              content={{  
                title: "Sandra's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Sandra</strong> was working out regularly — but nothing was changing.<br />
    No definition. No progress. No plan.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I was doing what I thought I should... but I wasn't seeing results."
  </p>
  <p class="mb-4">
    She didn't need to try harder — she needed a smarter, more personalized approach.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Sandra joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✅ Custom training — in her home or gym</li>
    <li>✅ Real-time coaching & accountability</li>
    <li>✅ No extremes, just real results</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I actually started working out less — but smarter."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Leaner, stronger, more defined</li>
    <li>💪 Less stress, more confidence</li>
    <li>✨ No more starting over — it stuck</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This fits into my life so easily. I'm not just working out — I'm finally changing."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Want Results Like This?</h2>
  <p class="mb-4">
    If you're tired of doing everything "right" and still getting nowhere — you don't need to hustle harder.<br />
    You need a system built for you.
  </p>
  <p class="italic text-gray-600 mb-4">
    "This changed everything — not just my body, but my mindset."
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at PrestigeWomen'sCoaching.com
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>

                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }} 
            />
         
          
          
            <FeatureCard
              title="Hannah's Transformation"
              subtitle="Busy Creative & Traveler | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/hannah-im.png"
              content={{  
                title: "Hannah's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Hannah</strong> was always on the go — traveling, working, living a fast-paced life — but her health and fitness were stuck on pause.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I felt frustrated with my body, disconnected from my routine, and tired of starting over."
  </p>
  <p class="mb-4">
    She didn't need a rigid plan. She needed flexibility, structure, and support that actually fit her life.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Hannah joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✔ Flexible training — at home or on the road</li>
    <li>✔ Smart, sustainable nutrition</li>
    <li>✔ Personalized coaching & real accountability</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I didn't have to change my lifestyle — I just needed a plan that worked with it."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Leaner, more toned physique</li>
    <li>💪 Strength and consistency that stuck</li>
    <li>⚡ Better energy, less stress, more clarity</li>
    <li>🌍 Able to travel without falling off track</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This gave me confidence and structure without feeling restricted."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
  <p class="mb-4">
    If you're always on the go and feel like you "don't have time" to prioritize your body — this was made for you.
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at Prestige Women's Coaching
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>


                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }} 
            />
        
            <FeatureCard
              title="Rachel's Transformation"
              subtitle="Busy Mom &  Working Professional | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/rachel-im.png"
              content={{  
                title: "Rachel's Transformation",
                description: `
                  <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Rachel</strong> had tried everything — gym memberships, fad diets, fitness challenges — but nothing ever stuck.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I'd always fall off. It felt like I was constantly starting over."
  </p>
  <p class="mb-4">
    She didn't need another temporary plan. She needed a system that finally worked for her.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Rachel joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✅ At-home or gym training — on her time</li>
    <li>✅ Daily accountability & expert guidance</li>
    <li>✅ Real food, real flexibility, real results</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "It's not just about the workouts. It's the mindset shift. The consistency. That's what changed everything."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 18 lbs of fat lost</li>
    <li>💪 Lean muscle gained</li>
    <li>💃 Confidence through the roof</li>
    <li>👩‍👧 Still present for her family — no sacrifices</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I feel strong, I feel proud, and I'm not giving up time with my kids to get there."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Is This You Too?</h2>
  <p class="mb-4">
    Tired of the cycle? Overwhelmed by fitness "noise"? Want a plan that fits your life and actually delivers?
  </p>
  <p class="italic text-gray-600 mb-4">
    "This wasn't another program. This became part of who I am."
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at Prestige Women's Coaching
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>
                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }} 
            />
            <FeatureCard
              title="Emily's Transformation"
              subtitle="Corporate Professional | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/emily-im.png"
              content={{  
                title: "Emily's Transformation",
                description: `
     <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Emily</strong> was managing a demanding job, travel, and the mental load of everyday life — and her own health kept slipping to the bottom of the list.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I just didn't feel like myself. I was tired, unmotivated, and nothing was working."
  </p>
  <p class="mb-4">
    She didn't want a quick fix. She wanted a personalized, proven approach that fit her schedule — and her goals.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Emily joined <strong>The Ultimate Women's Transformation Experience</strong> with <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✔ Customized fitness on her terms — at home or on the go</li>
    <li>✔ Nutrition she could actually stick to</li>
    <li>✔ High-touch accountability and expert coaching every step of the way</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "The structure and support were exactly what I needed — and it actually fit into my life."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Leaner, more defined physique</li>
    <li>⚡ Boosted energy, strength, and confidence</li>
    <li>🧠 Clearer focus and better stress management</li>
    <li>✅ Sustainable habits that finally stuck</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This changed how I show up — in my body, at work, and for myself."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">Want Results Like Emily's?</h2>
  <p class="mb-4">
    If you're done with burnout, crash plans, and inconsistent results — it's time to do it differently.
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at Prestige Women's Coaching
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>

                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }} 
            />
           
            <FeatureCard
              title="Sarah's Transformation"
              subtitle="Busy Executive & Mom | Sarasota, FL"
              bgColor="bg-white"
              textColor="text-white"
              featureId="design"
              imageSrc="/videos/sarah-im.png"
              content={{  
                title: "Sarah's Transformation",
                description: `
     <section class="w-full px-4 sm:px-6 py-8 max-w-3xl mx-auto text-gray-800">
  <!-- Before -->
  <h2 class="text-xl sm:text-2xl font-bold mb-4">Before</h2>
  <p class="mb-4">
    <strong>Sarah</strong> was juggling a high-pressure career and family life — and her own health kept getting pushed aside.
  </p>
  <p class="italic text-gray-600 mb-4">
    "I was constantly putting others first and felt like I was losing myself in the process."
  </p>
  <p class="mb-4">
    She didn't need another intense program. She needed a realistic, high-level solution that supported her schedule and her goals.
  </p>

  <!-- The Shift -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Shift</h2>
  <p class="mb-4">
    Sarah joined <strong>The Ultimate Women's Transformation Experience</strong> by <strong>Prestige Women's Coaching</strong>.
  </p>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>✔ Personalized strength training she could do at home</li>
    <li>✔ Balanced nutrition that didn't cut out joy</li>
    <li>✔ High-touch support, daily coaching, and mindset shifts</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "This gave me permission to focus on me — and taught me how to actually follow through."
  </p>

  <!-- The Results -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">The Results</h2>
  <ul class="list-disc list-inside mb-4 space-y-1 pl-4">
    <li>🔥 Dropped body fat and gained muscle definition</li>
    <li>⚡ Increased strength and energy for work and family</li>
    <li>💪 Rebuilt confidence and clarity</li>
    <li>✅ Created structure she could actually sustain</li>
  </ul>
  <p class="italic text-gray-600 mb-4">
    "I'm showing up better — as a mom, as a leader, and for myself."
  </p>

  <!-- Call to Action -->
  <h2 class="text-xl sm:text-2xl font-bold mt-8 mb-4">If You're a Woman Who Does it All...</h2>
  <p class="mb-4">
    And you're ready to finally feel like your best self again — this is your next step.
  </p>
  <div class="text-center mt-6">
    <a
      href="https://prestigewomenscoaching.com"
      class="inline-block w-full sm:w-auto bg-pink-600 hover:bg-pink-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
      target="_blank"
    >
      Apply Now at Prestige Women's Coaching
    </a>
    <p class="text-sm text-gray-500 mt-3">Train where you want. Transform how you deserve.</p>
  </div>
</section>

                `,
                imageSrc: "/placeholder.svg?height=600&width=400"
              }} 
            />
       </div>
     </div>
   </div>
    
     
    )
  
}

