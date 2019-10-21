import React from 'react';
import fcStyles from '../fact-card/FactCard.module.css'

const FactCard = () => (
  <>
    <div className={fcStyles.factCard}>
      <p className={fcStyles.factBodyHeader}>
        Some fun facts about my portfolio...
      </p>
        <ul>
          <li className="check">
            Built in Gatsby
          </li>
          <li className="check">
            NO Bootstrap!
          </li>
          <li className="check">
            Totally accessible!
          </li>
        </ul>
    </div>
  </>
)

export default FactCard;