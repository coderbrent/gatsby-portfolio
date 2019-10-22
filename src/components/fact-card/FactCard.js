import React from 'react';
import fcStyles from '../fact-card/FactCard.module.css'

const FactCard = () => (
  <>
    <div className={fcStyles.factCard}>
      <p className={fcStyles.factBodyHeader}>
        Need to reach me?
      </p>
        <ul>
          <li className="check">
            <span>e: brent.abruzese@gmail.com</span>
          </li>
          <li className="check">
            <span>c: (848) 213-2522</span>
          </li>
          <li className="check">
            <span>download my resume!</span>
          </li>
        </ul>
    </div>
  </>
)

export default FactCard;