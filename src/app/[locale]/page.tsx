// import { useTranslations } from 'next-intl';
// import { unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: { locale: string };
};

export default function IndexPage({ params: { locale } }: Props) {
  // unstable_setRequestLocale(locale);

  // const t = useTranslations();
  // console.log(t('errors.404.title'));

  return (
    <p>Main</p>
  );
}
