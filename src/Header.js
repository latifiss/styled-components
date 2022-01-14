import React from 'react';
import { Container } from './components/styles/Container.styled';
import { Flex } from './components/styles/Flex.styled';
import { StyledHeader, Nav, Logo, Image } from './components/styles/Header.styled';
import { Button } from './components/styles/Button.styled';

export default function Header () {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='/images/logo.svg' alt=''/>
                    <Button>Try it free</Button>
                </Nav>
                <Flex>
                    <div>
                        <h1>Build The Community Your Fans Will  Love</h1>
                        <p>
                            Huddle re-imagine's the way we build communities. You have a voice, but so does your audience.
                            Create connections with your users as you engage in genuine discussion
                        </p>
                        <Button bg='#ff0099' color='#fff'>
                            Get Started For Free
                        </Button>
                    </div>
                    <Image src='./images/illustration-mockups.svg'/>
                </Flex>
            </Container>
        </StyledHeader>
    )
}