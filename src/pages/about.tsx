import React from 'react'
import Layout from '@theme/Layout'
import Card from '../components/Card'


function About() {
    // Define an array of objects for each card
    const SweeTenTeam = [
        { name: 'Valeri Mihail', surname: 'Belenkov', mat: '2068232', mail: 'valeri.belenkov@example.com' },
        { name: 'Davide', surname: 'Benedetti', mat: '2042339', mail: 'davide.benedetti@example.com' },
        { name: 'Matteo', surname: 'Campagnaro', mat: '2068243', mail: 'matteo.campagnaro@example.com' },
        { name: 'Orlando', surname: 'Ferazzani', mat: '2058653', mail: 'orlando.ferazzani@example.com' },
        { name: 'Nicolas', surname: 'Fracaro', mat: '2076420', mail: 'nicolas.fracaro@example.com' },
        { name: 'Mouad', surname: 'Mahdi', mat: '2044222', mail: 'mouad.mahdi@example.com' },
        { name: 'Andrea', surname: 'Santi', mat: '2084624', mail: 'andrea.santi@example.com' }
    ];


    return (
        <Layout>
            <main id='about-main'>
                <section>
                    <h2 className='titleH'>SweeTen Team</h2>
                    <p className='par'>Gruppo 10 del progetto di Ingegneria del Software dell'Università Di Padova. A./A. 2024/2025 </p>
                </section>

                <section>
                    <h4 className='titleH'>Il Capitolato</h4>
                    <p className='par'>Il gruppo ha scelto il Capitolato C9, proposto da <a href="https://www.azzurrodigitale.com/">Azzurro Digitale</a>. Il progetto consiste nello sviluppo di BuddyBot, un ChatBot interno che aiuti i dipendenti in varie task.</p>
                    <br />
                    <p className='par'>Una descrizione più dettagliata si può trovare visionando il pdf di presentazione del capitolato <a href='https://www.math.unipd.it/~tullio/IS-1/2024/Progetto/C9p.pdf'>qui</a>.</p>
                </section>
                <div id='card-container'>
                    {SweeTenTeam.map((person, index) => (
                        <Card
                            key={index}
                            name={person.name}
                            surname={person.surname}
                            mail={person.mail} mat={''} />
                    ))}
                </div>

                <div className='Contatti'>
                    <h2 className='titleH'>Contatti</h2>
                    <p className='par'>Per contattarci usare la mail di riferimento del gruppo: <a href='mailto:sweetenteam@gmail.com'>sweetenteam@gmail.com</a></p>

                </div>
            </main>

        </Layout>
    );
}

export default About;