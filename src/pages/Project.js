import React from 'react';
import '../App.css';
import { Contact } from '../components/Contact';
import 'animate.css';

import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
  {
    title: 'Fact-Checking Discord Bot',
    image:
      'https://media.ford.com/content/fordmedia/fna/us/en/media-kits/2021/ford-pro/jcr:content/content/media_section_17fa/media-section-parsys/textimage_3846/image.img.951.535.jpg/1644596432390.jpg',
    tool: 'C#, Docker, OpenAI API',
  },
  {
    title: 'Online Shop App',
    image:
      'https://mma.prnewswire.com/media/1962184/BMO_Financial_Group_Tis_the_Season_to__WrapTheGood__BMO_Expands.jpg?p=facebook',
    tool: 'EJS, Express, JavaScript, MongoDB, Node.js',
  },
  {
    title: 'Go Booking App',
    image:
      'http://www.recruitfirst.com.cn/wp-content/uploads/2021/04/RecruitFirst.png',
    tool: 'Go, PostgreSQL, React',
  },
  {
    title: 'Game of ChamberCrawler3000+',
    image:
      '../img/cc3k.png',
    tool: 'C++',
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',
    '&:hover': {
      transform: 'scale(1.03)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Arial`,
    fontWeight: 600,
    fontSize: 18,
  },
}));

export const Project = () => {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1900 / 1300}>
        <Image src={article.image}/>
      </AspectRatio>
      <Text color="dimmed" size="15px" mt="md" fontFamily="Arial">
        {article.tool}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>

    </Card>
  ));

  return (
    <div style={{fontFamily: "Arial", marginTop: "5%"}}>
      <h1>Side projects my peers and I did.</h1>
      <p style={{fontSize: "20px"}}>Machine Learning&nbsp;&nbsp;|&nbsp;&nbsp;Full Stack&nbsp;&nbsp;|&nbsp;&nbsp;API Development</p>
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