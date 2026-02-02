import styled from 'styled-components'
import background from "../images/bg_grey_img.jpg"
import photo from "../images/photo.jpg"
import GitLogo from '../images/svg/github.svg'
import PhoneLogo from '../images/svg/phone.svg'
import TgLogo from '../images/svg/tg.svg'
import LinkedinLogo from '../images/svg/linkedin.svg'

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fafafa;
    height: 100vh;
    width: 350px;
    margin-right: 40px;
`

const StyledPhoto = styled.div`
    height: auto;
    align-self: center;

    & img {
        height: auto;
        width: 100%;
    }
`

const StyledList = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    margin: 10px;

    & li {
        display: flex;
        align-items: center;
        gap: 5px;
    }

    & a {
        color: #fafafa;

        &:hover {
            color: #535bf2;
        }
    }
`

export default function LeftSide() {
    return(
        <StyledContainer style={{backgroundImage: `url(${background})`}}>
            
            <StyledPhoto>
                <img src={photo} alt="photo"/>
            </StyledPhoto>

            <StyledList>
                <h3 style={{marginBottom: '5px'}}>Contacts</h3>

                <li style={{marginBottom: '5px'}}>
                    <PhoneLogo height="16" width="16"/>
                    <a href="tel:380977875404">380977875404</a>
                </li>

                <li style={{marginBottom: '5px'}}>
                    <TgLogo height="18" width="18"/>
                    <a href="https://t.me/bollo_young">Telegram</a>
                </li>

                <li style={{marginBottom: '5px'}}>
                    <GitLogo height="16" width="16" fill="#fff"/>
                    <a href="https://github.com/chetkiy777">Github</a>
                </li>

                <li>
                    <LinkedinLogo height="18" width="18"/>
                    <a href="https://www.linkedin.com/in/igor-gladkiy-530b211b3/">LinkedIn</a>
                </li>
            </StyledList>

            
            <StyledList>
                <h3>Tech Skills</h3>
                
                <li>React, Next</li>
                <li>Node, Fastify</li>
                <li>WEB3, Solidity</li>
                <li>Docker, Cloudflare, Nginx</li>

            </StyledList>

            <StyledList>
                <h3>Soft Skills</h3>
                
                <li>Сreative</li>
                <li>Responsible</li>
                <li>Multitask</li>
                <li>Productive</li>

            </StyledList>

            <StyledList>
                <h3>Languages</h3>

                <li>English - B2</li>
                <li>Ukrainian - C2</li>
            </StyledList>

        </StyledContainer>
    )
}