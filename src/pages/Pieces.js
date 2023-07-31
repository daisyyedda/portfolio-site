import React, { useState } from 'react';
import '../App.css';
import { Contact } from '../components/Contact';
import 'animate.css';

import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
  {
    title: 'Some thoughts on gender fluidity.',
    date: '2023/07/30',
  },
  {
    title: 'Hi! Welcome to my website.',
    date: '2023/07/30',
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

export const Pieces = () => {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>

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
      <h1>Thoughts unbound; words resound.</h1>
      <p style={{fontSize: "20px"}}>Arts&nbsp;&nbsp;|&nbsp;&nbsp;Science&nbsp;&nbsp;|&nbsp;&nbsp;Humanities</p>
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
