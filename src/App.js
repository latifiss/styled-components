import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './components/styles/Global';
import { Container } from './components/styles/Container.styled';
import Header from './Header';
import Card from './components/Card';
import Footer from './components/Footer';
import content from './content';

const theme = {
    colors: {
        header: '#ebfbff',
        body: '#fff',
        footer: '#003333',
    },
    mobile: '768px',
}

export default function App() {
    return (
        <ThemeProvider theme = {theme}>
            <>
            <GlobalStyles/>
            <Header/>
            <Container>
                {content.map((item, index) => (
                    <Card key={index} item={item}/>
                ))}
            </Container>
            <Footer/>
            </>
        </ThemeProvider>
    )
}
