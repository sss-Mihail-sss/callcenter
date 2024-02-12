import Link from 'next/link';
import { getTranslations } from 'next-intl/server';

export default async function NotFound() {
  const t = await getTranslations();

  return (
    <div>
      <h2>{t('errors.404.title')}.</h2>
      <p>{t('errors.404.description')}.</p>
      <Link href="/">
        <button type="button">{t('button.returnToMain')}</button>
      </Link>
    </div>
  );
}
