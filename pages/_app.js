import '../styles/globals.css'
import { AuthContextProvider } from '../context/AuthUserContext';
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress'; //nprogress module
import 'nprogress/nprogress.css'; //styles of nprogress

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.onload = (event) => {
      console.log('The page has fully loaded');
  }

    window.OneSignal = window.OneSignal || [];
    OneSignal.push(function () {
        OneSignal.init({
          appId: "a3bd770d-87bd-4442-a58e-7f64d027df96",
          safari_web_id: "web.onesignal.auto.27d2eba6-7621-43e8-b8d4-d2a9de3b8fea",
// Your other init options here
notifyButton: {
    enable: true, /* Required to use the Subscription Bell */
    size: 'large', /* One of 'small', 'medium', or 'large' */
    theme: 'inverse', /* One of 'default' (red-white) or 'inverse" (white-red) */
    position: 'bottom-right', /* Either 'bottom-left' or 'bottom-right' */
    offset: {
        top: '20px',
        left: '20px', /* Only applied if bottom-left */
        right: '32px' /* Only applied if bottom-right */
    },
    colors: { // Customize the colors of the main button and dialog popup button
      'circle.background': 'rgb(84,110,123)',
      'circle.foreground': 'white',
      'badge.background': 'rgb(84,110,123)',
      'badge.foreground': 'white',
      'badge.bordercolor': 'white',
      'pulse.color': 'white',
      'dialog.button.background.hovering': 'rgb(77, 101, 113)',
      'dialog.button.background.active': 'rgb(70, 92, 103)',
      'dialog.button.background': 'rgb(84,110,123)',
      'dialog.button.foreground': 'white'
    },
    showCredit: false, /* Hide the OneSignal logo */
    text: {
        'tip.state.unsubscribed': 'Subscribe to notifications',
        'tip.state.subscribed': "You're subscribed to notifications",
        'tip.state.blocked': "You've blocked notifications",
        'message.prenotify': 'Click to subscribe to notifications',
        'message.action.subscribed': "Thanks for subscribing!",
        'message.action.resubscribed': "You're subscribed to notifications",
        'message.action.unsubscribed': "You won't receive notifications again",
        'dialog.main.title': 'Manage Site Notifications',
        'dialog.main.button.subscribe': 'SUBSCRIBE',
        'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
        'dialog.blocked.title': 'Unblock Notifications',
        'dialog.blocked.message': "Follow these instructions to allow notifications:"
    }
},

            allowLocalhostAsSecureOrigin: true,
        });
    });

    return () => {
        window.OneSignal = undefined;
    };
}, []);

// Hide splash screen shen we are server side 
   useEffect(() => {
        if (typeof window !== 'undefined') {
                const loader = document.getElementById('globalLoader');
            if (loader)
                loader.style.display = 'none';
        }
    }, []);
//Binding events. 
Router.events.on('routeChangeStart', () => NProgress.start());
 Router.events.on('routeChangeComplete', () => NProgress.done()); 
  Router.events.on('routeChangeError', () => NProgress.done());
  
  return <AuthContextProvider><Component {...pageProps} /></AuthContextProvider>
}

export default MyApp
