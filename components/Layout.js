import Head from "next/head";

const Layout = ({ children, title = "Vegenta" }) => {
  return (
    <div className="w-full justify-center items-center min-h-screen lg:h-full lg:w-10/12">
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Anime Streaming Site Website Build with Nextjs and vegenta's API. It is fast and easy to deploy to the web."
        />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
