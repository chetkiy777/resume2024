import styled from "styled-components"

const MainTitle = styled.p`
    font-size: 24px;
    font-weight: 800;
`

const Block = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;
`


const BlockTitle = styled.p`
    font-size: 18px;
    font-weight: 700;
`

const Title = styled.p`
    font-size: 12px;
    font-weight: 700;
`

const LinkTitle = styled.a`
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: #000;

    &:hover {
        color: #535bf2; 
    }
`

const Text = styled.p`
    font-size: 12px;
    font-weight: 400;
`

const Line = styled.hr`
    border: 1px solid grey;
    opacity: 0.4;
    margin-top: 5px;
    margin-bottom: 5px;
`



export default function RightSide() {
    return(
        <div>
            <MainTitle>Igor Gladkiy</MainTitle>
            <Title>(frontend developer)</Title>

            <Line />
            <Block>
                <Text>
                    If you want to make your team stronger, or you have a lot of routine tasks, or are just starting a startup, then you need me. I work efficiently and perform tasks of any complexity. I always have a couple of creative ideas. I often update my skills and learn new technologies
                </Text>
            </Block>

            <BlockTitle>Projects</BlockTitle>
            <Line />

            <Block>
                <LinkTitle href="https://wallet-community.netlify.app">
                    Wallet
                </LinkTitle>

                <Text>
                    Used React and Node. Application for controlling waste,with monthly analysis, full login and other cool features. I worked on the server side. 
                </Text>
                <LinkTitle href="https://github.com/VSRudnyk/wallet_backend">Project Link</LinkTitle>
            </Block>

            <Block>
                <LinkTitle href="https://oleksandrtymoshenko.github.io/js-project-10/">
                    Filmoteka
                </LinkTitle>

                <Text>
                    Web - application for searching films, with login, adding tofavorites and watched. Team project. I set up a repository forteam work, created a trello with tasks, helped everyone dealwith difficulties.
                </Text>
                <LinkTitle href="https://github.com/OleksandrTymoshenko/js-project-10">Project Link</LinkTitle>
            </Block>

            <BlockTitle>Work Experience</BlockTitle>
            <Line />

            <Block>
                <Title>"MACC-Systems"
                April 2022 - January 2024 | Ukraine</Title>
                <Text>
                create interfaces and write logic for big ERP applications
                Based on API objects, I create forms that calculate logic ofvarious types of complexity. I train juniors and integrate theminto team work. I’m setting up Engines, working</Text>
            </Block>

            <Block>
                <Title>"Decor Pro"</Title>

                <Text>December 2019 - November 2021| Ukraine
                Change in furniture calculation logic;
                Development of a CRM system for large furniture production
                implementation of CRM system and IP-telephony</Text>
            </Block>

            <BlockTitle>Education</BlockTitle>
            <Line />

            <Block>
                <Title>Interregional Academy of Personal Management
                (Information Technology)</Title>
                <Text>Septermber 2008 - June 2011| Ukraine</Text>
            </Block>

            <BlockTitle>Courses</BlockTitle>
            <Line />

            <Block>
                <Title>ITEA
                Certificate of completion JavaScript Advanced</Title>
                <Text>October 2017| Ukraine (3 month)</Text>
            </Block>

            <Block>
                <Title>GOIT
                Full-stack JavaScript development</Title>
                <Text>September 2020 - August 2021| Ukraine (1 year)</Text>
            </Block>


        </div>
    )
}