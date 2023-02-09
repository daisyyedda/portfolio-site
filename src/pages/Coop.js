import React from 'react';
import '../App.css';
import { Contact } from '../components/Contact';
import 'animate.css';

import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
  {
    title: 'Ford Pro - Software Engineer',
    image:
      'https://media.ford.com/content/fordmedia/fna/us/en/media-kits/2021/ford-pro/jcr:content/content/media_section_17fa/media-section-parsys/textimage_3846/image.img.951.535.jpg/1644596432390.jpg',
    date: 'Jan 2023 - Apr 2023',
  },
  {
    title: 'Bank of Montreal - Business Analyst',
    image:
      'https://mma.prnewswire.com/media/1962184/BMO_Financial_Group_Tis_the_Season_to__WrapTheGood__BMO_Expands.jpg?p=facebook',
    date: 'Jan 2022 - Apr 2022',
  },
  {
    title: 'Laurier Consulting Group - Consultant',
    image:
      'http://static1.squarespace.com/static/5e365ccedeb28a1f33c0c2e6/t/5e5ee77bf837bb344945bbbd/1583277950742/lcg+final.png?format=1500w',
    date: 'Sep 2021 - Dec 2021',
  },
  {
    title: 'RecruitFirst - Associate Consultant',
    image:
      'http://www.recruitfirst.com.cn/wp-content/uploads/2021/04/RecruitFirst.png',
    date: 'May 2021 - Aug 2021',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Arial`,
    fontWeight: 600,
    fontSize: 18,
  },
}));

export const Coop = () => {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1900 / 1300}>
        <Image src={article.image}/>
      </AspectRatio>
      <Text color="dimmed" size="15px" transform="uppercase" mt="md" fontFamily="Arial">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>

    </Card>
  ));

  return (
    <div style={{fontFamily: "Arial", marginTop: "5%"}}>
      <h1>Computer Science & Business </h1>
      <p style={{fontSize: "20px"}}>Full Stack&nbsp;&nbsp;|&nbsp;&nbsp;Combinatorics&nbsp;&nbsp;|&nbsp;&nbsp;Consulting</p>
      <Container class="animate__animated animate__fadeInLeft" style={{paddingTop: "5%", marginRight: "15%", marginLeft: "15%"}}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    <br/><br/><br/>
    <Contact />
    </div>

  );
}
