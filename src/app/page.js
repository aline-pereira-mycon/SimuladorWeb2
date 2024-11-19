import * as React from 'react';
import Box from '@mui/material/Box';
import ButtonAppBar from '../components/header';
import Container from '@mui/material/Container';
import PageTitle from '@/components/Titles/PageTitle';
import ProductCard from '@/components/Cards/ProductCard';
import AutoIcon from '../../public/images/icon-auto.png';
import ImovelIcon from '../../public/images/icon-imovel.png';
import MotoIcon from '../../public/images/icon-moto.png';
import ServicosIcon from '../../public/images/icon-servicos.png';


export default function Home () {
  return (
    <>
      <ButtonAppBar />
      <Container fixed >
        <Box
          sx={ {
            my: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          } }
        >
          <PageTitle title="Olá, vamos começar?" subtitle="Escolha o tipo de bem que melhor se encaixa nos seus planos. Estamos aqui para te ajudar a tornar seus sonhos realidade!" />
          <ProductCard icone={ AutoIcon } title="Autos" description="Torne realidade o sonho de ter o carro que você sempre quis." />
          <ProductCard icone={ ImovelIcon } title="Imóveis" description="Explore de uma maneira flexível e conveniente de realizar o sonho da casa própria." />
          <ProductCard icone={ MotoIcon } title="Moto" description="Você pode realizar o sonho de ter uma moto nova de maneira descomplicada e acessível." />
          <ProductCard icone={ ServicosIcon } title="Serviços" description="Incluindo viagens, reformas, educação e mais." />
        </Box>
      </Container>
    </>
  );
}