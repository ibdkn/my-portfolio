import React from 'react';
import {StyledTitle} from "../../../components/StyledTitle";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from "./Skills_Styles"

const skillsData = [
    {
        title: "Languages",
        technologies: ["JavaScript", "TypeScript"]
    },
    {
        title: "Frameworks",
        technologies: ["Angular", "React"]
    },
    {
        title: "Tools",
        technologies: ["WebStorm", "VSCode", "Figma", "Photoshop", "Git"]
    },
    {
        title: "Other",
        technologies: ["HTML", "CSS", "SCSS", "LESS", "Gulp", "Grunt", "Webpack", "BEM"]
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <StyledTitle titleType={"section"} lineWidth={"239px"}>skills</StyledTitle>
                <FlexWrapper justify={"flex-end"} align={"flex-start"}>
                    <S.SkillsWrapper>
                        {skillsData.map((skill, index) => {
                            return <Skill key={index}
                                          title={skill.title}
                                          technologies={skill.technologies}/>
                        })}
                    </S.SkillsWrapper>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};