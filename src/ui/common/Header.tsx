import { PageHeader } from 'antd';

const Header = () => {
  return (
    <header className='header'>
      <PageHeader
        className="site-page-header"
        title="NASA Media Library"
        avatar={{
          src: process.env.PUBLIC_URL + "logo.png",
        }}
      />
    </header>
  );
};

export default Header;