import { Modal } from "@react95/core";
import React from "react";
import useStore from "../../zustand";

import { Computer3 } from "@react95/icons";

import CustomBtn from "../../atoms/Button/Index";

import styled from "styled-components";
import useProject from "../../customHooks/useProject";

const ToolsUsed = styled.div`
  display: flex;
  div {
    margin: 0 30px 0 0;
  }
`;

const Project = styled.div`
  p {
    margin: 3px;
  }

  display: grid;
  max-width: 600px;
  grid-template-columns: 20% 70%;
  grid-gap: 1%;
  justify-content: space-evenly;
  grid-template-rows: 1fr;

  .logoProject {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      max-width: 100%;
    }
  }

  .containerBtns {
    button {
      margin: 0 20px 0 0;
    }
  }

  border: 1px solid #000;
  border-style: dotted;

  border-width: 0 0 3px 0;
  padding: 10px 0;

  :last-child {
    border: none;
  }
`;

const ProjectInfo = styled.div``;

export default function Index() {
  const { showProjects } = useStore();

  const { projects, closeProject } = useProject();

  return (
    <div>
      {showProjects ? (
        <Modal icon={<Computer3 />} title="Proyectos" closeModal={closeProject}>
          {projects.map((project) => (
            <Project>
              <div className="logoProject">
                <img src={project.logo} />
              </div>
              <ProjectInfo>
                <b>{project.title}</b>
                <p>{project.description}</p>
                <ToolsUsed>
                  <div>
                    <p>
                      <b>Front-end</b>
                    </p>
                    <ul>
                      {project.frontTools.map((tool) => (
                        <li>{tool}</li>
                      ))}
                    </ul>
                  </div>

                  {project.backTools.length > 0 ? (
                    <div>
                      <p>
                        <b>Back-end</b>
                      </p>
                      <ul>
                        {project.backTools.map((tool) => (
                          <li>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}

                  <div>
                    <p>
                      <b>Otros</b>
                    </p>

                    <ul>
                      {project.other.map((tool) => (
                        <li>{tool}</li>
                      ))}
                    </ul>
                  </div>
                </ToolsUsed>

                <div className="containerBtns">
                  <CustomBtn message="Demo" onClick={project.playDemo} />
                  <CustomBtn message="Github" onClick={project.openGithub} />
                </div>
              </ProjectInfo>
            </Project>
          ))}
        </Modal>
      ) : null}
    </div>
  );
}
