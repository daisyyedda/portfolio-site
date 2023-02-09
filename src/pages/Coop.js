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
    <div style={{fontFamily: "Arial", marginTop: "40px"}}>
      <h1>Computer Science & Business </h1>
      <p style={{fontSize: "20px"}}>Full Stack&nbsp;&nbsp;|&nbsp;&nbsp;Combinatorics&nbsp;&nbsp;|&nbsp;&nbsp;Consulting</p>
      <Container class="animate__animated animate__fadeInLeft" style={{marginTop: "40px", marginRight: "150px", marginLeft: "150px"}}>
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
    <br/><br/><br/>
    <Contact />
    </div>

  );
}

// export const Coop = () => {
//   const ford = require('../img/fordpro.png');
//   const rf = require('../img/rf.png');
//   const lcg = require('../img/lcg.jpeg');
//   const bmo = require('../img/bmo.jpeg');
//   const [click, setClick] = useState(false);
//   const [click2, setClick2] = useState(false);
//   const [click3, setClick3] = useState(false);
//   const [click4, setClick4] = useState(false);
  
//   const handleClick = () => {
//     setClick(!click);
//   }
//   const handleClick2 = () => {
//     setClick2(!click2);
//   }
//   const handleClick3 = () => {
//     setClick3(!click3);
//   }
//   const handleClick4 = () => {
//     setClick4(!click4);
//   }

//   return (
//     <div style={{fontFamily: "Arial"}}>

//       <h2>I am interested in software development, combinatorics & optimization (who doesn't adore lin alg?), and consulting.</h2>
//       <Stack gap={200}>
//         <div className="bg-light border">
//           <h3 className='pos'>Software Engineer - Ford Pro (Jan 2023 - Present)</h3>
//           <img className="company" alt="Ford Pro logo" src={ford} onClick={handleClick}></img> 
//           {click ? 
//           <p class="animate__animated animate__fadeInLeft" >
//             • Embrace Agile-eXtreme Programming principles to deliver innovative software products for Ford Pro Tech.
//           </p>  
//            : null}
//         </div>
//         <div className="bg-light border">
//           <h3 className='pos'>Business Analyst - BMO Financial Group (Jan 2022 - Apr 2022)</h3>
//           <img className="company" alt="BMO logo" src={bmo} onClick={handleClick2}></img>
//           {click2 ? 
//           <p>
//             • Improved the performance of BMO Client Portal by testing persisting bugs and writing test cases in System
//             Integration Testing, User Acceptance Testing, and Regression Testing cycles. 
//             <br/> <br/>
//             • Facilitated communication and collaboration between business and development teams by raising, examining, and optimizing JIRA tickets.
//             <br/> <br/>
//             • Resolved over 50 system defects and French translation errors for March and May 2022 releases.
//           </p> : null}
//         </div>
//         <div className="bg-light border">
//           <h3 className='pos'>Consultant - Laurier Consulting Club (Sep 2021 - Dec 2021)</h3>
//           <img className="company" alt="LCG logo" src={lcg} onClick={handleClick3}></img>
//           {click3 ? 
//           <p>
//             • Consulted with stakeholders to analyze companies’ demographics and market development plans.
//             <br/> <br/>
//             • Designed and implemented strategies for an AI start-up to target small to medium e-commerce businesses.
//             <br/> <br/>
//             • Enhanced understanding in natural language processing (NLP) and website content generation.
//           </p> : null}      
//         </div>
//         <div className="bg-light border">
//           <h3 className='pos'>Associate Consultant - RecruitFirst (May 2021 - Aug 2021)</h3> 
//           <img className="company" alt="RF logo" src={rf} onClick={handleClick4}></img>
//           {click4 ? 
//           <p>
//             • Analyzed market trends and opportunities for FMCG industries to implement sustainable and long-term CRM strategies for the clients.
//             <br/> <br/>
//             • Collected, classified, and organized relevant candidate information to meet the hiring needs of the clients.
//             <br/> <br/>
//             • Supported three hiring seasons by providing clients with compatible candidates and procedural assistance.
//             <br/> <br/>
//             • Expanded the team’s existing candidate database by roughly 20% via researching and talent landscaping.
//           </p> : null}
//         </div>
  
//       </Stack>
//       <br/><br/><br/>
//       <Contact />
//     </div>
//   );
// }
