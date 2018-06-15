'use strict'

import React, { Fragment } from 'react'
import Header from '../shared/components/header'
import { initStore } from '../shared/store'
import withRematch from '../shared/utils/withRematch'

const Home = () => <Fragment>
  <Header title='Accueil' />
  <section className='section'>
    <div className='container'>
      <div className='content'>
        <div className='columns'>
          <div className='column'>
            <h2>Prototype</h2>
            <p>
              <b>ATTENTION</b> Pour tester ce site, ne rechargez pas la page
              à moins de vouloir remettre les valeurs à neufs.
              Les données ne sont ni transmises, ni sauvegardées.
            </p>
            <p>
              <b>Il ne s’agit que d’une démonstration éphémère</b>.
            </p>
          </div>
          <div className='column'>
            <h2>Mode d’emploi</h2>
            <p>
              Le <code>login</code> est facultatif.
              On doit spécifier un mot de passe, n’importe lequel.
            </p>
            <p>
              N’importe qui peut (pour le moment) créer des items
              (<i>gift</i>, volontaire, org) et seul un volontaire
              peut échanger des heures contre un <i>gift</i>.
            </p>
            <p>
              Quand un volontaire échange des heures pour un <i>gift</i>,
              ce dernier disparait du magasin mais sera visible
              sur le profil du volontaire et sur l’admin des <i>gifts</i>{' '}
              et le temps sera débité du profil du volontaire.
            </p>
          </div>
          <div className='column'>
            <h2>Roadmap (pour Robin)</h2>
            <ul>
              <li>Confirmer les heures des volontaires (org)</li>
              <li>Marquer leurs heures par org (volontaire)</li>
              <li>Logout (update volontaires)</li>
              <li><i>Franglais much?</i></li>
              <li>Backend éventuel (base de données)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</Fragment>

export default withRematch(initStore)(Home)
