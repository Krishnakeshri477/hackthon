import { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    const initGoogleTranslate = () => {
      if (!window.google || !window.google.translate) return;

      if (!document.getElementById('google_translate_container')) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,ta,te,bn,ml,gu,mr,pa',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      }
    };

    if (!document.getElementById('google-translate-script')) {
      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    window.googleTranslateElementInit = initGoogleTranslate;
  }, []);

  return <div id="google_translate_element" />;
};

export default GoogleTranslate;
