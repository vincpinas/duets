import { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import { useLanguageContext } from '../Language/LanguageProvider';

function Helmet() {
  const { dict } = useLanguageContext();

  const location = useLocation();
  const title = "Duets";
  const seperator = String.fromCharCode(0x2022) + " " + title;
  const locations = [
    { url: `/room`, title: `` },
    { url: `/`, title: `${dict.helmet.join} ${seperator}` },
  ]

  useEffect(() => {
    document.title = (() => {
      let returnValue = title;

      locations.forEach(loc => {
        if (loc.url.includes(location.pathname)) returnValue = loc.title
      });

      return returnValue ? returnValue : title
    })();
  }, [location, dict]);

  return null;
}

export default Helmet;
