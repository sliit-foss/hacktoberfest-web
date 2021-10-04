import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string;
}

const Layout = ({
  children,
  title,
  description,
  image,
}: LayoutProps): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title || "Hacktoberfest 2021"}</title>
        <meta
          name="description"
          content={description || "description goes here"}
        />
        <meta name="image" content={image || "/hacktoberfest-web/favicon.png"} />
        <meta property="og:title" content={title || "Hacktoberfest 2021"} />
        <meta property="og:description" content="Open Hack Day is Sri Lanka's official Hacktoberfest event, organized by GitHub Campus Experts of Sri Lanka in collaboration with Open Source Communities in Sri Lanka." />
        <meta property="og:image" content={image || "https://raw.githubusercontent.com/GitHubExperts-LK/My-Site/master/SourceCode/open-hack-day.png"} />
        <meta name="twitter:creator" content="@fosssliit" />
        <meta name="twitter:title" content={title || "Hacktoberfest 2021"} />
        <meta name="twitter:description" content="description goes here" />
        <meta name="twitter:image" content={image || "/hacktoberfest-web/favicon.png"} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" href="/hacktoberfest-web/favicon.png" />
      </Head>
      <main className="bg-bgWhite text-textBlack font-genera font-semibold min-h-screen overflow-x-hidden">
        {children}
      </main>
    </>
  );
};

export default Layout;
