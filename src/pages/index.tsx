import { Text } from 'components/Text';
import Head from 'next/head';

const Home: React.FC = () => (
  <div>
    <Head>
      <title>Welcome</title>
    </Head>
    <main>
      <Text weight='thin' family='primary'>Hola, StagSans thin</Text><br />
      <Text weight='regular' family='primary'>Hola, StagSans regular</Text><br />
      <Text weight='regular' family='secondary'>Hola, StagSans regular</Text><br />
      <Text weight='bold' family='primary'>Hola, StagSans bold</Text><br />
      <Text weight='bold' family='secondary'>Hola, Cardo bold</Text><br />
      <Text fontStyle='italic' family='secondary'>Hola, Cardo italic</Text><br />
    </main>
  </div>
);

export default Home;
