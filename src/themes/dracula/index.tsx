import DataProps from '@interfaces/data';
import { Header } from './components/Header';
import { Montserrat } from '@next/font/google';
import { ListingWrapper } from './components/ListingWrapper';

const themeFont = Montserrat({ subsets: ['latin'] });
interface AlphaProps {
  data: DataProps;
}

function Dracula({ data }: AlphaProps) {
  const { user, categories, links } = data;
  return (
    <main
      className={`${themeFont.className} min-h-screen bg-dracula-background antialiased`}
    >
      <Header
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0547898817705259"
     crossorigin="anonymous"></script>
        fullname={user.fullname}
        role={user.role}
        socialLinks={user.socialLinks}
        image={user.image}
      />
      <ListingWrapper categories={categories} links={links} />
    </main>
  );
}

export { Dracula };
