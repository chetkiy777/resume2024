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
                    I've been into development for a long time. I constantly followupdates of modern tools for frontend development, study andtry new features. Looking for a place in a cool, fun andpowerful company. Results will show very quickly, ready towork qualitatively, a lot, and with pleasure
                </Text>
            </Block>

            <BlockTitle>Projects</BlockTitle>
            <Line />

            <Block>
                <Title>Wallet</Title>
                <Text>
                Used React and Node. Application for controlling waste,with monthly analysis, full login and other cool features. I worked on the server side. 
                </Text>
            </Block>

            <Block>
                <Title>Filmoteka</Title>
                <Text>
                Web - application for searching films, with login, adding tofavorites and watched. Team project. I set up a repository forteam work, created a trello with tasks, helped everyone dealwith difficulties.
                </Text>
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
                <Title>"Decor Pro" (1C programming)</Title>

                <Text>December 2020 - November 2021| Ukraine
                Configurator operation;
                Change in furniture calculation logic;
                Creating a technological production process, with steps,mapping by sections and various states;
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