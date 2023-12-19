import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import styles from './App.module.scss';
import { Link, Outlet } from "react-router-dom";
import logoPng from '@/assets/logo.png';
import firstScreenJpg from '@/assets/firstScreen.jpg';
import SendSvg from '@/assets/send.svg';
// Функция не попадет в итоговый бандл, так как не используется
// Tree shaking
function TODO() {
    console.log('kek');
}
export default function App() {
    var _a = useState(0), count = _a[0], setCount = _a[1];
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
    return (_jsxs("div", { className: styles["flex"], children: [_jsxs("h1", { children: ["PLATFORM=", __PLATFORM__] }), _jsxs("div", { children: [_jsx("img", { height: 100, src: logoPng, alt: "", style: { backgroundColor: '#000000' } }), _jsx("img", { height: 100, src: firstScreenJpg, alt: "" }), _jsx("div", { children: _jsx(SendSvg, { height: 100, width: 100, style: { color: 'red' }, fill: "red" }) })] }), _jsxs("div", { className: styles["menu"], children: [_jsx(Link, { to: '/about', children: "about" }), _jsx(Link, { to: '/shop', children: "shop" })] }), _jsx("div", { children: count }), _jsxs("div", { children: [_jsx("button", { className: styles.button, onClick: function () { return setCount(count + 1); }, children: "+" }), _jsx("button", { className: styles.button, onClick: function () { return setCount(count - 1); }, children: "-" })] }), _jsx(Outlet, {})] }));
}
