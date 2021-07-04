import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import Nav from '../components/Nav';
import Results from '../components/Results.js';
import requests from '../components/requests';

export default function Home(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <Nav />
      <Results fetchedResults={props.result} />
    </div>
  );
}
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    requests[genre].url || requests.fetchTrending.url
  ).then((data) => data.json());

  console.log(request);
  return {
    props: {
      result: request.results,
    },
  };
}
