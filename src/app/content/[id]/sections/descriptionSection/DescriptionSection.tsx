import Image from 'next/image'

import { detail } from '@/mocks'

import * as styles from './DescriptionSection.css'

const DescriptionSection = () => {
  const { detail: describe, posterImage } = detail

  return (
    <section className={styles.descriptionContainer}>
      <p className={styles.descriptionText}>{describe}</p>
      <Image src={posterImage} alt="영화 포스터" width={267} height={385} />
    </section>
  )
}

export default DescriptionSection
