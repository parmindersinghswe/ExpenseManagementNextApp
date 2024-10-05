import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import {unstable_setRequestLocale} from 'next-intl/server';
    
export default function HomePage({params: {locale}} : {params: {locale: string}}) {
    unstable_setRequestLocale(locale);
  const t = useTranslations('HomePage');
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href="/about">{t('about')}</Link>
    </div>
  );
}