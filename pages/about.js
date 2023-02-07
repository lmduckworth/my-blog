import Image from 'next/image'
import profilePic from '../public/2022_01-Duckworth_Lee-noBg.png'

export default function About() {
  return (
    <>
      <h1 className="text-3xl lg:text-5xl text-center mb-12">
        About me
      </h1>
      <Image
        src={profilePic}
        alt="Picture of Lee"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <p>Hello, I'm Lee. I'm a web developer from Astley, Greater Manchester.</p>

      <p>I work full time for CPL Group where I've worked for over 15 years.</p>

      <p>I lead a small team, handling the web and IT requirements for the company.</p>

      <p>In my spare time I help others</p>

      <h2>Skills</h2>

      <ul class="list-disc list-inside">
        <li>Laravel</li>
        <li>HTML</li>
      </ul>

      <p>Recently I've been playing around with React and NextJS, including the site you're on.</p>

    </>
  )
}