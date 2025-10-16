import styled from "styled-components"

const MainTitle = styled.p`
    font-size: 21px;
    font-weight: 800;
`

const Block = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
`


const BlockTitle = styled.p`
    font-size: 16px;
    font-weight: 700;
`

const Title = styled.p`
    font-size: 12px;
    font-weight: 700;
    margin-top: 10px;
`

const LinkTitle = styled.a`
    text-decoration: none;
    font-size: 12px;
    font-weight: 700;
    color: #00BFFF;

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
            <Title>Full Stack Developer</Title>

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
                <LinkTitle href="https://github.com/VSRudnyk/wallet_backend">Github</LinkTitle>
            </Block>

            <Block>
                <LinkTitle href="https://github.com/chetkiy777/ice-cream-team-project">
                    IceCream
                </LinkTitle>

                <Text>
                  An ice cream website. The front was behind me. Lots of animations, including custom ones.
                </Text>
                <LinkTitle href="https://chetkiy777.github.io/ice-cream-team-project/">Github</LinkTitle>
            </Block>

            <Block>
              <LinkTitle href="tg://@pros100k_bot">
                Pros100k Exchange Web App
              </LinkTitle>

              <Text>
                It's my first web app for Telegram. I used the Telegram Web App API, React, and Node.js.
                The app allows users to exchange crypto currencies directly within Telegram.
              </Text>
              <LinkTitle href="https://github.com/chetkiy777/tg-web-app">Github</LinkTitle>
            </Block>

            <BlockTitle>Work Experience</BlockTitle>
            <Line />


            <Block>
              <Title>"Traffic Squad"
                August 2024 - for now| Ukraine</Title>
              <Text>
                I'm currently working on a large project as a full-stack developer. I'm developing the API in Python and writing front-end logic in React.
                I take on all the complex and hardest tasks and rework what the junior developers have written.</Text>
            </Block>


            <Block>
              <Title>"Pixoram"
                August 2023 - August 2024| Ukraine</Title>
              <Text>
                I worked as a Tech Lead. I set up Monday with integrations and automations.
                I created my own cloaking system and many other optimization products.</Text>
            </Block>


            <Block>
              <Title>"Bulls Media"
                January 2022 - August 2023| Ukraine</Title>
              <Text>
                I've created many different landing pages using HTML+CSS and several projects using React,
                all with a gaming theme.</Text>
            </Block>

            <Block>
                <Title>"MACC-Systems"
                April 2021 - January 2022 | Ukraine</Title>
                <Text>
                create interfaces and write logic for big ERP applications
                Based on API objects, I create forms that calculate logic ofvarious types of complexity. I train juniors and integrate theminto team work. I’m setting up Engines, working</Text>
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