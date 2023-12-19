import React, { useState } from "react";
import styles from './App.module.scss'
import { Link, Outlet } from "react-router-dom";
import logoPng from '@/assets/logo.png'
import firstScreenJpg from '@/assets/firstScreen.jpg'
import SendSvg from '@/assets/send.svg'

// Функция не попадет в итоговый бандл, так как не используется
// Tree shaking
function TODO() {
  console.log('kek')
}

export default function App() {
  const [count, setCount] = useState(0);

  // // При сборке с __PLATFORM__ === 'desktop' второй if будет удален из сборки, что позволяет
  // // Делать различные билды для мобильной и десктопной версий как в этом примере
  // // Допустим, раздавать их потом с разных url
  // // Эта оптимизация называется Tree shaking
  // if (__PLATFORM__ === 'desktop') {
  //   return <div>MOBILE_PLATFORM</div>
  // }
  // if (__PLATFORM__ === 'mobile') {
  //   return <div>MOBILE_PLATFORM</div>
  // }

  return (
    <div data-testid={'App.DataTest'} className={styles["flex"]}>
      <h1>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img height={100} src={logoPng} alt=""  style={{backgroundColor: '#000000'}}/>
        <img height={100}  src={firstScreenJpg} alt=""  />
        <div>
          <SendSvg height={100} width={100} style={{color: 'red'}} fill="red"/>
        </div>
      </div>
      <div className={styles["menu"]}>
      <Link to={'/about'}>about</Link>
      <Link to={'/shop'}>shop</Link>
      </div>
      <div>{count}</div>
      <div>
        <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
        <button className={styles.button} onClick={() => setCount(count - 1 )}>-</button>
      </div>
      <Outlet/>
    </div>
  );
}
