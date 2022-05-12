import React from 'react';
import guru from '../bollywood/guru.jpeg';
import teachers from '../bollywood/teachers.jpeg';
import './AboutUs.css';

export const AboutUs = () => (
    <div>
        <section>
        <h2>Meet our Guru</h2>
        <img src={guru} alt="our teacher also known as Guruji" class="center"/>
        <p>Sudha Grover(right) is the Founder and Director of Sudhamini Dance Academy, established in 1985.
            She has studied many styles of classical Indian dance, including Kathak, Manipuri, and folk and the renowned Gandharva Mahavidyalaya in New Delhi.
            She learned Odissi from the acclaimed Guru Harekrishna Behera, one of the foremost exponents of Odissi, credited with helping the dance form flourish in India’s capital.</p>
            <br/>
        <p>An internationally reknowned dancer, Sudha is also an innovative choreographer, having directed a number of acclaimed dance dramas in the Odissi style.
            She has choreographed and played the lead role of several Rabindranath Tagore’s dance dramas such as Basab Datta, Mayar Khella, and Chitragranda.
            Sudha also has the unique honor of having taken a troupe to India for workshops and highly acclaimed performances in Delhi, Agra, Odisha, and cities across NJ & NY.
            Her students perform at numerous competitions and charity events every year.
            Over the years, she is proud to have presented over fifty students in their solo dance debuts, or Manch Pravesh.</p>

        <h2>Teacher Assistants: Pavisha & Shaili </h2>
        <img src={teachers} alt="Student Teachers" class="center"/>
        <p> Meet Pavisha (on the right) and Shaili (on the left). They have been dancing with Sudhamini Dance Academy for 16 years now! They learned from Guru Sudha at a very young age and loved it.
            Growing up dancing together has made them better at dancing and being the best of friends. Here are little snippets of what they want to say to Guru Sudha.</p>
            <br/>
        <p>“Sudhamini Dance Academy will always be a second home to be and dancing will always be my passion thanks to Sudha Aunty, our Guru. None of it would have been possible without her as she always helps all her dancers perfect themselves in every shape and form.” - Pavisha</p>
            <br/>
        <p>"Ever since I was a little girl, I knew dance would be a part of my life, but I never realized how much of an impact it would have on me. At five years old, I joined Sudhamini Dance Academy, excited to join the team.
            Originally, it was Bollywood music that I loved so much. But as I matured, I found a new admiration for the culture represented through Odissi. Through the years, precision and balance became a part of my daily routine and formed me as the adult and dancer I have grown into.“ - Shaili</p>
        </section>
    </div>
)