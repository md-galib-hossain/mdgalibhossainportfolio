import React from "react";
import { useAppContext } from "../appContext";
import { useSelector } from "react-redux";
import {
  selectData,
  selectError,
  selectIsLoading,
} from "../pages/allProjectsSlice";
import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import styled from "styled-components";
// Data
import { filteredProjects } from "../data";
// Icons
import { FaGithub } from "react-icons/fa";
// Components
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Title, Loading } from "./globalStyledComponents";
import StyledCard from "./StyledCard";
import project1img from "../images/project1.jpg";
import project2img from "../images/project2.jpg";
import project3img from "../images/project3.jpg";
import "./style.css";

const StyledSection = styled.section``;

const StyledCardComponent = styled.div`
  .card-footer {
    border-top: var(--border);

    .card-link {
      text-decoration: none;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.color};

      &:hover {
        color: var(--primary);
      }
    }
  }
`;

export default function Projects() {
  const [mainProjects, setMainProjects] = React.useState([]);
  const { theme } = useAppContext();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectData);

  React.useEffect(
    function () {
      const tempData = [];
      data.forEach((el, i) => (tempData[i] = Object.create(el)));
      if (data.length !== 0 && filteredProjects.length !== 0) {
        const tempArray = tempData.filter((obj) =>
          filteredProjects.includes(obj.name)
        );
        tempArray.length !== 0
          ? setMainProjects([...tempArray])
          : setMainProjects([...tempData.slice(0, 3)]);
      } else {
        setMainProjects([...tempData.slice(0, 3)]);
      }
    },
    [data]
  );

  return (
    <Element name={"Projects"} id="projects">
      <StyledSection className="section">
        <Container>
          <Container className="d-flex">
            <Title>
              <h2>Projects</h2>
              <div className="underline"></div>
            </Title>
          </Container>
          {isLoading && (
            <Container className="d-flex">
              <Loading />
            </Container>
          )}
          {error && <h2 className="text-center">{error}</h2>}
          {!error && data.length === 0 && (
            <h2 className="text-center">
              Oops, you do not have any GitHub projects yet...
            </h2>
          )}

          <Row xs={1} md={2} lg={3} className="g-4 justify-content-center">
            <Col>
              <StyledCardComponent>
                <Card bg={theme === "light" ? "white" : "dark"}>
                  <Card.Img
                    variant="top"
                    src={project1img}
                    className="mx-auto"
                  />

                  <Card.Body className="overflow-auto text-center">
                    <Card.Title>{"Online Book Store"}</Card.Title>
                    <Card.Text>
                      {
                        "A user friendly Online book store reder can read books online for free and also can download pdf for free but for get a hardcopy user need to pay"
                      }
                    </Card.Text>
                    <Card.Link
                      className="resume-a"
                      target="_blank"
                      href={"https://e-learning-3e616.web.app/"}
                    >
                      {"View Live "}
                    </Card.Link>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Card.Link
                      href={
                        "https://github.com/mdgalibhossain1/b610-learning-platform-client-side-mdgalibhossain1"
                      }
                    >
                      {"View on GitHub "}
                      <FaGithub />
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </StyledCardComponent>
            </Col>

            <Col>
              <StyledCardComponent>
                <Card bg={theme === "light" ? "white" : "dark"}>
                  <Card.Img
                    variant="top"
                    src={project2img}
                    className="mx-auto"
                  />

                  <Card.Body className="overflow-auto text-center">
                    <Card.Title>{"UsedPhones Hub"}</Card.Title>
                    <Card.Text>
                      {
                        "Its a used phone resaling website. Sellers can sell their product to buyers , advertise their items. Admin can handle buyer and sellers.A dynamic dashboard is designed for users"
                      }
                    </Card.Text>
                    <Card.Link
                      className="resume-a"
                      target="_blank"
                      href={"https://phones-hub-44509.web.app/"}
                    >
                      {"View Live "}
                    </Card.Link>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Card.Link
                      href={
                        "https://github.com/mdgalibhossain1/b612-used-products-resale-clients-side-mdgalibhossain1"
                      }
                    >
                      {"View on GitHub "}
                      <FaGithub />
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </StyledCardComponent>
            </Col>

            <Col>
              <StyledCardComponent>
                <Card bg={theme === "light" ? "white" : "dark"}>
                  <Card.Img
                    variant="top"
                    src={project3img}
                    className="mx-auto"
                  />

                  <Card.Body className="overflow-auto text-center">
                    <Card.Title>{"DevQuiz"}</Card.Title>
                    <Card.Text>
                      {
                        "DevQuiz is an basic quiz test site for react developers to improve their knowledge,Users will be notified correct answers through modal "
                      }
                    </Card.Text>
                    <Card.Link
                      className="resume-a"
                      target="_blank"
                      href={"https://fluffy-chaja-72b2d8.netlify.app/"}
                    >
                      {"View Live "}
                    </Card.Link>
                  </Card.Body>
                  <Card.Footer className="text-center">
                    <Card.Link
                      href={
                        "https://github.com/mdgalibhossain1/b6-quiz-crackerz-mdgalibhossain1"
                      }
                    >
                      {"View on GitHub "}
                      <FaGithub />
                    </Card.Link>
                  </Card.Footer>
                </Card>
              </StyledCardComponent>
            </Col>
          </Row>

          {/* <Container className="text-center mt-5">
            <Link to="/All-Projects">
              <Button
                size="lg"
                variant={theme === "light" ? "outline-dark" : "outline-light"}
              >
                All <FaGithub /> Projects
              </Button>
            </Link>
          </Container> */}
        </Container>
      </StyledSection>
    </Element>
  );
}
